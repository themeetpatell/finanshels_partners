import { useState } from 'react';
import { MessageSquare, Send, Paperclip, User } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

export const CommentsSection = ({ entityId, entityType, userType = 'partner', comments = [], onAddComment }) => {
  const [newComment, setNewComment] = useState('');
  const [isInternal, setIsInternal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment,
      author: userType === 'team' ? 'Team Member' : 'Partner',
      timestamp: new Date().toISOString(),
      isInternal: isInternal && userType === 'team',
      attachments: [],
    };

    onAddComment?.(comment);
    setNewComment('');
    setIsInternal(false);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="text-blue-600" size={20} />
        <h3 className="font-bold text-lg text-gray-900">
          Comments & Notes
        </h3>
        <span className="ml-auto text-sm text-gray-500">
          {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
        </span>
      </div>

      {/* Add Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="relative">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder={
              userType === 'team'
                ? 'Add a note (visible to partner unless marked internal)'
                : 'Add a comment or question for the team'
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900"
            rows="3"
          />
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-4">
            {userType === 'team' && (
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isInternal}
                  onChange={(e) => setIsInternal(e.target.checked)}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-600">Internal note (team only)</span>
              </label>
            )}
          </div>
          <Button
            type="submit"
            disabled={!newComment.trim()}
            className={`flex items-center gap-2 ${
              userType === 'team' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            <Send size={16} />
            {userType === 'team' ? 'Add Note' : 'Send'}
          </Button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <MessageSquare size={48} className="mx-auto mb-3 text-gray-300" />
            <p>No comments yet</p>
            <p className="text-sm mt-1">Be the first to add a comment</p>
          </div>
        ) : (
          comments.map((comment) => {
            // Hide internal comments from partners
            if (comment.isInternal && userType !== 'team') return null;

            return (
              <div
                key={comment.id}
                className={`border rounded-lg p-4 ${
                  comment.isInternal
                    ? 'bg-purple-50 border-purple-200'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    comment.author.includes('Team')
                      ? 'bg-purple-100 text-purple-600'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    <User size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900 text-sm">
                        {comment.author}
                      </span>
                      {comment.isInternal && (
                        <span className="px-2 py-0.5 bg-purple-200 text-purple-700 text-xs rounded-full font-medium">
                          Internal
                        </span>
                      )}
                      <span className="text-xs text-gray-500">
                        {new Date(comment.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">
                      {comment.text}
                    </p>
                    {comment.attachments && comment.attachments.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {comment.attachments.map((attachment, idx) => (
                          <a
                            key={idx}
                            href={attachment.url}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs text-gray-700 transition-colors"
                          >
                            <Paperclip size={12} />
                            {attachment.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </Card>
  );
};

export default CommentsSection;
