import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { defaultTheme } from './styles/theme';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { MembershipProvider } from './contexts/MembershipContext';
import { useServiceWorker } from './hooks/useServiceWorker';
import { useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingFallback from './components/LazyLoading';

// Основные компоненты с ленивой загрузкой
const LazyHome = React.lazy(() => import('./pages/Home'));
const LazyProducts = React.lazy(() => import('./pages/Products'));
const LazyCart = React.lazy(() => import('./pages/Cart'));
const LazyLogin = React.lazy(() => import('./pages/Login'));
const LazyRegister = React.lazy(() => import('./pages/Register'));
const LazyAccount = React.lazy(() => import('./pages/Account'));
const LazyCheckout = React.lazy(() => import('./pages/Checkout'));
const LazyProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const LazySupport = React.lazy(() => import('./pages/Support'));

// Lazy loading for policy pages
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = React.lazy(() => import('./pages/TermsConditions'));
const RefundPolicy = React.lazy(() => import('./pages/RefundPolicy'));
const ReturnPolicy = React.lazy(() => import('./pages/ReturnPolicy'));
const ShippingPolicy = React.lazy(() => import('./pages/ShippingPolicy'));
const LazyAbout = React.lazy(() => import('./pages/About'));
const LazyBlog = React.lazy(() => import('./pages/Blog'));

function App() {
  // Регистрируем Service Worker для кэширования
  useServiceWorker();

  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

// Компонент для обработки loading состояния аутентификации
function AppContent() {
  const { loading } = useAuth();

  // Показываем загрузочный экран пока проверяется аутентификация
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '4px solid rgba(255, 255, 255, 0.3)',
            borderTop: '4px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }} />
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, margin: 0 }}>
            LOADING
          </h2>
          <p style={{ margin: '10px 0 0', opacity: 0.8 }}>Loading...</p>
        </div>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <MembershipProvider>
      <CartProvider>
        <Router>
          <GlobalStyles />
          <div className="App">
            <Header />
            <main>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<LazyHome />} />
                  <Route path="/products" element={<LazyProducts />} />
                  <Route path="/product/:id" element={<LazyProductDetail />} />
                  <Route path="/cart" element={<LazyCart />} />
                  <Route path="/login" element={<LazyLogin />} />
                  <Route path="/register" element={<LazyRegister />} />
                  <Route path="/account" element={<LazyAccount />} />
                  <Route path="/checkout" element={<LazyCheckout />} />
                  <Route path="/support" element={<LazySupport />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-conditions" element={<TermsConditions />} />
                  <Route path="/refund-policy" element={<RefundPolicy />} />
                  <Route path="/return-policy" element={<ReturnPolicy />} />
                  <Route path="/shipping-policy" element={<ShippingPolicy />} />
                  <Route path="/about" element={<LazyAbout />} />
                  <Route path="/blog" element={<LazyBlog />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </MembershipProvider>
  );
}

export default App;
