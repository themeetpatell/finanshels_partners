import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import useAuthStore from '../../stores/authStore';
import useNotificationStore from '../../stores/notificationStore';
import Notifications from '../../components/Notifications';
import SupportWidget from '../../components/SupportWidget';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Briefcase, 
  DollarSign, 
  BarChart3, 
  Bell, 
  Settings, 
  LogOut,
  Menu,
  X,
  User as UserIcon
} from 'lucide-react';

const PortalLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuthStore();
  const { notifications, unreadCount } = useNotificationStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navigation = [
    { name: 'Dashboard', href: '/portal/dashboard', icon: LayoutDashboard },
    { name: 'Leads', href: '/portal/leads', icon: Users },
    { name: 'Service Requests', href: '/portal/services', icon: Briefcase },
    { name: 'Commissions', href: '/portal/commissions', icon: DollarSign },
    { name: 'Analytics', href: '/portal/analytics', icon: BarChart3 },
    { name: 'Profile', href: '/portal/profile', icon: UserIcon },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-blue-600">Finanshels Partners</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
              </div>
            </div>
            <div className="space-y-1">
              <Link
                to="/portal/settings"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <Settings className="w-4 h-4 mr-3" />
                Settings
              </Link>
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
              >
                <LogOut className="w-4 h-4 mr-3" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-4 ml-auto">
              {/* Notifications */}
              <Notifications userType="partner" />

              {/* Partner Status Badge */}
              <div className="hidden sm:block">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    user?.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : user?.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {user?.status?.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>

      {/* Support Widget */}
      <SupportWidget userType="partner" />
    </div>
  );
};

export default PortalLayout;
