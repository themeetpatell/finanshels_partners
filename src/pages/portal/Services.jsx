import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { mockAPI } from '../../lib/mockData';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Plus, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Services = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServiceRequests();
  }, []);

  const loadServiceRequests = async () => {
    try {
      const response = await mockAPI.getServiceRequests();
      setRequests(response.data);
    } catch (error) {
      console.error('Error loading service requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-blue-600" />;
      case 'submitted':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'submitted':
        return 'bg-yellow-100 text-yellow-800';
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
          <h1 className="text-3xl font-bold text-gray-900">Service Requests</h1>
          <p className="text-gray-600 mt-1">Manage and track your service requests</p>
        </div>
        <Link to="/portal/services/new">
          <Button>
            <Plus className="w-5 h-5 mr-2" />
            New Service Request
          </Button>
        </Link>
      </div>

      {/* Service Requests Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {requests.length === 0 ? (
          <Card className="p-12 text-center lg:col-span-2">
            <p className="text-gray-500 mb-4">No service requests yet</p>
            <Link to="/portal/services/new">
              <Button>Submit Your First Request</Button>
            </Link>
          </Card>
        ) : (
          requests.map((request) => (
            <Card key={request.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  {getStatusIcon(request.status)}
                  <h3 className="text-lg font-semibold text-gray-900 ml-2">{request.service}</h3>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(request.status)}`}>
                  {request.status}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-sm text-gray-600">Request ID: </span>
                  <span className="text-sm font-medium text-gray-900">{request.id}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Customer: </span>
                  <span className="text-sm font-medium text-gray-900">{request.customerName}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Submitted: </span>
                  <span className="text-sm font-medium text-gray-900">
                    {new Date(request.submittedDate).toLocaleDateString()}
                  </span>
                </div>
                {request.expectedCompletion && (
                  <div>
                    <span className="text-sm text-gray-600">Expected Completion: </span>
                    <span className="text-sm font-medium text-gray-900">
                      {new Date(request.expectedCompletion).toLocaleDateString()}
                    </span>
                  </div>
                )}
                {request.completedDate && (
                  <div>
                    <span className="text-sm text-gray-600">Completed: </span>
                    <span className="text-sm font-medium text-green-600">
                      {new Date(request.completedDate).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              {request.progress !== undefined && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">{request.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${request.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Documents */}
              {request.documents && request.documents.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Documents</h4>
                  <div className="space-y-1">
                    {request.documents.map((doc, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {doc.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Link to={`/portal/services/${request.id}`}>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </Link>
            </Card>
          ))
        )}
      </div>

      {/* Service Catalog */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Need a Service?</h2>
        <p className="text-gray-600 mb-4">
          Browse our service catalog and submit a request for your customers.
        </p>
        <Link to="/portal/services/catalog">
          <Button variant="outline">View Service Catalog</Button>
        </Link>
      </Card>
    </div>
  );
};

export default Services;
