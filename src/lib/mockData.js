// Mock data for development - will be replaced with real API calls

export const mockPartnerData = {
  id: 'P001',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+971 50 123 4567',
  companyName: 'ABC Trading LLC',
  partnerType: 'referral', // 'referral' or 'channel'
  status: 'active', // 'pending', 'active', 'suspended'
  commissionModel: 'percentage', // 'percentage', 'tiered', 'milestone'
  commissionRate: 10,
  registrationDate: '2024-01-15',
  documents: [
    { id: 1, type: 'trade_license', name: 'Trade License.pdf', status: 'verified', uploadDate: '2024-01-15' },
    { id: 2, type: 'emirates_id', name: 'Emirates ID.pdf', status: 'verified', uploadDate: '2024-01-15' },
  ],
};

export const mockLeads = [
  {
    id: 'L001',
    customerName: 'Ahmed Ali',
    email: 'ahmed@example.com',
    phone: '+971 50 999 8888',
    service: 'Business Setup',
    status: 'submitted',
    submittedDate: '2024-12-15',
    estimatedValue: 15000,
    notes: 'Looking to setup mainland company',
  },
  {
    id: 'L002',
    customerName: 'Sarah Mohammed',
    email: 'sarah@example.com',
    phone: '+971 50 777 6666',
    service: 'PRO Services',
    status: 'in-progress',
    submittedDate: '2024-12-10',
    estimatedValue: 5000,
    notes: 'Need visa renewal',
  },
  {
    id: 'L003',
    customerName: 'Khalid Hassan',
    email: 'khalid@example.com',
    phone: '+971 50 555 4444',
    service: 'Accounting',
    status: 'converted',
    submittedDate: '2024-12-01',
    estimatedValue: 8000,
    convertedDate: '2024-12-10',
    notes: 'Monthly accounting package',
  },
];

export const mockServiceRequests = [
  {
    id: 'SR001',
    service: 'Business Setup',
    customerName: 'Ahmed Ali',
    status: 'processing',
    submittedDate: '2024-12-15',
    expectedCompletion: '2025-01-15',
    progress: 45,
    documents: [
      { name: 'Passport Copy.pdf', uploadDate: '2024-12-15' },
      { name: 'Business Plan.pdf', uploadDate: '2024-12-15' },
    ],
  },
  {
    id: 'SR002',
    service: 'PRO Services',
    customerName: 'Sarah Mohammed',
    status: 'completed',
    submittedDate: '2024-11-20',
    completedDate: '2024-12-05',
    progress: 100,
  },
];

export const mockCommissions = {
  totalEarned: 45000,
  pendingCommission: 8500,
  paidCommission: 36500,
  thisMonth: 12000,
  lastMonth: 18000,
  transactions: [
    {
      id: 'C001',
      leadId: 'L003',
      customerName: 'Khalid Hassan',
      service: 'Accounting',
      amount: 8000,
      commissionRate: 10,
      commissionAmount: 800,
      status: 'paid',
      dateEarned: '2024-12-10',
      datePaid: '2024-12-15',
    },
    {
      id: 'C002',
      leadId: 'L002',
      customerName: 'Sarah Mohammed',
      service: 'PRO Services',
      amount: 5000,
      commissionRate: 10,
      commissionAmount: 500,
      status: 'pending',
      dateEarned: '2024-12-12',
    },
  ],
};

export const mockServices = [
  {
    id: 'S001',
    name: 'Business Setup',
    category: 'Corporate',
    description: 'Complete business setup services including trade license, visa, and bank account',
    basePrice: 15000,
    duration: '30 days',
    requirements: ['Passport copy', 'Business plan', 'Office address proof'],
  },
  {
    id: 'S002',
    name: 'PRO Services',
    category: 'Government',
    description: 'Visa processing, renewals, and government document services',
    basePrice: 5000,
    duration: '7-14 days',
    requirements: ['Valid Emirates ID', 'Passport copy'],
  },
  {
    id: 'S003',
    name: 'Accounting & Bookkeeping',
    category: 'Financial',
    description: 'Monthly accounting, bookkeeping, and financial statement preparation',
    basePrice: 2000,
    duration: 'Monthly',
    requirements: ['Business documents', 'Bank statements'],
  },
  {
    id: 'S004',
    name: 'VAT Services',
    category: 'Financial',
    description: 'VAT registration, filing, and consultation',
    basePrice: 3000,
    duration: '5-7 days',
    requirements: ['Trade license', 'Financial records'],
  },
];

