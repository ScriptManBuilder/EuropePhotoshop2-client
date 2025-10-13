import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  html {
    /* Prevent horizontal scrolling */
    overflow-x: hidden;
    width: 100%;
    
    /* Improve text rendering */
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
    
    /* Smooth scrolling */
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: #2C3E50;
    background: linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%);
    width: 100%;
    overflow-x: hidden;
    font-weight: 400;
    letter-spacing: -0.01em;
    
    /* Improve font rendering */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    
    /* Prevent bounce scrolling on iOS */
    -webkit-overflow-scrolling: touch;
    
    /* Disable text selection on touch devices for UI elements */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    /* Re-enable text selection for content */
    input, textarea, [contenteditable] {
      -webkit-user-select: text;
      -khtml-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
      user-select: text;
    }
  }

  /* Mobile-specific typography */
  @media (max-width: 768px) {
    body {
      font-size: 16px; /* Prevent zoom on iOS */
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    
    /* Improve touch targets */
    @media (max-width: 768px) {
      min-height: 44px;
      display: inline-flex;
      align-items: center;
    }
  }

  button {
    border: none;
    cursor: pointer;
    outline: none;
    
    /* Remove default button styles on mobile */
    -webkit-appearance: none;
    appearance: none;
    
    /* Improve touch targets */
    min-height: 44px;
    
    /* Remove tap highlight */
    -webkit-tap-highlight-color: transparent;
    
    @media (max-width: 768px) {
      min-height: 48px;
    }
  }

  /* Form elements */
  input, textarea, select {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0; /* Remove iOS rounded corners */
    
    /* Prevent zoom on iOS */
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    
    /* Prevent layout shift */
    vertical-align: middle;
  }

  /* Prevent horizontal scroll */
  #root {
    overflow-x: hidden;
    width: 100%;
  }

  /* Typography improvements */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.3;
    color: #2C3E50;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  h2 {
    font-size: 2rem;
    font-weight: 650;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.7;
    font-weight: 400;
    letter-spacing: -0.005em;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 1.6rem;
    }
    
    h3 {
      font-size: 1.3rem;
    }
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }

  @media (max-width: 375px) {
    padding: 0 10px;
  }
`;

export const Section = styled.section`
  padding: 60px 0;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'outline' | 'neon' }>`
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
  letter-spacing: -0.01em;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: var(--minimal-primary);
          color: white;
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
            background: #2563eb;
          }
          &:active {
            transform: translateY(0);
          }
        `;
      case 'secondary':
        return `
          background: var(--wc-gradient-accent);
          color: white;
          box-shadow: 0 4px 15px rgba(231, 76, 60, 0.2);
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(231, 76, 60, 0.3);
          }
        `;
      case 'outline':
        return `
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          &:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: white;
            transform: translateY(-1px);
            box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
          }
        `;
      case 'neon':
        return `
          background: var(--wc-gradient-accent);
          color: white;
          border: 2px solid var(--minimal-secondary);
          box-shadow: 0 0 20px rgba(231, 76, 60, 0.3);
          &:hover {
            box-shadow: 0 0 30px rgba(231, 76, 60, 0.6);
            transform: translateY(-2px);
          }
        `;
      default:
        return `
          background: #667eea;
          color: white;
          &:hover {
            background: #5a67d8;
          }
        `;
    }
  }}
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
  background: var(--wc-gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 18px;
  color: var(--minimal-text);
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 20px;
`;
