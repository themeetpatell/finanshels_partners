import React, { useEffect, useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Briefcase,
  ArrowUpRight,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

const TeamDashboard = () => {
  const [stats, setStats] = useState({
    totalPartners: 45,
    activePartners: 38,
    pendingApprovals: 3,
    totalLeads: 156,
    convertedLeads: 62,
    inProgressLeads: 48,
    totalCommissions: 125000,
    pendingPayouts: 18500,
    serviceRequests: 34,
    activeRequests: 12,
  });

  const recentActivity = [
    { id: 1, type: 'partner', message: 'New partner application from John Doe', time: '5 min ago', status: 'pending' },
    { id: 2, type: 'lead', message: 'Lead L156 converted by Sarah Smith', time: '12 min ago', status: 'success' },
    { id: 3, type: 'commission', message: 'Commission payout processed: AED 5,200', time: '1 hour ago', status: 'success' },
    { id: 4, type: 'service', message: 'Service request SR045 completed', time: '2 hours ago', status: 'success' },
    { id: 5, type: 'lead', message: 'New lead submitted by Ahmed Partners', time: '3 hours ago', status: 'pending' },
  ];

  const pendingActions = [
    { id: 1, title: 'Partner Approvals', count: 3, action: 'Review', link: '/team/partners' },
    { id: 2, title: 'Lead Conversions', count: 8, action: 'Process', link: '/team/leads' },
    { id: 3, title: 'Pending Payouts', count: 5, action: 'Process', link: '/team/commissions' },
    { id: 4, title: 'Service Requests', count: 12, action: 'Review', link: '/team/services' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Team Dashboard</h1>
        <p className="text-gray-600 mt-1">Partner network overview and management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{stats.activePartners}</h3>
          <p className="text-sm text-gray-600 mt-1">Active Partners</p>
          <p className="text-xs text-gray-500 mt-1">{stats.pendingApprovals} pending approval</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-green-600" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{stats.convertedLeads}</h3>
          <p className="text-sm text-gray-600 mt-1">Converted Leads</p>
          <p className="text-xs text-gray-500 mt-1">{stats.inProgressLeads} in progress</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            AED {stats.totalCommissions.toLocaleString()}
          </h3>
          <p className="text-sm text-gray-600 mt-1">Total Commissions</p>
          <p className="text-xs text-gray-500 mt-1">
            AED {stats.pendingPayouts.toLocaleString()} pending
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <ArrowUpRight className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{stats.activeRequests}</h3>
          <p className="text-sm text-gray-600 mt-1">Active Services</p>
          <p className="text-xs text-gray-500 mt-1">{stats.serviceRequests} total requests</p>
        </Card>
      </div>

      {/* Pending Actions */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Pending Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pendingActions.map((action) => (
            <Card key={action.id} className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">{action.title}</h3>
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                  {action.count}
                </span>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                {action.action}
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activity.status === 'success' ? 'bg-green-100' :
                  activity.status === 'pending' ? 'bg-yellow-100' : 'bg-gray-100'
                }`}>
                  {activity.status === 'success' ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : activity.status === 'pending' ? (
                    <Clock className="w-4 h-4 text-yellow-600" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-gray-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Zoho CRM Integration Status */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Zoho CRM Integration</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm font-medium text-gray-900">Connection Status</span>
              </div>
              <span className="text-xs font-semibold text-green-600">Connected</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Last Sync</span>
                <span className="font-medium text-gray-900">2 minutes ago</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Synced Leads</span>
                <span className="font-medium text-gray-900">156 / 156</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Synced Deals</span>
                <span className="font-medium text-gray-900">62 / 62</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Webhook Status</span>
                <span className="font-medium text-green-600">Active</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <Button variant="outline" className="w-full mb-2">
                Configure Sync Settings
              </Button>
              <Button variant="outline" className="w-full">
                View Integration Logs
              </Button>
            </div>

            <div className="p-3 bg-blue-50 rounded-lg">
              <h4 className="text-sm font-semibold text-blue-900 mb-1">Sync Schedule</h4>
              <p className="text-xs text-blue-800">
                Auto-sync every 5 minutes • Manual sync available • Webhooks enabled for real-time updates
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-600">Conversion Rate</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">39.7%</p>
            <p className="text-xs text-green-600 mt-1">↑ 5.2% vs last month</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Avg Deal Size</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">AED 8,200</p>
            <p className="text-xs text-green-600 mt-1">↑ 12% vs last month</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Partner NPS</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">9.1</p>
            <p className="text-xs text-green-600 mt-1">↑ 0.3 vs last month</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Avg Response Time</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">18h</p>
            <p className="text-xs text-green-600 mt-1">↓ 6h vs last month</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TeamDashboard;
