import { useState } from 'react';
import axios from 'axios';

const AdminLogin = ({ onSuccess, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/api/admin/login', { 
        username: username.trim(), 
        password 
      });
      // Store the token
      localStorage.setItem('token', response.data.token);
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Admin Login</h2>
          <p className="text-sm text-gray-500 mt-2">Secure access to feedback and team controls.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex justify-center items-center rounded-2xl bg-indigo-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-2xl border border-slate-200 px-6 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;