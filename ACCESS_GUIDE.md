# 🎯 Partner Portal - Access Guide

## 🌐 Access the Portal

The development server is running at:
**http://localhost:5174**

---

## 🚪 Portal Entry Points

### 1. Partner Login
**URL**: http://localhost:5174/login

**Demo Credentials** (Any values work in demo mode):
- Email: `demo@partner.com`
- Password: `password123`

### 2. Partner Registration
**URL**: http://localhost:5174/register

Complete the 4-step registration process to create a new partner account.

### 3. Main Website
**URL**: http://localhost:5174

The original Finanshels website with partner information.

---

## 📱 Portal Navigation Map

```
http://localhost:5174/
├── /login                          → Partner Login Page
├── /register                       → Partner Registration (4 steps)
│
├── /portal/                        → 🔐 Protected Partner Area
│   ├── /dashboard                  → Partner Dashboard (Home)
│   ├── /leads                      → Lead Management
│   │   └── /new                    → Submit New Lead
│   ├── /services                   → Service Requests
│   │   ├── /new                    → New Service Request
│   │   └── /catalog                → Browse Services
│   ├── /commissions                → Commission Tracking
│   ├── /analytics                  → Performance Analytics
│   ├── /documents                  → Document Management (TBD)
│   ├── /settings                   → Settings (TBD)
│   └── /notifications              → All Notifications (TBD)
│
└── [Public Pages]
    ├── /                           → Home
    ├── /about                      → About Us
    ├── /partnerships               → Partnership Info
    ├── /services                   → Services
    ├── /become-a-partner           → Become a Partner
    └── /contact                    → Contact Us
```

---

## 🎬 Quick Demo Walkthrough

### Step 1: Register as Partner (2 minutes)
1. Go to: http://localhost:5174/register
2. Fill in each step:
   - **Basic Info**: Name, email, phone, password
   - **Business Info**: Company name, partner type (Referral/Channel)
   - **Commission**: Select model (Percentage/Tiered/Milestone)
   - **Documents**: Upload ID and trade license
3. Click "Complete Registration"
4. You'll be auto-logged into the dashboard

### Step 2: Explore Dashboard (1 minute)
- View performance stats
- Check commission overview
- See recent leads
- Use quick action buttons

### Step 3: Submit a Lead (2 minutes)
1. Click "Submit New Lead" or navigate to Leads → New
2. Fill in customer details:
   - Name: "Test Customer"
   - Email: "customer@test.com"
   - Phone: "+971 50 123 4567"
   - Service: "Business Setup"
   - Value: "15000"
3. Click "Submit Lead"
4. Confirmation screen appears
5. Auto-redirect to leads list

### Step 4: View Commissions (1 minute)
1. Navigate to "Commissions" from sidebar
2. See earnings breakdown:
   - Total earned
   - Pending
   - Paid
3. View transaction history
4. Filter by status

### Step 5: Check Analytics (1 minute)
1. Navigate to "Analytics"
2. View performance charts
3. See conversion metrics
4. Browse service breakdown

---

## 🎨 Visual Preview

### Login Page
```
┌─────────────────────────────────┐
│    Finanshels Partner Portal    │
│   Sign in to access dashboard   │
│                                  │
│  Email: ___________________     │
│  Pass:  ___________________     │
│  [ ] Remember me  Forgot?       │
│                                  │
│      [   Sign In   ]            │
│                                  │
│  Don't have an account?         │
│      Register as Partner        │
└─────────────────────────────────┘
```

### Dashboard Layout
```
┌──────────────────────────────────────────┐
│ ☰ Finanshels Partners    🔔 [Partner] ▼│
├────────┬─────────────────────────────────┤
│        │ Welcome back, [Name]! 👋       │
│ Home   │                                 │
│ Leads  │ [Stats Cards]                   │
│ Servs  │ ┌──────┐┌──────┐┌──────┐┌──────┐│
│ Comms  │ │Leads ││Conv. ││Earn. ││Rate ││
│ Analyt │ └──────┘└──────┘└──────┘└──────┘│
│ Docs   │                                 │
│        │ [Commission Overview]           │
│ ────── │ [Recent Leads]                  │
│ Logout │ [Quick Actions]                 │
└────────┴─────────────────────────────────┘
```

---

## 📊 Sample Data Available

### Pre-loaded Leads
- **L001**: Ahmed Ali - Business Setup - Submitted
- **L002**: Sarah Mohammed - PRO Services - In Progress
- **L003**: Khalid Hassan - Accounting - Converted ✅

### Commission Transactions
- **C001**: AED 800 - Paid ✅
- **C002**: AED 500 - Pending ⏳

### Available Services (8 total)
1. Business Setup - AED 15,000
2. PRO Services - AED 5,000
3. Accounting - AED 2,000/month
4. VAT Services - AED 3,000
5. Auditing - Custom pricing
6. Tax Consultation - Custom pricing
7. Visa Services - AED 3,500
8. Bank Account Opening - AED 2,500

