import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuthStore from '../../stores/authStore';
import { mockAPI } from '../../lib/mockData';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import SEO from '../../components/SEO';

const Register = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    
    // Step 2: Business Info
    companyName: '',
    partnerType: 'referral',
    tradeLicense: '',
    
    // Step 3: Commission Model
    commissionModel: 'percentage',
    
    // Step 4: Documents
    documents: {},
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    if (files[0]) {
      setFormData({
        ...formData,
        documents: { ...formData.documents, [name]: files[0] },
      });
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await mockAPI.register(formData);
      login(response.data.user, response.data.token);
      navigate('/portal/dashboard');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Partner portal registration"
        description="Register for the Finanshels partner portal to submit referrals, request services, and track commissions."
        path="/portal/register"
        noIndex
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <Card className="max-w-2xl mx-auto p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Partner Registration</h1>
          <p className="text-gray-600">Join our partner network and start earning</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((s) => (
              <React.Fragment key={s}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold
                      ${s === step ? 'bg-blue-600 text-white' : s < step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                  >
                    {s < step ? '✓' : s}
                  </div>
                  <span className="text-xs mt-2 text-gray-600">
                    {s === 1 && 'Basic'}
                    {s === 2 && 'Business'}
                    {s === 3 && 'Commission'}
                    {s === 4 && 'Documents'}
                  </span>
                </div>
                {s < 4 && <div className={`flex-1 h-1 mx-2 ${s < step ? 'bg-green-500' : 'bg-gray-200'}`} />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>

              <Button type="button" onClick={handleNext} className="w-full">
                Next
              </Button>
            </div>
          )}

          {/* Step 2: Business Information */}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Business Information</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <Input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="ABC Trading LLC"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Partner Type *</label>
                <select
                  name="partnerType"
                  value={formData.partnerType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="referral">Referral Partner</option>
                  <option value="channel">Channel Partner</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  Referral partners earn commissions on successful referrals. Channel partners can use API and white-label solutions.
                </p>
              </div>

              {formData.partnerType === 'channel' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Trade License Number</label>
                  <Input
                    name="tradeLicense"
                    value={formData.tradeLicense}
                    onChange={handleChange}
                    placeholder="123456"
                  />
                </div>
              )}

              <div className="flex space-x-3">
                <Button type="button" onClick={handleBack} variant="outline" className="flex-1">
                  Back
                </Button>
                <Button type="button" onClick={handleNext} className="flex-1">
                  Next
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Commission Model */}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Commission Model</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Select your preferred commission model *</label>
                
                <div className="space-y-3">
                  <label className="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                    <input
                      type="radio"
                      name="commissionModel"
                      value="percentage"
                      checked={formData.commissionModel === 'percentage'}
                      onChange={handleChange}
                      className="mt-1 mr-3"
                    />
                    <div>
                      <div className="font-medium">Flat Percentage</div>
                      <div className="text-sm text-gray-600">Earn a fixed percentage (typically 10%) on every successful deal</div>
                    </div>
                  </label>

                  <label className="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                    <input
                      type="radio"
                      name="commissionModel"
                      value="tiered"
                      checked={formData.commissionModel === 'tiered'}
                      onChange={handleChange}
                      className="mt-1 mr-3"
                    />
                    <div>
                      <div className="font-medium">Tiered Commission</div>
                      <div className="text-sm text-gray-600">Earn higher percentages as you refer more clients</div>
                    </div>
                  </label>

                  <label className="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                    <input
                      type="radio"
                      name="commissionModel"
                      value="milestone"
                      checked={formData.commissionModel === 'milestone'}
                      onChange={handleChange}
                      className="mt-1 mr-3"
                    />
                    <div>
                      <div className="font-medium">Milestone-Based</div>
                      <div className="text-sm text-gray-600">Earn bonuses when hitting sales volume targets</div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button type="button" onClick={handleBack} variant="outline" className="flex-1">
                  Back
                </Button>
                <Button type="button" onClick={handleNext} className="flex-1">
                  Next
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Documents */}
          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Emirates ID / Passport *</label>
                <input
                  type="file"
                  name="emiratesId"
                  onChange={handleFileUpload}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  required
                />
              </div>

              {formData.partnerType === 'channel' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Trade License *</label>
                  <input
                    type="file"
                    name="tradeLicense"
                    onChange={handleFileUpload}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    required
                  />
                </div>
              )}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  📋 Your application will be reviewed within 24-48 hours. You'll receive an email once approved.
                </p>
              </div>

              <div className="flex space-x-3">
                <Button type="button" onClick={handleBack} variant="outline" className="flex-1">
                  Back
                </Button>
                <Button type="submit" className="flex-1" disabled={loading}>
                  {loading ? 'Submitting...' : 'Complete Registration'}
                </Button>
              </div>
            </div>
          )}
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </Card>
      </div>
    </>
  );
};

export default Register;
