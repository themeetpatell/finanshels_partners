import { useState, useEffect } from 'react';
import { Bell, X, CheckCircle, AlertCircle, Info, Clock } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

export const Notifications = ({ userType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Load notifications based on user type
    loadNotifications();
  }, [userType]);

  const loadNotifications = () => {
    // Mock notifications - will be replaced with real API
    const mockNotifications = userType === 'team' ? [
      {
        id: 1,
        type: 'lead',
        title: 'New Lead Submitted',
        message: 'Ahmed Partners submitted a new lead: Tech Startup LLC',
        time: '5 min ago',
        read: false,
        priority: 'high',
        actionUrl: '/team/leads',
      },
      {
        id: 2,
        type: 'partner',
        title: 'Partner Application',
        message: 'New partner application from Sarah Consulting requires review',
        time: '1 hour ago',
        read: false,
        priority: 'medium',
        actionUrl: '/team/partners',
      },
      {
        id: 3,
        type: 'commission',
        title: 'Payout Ready',
        message: 'Commission payout AED 5,200 ready for processing',
        time: '2 hours ago',
        read: true,
        priority: 'medium',
        actionUrl: '/team/commissions',
      },
      {
        id: 4,
        type: 'system',
        title: 'Zoho Sync Complete',
        message: '156 leads synchronized successfully with Zoho CRM',
        time: '3 hours ago',
        read: true,
        priority: 'low',
        actionUrl: '/team/dashboard',
      },
    ] : [
      {
        id: 1,
        type: 'lead',
        title: 'Lead Approved',
        message: 'Your lead "Tech Startup LLC" has been approved by the team',
        time: '10 min ago',
        read: false,
        priority: 'high',
        actionUrl: '/portal/leads',
      },
      {
        id: 2,
        type: 'commission',
        title: 'Commission Earned',
        message: 'You earned AED 1,200 commission from converted lead',
        time: '2 hours ago',
        read: false,
        priority: 'high',
        actionUrl: '/portal/commissions',
      },
      {
        id: 3,
        type: 'message',
        title: 'Message from Team',
        message: 'Your partner manager added a note to your latest lead',
        time: '5 hours ago',
        read: true,
        priority: 'medium',
        actionUrl: '/portal/leads',
      },
      {
        id: 4,
        type: 'system',
        title: 'Profile Update Required',
        message: 'Please update your banking details for commission payouts',
        time: '1 day ago',
        read: true,
        priority: 'medium',
        actionUrl: '/portal/profile',
      },
    ];

    setNotifications(mockNotifications);
    setUnreadCount(mockNotifications.filter(n => !n.read).length);
  };

  const markAsRead = (notificationId) => {
    setNotifications(prev =>
      prev.map(n => n.id === notificationId ? { ...n, read: true } : n)
    );
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    setUnreadCount(0);
  };

  const getIcon = (type) => {
    switch (type) {
      case 'lead':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'partner':
      case 'message':
        return <Info className="text-blue-500" size={20} />;
      case 'commission':
        return <CheckCircle className="text-purple-500" size={20} />;
      case 'system':
        return <Clock className="text-gray-500" size={20} />;
      default:
        return <AlertCircle className="text-yellow-500" size={20} />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500';
      case 'medium':
        return 'border-l-yellow-500';
      default:
        return 'border-l-blue-500';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Bell size={20} className={userType === 'team' ? 'text-purple-600' : 'text-blue-600'} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 max-h-[600px] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900">Notifications</h3>
                {unreadCount > 0 && (
                  <p className="text-sm text-gray-500">{unreadCount} unread</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Mark all read
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X size={18} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="overflow-y-auto flex-1">
              {notifications.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <Bell size={48} className="mx-auto mb-3 text-gray-300" />
                  <p>No notifications yet</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-gray-50 transition-colors border-l-4 ${getPriorityColor(
                        notification.priority
                      )} ${!notification.read ? 'bg-blue-50/50' : ''}`}
                    >
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {getIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-semibold text-sm text-gray-900">
                              {notification.title}
                            </h4>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1" />
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {notification.message}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-gray-500">{notification.time}</span>
                            {!notification.read && (
                              <button
                                onClick={() => markAsRead(notification.id)}
                                className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                              >
                                Mark read
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="p-3 border-t border-gray-200 bg-gray-50">
                <button className="w-full text-sm text-center text-blue-600 hover:text-blue-700 font-medium">
                  View all notifications
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Notifications;
