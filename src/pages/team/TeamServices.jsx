import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { 
  Search, 
  Download,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText
} from 'lucide-react';

const TeamServices = () => {
  const [requests, setRequests] = useState([
    {
      id: 'SR001',
      partnerId: 'P001',
      partnerName: 'John Doe',
      service: 'Accounting',
      customerName: 'Ahmed Corporation',
      requestDate: '2024-12-15',
      status: 'in-progress',
      priority: 'high',
      assignedTo: 'Team A',
      estimatedValue: 8000,
      notes: 'Monthly accounting setup needed'
    },
    {
      id: 'SR002',
      partnerId: 'P002',
      partnerName: 'Sarah Smith',
      service: 'Business Setup',
      customerName: 'Emirates Trading LLC',
      requestDate: '2024-12-16',
      status: 'pending',
      priority: 'urgent',
      assignedTo: null,
      estimatedValue: 15000,
      notes: 'Mainland company registration'
    },
    {
      id: 'SR003',
      partnerId: 'P003',
      partnerName: 'Channel Partner Co',
      service: 'VAT Services',
      customerName: 'Dubai Retail Group',
      requestDate: '2024-12-17',
      status: 'completed',
      priority: 'medium',
      assignedTo: 'Team B',
      estimatedValue: 3000,
      notes: 'VAT registration completed'
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const handleAssign = (requestId, team) => {
    setRequests(requests.map(r =>
      r.id === requestId ? { ...r, assignedTo: team, status: 'in-progress' } : r
    ));
  };

  const handleComplete = (requestId) => {
    setRequests(requests.map(r =>
      r.id === requestId ? { ...r, status: 'completed', completedDate: new Date().toISOString() } : r
    ));
  };

  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.partnerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-blue-100 text-blue-800';
      case 'low':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = {
    total: requests.length,
    pending: requests.filter(r => r.status === 'pending').length,
    inProgress: requests.filter(r => r.status === 'in-progress').length,
    completed: requests.filter(r => r.status === 'completed').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Service Requests</h1>
          <p className="text-gray-600 mt-1">Manage partner service requests</p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-sm text-gray-600">Total Requests</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{stats.total}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Pending</div>
          <div className="text-2xl font-bold text-yellow-600 mt-1">{stats.pending}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">In Progress</div>
          <div className="text-2xl font-bold text-blue-600 mt-1">{stats.inProgress}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Completed</div>
          <div className="text-2xl font-bold text-green-600 mt-1">{stats.completed}</div>
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
                placeholder="Search by partner, customer, or request ID..."
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
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Requests Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Request ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Partner</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned To</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {request.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{request.partnerName}</div>
                    <div className="text-sm text-gray-500">{request.partnerId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.customerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getPriorityColor(request.priority)}`}>
                      {request.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {request.assignedTo || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    {request.status === 'pending' && (
                      <select
                        onChange={(e) => handleAssign(request.id, e.target.value)}
                        className="px-3 py-1 text-sm border border-gray-300 rounded"
                        defaultValue=""
                      >
                        <option value="" disabled>Assign to...</option>
                        <option value="Team A">Team A</option>
                        <option value="Team B">Team B</option>
                        <option value="Team C">Team C</option>
                      </select>
                    )}
                    {request.status === 'in-progress' && (
                      <Button
                        size="sm"
                        onClick={() => handleComplete(request.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Complete
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default TeamServices;
