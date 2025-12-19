import { useState } from 'react';
import { HelpCircle, X, Send, ExternalLink, Book, MessageCircle, FileText } from 'lucide-react';
import { Button } from './ui/Button';

export const SupportWidget = ({ userType = 'partner' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('menu'); // 'menu', 'chat', 'docs'
  const [message, setMessage] = useState('');

  const quickHelp = userType === 'team' ? [
    { title: 'How to approve a lead', icon: FileText, link: '#' },
    { title: 'Processing payouts', icon: FileText, link: '#' },
    { title: 'Partner onboarding', icon: FileText, link: '#' },
    { title: 'Zoho CRM sync setup', icon: FileText, link: '#' },
  ] : [
    { title: 'Submit a new lead', icon: FileText, link: '#' },
    { title: 'Track commissions', icon: FileText, link: '#' },
    { title: 'Request a service', icon: FileText, link: '#' },
    { title: 'Payment methods', icon: FileText, link: '#' },
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    // Handle message send
    console.log('Support message:', message);
    setMessage('');
  };

  return (
    <>
      {/* Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 ${
          userType === 'team'
            ? 'bg-purple-600 hover:bg-purple-700'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <HelpCircle className="text-white" size={24} />
        )}
      </button>

      {/* Widget Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className={`p-4 rounded-t-lg text-white ${
            userType === 'team' ? 'bg-purple-600' : 'bg-blue-600'
          }`}>
            <h3 className="font-bold text-lg">Help & Support</h3>
            <p className="text-sm opacity-90">We're here to help you</p>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden flex flex-col">
            {view === 'menu' && (
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Quick Actions */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Quick Help</h4>
                  <div className="space-y-2">
                    {quickHelp.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors group"
                      >
                        <item.icon size={18} className="text-gray-400 group-hover:text-blue-600" />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">{item.title}</span>
                        <ExternalLink size={14} className="ml-auto text-gray-400 opacity-0 group-hover:opacity-100" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Get in Touch</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => setView('chat')}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                        userType === 'team'
                          ? 'border-purple-200 bg-purple-50 hover:bg-purple-100 text-purple-700'
                          : 'border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700'
                      }`}
                    >
                      <MessageCircle size={18} />
                      <div className="text-left">
                        <p className="font-medium text-sm">Chat with support</p>
                        <p className="text-xs opacity-75">Avg. response time: 5 min</p>
                      </div>
                    </button>

                    <a
                      href={userType === 'team' ? 'mailto:team@finanshels.com' : 'mailto:partners@finanshels.com'}
                      className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700"
                    >
                      <FileText size={18} />
                      <div className="text-left">
                        <p className="font-medium text-sm">Email support</p>
                        <p className="text-xs text-gray-500">
                          {userType === 'team' ? 'team@finanshels.com' : 'partners@finanshels.com'}
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700"
                    >
                      <Book size={18} />
                      <div className="text-left">
                        <p className="font-medium text-sm">Documentation</p>
                        <p className="text-xs text-gray-500">Complete guides & tutorials</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {view === 'chat' && (
              <div className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                  <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
                    <p className="text-sm text-gray-700">
                      Hi! 👋 How can we help you today?
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Support Team • Online</p>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className={`px-4 py-2 rounded-lg text-white transition-colors ${
                        userType === 'team'
                          ? 'bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300'
                          : 'bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300'
                      }`}
                    >
                      <Send size={18} />
                    </button>
                  </div>
                  <button
                    onClick={() => setView('menu')}
                    className="mt-2 text-xs text-gray-500 hover:text-gray-700"
                  >
                    ← Back to menu
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SupportWidget;
