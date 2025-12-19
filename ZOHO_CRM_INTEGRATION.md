# Zoho CRM Integration Guide

## Overview

This document provides complete integration instructions for connecting Finanshels Partner Portal with Zoho CRM. The integration enables seamless synchronization of leads, deals, partners, and commission data between systems.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Zoho CRM Setup](#zoho-crm-setup)
3. [API Authentication](#api-authentication)
4. [Integration Architecture](#integration-architecture)
5. [Implementation Steps](#implementation-steps)
6. [Webhook Configuration](#webhook-configuration)
7. [Field Mapping](#field-mapping)
8. [Testing](#testing)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Zoho CRM Requirements
- Zoho CRM Professional/Enterprise/Ultimate Edition
- Admin access to create API credentials
- Custom modules permission (if needed)
- Webhook creation permission

### Portal Requirements
- Backend API server running (Node.js/Express)
- Database configured (PostgreSQL)
- Environment variables configured
- SSL certificate for webhooks

---

## Zoho CRM Setup

### Step 1: Custom Fields Setup

Add these custom fields to Zoho CRM modules:

#### Leads Module
- **Partner ID** (Single Line) - Link to partner who submitted lead
- **Partner Name** (Single Line) - Name of referring partner
- **Partner Email** (Email) - Partner contact
- **Estimated Value** (Currency) - Expected deal value
- **Commission Rate** (Decimal) - Percentage commission
- **Portal Lead ID** (Single Line) - Reference to portal database

#### Deals Module
- **Partner ID** (Single Line)
- **Partner Name** (Single Line)
- **Commission Amount** (Currency)
- **Commission Status** (Picklist: Pending, Approved, Paid)
- **Portal Deal ID** (Single Line)
- **Payout Date** (Date)
- **Invoice Number** (Single Line)

#### Contacts Module (Partners)
- **Partner Type** (Picklist: Referral, Channel Partner)
- **Commission Tier** (Picklist: 10%, 12%, 15%, 20%)
- **Portal Partner ID** (Single Line)
- **Bank Account** (Single Line - Encrypted)
- **Total Commissions Earned** (Currency)
- **Active Status** (Checkbox)

### Step 2: Create API Client

1. Go to **Zoho API Console**: https://api-console.zoho.com/
2. Click **Add Client** → **Server-based Applications**
3. Fill in details:
   - **Client Name**: Finanshels Partner Portal
   - **Homepage URL**: https://your-domain.com
   - **Authorized Redirect URIs**: https://your-domain.com/api/zoho/callback
4. Note down:
   - **Client ID**
   - **Client Secret**

### Step 3: Configure Scopes

Required OAuth Scopes:
```
ZohoCRM.modules.ALL
ZohoCRM.settings.ALL
ZohoCRM.users.READ
ZohoCRM.notifications.ALL
```

---

## API Authentication

### OAuth 2.0 Flow

#### Step 1: Generate Authorization Code

```bash
https://accounts.zoho.com/oauth/v2/auth?
  scope=ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,ZohoCRM.users.READ,ZohoCRM.notifications.ALL
  &client_id=YOUR_CLIENT_ID
  &response_type=code
  &access_type=offline
  &redirect_uri=https://your-domain.com/api/zoho/callback
```

#### Step 2: Exchange for Access Token

```javascript
// Backend: src/services/zoho/auth.js

const axios = require('axios');

async function getAccessToken(authCode) {
  const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
    params: {
      code: authCode,
      client_id: process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      redirect_uri: process.env.ZOHO_REDIRECT_URI,
      grant_type: 'authorization_code'
    }
  });

  return {
    access_token: response.data.access_token,
    refresh_token: response.data.refresh_token,
    expires_in: response.data.expires_in,
    api_domain: response.data.api_domain
  };
}

async function refreshAccessToken(refreshToken) {
  const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
    params: {
      refresh_token: refreshToken,
      client_id: process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      grant_type: 'refresh_token'
    }
  });

  return response.data.access_token;
}

module.exports = { getAccessToken, refreshAccessToken };
```

#### Step 3: Store Tokens Securely

```javascript
// Database schema for tokens
CREATE TABLE zoho_tokens (
  id SERIAL PRIMARY KEY,
  access_token TEXT NOT NULL,
  refresh_token TEXT NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  api_domain VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## Integration Architecture

### Data Flow

```
Partner Portal → Backend API → Zoho CRM
      ↓                              ↓
  Database  ← ← ← Webhooks ← ← ← ←  
```

### Sync Strategy

1. **Real-time Sync** (via webhooks):
   - Lead status updates
   - Deal conversions
   - Commission approvals

2. **Scheduled Sync** (every 5 minutes):
   - New leads from portal → Zoho
   - Updated deal stages → Portal
   - Partner information updates

3. **Manual Sync** (on-demand):
   - Full data reconciliation
   - Historical data import
   - Error recovery

---

## Implementation Steps

### Backend API Setup

#### 1. Install Dependencies

```bash
npm install axios node-cron
```

#### 2. Create Zoho Service

```javascript
// src/services/zoho/crm.js

const axios = require('axios');
const { refreshAccessToken } = require('./auth');

class ZohoCRMService {
  constructor() {
    this.baseURL = process.env.ZOHO_API_DOMAIN || 'https://www.zohoapis.com';
    this.accessToken = null;
  }

  async getAccessToken() {
    // Get from database or refresh if expired
    const token = await db.query('SELECT * FROM zoho_tokens ORDER BY id DESC LIMIT 1');
    
    if (new Date(token.expires_at) < new Date()) {
      this.accessToken = await refreshAccessToken(token.refresh_token);
      // Update database
      await db.query(
        'UPDATE zoho_tokens SET access_token = $1, expires_at = $2 WHERE id = $3',
        [this.accessToken, new Date(Date.now() + 3600000), token.id]
      );
    } else {
      this.accessToken = token.access_token;
    }
    
    return this.accessToken;
  }

  async createLead(leadData) {
    const token = await this.getAccessToken();
    
    const zohoLead = {
      data: [{
        Last_Name: leadData.customerName,
        Email: leadData.email,
        Phone: leadData.phone,
        Company: leadData.companyName || 'Individual',
        Lead_Status: 'Not Contacted',
        Partner_ID: leadData.partnerId,
        Partner_Name: leadData.partnerName,
        Partner_Email: leadData.partnerEmail,
        Estimated_Value: leadData.estimatedValue,
        Commission_Rate: leadData.commissionRate,
        Portal_Lead_ID: leadData.id,
        Lead_Source: 'Partner Portal',
        Description: leadData.notes
      }]
    };

    const response = await axios.post(
      `${this.baseURL}/crm/v3/Leads`,
      zohoLead,
      {
        headers: {
          'Authorization': `Zoho-oauthtoken ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.data[0];
  }

  async updateLeadStatus(zohoLeadId, status) {
    const token = await this.getAccessToken();
    
    const update = {
      data: [{
        id: zohoLeadId,
        Lead_Status: status
      }]
    };

    await axios.put(
      `${this.baseURL}/crm/v3/Leads`,
      update,
      {
        headers: {
          'Authorization': `Zoho-oauthtoken ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
  }

  async convertLeadToDeal(zohoLeadId, dealData) {
    const token = await this.getAccessToken();
    
    const conversion = {
      data: [{
        overwrite: false,
        notify_lead_owner: true,
        notify_new_entity_owner: true,
        Deals: {
          Deal_Name: dealData.dealName,
          Amount: dealData.dealValue,
          Stage: 'Qualification',
          Closing_Date: dealData.closingDate,
          Partner_ID: dealData.partnerId,
          Partner_Name: dealData.partnerName,
          Commission_Amount: dealData.commissionAmount,
          Commission_Status: 'Pending',
          Portal_Deal_ID: dealData.portalDealId
        }
      }]
    };

    const response = await axios.post(
      `${this.baseURL}/crm/v3/Leads/${zohoLeadId}/actions/convert`,
      conversion,
      {
        headers: {
          'Authorization': `Zoho-oauthtoken ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  }

  async updateDealStage(zohoDealId, stage) {
    const token = await this.getAccessToken();
    
    const update = {
      data: [{
        id: zohoDealId,
        Stage: stage
      }]
    };

    await axios.put(
      `${this.baseURL}/crm/v3/Deals`,
      update,
      {
        headers: {
          'Authorization': `Zoho-oauthtoken ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
  }

  async updateCommissionStatus(zohoDealId, status, invoiceNumber, paidDate) {
    const token = await this.getAccessToken();
    
    const update = {
      data: [{
        id: zohoDealId,
        Commission_Status: status,
        Invoice_Number: invoiceNumber,
        Payout_Date: paidDate
      }]
    };

    await axios.put(
      `${this.baseURL}/crm/v3/Deals`,
      update,
      {
        headers: {
          'Authorization': `Zoho-oauthtoken ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
  }

  async searchLeads(criteria) {
    const token = await this.getAccessToken();
    
    const response = await axios.get(
      `${this.baseURL}/crm/v3/Leads/search`,
      {
        params: {
          criteria: criteria
        },
        headers: {
          'Authorization': `Zoho-oauthtoken ${token}`
        }
      }
    );

    return response.data.data;
  }

  async getDeals(page = 1, perPage = 200) {
    const token = await this.getAccessToken();
    
    const response = await axios.get(
      `${this.baseURL}/crm/v3/Deals`,
      {
        params: {
          page: page,
          per_page: perPage
        },
        headers: {
          'Authorization': `Zoho-oauthtoken ${token}`
        }
      }
    );

    return response.data.data;
  }
}

module.exports = new ZohoCRMService();
```

#### 3. Create Sync Service

```javascript
// src/services/zoho/sync.js

const cron = require('node-cron');
const zohoService = require('./crm');
const db = require('../database');

class ZohoSyncService {
  constructor() {
    this.isRunning = false;
  }

  startScheduledSync() {
    // Run every 5 minutes
    cron.schedule('*/5 * * * *', async () => {
      await this.syncLeads();
      await this.syncDeals();
    });

    console.log('Zoho CRM sync scheduled - running every 5 minutes');
  }

  async syncLeads() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    try {
      // Get leads from portal that need syncing
      const leads = await db.query(`
        SELECT * FROM leads 
        WHERE zoho_lead_id IS NULL 
        AND status = 'submitted'
        ORDER BY created_at DESC
      `);

      for (const lead of leads.rows) {
        try {
          const zohoLead = await zohoService.createLead(lead);
          
          // Update portal database with Zoho Lead ID
          await db.query(
            'UPDATE leads SET zoho_lead_id = $1, zoho_synced_at = NOW() WHERE id = $2',
            [zohoLead.details.id, lead.id]
          );

          console.log(`Synced lead ${lead.id} to Zoho (${zohoLead.details.id})`);
        } catch (error) {
          console.error(`Failed to sync lead ${lead.id}:`, error.message);
        }
      }
    } finally {
      this.isRunning = false;
    }
  }

  async syncDeals() {
    // Get deals from Zoho and update portal
    try {
      const zohoDeals = await zohoService.getDeals();
      
      for (const deal of zohoDeals) {
        if (deal.Portal_Deal_ID) {
          await db.query(`
            UPDATE commissions 
            SET 
              zoho_deal_id = $1,
              status = CASE 
                WHEN $2 = 'Closed Won' AND status = 'pending' THEN 'approved'
                ELSE status
              END,
              zoho_synced_at = NOW()
            WHERE deal_id = $3
          `, [deal.id, deal.Stage, deal.Portal_Deal_ID]);
        }
      }
    } catch (error) {
      console.error('Failed to sync deals:', error.message);
    }
  }

  async manualSync() {
    console.log('Starting manual sync...');
    await this.syncLeads();
    await this.syncDeals();
    console.log('Manual sync completed');
  }
}

module.exports = new ZohoSyncService();
```

---

## Webhook Configuration

### Step 1: Create Webhook in Zoho CRM

1. Go to **Setup** → **Developer Space** → **Webhooks**
2. Click **Configure Webhook**
3. Set up webhooks for:
   - **Lead Status Update**
   - **Deal Stage Change**
   - **Deal Won**

### Step 2: Webhook Endpoints

```javascript
// src/routes/webhooks/zoho.js

const express = require('express');
const router = express.Router();
const db = require('../../services/database');

// Webhook: Lead Status Changed
router.post('/lead-updated', async (req, res) => {
  try {
    const { id, Lead_Status, Portal_Lead_ID } = req.body;

    if (Portal_Lead_ID) {
      await db.query(
        'UPDATE leads SET status = $1, zoho_synced_at = NOW() WHERE id = $2',
        [mapZohoStatusToPortal(Lead_Status), Portal_Lead_ID]
      );
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook: Deal Stage Changed
router.post('/deal-updated', async (req, res) => {
  try {
    const { id, Stage, Portal_Deal_ID, Commission_Status } = req.body;

    if (Portal_Deal_ID) {
      await db.query(`
        UPDATE commissions 
        SET 
          status = $1,
          zoho_synced_at = NOW()
        WHERE deal_id = $2
      `, [mapCommissionStatus(Commission_Status), Portal_Deal_ID]);
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook: Deal Won
router.post('/deal-won', async (req, res) => {
  try {
    const { id, Amount, Portal_Deal_ID, Partner_ID, Commission_Amount } = req.body;

    // Automatically approve commission when deal is won
    if (Portal_Deal_ID) {
      await db.query(`
        UPDATE commissions 
        SET 
          status = 'approved',
          zoho_synced_at = NOW()
        WHERE deal_id = $1
      `, [Portal_Deal_ID]);

      // Send notification to partner
      // ... notification logic
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: error.message });
  }
});

function mapZohoStatusToPortal(zohoStatus) {
  const mapping = {
    'Not Contacted': 'submitted',
    'Contacted': 'in-progress',
    'Qualified': 'in-progress',
    'Junk Lead': 'rejected',
    'Lost Lead': 'rejected'
  };
  return mapping[zohoStatus] || 'submitted';
}

function mapCommissionStatus(zohoStatus) {
  const mapping = {
    'Pending': 'pending',
    'Approved': 'approved',
    'Paid': 'paid'
  };
  return mapping[zohoStatus] || 'pending';
}

module.exports = router;
```

### Step 3: Secure Webhooks

```javascript
// Webhook authentication middleware
const crypto = require('crypto');

function verifyZohoWebhook(req, res, next) {
  const signature = req.headers['x-zoho-signature'];
  const payload = JSON.stringify(req.body);
  
  const hash = crypto
    .createHmac('sha256', process.env.ZOHO_WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');

  if (hash === signature) {
    next();
  } else {
    res.status(401).json({ error: 'Invalid signature' });
  }
}

router.use(verifyZohoWebhook);
```

---

## Field Mapping

### Portal → Zoho CRM

| Portal Field | Zoho CRM Field | Module | Type |
|-------------|----------------|--------|------|
| lead.id | Portal_Lead_ID | Leads | Text |
| lead.customerName | Last_Name | Leads | Text |
| lead.email | Email | Leads | Email |
| lead.phone | Phone | Leads | Phone |
| lead.service | Description | Leads | Text Area |
| lead.estimatedValue | Estimated_Value | Leads | Currency |
| lead.partnerId | Partner_ID | Leads | Text |
| lead.partnerName | Partner_Name | Leads | Text |
| commission.id | Portal_Deal_ID | Deals | Text |
| commission.amount | Commission_Amount | Deals | Currency |
| commission.rate | Commission_Rate | Deals | Decimal |
| commission.status | Commission_Status | Deals | Picklist |

### Zoho CRM → Portal

| Zoho CRM Field | Portal Field | Sync Trigger |
|---------------|--------------|--------------|
| Lead Status | lead.status | Webhook |
| Stage | commission.status | Webhook |
| Amount | commission.dealValue | Scheduled |
| Owner | lead.assignedTo | Scheduled |

---

## Testing

### Test Checklist

- [ ] OAuth authentication successful
- [ ] Access token refresh working
- [ ] Lead creation in Zoho from portal
- [ ] Lead status updates sync back to portal
- [ ] Deal conversion creates commission record
- [ ] Commission status updates reflect in both systems
- [ ] Webhooks receiving and processing correctly
- [ ] Scheduled sync running every 5 minutes
- [ ] Manual sync button working
- [ ] Error handling and logging functional

### Test Cases

```javascript
// Test: Create lead in portal and verify in Zoho
const testLead = {
  customerName: 'Test Customer',
  email: 'test@example.com',
  phone: '+971501234567',
  service: 'Accounting',
  estimatedValue: 5000,
  partnerId: 'P001'
};

// Should create lead in Zoho CRM with Portal_Lead_ID
```

---

## Troubleshooting

### Common Issues

#### 1. Token Expired Error
**Solution**: Ensure refresh token logic is working. Check database for valid refresh token.

#### 2. Webhooks Not Firing
**Solution**: 
- Verify webhook URL is accessible (use ngrok for local testing)
- Check Zoho webhook configuration
- Verify SSL certificate is valid

#### 3. Duplicate Records
**Solution**: 
- Use Portal_Lead_ID as unique identifier
- Implement idempotency keys
- Check for existing records before creating

#### 4. Sync Delays
**Solution**:
- Reduce sync interval if needed
- Use webhooks for real-time updates
- Check API rate limits

### Debug Mode

```javascript
// Enable debug logging
process.env.ZOHO_DEBUG = 'true';

// Log all API calls
axios.interceptors.request.use(request => {
  if (process.env.ZOHO_DEBUG) {
    console.log('Zoho API Request:', {
      method: request.method,
      url: request.url,
      data: request.data
    });
  }
  return request;
});
```

---

## Environment Variables

```bash
# .env file
ZOHO_CLIENT_ID=your_client_id
ZOHO_CLIENT_SECRET=your_client_secret
ZOHO_REDIRECT_URI=https://your-domain.com/api/zoho/callback
ZOHO_API_DOMAIN=https://www.zohoapis.com
ZOHO_WEBHOOK_SECRET=your_webhook_secret
ZOHO_DEBUG=false
```

---

## Support & Resources

- **Zoho CRM API Docs**: https://www.zoho.com/crm/developer/docs/api/v3/
- **OAuth 2.0 Guide**: https://www.zoho.com/crm/developer/docs/api/v3/oauth-overview.html
- **Webhook Guide**: https://www.zoho.com/crm/developer/docs/api/v3/notifications.html

---

## Next Steps

1. Complete backend API development
2. Set up Zoho CRM custom fields
3. Create OAuth credentials
4. Implement sync service
5. Configure webhooks
6. Test in staging environment
7. Deploy to production
8. Monitor sync logs

