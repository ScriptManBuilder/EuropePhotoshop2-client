import styled, { css } from 'styled-components';

// Mobile breakpoints
export const breakpoints = {
  xs: '320px',
  sm: '375px',
  md: '480px',
  lg: '768px',
  xl: '1024px',
  xxl: '1200px'
};

// Media query mixins
export const media = {
  xs: `@media (max-width: ${breakpoints.xs})`,
  sm: `@media (max-width: ${breakpoints.sm})`,
  md: `@media (max-width: ${breakpoints.md})`,
  lg: `@media (max-width: ${breakpoints.lg})`,
  xl: `@media (max-width: ${breakpoints.xl})`,
  xxl: `@media (max-width: ${breakpoints.xxl})`,
};

// Touch-friendly styles
export const touchFriendly = css`
  min-height: 44px;
  min-width: 44px;
  
  ${media.md} {
    min-height: 48px;
    min-width: 48px;
  }
`;

// Remove tap highlight
export const noTapHighlight = css`
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
`;

// Prevent zoom on iOS
export const preventZoom = css`
  font-size: 16px;
  
  ${media.lg} {
    font-size: 16px !important;
  }
`;

// Mobile-optimized input styles
export const mobileInput = css`
  ${preventZoom}
  ${touchFriendly}
  ${noTapHighlight}
  
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0;
  box-sizing: border-box;
  
  /* Prevent layout shift on focus */
  transform-origin: center;
  will-change: transform;
  
  &:focus {
    /* Smooth focus animation for mobile */
    transition: all 0.2s ease;
  }
`;

// Mobile-optimized button styles
export const mobileButton = css`
  ${touchFriendly}
  ${noTapHighlight}
  
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  
  /* Improve button interaction feedback */
  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
  
  /* Disable hover effects on touch devices */
  @media (hover: none) and (pointer: coarse) {
    &:hover {
      transform: none;
    }
  }
`;

// Utility components
export const MobileOnly = styled.div`
  display: none;
  
  ${media.lg} {
    display: block;
  }
`;

export const DesktopOnly = styled.div`
  display: block;
  
  ${media.lg} {
    display: none;
  }
`;

export const FlexContainer = styled.div<{ 
  direction?: 'row' | 'column';
  wrap?: boolean;
  gap?: string;
  align?: string;
  justify?: string;
}>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  gap: ${props => props.gap || '0'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'flex-start'};
  
  ${media.lg} {
    flex-direction: column;
    gap: ${props => props.gap ? `calc(${props.gap} * 0.75)` : '0'};
  }
`;

export const SafeArea = styled.div`
  /* Support for iPhone X+ safe areas */
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`;

// Scrollable container for mobile
export const ScrollContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

// Mobile-optimized text styles
export const ResponsiveText = styled.div<{
  desktop?: string;
  tablet?: string;
  mobile?: string;
}>`
  font-size: ${props => props.desktop || '1rem'};
  
  ${media.lg} {
    font-size: ${props => props.tablet || props.desktop || '0.95rem'};
  }
  
  ${media.md} {
    font-size: ${props => props.mobile || props.tablet || props.desktop || '0.9rem'};
  }
`;

// Loading animation for mobile
export const MobileSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  ${media.md} {
    width: 18px;
    height: 18px;
  }
`;