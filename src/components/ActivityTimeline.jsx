import { CheckCircle, Clock, XCircle, MessageSquare, DollarSign, FileText, UserCheck, AlertCircle } from 'lucide-react';

export const ActivityTimeline = ({ activities = [], userType = 'partner' }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'submitted':
        return <FileText className="text-blue-500" size={16} />;
      case 'approved':
      case 'converted':
        return <CheckCircle className="text-green-500" size={16} />;
      case 'rejected':
        return <XCircle className="text-red-500" size={16} />;
      case 'in-progress':
        return <Clock className="text-yellow-500" size={16} />;
      case 'comment':
      case 'note':
        return <MessageSquare className="text-purple-500" size={16} />;
      case 'commission':
      case 'payout':
        return <DollarSign className="text-green-600" size={16} />;
      case 'partner_assigned':
        return <UserCheck className="text-blue-600" size={16} />;
      default:
        return <AlertCircle className="text-gray-500" size={16} />;
    }
  };

  const getStatusColor = (type) => {
    switch (type) {
      case 'approved':
      case 'converted':
      case 'payout':
        return 'border-green-500 bg-green-50';
      case 'rejected':
        return 'border-red-500 bg-red-50';
      case 'in-progress':
      case 'comment':
        return 'border-yellow-500 bg-yellow-50';
      case 'submitted':
        return 'border-blue-500 bg-blue-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  if (!activities || activities.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <Clock size={48} className="mx-auto mb-3 text-gray-300" />
        <p>No activity yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={activity.id || index} className="relative pl-8">
          {/* Timeline line */}
          {index < activities.length - 1 && (
            <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-200" />
          )}

          {/* Timeline dot */}
          <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center ${getStatusColor(activity.type)}`}>
            {getIcon(activity.type)}
          </div>

          {/* Activity content */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm">
                  {activity.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {activity.description}
                </p>
                {activity.details && (
                  <div className="mt-2 p-2 bg-gray-50 rounded text-xs text-gray-700">
                    {activity.details}
                  </div>
                )}
                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                  <span>{activity.timestamp}</span>
                  {activity.actor && (
                    <>
                      <span>•</span>
                      <span className="font-medium text-gray-700">{activity.actor}</span>
                    </>
                  )}
                  {activity.reference && (
                    <>
                      <span>•</span>
                      <span className="text-blue-600 hover:underline cursor-pointer">
                        {activity.reference}
                      </span>
                    </>
                  )}
                </div>
              </div>
              {activity.badge && (
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  activity.badge.type === 'success' ? 'bg-green-100 text-green-700' :
                  activity.badge.type === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                  activity.badge.type === 'error' ? 'bg-red-100 text-red-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {activity.badge.text}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityTimeline;
