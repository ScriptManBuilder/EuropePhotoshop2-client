// API base URL
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3008';

// Utility функция для запросов с токеном
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('access_token');
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  
  if (!response.ok) {
    let errorMessage = 'Request failed';
    try {
      const error = await response.json();
      errorMessage = error.message || errorMessage;
    } catch {
      // Если не удается распарсить ошибку, используем стандартное сообщение
    }
    throw new Error(errorMessage);
  }
  
  return response.json();
};

// Интерфейсы для типизации
export interface User {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface SignupData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface SigninData {
  email: string;
  password: string;
}

export interface ProfileResponse {
  user: User;
  message: string;
}

// Функции аутентификации
export const authAPI = {
  // Регистрация
  signup: async (userData: SignupData): Promise<AuthResponse> => {
    const data = await apiRequest('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    
    // Автоматически сохраняем токен
    localStorage.setItem('access_token', data.access_token);
    return data;
  },

  // Авторизация
  signin: async (credentials: SigninData): Promise<AuthResponse> => {
    const data = await apiRequest('/auth/signin', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    // Автоматически сохраняем токен
    localStorage.setItem('access_token', data.access_token);
    return data;
  },

  // Выход
  signout: (): void => {
    localStorage.removeItem('access_token');
  },

  // Получение профиля
  getProfile: (): Promise<ProfileResponse> => apiRequest('/auth/profile'),

  // Проверка токена
  isAuthenticated: (): boolean => {
    const token = localStorage.getItem('access_token');
    return !!token;
  },

  // Тестовый защищенный маршрут
  test: (): Promise<any> => apiRequest('/auth/test'),
};

// Функции для работы с пользователями
export const usersAPI = {
  // Получить всех пользователей
  getAll: (): Promise<User[]> => apiRequest('/users'),

  // Получить пользователя по ID
  getById: (id: number): Promise<User> => apiRequest(`/users/${id}`),

  // Создать пользователя
  create: (userData: Partial<User>): Promise<User> => apiRequest('/users', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),

  // Обновить пользователя
  update: (id: number, userData: Partial<User>): Promise<User> => apiRequest(`/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(userData),
  }),

  // Удалить пользователя
  delete: (id: number): Promise<void> => apiRequest(`/users/${id}`, {
    method: 'DELETE',
  }),
};

// Функция для проверки состояния сервера
export const healthAPI = {
  check: (): Promise<{
    status: string;
    timestamp: string;
    uptime: number;
    message: string;
  }> => apiRequest('/health'),
};

// Вспомогательные функции
export const tokenUtils = {
  getToken: (): string | null => localStorage.getItem('access_token'),
  setToken: (token: string): void => localStorage.setItem('access_token', token),
  removeToken: (): void => localStorage.removeItem('access_token'),
  isTokenValid: (): boolean => {
    const token = localStorage.getItem('access_token');
    if (!token) return false;
    
    try {
      // Простая проверка токена (в реальном приложении можно добавить проверку срока действия)
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Date.now() / 1000;
      return payload.exp > currentTime;
    } catch {
      return false;
    }
  },
};

export default {
  authAPI,
  usersAPI,
  healthAPI,
  tokenUtils,
};