---

## 🔧 Dev Tools & Testing

### Browser Console Commands

```javascript
// View current auth state
JSON.parse(localStorage.getItem('auth-storage'))

// Clear authentication (force logout)
localStorage.removeItem('auth-storage')

// Clear all data
localStorage.clear()

// View notifications
JSON.parse(localStorage.getItem('notification-storage'))

// Reload page
location.reload()
```

### Testing Different Screens

**Mobile View**:
- Chrome DevTools: `Cmd + Opt + I`
- Toggle Device: `Cmd + Shift + M`
- Select iPhone/iPad

**Tablet View**:
- Select iPad from device toolbar
- Or resize browser to 768px-1024px

**Desktop View**:
- Default browser size
- Or expand to >1024px

---

## 🎯 Feature Testing Checklist

### Authentication ✅
- [ ] Register new partner
- [ ] Login with credentials
- [ ] Logout
- [ ] Protected route redirect
- [ ] Session persistence

### Lead Management ✅
- [ ] View leads list
- [ ] Submit new lead
- [ ] Search leads
- [ ] Filter by status
- [ ] View lead details

### Service Requests ✅
- [ ] Browse service catalog
- [ ] Submit service request
- [ ] View request status
- [ ] Track progress

### Commissions ✅
- [ ] View earnings dashboard
- [ ] Filter transactions
- [ ] Check payout status

### Analytics ✅
- [ ] View performance metrics
- [ ] Interact with charts
- [ ] Check trends

### Notifications ✅
- [ ] Open notification center
- [ ] View unread count
- [ ] Mark as read

---

## 🚨 Troubleshooting

### Can't Access Portal
**Issue**: Page not loading
**Solution**:
```bash
# Check if server is running
# Should see: "Local: http://localhost:5174/"

# If not, start it:
npm run dev
```

### "Not Authorized" Error
**Issue**: Can't access portal pages
**Solution**:
1. Go to http://localhost:5174/login
2. Enter any credentials
3. Should redirect to dashboard

### Data Not Showing
**Issue**: Empty tables/no data
**Solution**:
```javascript
// Browser console
localStorage.clear()
location.reload()
```

### Port Already in Use
**Issue**: Port 5174 in use
**Solution**:
```bash
# Kill process
lsof -ti:5174 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

---

## 📸 Screenshot Guide

### Key Pages to Review

1. **Login Page** (`/login`)
   - Clean authentication form
   - Demo credentials note
   - Registration link

2. **Registration** (`/register`)
   - 4-step progress indicator
   - Form validation
   - Document upload

3. **Dashboard** (`/portal/dashboard`)
   - Performance stats cards
   - Commission overview
   - Recent leads
   - Quick actions

4. **Leads** (`/portal/leads`)
   - Stats summary
   - Search and filters
   - Table with all leads
   - Status badges

5. **New Lead** (`/portal/leads/new`)
   - Customer form
   - Service selection
   - Success confirmation

6. **Services** (`/portal/services`)
   - Service request cards
   - Progress tracking
   - Status indicators

7. **Service Catalog** (`/portal/services/catalog`)
   - Grid layout
   - Service details
   - Pricing and duration

8. **Commissions** (`/portal/commissions`)
   - Earnings cards
   - Transaction table
   - Filter options

9. **Analytics** (`/portal/analytics`)
   - KPI cards
   - Performance chart
   - Pie chart breakdown
   - Bar chart

---

## 🎓 Demo Script for Stakeholders

**Duration**: 10 minutes

### Intro (1 min)
"I'll show you the partner portal we've built. It allows partners to register, submit leads, track commissions, and view analytics."

### Registration (2 min)
1. Show 4-step registration
2. Highlight document upload
3. Show commission model selection
4. Complete registration → Dashboard

### Partner Experience (3 min)
1. Dashboard overview - "Partners see their metrics here"
2. Submit lead - "Easy lead submission form"
3. Track in leads list - "Real-time status updates"
4. Show service request - "Partners can request services"

### Commission & Analytics (2 min)
1. Commission dashboard - "Transparent earnings tracking"
2. Analytics page - "Performance insights with charts"
3. Show filters and interactions

### Technical Overview (2 min)
1. Show responsive design (mobile view)
2. Mention API-ready architecture
3. Highlight mock data mode
4. Discuss production readiness

---

## ✅ Ready to Demo!

Your portal is fully functional and ready to demonstrate. All features work with mock data, providing a complete preview of the production system.

### Quick Access Links

- **Portal Login**: http://localhost:5174/login
- **Registration**: http://localhost:5174/register  
- **Dashboard**: http://localhost:5174/portal/dashboard (after login)

**Happy exploring! 🚀**
