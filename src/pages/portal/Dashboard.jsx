import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../../stores/authStore';
import { mockAPI } from '../../lib/mockData';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import {
  TrendingUp,
  Users,
  Briefcase,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle,
  Clock,
  XCircle,
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuthStore();
  const [stats, setStats] = useState(null);
  const [recentLeads, setRecentLeads] = useState([]);
  const [commissionData, setCommissionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [leadsRes, commissionsRes] = await Promise.all([
        mockAPI.getLeads(),
        mockAPI.getCommissions(),
      ]);

      const leads = leadsRes.data;
      setRecentLeads(leads.slice(0, 5));
      setCommissionData(commissionsRes.data);

      // Calculate stats
      const totalLeads = leads.length;
      const convertedLeads = leads.filter((l) => l.status === 'converted').length;
      const inProgressLeads = leads.filter((l) => l.status === 'in-progress').length;
      const conversionRate = totalLeads > 0 ? Math.round((convertedLeads / totalLeads) * 100) : 0;

      setStats({
        totalLeads,
        convertedLeads,
        inProgressLeads,
        conversionRate,
      });
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Leads',
      value: stats?.totalLeads || 0,
      change: '+12%',
      positive: true,
      icon: Users,
      color: 'blue',
    },
    {
      title: 'Converted Leads',
      value: stats?.convertedLeads || 0,
      change: '+8%',
      positive: true,
      icon: CheckCircle,
      color: 'green',
    },
    {
      title: 'Total Earnings',
      value: `AED ${commissionData?.totalEarned?.toLocaleString() || 0}`,
      change: '+24%',
      positive: true,
      icon: DollarSign,
      color: 'purple',
    },
    {
      title: 'Conversion Rate',
      value: `${stats?.conversionRate || 0}%`,
      change: '+5%',
      positive: true,
      icon: TrendingUp,
      color: 'orange',
    },
  ];

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

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold">Welcome back, {user?.name}! 👋</h1>
        <p className="text-blue-100 mt-2">Here's what's happening with your partnership today.</p>
        <div className="flex items-center gap-4 mt-4">
          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">
            Partner ID: {user?.id}
          </span>
          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium capitalize">
            {user?.partnerType} Partner
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'bg-blue-100 text-blue-600',
            green: 'bg-green-100 text-green-600',
            purple: 'bg-purple-100 text-purple-600',
            orange: 'bg-orange-100 text-orange-600',
          };
          return (
            <Card key={stat.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${colorClasses[stat.color].split(' ')[0]} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${colorClasses[stat.color].split(' ')[1]}`} />
                </div>
                <div className="flex items-center text-sm">
                  {stat.positive ? (
                    <ArrowUpRight className="w-4 h-4 text-green-600" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-600" />
                  )}
                  <span className={stat.positive ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{stat.title}</p>
            </Card>
          );
        })}
      </div>

      {/* Commission Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">This Month</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">
            AED {commissionData?.thisMonth?.toLocaleString() || 0}
          </p>
          <p className="text-sm text-gray-600 mt-2">Commission earned</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-600 flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Pending</h3>
          </div>
          <p className="text-3xl font-bold text-yellow-600">
            AED {commissionData?.pendingCommission?.toLocaleString() || 0}
          </p>
          <p className="text-sm text-gray-600 mt-2">Awaiting payout</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Paid Out</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">
            AED {commissionData?.paidCommission?.toLocaleString() || 0}
          </p>
          <p className="text-sm text-gray-600 mt-2">Total received</p>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Recent Leads
            </h2>
            <Link to="/portal/leads">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>

          <div className="space-y-3">
            {recentLeads.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No leads yet</p>
                <p className="text-sm text-gray-400 mt-1">Submit your first lead to get started!</p>
              </div>
            ) : (
              recentLeads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{lead.customerName}</p>
                    <p className="text-sm text-gray-600 mt-1">{lead.service}</p>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Clock size={12} />
                      {new Date(lead.submittedDate).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ml-3 ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                </div>
              ))
            )}
          </div>

          <Link to="/portal/leads/new">
            <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
              <Users className="w-4 h-4 mr-2" />
              Submit New Lead
            </Button>
          </Link>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-purple-600" />
            Quick Actions
          </h2>

          <div className="space-y-3">
            <Link to="/portal/leads/new">
              <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all">
                <Users className="w-5 h-5 mr-3" />
                Submit New Lead
              </Button>
            </Link>

            <Link to="/portal/services/new">
              <Button className="w-full justify-start" variant="outline">
                <Briefcase className="w-5 h-5 mr-3 text-purple-600" />
                Request Service
              </Button>
            </Link>

            <Link to="/portal/commissions">
              <Button className="w-full justify-start" variant="outline">
                <DollarSign className="w-5 h-5 mr-3 text-green-600" />
                View Commissions
              </Button>
            </Link>

            <Link to="/portal/analytics">
              <Button className="w-full justify-start" variant="outline">
                <TrendingUp className="w-5 h-5 mr-3 text-orange-600" />
                View Analytics
              </Button>
            </Link>
          </div>

          {/* Partner Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Partner Information
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Partner ID</span>
                <span className="text-sm font-semibold text-gray-900">{user?.id}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Partner Type</span>
                <span className="text-sm font-semibold text-gray-900 capitalize">{user?.partnerType}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Commission Rate</span>
                <span className="text-sm font-semibold text-green-600">{user?.commissionRate}%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Member Since</span>
                <span className="text-sm font-semibold text-gray-900">
                  {new Date(user?.registrationDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
