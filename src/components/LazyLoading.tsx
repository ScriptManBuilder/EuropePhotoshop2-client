import React, { Suspense, lazy } from 'react';
import styled, { keyframes } from 'styled-components';

// Анимация загрузки
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 40px 20px;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #e3e3e3;
  border-top: 3px solid #667eea;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 16px;
`;

const LoadingText = styled.div`
  color: #666;
  font-size: 1rem;
  font-weight: 500;
`;

const LoadingFallback: React.FC<{ message?: string }> = ({ 
  message = "Loading..." 
}) => (
  <LoadingContainer>
    <LoadingSpinner />
    <LoadingText>{message}</LoadingText>
  </LoadingContainer>
);

// HOC для ленивой загрузки с кастомным фоллбэком
export const withLazyLoading = <P extends Record<string, any> = {}>(
  importFunc: () => Promise<{ default: React.ComponentType<P> }>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(importFunc);
  
  return (props: P) => (
    <Suspense fallback={fallback || <LoadingFallback />}>
      <LazyComponent {...(props as any)} />
    </Suspense>
  );
};

// Предустановленные ленивые компоненты
export const LazyProducts = withLazyLoading(
  () => import('../pages/Products'),
  <LoadingFallback message="Loading Products..." />
);

export const LazyProductDetail = withLazyLoading(
  () => import('../pages/ProductDetail'),
  <LoadingFallback message="Loading Product Details..." />
);

export const LazyCart = withLazyLoading(
  () => import('../pages/Cart'),
  <LoadingFallback message="Loading Cart..." />
);

export const LazyCheckout = withLazyLoading(
  () => import('../pages/Checkout'),
  <LoadingFallback message="Loading Checkout..." />
);

export const LazyAccount = withLazyLoading(
  () => import('../pages/Account'),
  <LoadingFallback message="Loading Account..." />
);

export const LazyLogin = withLazyLoading(
  () => import('../pages/Login'),
  <LoadingFallback message="Loading Login..." />
);

export const LazyRegister = withLazyLoading(
  () => import('../pages/Register'),
  <LoadingFallback message="Loading Registration..." />
);

export default LoadingFallback;