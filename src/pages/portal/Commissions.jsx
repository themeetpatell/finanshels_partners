import React, { useEffect, useState } from 'react';
import { mockAPI } from '../../lib/mockData';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Download, DollarSign, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const Commissions = () => {
  const [commissionData, setCommissionData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadCommissions();
  }, []);

  const loadCommissions = async () => {
    try {
      const response = await mockAPI.getCommissions();
      setCommissionData(response.data);
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error('Error loading commissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredTransactions = transactions.filter((t) => 
    filter === 'all' ? true : t.status === filter
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Commission Management</h1>
          <p className="text-gray-600 mt-1">Track your earnings and payout history</p>
        </div>
        <Button>
          <Download className="w-5 h-5 mr-2" />
          Download Statement
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">Total Earned</h3>
          <p className="text-2xl font-bold text-gray-900">
            AED {commissionData?.totalEarned?.toLocaleString()}
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">Pending</h3>
          <p className="text-2xl font-bold text-yellow-600">
            AED {commissionData?.pendingCommission?.toLocaleString()}
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">Paid Out</h3>
          <p className="text-2xl font-bold text-green-600">
            AED {commissionData?.paidCommission?.toLocaleString()}
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">This Month</h3>
          <p className="text-2xl font-bold text-purple-600">
            AED {commissionData?.thisMonth?.toLocaleString()}
          </p>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex gap-2">
          {['all', 'paid', 'pending', 'processing'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </Card>

      {/* Transactions Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deal Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commission
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTransactions.length === 0 ? (
                <tr>
                  <td colSpan="8" className="px-6 py-12 text-center text-gray-500">
                    No commission transactions found
                  </td>
                </tr>
              ) : (
                filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {transaction.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {transaction.customerName}
                      </div>
                      <div className="text-sm text-gray-500">Lead: {transaction.leadId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      AED {transaction.amount?.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.commissionRate}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                      AED {transaction.commissionAmount?.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                          transaction.status
                        )}`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{new Date(transaction.dateEarned).toLocaleDateString()}</div>
                      {transaction.datePaid && (
                        <div className="text-xs text-green-600">
                          Paid: {new Date(transaction.datePaid).toLocaleDateString()}
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Payout Information */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Payout Information</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-blue-900 mb-2">💰 How Payouts Work</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Commissions are calculated when a lead converts to a paying customer</li>
            <li>• Payouts are processed monthly on the 5th of each month</li>
            <li>• Minimum payout threshold: AED 500</li>
            <li>• Payment is made via bank transfer to your registered account</li>
            <li>• You'll receive a commission statement with each payout</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Next Payout Date</h4>
            <p className="text-gray-600">January 5, 2025</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Expected Amount</h4>
            <p className="text-gray-600">AED {commissionData?.pendingCommission?.toLocaleString()}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Commissions;
