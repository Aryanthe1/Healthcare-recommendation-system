import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'analyst';
  medicalHistory?: any[];
  preferences?: any;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('healthcareUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would call your backend
    if (email === 'admin@healthcare.com' && password === 'admin123') {
      const adminUser = {
        id: '1',
        name: 'Dr. Sarah Johnson',
        email: 'admin@healthcare.com',
        role: 'admin' as const
      };
      setUser(adminUser);
      localStorage.setItem('healthcareUser', JSON.stringify(adminUser));
      return true;
    } else if (email === 'user@healthcare.com' && password === 'user123') {
      const regularUser = {
        id: '2',
        name: 'John Smith',
        email: 'user@healthcare.com',
        role: 'user' as const,
        medicalHistory: [],
        preferences: {}
      };
      setUser(regularUser);
      localStorage.setItem('healthcareUser', JSON.stringify(regularUser));
      return true;
    }
    return false;
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Mock signup
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      role: 'user' as const,
      medicalHistory: [],
      preferences: {}
    };
    setUser(newUser);
    localStorage.setItem('healthcareUser', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('healthcareUser');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}