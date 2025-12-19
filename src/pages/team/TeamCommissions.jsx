import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { 
  Search, 
  Download,
  DollarSign,
  Check,
  Clock,
  AlertCircle,
  ExternalLink,
  CreditCard
} from 'lucide-react';

const TeamCommissions = () => {
  const [commissions, setCommissions] = useState([
    {
      id: 'C001',
      partnerId: 'P001',
      partnerName: 'John Doe',
      leadId: 'L003',
      customerName: 'Khalid Hassan',
      service: 'Accounting',
      dealValue: 8000,
      commissionRate: 10,
      commissionAmount: 800,
      status: 'paid',
      earnedDate: '2024-12-10',
      paidDate: '2024-12-15',
      paymentMethod: 'Bank Transfer',
      invoiceNumber: 'INV-001',
      zohoInvoiceId: 'ZI-98765',
    },
    {
      id: 'C002',
      partnerId: 'P001',
      partnerName: 'John Doe',
      leadId: 'L002',
      customerName: 'Sarah Mohammed',
      service: 'PRO Services',
      dealValue: 5000,
      commissionRate: 10,
      commissionAmount: 500,
      status: 'pending',
      earnedDate: '2024-12-12',
      paidDate: null,
      paymentMethod: null,
      invoiceNumber: null,
      zohoInvoiceId: null,
    },
    {
      id: 'C003',
      partnerId: 'P002',
      partnerName: 'Sarah Smith',
      leadId: 'L005',
      customerName: 'Mohammed Hassan',
      service: 'Business Setup',
      dealValue: 18000,
      commissionRate: 12,
      commissionAmount: 2160,
      status: 'approved',
      earnedDate: '2024-12-16',
      paidDate: null,
      paymentMethod: null,
      invoiceNumber: 'INV-002',
      zohoInvoiceId: 'ZI-98766',
    },
    {
      id: 'C004',
      partnerId: 'P003',
      partnerName: 'Channel Partner Co',
      leadId: 'L007',
      customerName: 'Emirates Trading',
      service: 'VAT Services',
      dealValue: 3000,
      commissionRate: 15,
      commissionAmount: 450,
      status: 'pending',
      earnedDate: '2024-12-18',
      paidDate: null,
      paymentMethod: null,
      invoiceNumber: null,
      zohoInvoiceId: null,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const handleApprove = (commissionId) => {
    setCommissions(commissions.map(c =>
      c.id === commissionId ? {
        ...c,
        status: 'approved',
        invoiceNumber: `INV-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
        zohoInvoiceId: `ZI-${Math.random().toString().substr(2, 5)}`
      } : c
    ));
  };

  const handleProcessPayout = (commissionId) => {
    setCommissions(commissions.map(c =>
      c.id === commissionId ? {
        ...c,
        status: 'processing',
      } : c
    ));
    
    // Simulate payout processing
    setTimeout(() => {
      setCommissions(prevCommissions =>
        prevCommissions.map(c =>
          c.id === commissionId ? {
            ...c,
            status: 'paid',
            paidDate: new Date().toISOString(),
            paymentMethod: 'Bank Transfer'
          } : c
        )
      );
    }, 2000);
  };

  const filteredCommissions = commissions.filter((commission) => {
    const matchesSearch =
      commission.partnerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      commission.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      commission.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || commission.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'approved':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-purple-100 text-purple-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = {
    totalCommissions: commissions.reduce((sum, c) => sum + c.commissionAmount, 0),
    pendingAmount: commissions.filter(c => c.status === 'pending').reduce((sum, c) => sum + c.commissionAmount, 0),
    approvedAmount: commissions.filter(c => c.status === 'approved').reduce((sum, c) => sum + c.commissionAmount, 0),
    paidAmount: commissions.filter(c => c.status === 'paid').reduce((sum, c) => sum + c.commissionAmount, 0),
    pendingCount: commissions.filter(c => c.status === 'pending').length,
    approvedCount: commissions.filter(c => c.status === 'approved').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Commissions & Payouts</h1>
          <p className="text-gray-600 mt-1">Manage partner commissions and process payouts</p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center mb-2">
            <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm text-gray-600">Total Commissions</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            AED {stats.totalCommissions.toLocaleString()}
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 text-yellow-600 mr-2" />
            <span className="text-sm text-gray-600">Pending Approval</span>
          </div>
          <div className="text-2xl font-bold text-yellow-600">
            AED {stats.pendingAmount.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 mt-1">{stats.pendingCount} transactions</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center mb-2">
            <Check className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm text-gray-600">Approved (Unpaid)</span>
          </div>
          <div className="text-2xl font-bold text-blue-600">
            AED {stats.approvedAmount.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 mt-1">{stats.approvedCount} transactions</div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center mb-2">
            <Check className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-sm text-gray-600">Paid Out</span>
          </div>
          <div className="text-2xl font-bold text-green-600">
            AED {stats.paidAmount.toLocaleString()}
          </div>
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
                placeholder="Search by partner, customer, or commission ID..."
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
              <option value="pending">Pending Approval</option>
              <option value="approved">Approved</option>
              <option value="processing">Processing</option>
              <option value="paid">Paid</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Commissions Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Partner</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deal Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Commission</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCommissions.map((commission) => (
                <tr key={commission.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {commission.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{commission.partnerName}</div>
                    <div className="text-sm text-gray-500">{commission.partnerId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{commission.customerName}</div>
                    <div className="text-sm text-gray-500">{commission.service}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    AED {commission.dealValue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {commission.commissionRate}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                    AED {commission.commissionAmount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(commission.status)}`}>
                      {commission.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {commission.zohoInvoiceId ? (
                      <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                        {commission.invoiceNumber}
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </button>
                    ) : (
                      <span className="text-sm text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    {commission.status === 'pending' && (
                      <Button
                        size="sm"
                        onClick={() => handleApprove(commission.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Check className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                    )}
                    {commission.status === 'approved' && (
                      <Button
                        size="sm"
                        onClick={() => handleProcessPayout(commission.id)}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <CreditCard className="w-4 h-4 mr-1" />
                        Process Payout
                      </Button>
                    )}
                    {commission.status === 'paid' && (
                      <span className="text-xs text-green-600">
                        ✓ Paid {new Date(commission.paidDate).toLocaleDateString()}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Zoho Integration Info */}
      <Card className="p-6 bg-purple-50 border-purple-200">
        <h3 className="font-semibold text-purple-900 mb-2">💳 Commission & Payout Workflow</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-purple-800">
          <div>
            <div className="font-semibold mb-1">1. Pending</div>
            <div className="text-xs">Commission calculated when lead converts</div>
          </div>
          <div>
            <div className="font-semibold mb-1">2. Approved</div>
            <div className="text-xs">Invoice generated in Zoho Books</div>
          </div>
          <div>
            <div className="font-semibold mb-1">3. Processing</div>
            <div className="text-xs">Payment initiated via bank transfer</div>
          </div>
          <div>
            <div className="font-semibold mb-1">4. Paid</div>
            <div className="text-xs">Payment completed & synced to Zoho</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TeamCommissions;
