import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DiseasePrediction from './pages/DiseasePrediction';
import MedicineRecommendation from './pages/MedicineRecommendation';
import Profile from './pages/Profile';
import Analytics from './pages/Analytics';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function AppRoutes() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/disease-prediction" element={user ? <DiseasePrediction /> : <Navigate to="/login" />} />
        <Route path="/medicine-recommendation" element={user ? <MedicineRecommendation /> : <Navigate to="/login" />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/analytics" element={user?.role === 'admin' ? <Analytics /> : <Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;