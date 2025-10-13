export interface Theme {
  colors: {
    primary: string;
    primaryDark: string;
    secondary: string;
    background: string;
    cardBackground: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    error: string;
    warning: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export const defaultTheme: Theme = {
  colors: {
    primary: '#0F172A', // Современный темно-синий
    primaryDark: '#020617',
    secondary: '#3B82F6', // Современный голубой
    background: '#FFFFFF', // Чистый белый
    cardBackground: 'rgba(255, 255, 255, 0.98)',
    text: '#1E293B', // Темно-серый для текста
    textSecondary: '#64748B', // Приглушенный серый
    border: 'rgba(15, 23, 42, 0.08)',
    success: '#10B981', // Современный зеленый
    error: '#EF4444', // Современный красный
    warning: '#F59E0B', // Современный оранжевый
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
};