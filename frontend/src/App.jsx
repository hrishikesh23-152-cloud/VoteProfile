import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import Agenda from './components/Agenda';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Team from './components/Team';
import Admin from './components/Admin';
import AdminLogin from './components/AdminLogin';

function App() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(!!localStorage.getItem('token'));

  // Automatically check if admin is logged in on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsAdminLoggedIn(true);
  }, []);

  const handleAdminSuccess = () => {
    setIsAdminLoggedIn(true);
    setShowAdminLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAdminLoggedIn(false);
    setSelectedCandidate(null);
  };

  // Main Render Logic
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onAdminClick={() => setShowAdminLogin(true)} 
        onTeamClick={() => {
          setSelectedCandidate(null);
          setShowAdminLogin(false);
          setTimeout(() => {
            document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
          }, 0);
        }}
        isViewingCandidate={!!selectedCandidate} 
      />

      <main className="min-h-screen">
        {/* 1. Admin Logic */}
        {isAdminLoggedIn ? (
          <Admin onLogout={handleLogout} />
        ) : showAdminLogin ? (
          <AdminLogin 
            onSuccess={handleAdminSuccess} 
            onClose={() => setShowAdminLogin(false)} 
          />
        ) : (
          <>
            {/* 2. Candidate Detail View */}
            {selectedCandidate ? (
              <div className="animate-in fade-in duration-500">
                <Hero 
                  candidate={selectedCandidate} 
                  onBack={() => setSelectedCandidate(null)} 
                />
                
                {/* Centered Agenda Component */}
                <Agenda agenda={selectedCandidate.agenda} />
                
                {/* Projects and Achievements are intentionally omitted */}
                
                <Feedback />
              </div>
            ) : (
              /* 3. Landing Page / Team Selection */
              <Team onSelectCandidate={(candidate) => setSelectedCandidate(candidate)} />
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
