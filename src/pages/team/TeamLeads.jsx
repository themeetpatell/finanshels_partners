import React, { useState } from 'react';
import { mockAPI, mockLeads } from '../../lib/mockData';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { 
  Search, 
  Filter, 
  Download,
  CheckCircle,
  XCircle,
  Clock,
  Zap,
  ExternalLink
} from 'lucide-react';

const TeamLeads = () => {
  const [leads, setLeads] = useState([
    ...mockLeads,
    {
      id: 'L004',
      customerName: 'Fatima Abdullah',
      email: 'fatima@example.com',
      phone: '+971 50 333 2222',
      service: 'VAT Services',
      status: 'submitted',
      submittedDate: '2024-12-18',
      estimatedValue: 3000,
      partnerId: 'P001',
      partnerName: 'John Doe',
      notes: 'Urgent VAT registration needed',
      zohoLeadId: 'ZL-12345',
      zohoDealId: null,
    },
    {
      id: 'L005',
      customerName: 'Mohammed Hassan',
      email: 'mohammed@example.com',
      phone: '+971 50 444 3333',
      service: 'Business Setup',
      status: 'in-progress',
      submittedDate: '2024-12-16',
      estimatedValue: 18000,
      partnerId: 'P002',
      partnerName: 'Sarah Smith',
      notes: 'Mainland company setup',
      zohoLeadId: 'ZL-12346',
      zohoDealId: 'ZD-56789',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const handleApprove = (leadId) => {
    setLeads(leads.map(l => 
      l.id === leadId ? { ...l, status: 'in-progress' } : l
    ));
    // In production: API call to update Zoho CRM
  };

  const handleConvert = (leadId) => {
    const lead = leads.find(l => l.id === leadId);
    if (lead) {
      setLeads(leads.map(l => 
        l.id === leadId ? { 
          ...l, 
          status: 'converted',
          convertedDate: new Date().toISOString(),
          zohoDealId: 'ZD-' + Math.random().toString(36).substr(2, 9).toUpperCase()
        } : l
      ));
      // In production: Create deal in Zoho CRM
    }
  };

  const handleReject = (leadId) => {
    setLeads(leads.map(l => 
      l.id === leadId ? { ...l, status: 'rejected' } : l
    ));
  };

  const syncWithZoho = async () => {
    // In production: Trigger manual sync with Zoho CRM
    alert('Syncing with Zoho CRM...');
  };

  const openInZoho = (zohoId) => {
    // In production: Open in Zoho CRM
    window.open(`https://crm.zoho.com/crm/org123/tab/Leads/${zohoId}`, '_blank');
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = 
      lead.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.partnerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'converted':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'submitted':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = {
    total: leads.length,
    submitted: leads.filter(l => l.status === 'submitted').length,
    inProgress: leads.filter(l => l.status === 'in-progress').length,
    converted: leads.filter(l => l.status === 'converted').length,
    rejected: leads.filter(l => l.status === 'rejected').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Leads & Deals Management</h1>
          <p className="text-gray-600 mt-1">Manage partner leads and sync with Zoho CRM</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={syncWithZoho}>
            <Zap className="w-4 h-4 mr-2" />
            Sync Zoho
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="p-4">
          <div className="text-sm text-gray-600">Total Leads</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{stats.total}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Submitted</div>
          <div className="text-2xl font-bold text-yellow-600 mt-1">{stats.submitted}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">In Progress</div>
          <div className="text-2xl font-bold text-blue-600 mt-1">{stats.inProgress}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Converted</div>
          <div className="text-2xl font-bold text-green-600 mt-1">{stats.converted}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Rejected</div>
          <div className="text-2xl font-bold text-red-600 mt-1">{stats.rejected}</div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by customer, partner, or lead ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="sm:w-48">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="submitted">Submitted</option>
              <option value="in-progress">In Progress</option>
              <option value="converted">Converted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Leads Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lead ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Partner</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Zoho</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {lead.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{lead.customerName}</div>
                    <div className="text-sm text-gray-500">{lead.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{lead.partnerName || 'N/A'}</div>
                    <div className="text-sm text-gray-500">{lead.partnerId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {lead.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    AED {lead.estimatedValue?.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {lead.zohoLeadId && (
                      <button
                        onClick={() => openInZoho(lead.zohoLeadId)}
                        className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                      >
                        {lead.zohoLeadId}
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </button>
                    )}
                    {lead.zohoDealId && (
                      <button
                        onClick={() => openInZoho(lead.zohoDealId)}
                        className="flex items-center text-sm text-green-600 hover:text-green-800 mt-1"
                      >
                        {lead.zohoDealId}
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    {lead.status === 'submitted' && (
                      <Button
                        size="sm"
                        onClick={() => handleApprove(lead.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                    )}
                    {lead.status === 'in-progress' && (
                      <Button
                        size="sm"
                        onClick={() => handleConvert(lead.id)}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Convert
                      </Button>
                    )}
                    {(lead.status === 'submitted' || lead.status === 'in-progress') && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleReject(lead.id)}
                        className="text-red-600 border-red-600 hover:bg-red-50"
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Zoho Integration Info */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2">💡 Zoho CRM Integration</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Leads are automatically synced to Zoho CRM when submitted</li>
          <li>• Click on Zoho IDs to open directly in Zoho CRM</li>
          <li>• Converting a lead creates a deal in Zoho with commission details</li>
          <li>• Webhooks ensure real-time updates between systems</li>
          <li>• Use "Sync Zoho" button to manually trigger synchronization</li>
        </ul>
      </Card>
    </div>
  );
};

export default TeamLeads;
