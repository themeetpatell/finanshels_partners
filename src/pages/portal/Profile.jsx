import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import useAuthStore from '../../stores/authStore';
import {
  User,
  Mail,
  Phone,
  Building2,
  MapPin,
  FileText,
  CheckCircle,
  Clock,
  DollarSign,
  TrendingUp,
  Edit2,
  Save,
  X,
  Upload,
  Shield,
  Key
} from 'lucide-react';

const Profile = () => {
  const { user } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    companyName: user?.companyName || '',
    address: user?.address || '',
    city: user?.city || '',
    country: user?.country || 'UAE',
  });

  const handleSave = () => {
    // Save profile updates
    console.log('Saving profile:', formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      companyName: user?.companyName || '',
      address: user?.address || '',
      city: user?.city || '',
      country: user?.country || 'UAE',
    });
    setIsEditing(false);
  };

  const partnerStats = [
    { label: 'Total Leads', value: '12', icon: FileText, color: 'blue' },
    { label: 'Converted', value: '8', icon: CheckCircle, color: 'green' },
    { label: 'Total Earned', value: 'AED 24,500', icon: DollarSign, color: 'purple' },
    { label: 'Conversion Rate', value: '67%', icon: TrendingUp, color: 'orange' },
  ];

  const documents = [
    { id: 1, name: 'Trade License', status: 'verified', uploadDate: '2024-01-15', type: 'trade_license' },
    { id: 2, name: 'Emirates ID', status: 'verified', uploadDate: '2024-01-15', type: 'emirates_id' },
    { id: 3, name: 'TRN Certificate', status: 'pending', uploadDate: '2024-12-18', type: 'trn_certificate' },
  ];

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'company', label: 'Company Details', icon: Building2 },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Partner Profile</h1>
          <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
        </div>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)} className="flex items-center gap-2">
            <Edit2 size={16} />
            Edit Profile
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button onClick={handleSave} className="flex items-center gap-2">
              <Save size={16} />
              Save Changes
            </Button>
            <Button onClick={handleCancel} variant="outline" className="flex items-center gap-2">
              <X size={16} />
              Cancel
            </Button>
          </div>
        )}
      </div>

      {/* Profile Header Card */}
      <Card className="p-6">
        <div className="flex items-start gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
              {user?.name?.charAt(0) || 'P'}
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
              <Upload size={16} />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
            <p className="text-gray-600 flex items-center gap-2 mt-1">
              <Mail size={16} />
              {user?.email}
            </p>
            <div className="flex items-center gap-4 mt-3">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                user?.status === 'active'
                  ? 'bg-green-100 text-green-800'
                  : user?.status === 'pending'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {user?.status?.toUpperCase()}
              </span>
              <span className="text-sm text-gray-600">
                Partner ID: <span className="font-semibold text-gray-900">{user?.id}</span>
              </span>
              <span className="text-sm text-gray-600">
                Member since: <span className="font-semibold text-gray-900">
                  {new Date(user?.registrationDate).toLocaleDateString()}
                </span>
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {partnerStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {activeTab === 'personal' && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={!isEditing}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={!isEditing}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={!isEditing}
                    placeholder="+971 50 123 4567"
                  />
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'company' && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Company Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    disabled={!isEditing}
                    placeholder="Your Company LLC"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <Input
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    disabled={!isEditing}
                    placeholder="Office address"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <Input
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      disabled={!isEditing}
                      placeholder="Dubai"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <Input
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      disabled={!isEditing}
                      placeholder="UAE"
                    />
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'documents' && (
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Documents</h3>
                <Button size="sm">
                  <Upload size={16} className="mr-2" />
                  Upload Document
                </Button>
              </div>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{doc.name}</p>
                        <p className="text-sm text-gray-500">
                          Uploaded {new Date(doc.uploadDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        doc.status === 'verified'
                          ? 'bg-green-100 text-green-800'
                          : doc.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {doc.status === 'verified' && <CheckCircle size={12} className="inline mr-1" />}
                        {doc.status === 'pending' && <Clock size={12} className="inline mr-1" />}
                        {doc.status}
                      </span>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'security' && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Security Settings</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <Button className="flex items-center gap-2">
                  <Key size={16} />
                  Update Password
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Two-Factor Authentication</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Add an extra layer of security to your account by enabling two-factor authentication.
                </p>
                <Button variant="outline">Enable 2FA</Button>
              </div>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Partnership Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Partner Type</span>
                <span className="text-sm font-semibold text-gray-900 capitalize">
                  {user?.partnerType}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Commission Rate</span>
                <span className="text-sm font-semibold text-gray-900">{user?.commissionRate}%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Commission Model</span>
                <span className="text-sm font-semibold text-gray-900 capitalize">
                  {user?.commissionModel}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-gray-600">Account Status</span>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  user?.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {user?.status}
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Manager</h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <User className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-600">Partner Success Manager</p>
              </div>
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Mail size={16} className="mr-2" />
                sarah.johnson@finanshels.com
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Phone size={16} className="mr-2" />
                +971 50 123 4567
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-blue-50 border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
            <p className="text-sm text-blue-700 mb-4">
              Contact our partner support team for assistance with your account.
            </p>
            <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-100">
              Contact Support
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
