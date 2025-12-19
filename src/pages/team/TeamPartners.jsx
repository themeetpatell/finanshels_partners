import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockAPI } from '../../lib/mockData';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Users, UserCheck, UserX, Search, Eye } from 'lucide-react';

const TeamPartners = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([
    {
      id: 'P001',
      name: 'John Doe',
      email: 'john@example.com',
      partnerType: 'referral',
      status: 'pending',
      submittedDate: '2024-12-18',
      commissionModel: 'percentage',
    },
    {
      id: 'P002',
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      partnerType: 'channel',
      status: 'active',
      submittedDate: '2024-12-10',
      commissionModel: 'tiered',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredPartners = partners.filter((partner) => {
    const matchesSearch = 
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || partner.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleApprove = (partnerId) => {
    setPartners(partners.map(p => 
      p.id === partnerId ? { ...p, status: 'active' } : p
    ));
  };

  const handleReject = (partnerId) => {
    setPartners(partners.map(p => 
      p.id === partnerId ? { ...p, status: 'rejected' } : p
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'suspended':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Partner Management</h1>
        <p className="text-gray-600 mt-1">Manage partner applications and accounts</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-sm text-gray-600">Total Partners</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{partners.length}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Active</div>
          <div className="text-2xl font-bold text-green-600 mt-1">
            {partners.filter((p) => p.status === 'active').length}
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Pending Approval</div>
          <div className="text-2xl font-bold text-yellow-600 mt-1">
            {partners.filter((p) => p.status === 'pending').length}
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Rejected</div>
          <div className="text-2xl font-bold text-red-600 mt-1">
            {partners.filter((p) => p.status === 'rejected').length}
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
                placeholder="Search partners..."
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
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Partners Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Partner ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Submitted</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPartners.map((partner) => (
                <tr key={partner.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {partner.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{partner.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{partner.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                    {partner.partnerType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(partner.status)}`}>
                      {partner.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(partner.submittedDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    {partner.status === 'pending' && (
                      <>
                        <Button
                          size="sm"
                          onClick={() => handleApprove(partner.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <UserCheck className="w-4 h-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleReject(partner.id)}
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          <UserX className="w-4 h-4 mr-1" />
                          Reject
                        </Button>
                      </>
                    )}
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => navigate(`/team/partners/${partner.id}`)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
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

export default TeamPartners;
