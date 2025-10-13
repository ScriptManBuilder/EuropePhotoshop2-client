import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authAPI, User as ApiUser, SignupData, SigninData } from '../services/api';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: { email: string; password: string; firstName: string; lastName: string; }) => Promise<boolean>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Преобразование пользователя из API в формат приложения
const transformApiUser = (apiUser: ApiUser): User => ({
  id: apiUser.id.toString(),
  email: apiUser.email,
  firstName: apiUser.firstName || '',
  lastName: apiUser.lastName || ''
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initAuth = async () => {
      setLoading(true);
      setError(null);
      
      try {
        if (authAPI.isAuthenticated()) {
          const profileData = await authAPI.getProfile();
          const transformedUser = transformApiUser(profileData.user);
          setUser(transformedUser);
        }
      } catch (err) {
        
        // Проверяем тип ошибки для лучшей обработки
        if (err instanceof Error && err.message.includes('Failed to fetch')) {
          setError('Backend connection failed. Some features may be limited.');
        } else {
          setError('Authentication failed');
        }
        
        // Если токен невалиден, очищаем его
        authAPI.signout();
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const credentials: SigninData = { email, password };
      const response = await authAPI.signin(credentials);
      
      const transformedUser = transformApiUser(response.user);
      
      setUser(transformedUser);
      setLoading(false);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      setLoading(false);
      return false;
    }
  };

  const register = async (userData: { email: string; password: string; firstName: string; lastName: string; }): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const signupData: SignupData = {
        email: userData.email,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName
      };
      
      const response = await authAPI.signup(signupData);
      const transformedUser = transformApiUser(response.user);
      
      setUser(transformedUser);
      setLoading(false);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    authAPI.signout();
    setUser(null);
    setError(null);
  };

  const clearError = () => {
    setError(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    loading,
    error,
    login,
    logout,
    register,
    clearError
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};