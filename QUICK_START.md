# 🚀 Quick Start Guide - Finanshels Partner Portal

## Getting Started in 5 Minutes

### 1. Installation
```bash
npm install
npm run dev
```

Access the portal at: **http://localhost:5173**

### 2. First Login (Demo Mode)

**Partner Portal Login**: http://localhost:5173/login
- Email: `any@email.com`
- Password: `any-password`

The portal currently runs with **mock data** for demonstration purposes.

---

## 📋 Feature Walkthrough

### For Partners

#### ✅ **Register as a New Partner**
1. Go to http://localhost:5173/register
2. Complete the 4-step registration:
   - **Step 1**: Basic Info (name, email, password)
   - **Step 2**: Business Info (company, partner type)
   - **Step 3**: Commission Model (percentage/tiered/milestone)
   - **Step 4**: Upload Documents
3. Submit and auto-login to dashboard

#### ✅ **Dashboard Overview**
- View your performance metrics
- Check total earnings and pending commissions
- See recent leads and their status
- Quick action buttons for common tasks

#### ✅ **Submit a Lead**
1. Navigate to **Leads** → **Submit New Lead**
2. Fill in customer details:
   - Name, email, phone
   - Service required
   - Estimated value
3. Add notes about customer requirements
4. Submit and track in real-time

#### ✅ **Request a Service**
1. Go to **Service Requests** → **New Request**
2. Browse the service catalog
3. Select service and customer details
4. Upload supporting documents
5. Track progress with status updates

#### ✅ **Track Commissions**
- View real-time earnings dashboard
- Filter by status (paid/pending/processing)
- See transaction history with details
- Download commission statements

#### ✅ **View Analytics**
- Performance metrics (conversion rate, deal size)
- Revenue trends over 6 months
- Commission breakdown by service
- Interactive charts and graphs

---

### For Internal Team

#### ✅ **Partner Management**
Access: `/team/partners` (to be added to routing)

Features:
- Approve/reject partner applications
- View all partners and their status
- Monitor partner performance
- Manage partner accounts

---

## 🎯 Key Routes

### Public Routes
- `/` - Home page
- `/about` - About us
- `/partnerships` - Partnership info
- `/become-a-partner` - Partner inquiry
- `/register` - Partner registration

### Portal Routes (Protected)
- `/login` - Partner login
- `/portal/dashboard` - Partner dashboard
- `/portal/leads` - Lead management
- `/portal/leads/new` - Submit new lead
- `/portal/services` - Service requests
- `/portal/services/new` - New service request
- `/portal/services/catalog` - Browse services
- `/portal/commissions` - Commission tracking
- `/portal/analytics` - Analytics & reports

---

## 💡 Demo Data Available

### Sample Lead Statuses
- **Submitted**: Just submitted, awaiting review
- **In Progress**: Being processed by team
- **Converted**: Successfully converted to customer
- **Rejected**: Not qualified

### Sample Services
1. **Business Setup** - AED 15,000 (30 days)
2. **PRO Services** - AED 5,000 (7-14 days)
3. **Accounting & Bookkeeping** - AED 2,000/month
4. **VAT Services** - AED 3,000 (5-7 days)

### Commission Models
1. **Flat Percentage**: 10% on all deals
2. **Tiered**: Increasing % with more referrals
3. **Milestone-Based**: Bonuses at volume targets

---

## 🔧 Development Tips

### Hot Reload
- Changes auto-reload in development
- Mock data persists in localStorage
- Clear storage: `localStorage.clear()` in console

### Testing Different States
```javascript
// In browser console

// Clear authentication
localStorage.removeItem('auth-storage')

// Clear all data
localStorage.clear()

// View current auth state
JSON.parse(localStorage.getItem('auth-storage'))
```

### Mock Data Customization
Edit `src/lib/mockData.js` to:
- Add more leads
- Modify commission amounts
- Change partner details
- Add services

---

## 🎨 UI Components

All reusable components are in `src/components/ui/`:
- **Button**: Primary, outline, sizes
- **Card**: Container with shadow
- **Input**: Form inputs with validation

### Usage Example
```jsx
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import { Input } from './components/ui/Input';

<Card className="p-6">
  <Input placeholder="Enter email" />
  <Button>Submit</Button>
</Card>
```

---

## 📊 State Management

### Auth Store
```javascript
import useAuthStore from './stores/authStore';

// In component
const { user, isAuthenticated, login, logout } = useAuthStore();
```

### Notification Store
```javascript
import useNotificationStore from './stores/notificationStore';

const { notifications, addNotification } = useNotificationStore();

// Add notification
addNotification({
  type: 'success',
  title: 'Success!',
  message: 'Lead submitted successfully'
});
```

---

## 🚨 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Dependencies Issue
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear build cache
rm -rf dist
npm run build
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Test responsive design:
- Chrome DevTools (Cmd+Opt+I)
- Toggle device toolbar (Cmd+Shift+M)

---

## 🔐 Security Notes

Current implementation (Demo):
- Mock authentication (no real validation)
- Data stored in localStorage
- No API authentication

Production Requirements:
- JWT tokens with expiry
- Secure HTTP-only cookies
- API authentication middleware
- HTTPS only
- CSRF protection

---

## 📈 Performance

Current load times:
- Initial load: ~2s
- Route changes: <100ms
- Mock API calls: 800ms (simulated)

Optimizations applied:
- Code splitting by route
- Lazy loading components
- Optimized bundle size
- Tree shaking enabled

---

## 🎓 Learning Resources

### Technologies Used
- **React**: https://react.dev
- **React Router**: https://reactrouter.com
- **Zustand**: https://github.com/pmndrs/zustand
- **Tailwind CSS**: https://tailwindcss.com
- **Recharts**: https://recharts.org
- **Lucide Icons**: https://lucide.dev

---

## 🤝 Need Help?

### Common Questions

**Q: How do I add a new page?**
A: Create component in `src/pages/portal/`, add route in `App.jsx`

**Q: How do I modify commission rates?**
A: Edit `mockPartnerData` in `src/lib/mockData.js`

**Q: Can I change the theme colors?**
A: Yes, modify `tailwind.config.js`

**Q: How do I add real API?**
A: Update API functions in `src/lib/api.js`, replace mock calls

---

## 🎉 You're Ready!

Start exploring the portal:
1. Register at `/register`
2. Login at `/login`
3. Explore dashboard at `/portal/dashboard`
4. Submit test leads and track them
5. View analytics and commissions

**Happy coding! 🚀**
