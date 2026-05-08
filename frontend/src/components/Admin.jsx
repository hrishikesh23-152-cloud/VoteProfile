import { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = ({ onLogout }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found. Please login.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get('https://voteprofile.onrender.com/api/admin/feedbacks', {
        headers: { Authorization: `Bearer ${token}` } // Added Bearer prefix
      });
      setFeedbacks(response.data);
    } catch (err) {
      setError('Failed to fetch feedbacks. Your session may have expired.');
      if (err.response?.status === 401) {
        handleLogout(); // Auto logout on invalid token
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    if (onLogout) {
      onLogout();
    } else {
      window.location.reload();
    }
  };

  if (loading) return <div className="text-center py-20 font-medium">Loading Dashboard...</div>;
  if (error) return (
    <div className="text-center py-20">
      <p className="text-red-600 mb-4">{error}</p>
      <button onClick={handleLogout} className="text-indigo-600 underline">Back to Login</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Portal</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Feedback Submissions</h2>
          </div>
          <div className="p-6">
            {feedbacks.length === 0 ? (
              <p className="text-gray-500 italic">No feedbacks received yet.</p>
            ) : (
              <div className="space-y-4">
                {feedbacks.map((feedback) => (
                  <div key={feedback._id} className="border border-gray-100 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900">{feedback.name}</h3>
                      <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded">
                        {new Date(feedback.createdAt || feedback.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-indigo-600 mb-3">{feedback.email}</p>
                    <p className="text-gray-700 leading-relaxed bg-white p-3 rounded-lg border border-gray-50">
                      {feedback.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
