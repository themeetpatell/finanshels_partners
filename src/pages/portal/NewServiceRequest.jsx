import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { mockAPI } from '../../lib/mockData';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const NewServiceRequest = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    customerName: '',
    email: '',
    phone: '',
    companyName: '',
    requirements: '',
    urgency: 'normal',
    documents: [],
  });

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const response = await mockAPI.getServices();
      setServices(response.data);
    } catch (error) {
      console.error('Error loading services:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documents: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await mockAPI.createServiceRequest(formData);
      setSuccess(true);
      setTimeout(() => {
        navigate('/portal/services');
      }, 2000);
    } catch (error) {
      console.error('Error submitting service request:', error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="p-8 max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h2>
          <p className="text-gray-600 mb-4">
            Your service request has been submitted successfully and is being processed.
          </p>
        </Card>
      </div>
    );
  }

  const selectedService = services.find((s) => s.id === formData.service);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <button
          onClick={() => navigate('/portal/services')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </button>
        <h1 className="text-3xl font-bold text-gray-900">New Service Request</h1>
        <p className="text-gray-600 mt-1">Request a service for your customer</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service Selection */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Service</h2>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Choose a service...</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} - AED {service.basePrice?.toLocaleString()}
              </option>
            ))}
          </select>

          {selectedService && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">{selectedService.name}</h3>
              <p className="text-sm text-blue-800 mb-2">{selectedService.description}</p>
              <div className="text-sm text-blue-700">
                <p>Duration: {selectedService.duration}</p>
                <p>Base Price: AED {selectedService.basePrice?.toLocaleString()}</p>
              </div>
            </div>
          )}
        </Card>

        {/* Customer Details */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name *</label>
              <Input
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+971 50 123 4567"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <Input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="ABC Trading LLC"
              />
            </div>
          </div>
        </Card>

        {/* Requirements */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Service Requirements</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Detailed Requirements *</label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Describe the specific requirements and any special instructions..."
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
            <div className="flex gap-4">
              {['low', 'normal', 'high', 'urgent'].map((level) => (
                <label key={level} className="flex items-center">
                  <input
                    type="radio"
                    name="urgency"
                    value={level}
                    checked={formData.urgency === level}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="capitalize">{level}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Supporting Documents</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <p className="text-xs text-gray-500 mt-1">
              Upload any relevant documents (passport copies, business plans, etc.)
            </p>
          </div>
        </Card>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/portal/services')}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button type="submit" className="flex-1" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Request'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewServiceRequest;
