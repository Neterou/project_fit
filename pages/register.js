import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'subscriber',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess('Account created successfully! Redirecting...');
      
      setTimeout(() => {
        if (formData.userType === 'influencer') {
          window.location.href = '/dashboard/influencer';
        } else {
          window.location.href = '/dashboard/subscriber';
        }
      }, 2000);
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-100 py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-indigo-800">Create Account</h2>
            <p className="text-indigo-600">
              Join the FitInfluence community
            </p>
          </div>
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-700">{error}</p>
            </div>
          )}
          
          {success && (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <p className="text-green-700">{success}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-indigo-700 mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-indigo-700 mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-indigo-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="Create a password"
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-indigo-700 mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="Confirm your password"
              />
            </div>
            
            <div>
              <label htmlFor="userType" className="block text-sm font-medium text-indigo-700 mb-2">
                I am a...
              </label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              >
                <option value="subscriber">Subscriber (Learn fitness)</option>
                <option value="influencer">Influencer (Teach fitness)</option>
              </select>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg disabled:opacity-50 transition-colors transform hover:scale-105"
            >
              {loading ? 'Creating account...' : 'Sign Up'}
            </button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-sm text-indigo-500">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-700">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}