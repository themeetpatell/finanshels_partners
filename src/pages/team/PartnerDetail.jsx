import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { 
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  Users,
  Briefcase,
  Clock,
  ExternalLink,
  Edit,
  CheckCircle,
  XCircle
} from 'lucide-react';

const PartnerDetail = () => {
  const { partnerId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock partner data - in production, fetch from API
  const partner = {
    id: 'P001',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+971 50 123 4567',
    company: 'Doe Consulting',
    type: 'Referral Partner',
    commissionTier: '10%',
    status: 'active',
    joinedDate: '2024-01-15',
    location: 'Dubai, UAE',
    bankAccount: '**** **** 1234',
    totalEarnings: 15800,
    pendingPayouts: 3200,
    totalLeads: 12,
    convertedLeads: 8,
    activeClients: 5,
    recurringClients: 3,
  };

  // Deals/Leads submitted by this partner
  const deals = [
    {
      id: 'L001',
      customerName: 'Ahmed Corporation',
      service: 'Accounting',
      status: 'converted',
      dealValue: 8000,
      commission: 800,
      commissionStatus: 'paid',
      submittedDate: '2024-11-15',
      convertedDate: '2024-11-20',
      zohoLeadId: 'ZL-12345',
      zohoDealId: 'ZD-56789',
      isRecurring: true,
      recurringFrequency: 'Monthly',
      recurringCommission: 80,
    },
    {
      id: 'L002',
      customerName: 'Dubai Trading LLC',
      service: 'PRO Services',
      status: 'converted',
      dealValue: 5000,
      commission: 500,
      commissionStatus: 'paid',
      submittedDate: '2024-12-01',
      convertedDate: '2024-12-05',
      zohoLeadId: 'ZL-12346',
      zohoDealId: 'ZD-56790',
      isRecurring: false,
    },
    {
      id: 'L003',
      customerName: 'Emirates Retail Group',
      service: 'Business Setup',
      status: 'in-progress',
      dealValue: 15000,
      commission: 1500,
      commissionStatus: 'pending',
      submittedDate: '2024-12-10',
      zohoLeadId: 'ZL-12347',
      isRecurring: false,
    },
    {
      id: 'L004',
      customerName: 'Tech Innovations DMCC',
      service: 'VAT Services',
      status: 'converted',
      dealValue: 3000,
      commission: 300,
      commissionStatus: 'approved',
      submittedDate: '2024-12-12',
      convertedDate: '2024-12-15',
      zohoLeadId: 'ZL-12348',
      zohoDealId: 'ZD-56791',
      isRecurring: true,
      recurringFrequency: 'Quarterly',
      recurringCommission: 30,
    },
  ];

  // Client details with recurring info
  const clients = [
    {
      id: 'C001',
      name: 'Ahmed Corporation',
      service: 'Accounting',
      status: 'active',
      startDate: '2024-11-20',
      dealValue: 8000,
      oneTimeCommission: 800,
      isRecurring: true,
      recurringFrequency: 'Monthly',
      recurringAmount: 800,
      recurringCommission: 80,
      recurringMonths: 8,
      totalRecurringEarned: 640,
      nextPayoutDate: '2024-12-25',
      zohoContactId: 'ZC-11111',
    },
    {
      id: 'C002',
      name: 'Dubai Trading LLC',
      service: 'PRO Services',
      status: 'completed',
      startDate: '2024-12-05',
      completedDate: '2024-12-12',
      dealValue: 5000,
      oneTimeCommission: 500,
      isRecurring: false,
      zohoContactId: 'ZC-11112',
    },
    {
      id: 'C003',
      name: 'Tech Innovations DMCC',
      service: 'VAT Services',
      status: 'active',
      startDate: '2024-12-15',
      dealValue: 3000,
      oneTimeCommission: 300,
      isRecurring: true,
      recurringFrequency: 'Quarterly',
      recurringAmount: 1000,
      recurringCommission: 100,
      recurringMonths: 2,
      totalRecurringEarned: 200,
      nextPayoutDate: '2025-03-15',
      zohoContactId: 'ZC-11113',
    },
  ];

  // Commission history
  const commissions = [
    {
      id: 'CM001',
      type: 'One-time',
      client: 'Ahmed Corporation',
      amount: 800,
      status: 'paid',
      date: '2024-11-25',
      invoiceNumber: 'INV-001',
    },
    {
      id: 'CM002',
      type: 'Recurring',
      client: 'Ahmed Corporation',
      amount: 80,
      status: 'paid',
      date: '2024-12-25',
      invoiceNumber: 'INV-002',
      period: 'December 2024',
    },
    {
      id: 'CM003',
      type: 'One-time',
      client: 'Dubai Trading LLC',
      amount: 500,
      status: 'paid',
      date: '2024-12-10',
      invoiceNumber: 'INV-003',
    },
    {
      id: 'CM004',
      type: 'One-time',
      client: 'Tech Innovations DMCC',
      amount: 300,
      status: 'approved',
      date: '2024-12-18',
      invoiceNumber: 'INV-004',
    },
    {
      id: 'CM005',
      type: 'Recurring',
      client: 'Ahmed Corporation',
      amount: 80,
      status: 'pending',
      date: '2025-01-25',
      period: 'January 2025',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
      case 'converted':
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => navigate('/team/partners')}
            className="flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{partner.name}</h1>
            <p className="text-gray-600 mt-1">{partner.type} • {partner.company}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            Process Payout
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            AED {partner.totalEarnings.toLocaleString()}
          </h3>
          <p className="text-sm text-gray-600 mt-1">Total Earnings</p>
          <p className="text-xs text-yellow-600 mt-1">
            AED {partner.pendingPayouts.toLocaleString()} pending
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{partner.convertedLeads}</h3>
          <p className="text-sm text-gray-600 mt-1">Converted Deals</p>
          <p className="text-xs text-gray-500 mt-1">
            {partner.totalLeads} total leads • {Math.round((partner.convertedLeads / partner.totalLeads) * 100)}% conversion
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{partner.activeClients}</h3>
          <p className="text-sm text-gray-600 mt-1">Active Clients</p>
          <p className="text-xs text-gray-500 mt-1">
            {partner.recurringClients} with recurring revenue
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{partner.commissionTier}</h3>
          <p className="text-sm text-gray-600 mt-1">Commission Tier</p>
          <p className="text-xs text-green-600 mt-1">
            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusColor(partner.status)}`}>
              {partner.status}
            </span>
          </p>
        </Card>
      </div>

      {/* Partner Profile Info */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Partner Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium text-gray-900">{partner.email}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-medium text-gray-900">{partner.phone}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <p className="font-medium text-gray-900">{partner.location}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">Joined Date</p>
              <p className="font-medium text-gray-900">
                {new Date(partner.joinedDate).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <DollarSign className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">Bank Account</p>
              <p className="font-medium text-gray-900">{partner.bankAccount}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Briefcase className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600">Partner ID</p>
              <p className="font-medium text-gray-900">{partner.id}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {['overview', 'deals', 'clients', 'commissions'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                activeTab === tab
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Deals */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Deals</h3>
            <div className="space-y-3">
              {deals.slice(0, 3).map((deal) => (
                <div key={deal.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{deal.customerName}</p>
                    <p className="text-sm text-gray-600">{deal.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">AED {deal.commission}</p>
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${getStatusColor(deal.commissionStatus)}`}>
                      {deal.commissionStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recurring Revenue */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recurring Revenue Clients</h3>
            <div className="space-y-3">
              {clients.filter(c => c.isRecurring).map((client) => (
                <div key={client.id} className="p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900">{client.name}</p>
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${getStatusColor(client.status)}`}>
                      {client.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-600">Frequency</p>
                      <p className="font-medium text-gray-900">{client.recurringFrequency}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Commission/Period</p>
                      <p className="font-semibold text-purple-600">AED {client.recurringCommission}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Total Earned</p>
                      <p className="font-medium text-gray-900">AED {client.totalRecurringEarned}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Next Payout</p>
                      <p className="font-medium text-gray-900">{new Date(client.nextPayoutDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {activeTab === 'deals' && (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lead ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deal Value</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Commission</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Zoho</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {deals.map((deal) => (
                  <tr key={deal.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {deal.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {deal.customerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {deal.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      AED {deal.dealValue.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                      AED {deal.commission.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {deal.isRecurring ? (
                        <div>
                          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded">
                            Recurring
                          </span>
                          <p className="text-xs text-gray-600 mt-1">
                            +AED {deal.recurringCommission}/{deal.recurringFrequency}
                          </p>
                        </div>
                      ) : (
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded">
                          One-time
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(deal.commissionStatus)}`}>
                        {deal.commissionStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {deal.zohoLeadId && (
                        <button className="flex items-center text-blue-600 hover:text-blue-800 text-xs">
                          {deal.zohoLeadId}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </button>
                      )}
                      {deal.zohoDealId && (
                        <button className="flex items-center text-green-600 hover:text-green-800 text-xs mt-1">
                          {deal.zohoDealId}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {activeTab === 'clients' && (
        <div className="space-y-4">
          {clients.map((client) => (
            <Card key={client.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl font-semibold text-gray-900">{client.name}</h3>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(client.status)}`}>
                      {client.status}
                    </span>
                    {client.isRecurring && (
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                        Recurring
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{client.service}</p>
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                  View in Zoho
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm text-gray-600">Start Date</p>
                  <p className="font-medium text-gray-900 mt-1">
                    {new Date(client.startDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Deal Value</p>
                  <p className="font-semibold text-gray-900 mt-1">
                    AED {client.dealValue.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">One-Time Commission</p>
                  <p className="font-semibold text-green-600 mt-1">
                    AED {client.oneTimeCommission.toLocaleString()}
                  </p>
                </div>
                {client.isRecurring && (
                  <div>
                    <p className="text-sm text-gray-600">Recurring Commission</p>
                    <p className="font-semibold text-purple-600 mt-1">
                      AED {client.recurringCommission}/{client.recurringFrequency}
                    </p>
                  </div>
                )}
              </div>

              {client.isRecurring && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Recurring Revenue Details</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-xs text-gray-600">Frequency</p>
                      <p className="font-medium text-gray-900 mt-1">{client.recurringFrequency}</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-xs text-gray-600">Recurring Amount</p>
                      <p className="font-medium text-gray-900 mt-1">AED {client.recurringAmount}</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-xs text-gray-600">Periods Paid</p>
                      <p className="font-medium text-gray-900 mt-1">{client.recurringMonths}</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-xs text-gray-600">Total Recurring Earned</p>
                      <p className="font-semibold text-purple-600 mt-1">
                        AED {client.totalRecurringEarned}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    Next payout: {new Date(client.nextPayoutDate).toLocaleDateString()}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'commissions' && (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Period</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {commissions.map((commission) => (
                  <tr key={commission.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {commission.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded ${
                        commission.type === 'Recurring' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {commission.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {commission.client}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {commission.period || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                      AED {commission.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(commission.status)}`}>
                        {commission.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(commission.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {commission.invoiceNumber ? (
                        <button className="text-blue-600 hover:text-blue-800">
                          {commission.invoiceNumber}
                        </button>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
};

export default PartnerDetail;
