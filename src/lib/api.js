import axios from 'axios';

// Mock API base URL - replace with actual backend URL in production
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const authData = localStorage.getItem('auth-storage');
    if (authData) {
      const { state } = JSON.parse(authData);
      if (state?.token) {
        config.headers.Authorization = `Bearer ${state.token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('auth-storage');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (data) => api.post('/auth/register', data),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword: (token, password) => api.post('/auth/reset-password', { token, password }),
  verifyEmail: (token) => api.post('/auth/verify-email', { token }),
};

// Partner API
export const partnerAPI = {
  getProfile: () => api.get('/partners/profile'),
  updateProfile: (data) => api.put('/partners/profile', data),
  uploadDocument: (formData) => api.post('/partners/documents', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  getDocuments: () => api.get('/partners/documents'),
};

// Lead API
export const leadAPI = {
  createLead: (data) => api.post('/leads', data),
  getLeads: (params) => api.get('/leads', { params }),
  getLead: (id) => api.get(`/leads/${id}`),
  updateLead: (id, data) => api.put(`/leads/${id}`, data),
  getLeadStats: () => api.get('/leads/stats'),
};

// Service Request API
export const serviceAPI = {
  getServices: () => api.get('/services'),
  createRequest: (data) => api.post('/service-requests', data),
  getRequests: (params) => api.get('/service-requests', { params }),
  getRequest: (id) => api.get(`/service-requests/${id}`),
  updateRequest: (id, data) => api.put(`/service-requests/${id}`, data),
  uploadDocuments: (id, formData) => api.post(`/service-requests/${id}/documents`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
};

// Commission API
export const commissionAPI = {
  getCommissions: (params) => api.get('/commissions', { params }),
  getCommissionStats: () => api.get('/commissions/stats'),
  getPayouts: (params) => api.get('/commissions/payouts', { params }),
  downloadStatement: (id) => api.get(`/commissions/statements/${id}`, { responseType: 'blob' }),
};

// Analytics API
export const analyticsAPI = {
  getPerformanceMetrics: (params) => api.get('/analytics/performance', { params }),
  getCommissionReport: (params) => api.get('/analytics/commissions', { params }),
  getServiceMetrics: (params) => api.get('/analytics/services', { params }),
};

// Notification API
export const notificationAPI = {
  getNotifications: (params) => api.get('/notifications', { params }),
  markAsRead: (id) => api.put(`/notifications/${id}/read`),
  markAllAsRead: () => api.put('/notifications/read-all'),
};

// Team API (for internal team portal)
export const teamAPI = {
  getPartners: (params) => api.get('/team/partners', { params }),
  approvePartner: (id, data) => api.put(`/team/partners/${id}/approve`, data),
  rejectPartner: (id, reason) => api.put(`/team/partners/${id}/reject`, { reason }),
  getLeads: (params) => api.get('/team/leads', { params }),
  approveLead: (id) => api.put(`/team/leads/${id}/approve`),
  convertLead: (id, data) => api.put(`/team/leads/${id}/convert`, data),
  getServiceRequests: (params) => api.get('/team/service-requests', { params }),
  updateServiceStatus: (id, status) => api.put(`/team/service-requests/${id}/status`, { status }),
  processCommission: (id) => api.post(`/team/commissions/${id}/process`),
  generateInvoice: (partnerId, data) => api.post(`/team/invoices`, { partnerId, ...data }),
};

export default api;
