import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockAPI } from '../../lib/mockData';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const NewLead = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    service: '',
    companyName: '',
    estimatedValue: '',
    notes: '',
    urgency: 'normal',
  });

  const services = [
    'Business Setup',
    'PRO Services',
    'Accounting & Bookkeeping',
    'VAT Services',
    'Auditing',
    'Tax Consultation',
    'Visa Services',
    'Bank Account Opening',
    'Other',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await mockAPI.createLead(formData);
      setSuccess(true);
      setTimeout(() => {
        navigate('/portal/leads');
      }, 2000);
    } catch (error) {
      console.error('Error submitting lead:', error);
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Lead Submitted Successfully!</h2>
          <p className="text-gray-600 mb-4">
            Your lead has been submitted and is now being reviewed by our team.
          </p>
          <p className="text-sm text-gray-500">Redirecting to leads page...</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <button
          onClick={() => navigate('/portal/leads')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Leads
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Submit New Lead</h1>
        <p className="text-gray-600 mt-1">Fill in the details of your prospective customer</p>
      </div>

      {/* Form */}
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Name *
                </label>
                <Input
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <Input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="ABC Trading LLC"
                />
              </div>
            </div>
          </div>

          {/* Service Requirements */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Service Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Required *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estimated Value (AED)
                </label>
                <Input
                  type="number"
                  name="estimatedValue"
                  value={formData.estimatedValue}
                  onChange={handleChange}
                  placeholder="10000"
                  min="0"
                />
              </div>

              <div className="md:col-span-2">
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
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Any additional information about the customer or their requirements..."
            />
          </div>

          {/* Important Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">📋 Before You Submit</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Ensure all customer contact information is accurate</li>
              <li>• Our team will contact the customer within 24 hours</li>
              <li>• You'll receive updates via email and the portal</li>
              <li>• Commission is earned only when the lead converts to a paying customer</li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/portal/leads')}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Lead'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewLead;
