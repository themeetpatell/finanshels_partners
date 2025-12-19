import React, { useEffect, useState } from 'react';
import { mockAPI } from '../../lib/mockData';
import { Card } from '../../components/ui/Card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const Analytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const response = await mockAPI.getAnalytics();
      setAnalytics(response.data);
    } catch (error) {
      console.error('Error loading analytics:', error);
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

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics & Performance</h1>
        <p className="text-gray-600 mt-1">Track your partnership performance and metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">Total Leads</h3>
          <p className="text-2xl font-bold text-gray-900">
            {analytics?.performance?.totalLeads}
          </p>
          <p className="text-sm text-green-600 mt-1">+12% from last month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <Target className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">Conversion Rate</h3>
          <p className="text-2xl font-bold text-gray-900">
            {analytics?.performance?.conversionRate}%
          </p>
          <p className="text-sm text-green-600 mt-1">+5% from last month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">Total Revenue</h3>
          <p className="text-2xl font-bold text-gray-900">
            AED {analytics?.performance?.totalRevenue?.toLocaleString()}
          </p>
          <p className="text-sm text-green-600 mt-1">+24% from last month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">Avg Deal Size</h3>
          <p className="text-2xl font-bold text-gray-900">
            AED {analytics?.performance?.avgDealSize?.toLocaleString()}
          </p>
          <p className="text-sm text-green-600 mt-1">+8% from last month</p>
        </Card>
      </div>

      {/* Performance Trend */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={analytics?.performance?.trends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="leads"
              stroke="#3B82F6"
              name="Leads"
              strokeWidth={2}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="conversions"
              stroke="#10B981"
              name="Conversions"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke="#F59E0B"
              name="Revenue (AED)"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Commission Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Commission by Service</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={analytics?.commissionBreakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ service, percentage }) => `${service}: ${percentage}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="amount"
              >
                {analytics?.commissionBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Services</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analytics?.commissionBreakdown}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="service" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Detailed Statistics */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Detailed Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Lead Status Breakdown</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Converted</span>
                <span className="text-sm font-semibold text-green-600">
                  {analytics?.performance?.convertedLeads}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">In Progress</span>
                <span className="text-sm font-semibold text-blue-600">
                  {analytics?.performance?.totalLeads - analytics?.performance?.convertedLeads}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Submitted</span>
                <span className="text-sm font-semibold text-gray-900">
                  {analytics?.performance?.totalLeads}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Revenue Metrics</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Revenue</span>
                <span className="text-sm font-semibold text-gray-900">
                  AED {analytics?.performance?.totalRevenue?.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Avg Deal Size</span>
                <span className="text-sm font-semibold text-gray-900">
                  AED {analytics?.performance?.avgDealSize?.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Your Commission</span>
                <span className="text-sm font-semibold text-green-600">
                  AED {Math.round(analytics?.performance?.totalRevenue * 0.1)?.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Performance Score</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Conversion Rate</span>
                <span className="text-sm font-semibold text-gray-900">
                  {analytics?.performance?.conversionRate}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Response Time</span>
                <span className="text-sm font-semibold text-gray-900">2.5 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Customer Rating</span>
                <span className="text-sm font-semibold text-gray-900">4.8/5.0</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;