export const mockAnalytics = {
  performance: {
    totalLeads: 45,
    convertedLeads: 18,
    conversionRate: 40,
    totalRevenue: 145000,
    avgDealSize: 8055,
    trends: [
      { month: 'Jul', leads: 8, conversions: 3, revenue: 25000 },
      { month: 'Aug', leads: 6, conversions: 2, revenue: 18000 },
      { month: 'Sep', leads: 9, conversions: 4, revenue: 32000 },
      { month: 'Oct', leads: 7, conversions: 3, revenue: 24000 },
      { month: 'Nov', leads: 8, conversions: 3, revenue: 28000 },
      { month: 'Dec', leads: 7, conversions: 3, revenue: 18000 },
    ],
  },
  commissionBreakdown: [
    { service: 'Business Setup', amount: 18000, percentage: 40 },
    { service: 'Accounting', amount: 12000, percentage: 27 },
    { service: 'PRO Services', amount: 9000, percentage: 20 },
    { service: 'VAT Services', amount: 6000, percentage: 13 },
  ],
};

export const mockNotifications = [
  {
    id: 1,
    type: 'lead_update',
    title: 'Lead Converted',
    message: 'Your lead "Khalid Hassan" has been converted to a customer',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    read: false,
  },
  {
    id: 2,
    type: 'commission',
    title: 'Commission Paid',
    message: 'AED 800 commission has been paid to your account',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    read: false,
  },
  {
    id: 3,
    type: 'service_update',
    title: 'Service Request Update',
    message: 'Service request SR001 is now 45% complete',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    read: true,
  },
];

// Mock API functions that simulate backend calls
export const mockAPI = {
  // Simulate network delay
  delay: (ms = 800) => new Promise(resolve => setTimeout(resolve, ms)),
  
  // Auth
  login: async (email, password) => {
    await mockAPI.delay();
    if (email && password) {
      return {
        data: {
          user: mockPartnerData,
          token: 'mock-jwt-token-' + Date.now(),
        },
      };
    }
    throw new Error('Invalid credentials');
  },
  
  register: async (data) => {
    await mockAPI.delay();
    return {
      data: {
        user: { ...mockPartnerData, ...data, id: 'P' + Date.now(), status: 'pending' },
        token: 'mock-jwt-token-' + Date.now(),
      },
    };
  },
  
  // Partners
  getProfile: async () => {
    await mockAPI.delay();
    return { data: mockPartnerData };
  },
  
  updateProfile: async (data) => {
    await mockAPI.delay();
    return { data: { ...mockPartnerData, ...data } };
  },
  
  // Leads
  getLeads: async () => {
    await mockAPI.delay();
    return { data: mockLeads };
  },
  
  createLead: async (data) => {
    await mockAPI.delay();
    return {
      data: {
        id: 'L' + Date.now(),
        ...data,
        status: 'submitted',
        submittedDate: new Date().toISOString(),
      },
    };
  },
  
  // Services
  getServices: async () => {
    await mockAPI.delay();
    return { data: mockServices };
  },
  
  getServiceRequests: async () => {
    await mockAPI.delay();
    return { data: mockServiceRequests };
  },
  
  createServiceRequest: async (data) => {
    await mockAPI.delay();
    return {
      data: {
        id: 'SR' + Date.now(),
        ...data,
        status: 'submitted',
        submittedDate: new Date().toISOString(),
        progress: 0,
      },
    };
  },
  
  // Commissions
  getCommissions: async () => {
    await mockAPI.delay();
    return { data: mockCommissions };
  },
  
  getCommissionStats: async () => {
    await mockAPI.delay();
    return { data: mockCommissions };
  },
  
  // Analytics
  getAnalytics: async () => {
    await mockAPI.delay();
    return { data: mockAnalytics };
  },
  
  // Notifications
  getNotifications: async () => {
    await mockAPI.delay();
    return { data: mockNotifications };
  },
};

export default mockAPI;
