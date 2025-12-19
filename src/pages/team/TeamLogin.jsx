import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import useAuthStore from '../../stores/authStore';
import { Shield, Mail, Lock } from 'lucide-react';

const TeamLogin = () => {
  console.log('TeamLogin component rendering');
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  console.log('TeamLogin state:', { email, password, loading, error });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // In production: authenticate with backend
      // Demo credentials: admin@finanshels.com / admin123
      if (email === 'admin@finanshels.com' && password === 'admin123') {
        const teamUser = {
          id: 'T001',
          name: 'Admin User',
          email: email,
          role: 'team',
          permissions: ['manage_partners', 'manage_leads', 'manage_commissions'],
        };
        
        login(teamUser, 'team-token-123');
        navigate('/team/dashboard');
      } else {
        setError('Invalid credentials. Use admin@finanshels.com / admin123');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Finanshels</h1>
          <p className="text-gray-600 mt-2">Team Portal Login</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                placeholder="admin@finanshels.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In to Team Portal'}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Demo Credentials:</strong><br />
            Email: admin@finanshels.com<br />
            Password: admin123
          </p>
        </div>

        <div className="mt-6 text-center">
          <a href="/portal/login" className="text-sm text-blue-600 hover:text-blue-800">
            Partner Portal Login →
          </a>
        </div>
      </Card>
    </div>
  );
};

export default TeamLogin;
