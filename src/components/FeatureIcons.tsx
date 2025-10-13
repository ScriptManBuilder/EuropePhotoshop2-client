import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  background: linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1));
  border-radius: 20px;
  border: 2px solid rgba(255,255,255,0.2);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c);
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 18px;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 15px 30px rgba(102,126,234,0.3);
    
    &::before {
      opacity: 0.9;
    }
    
    svg {
      filter: brightness(1.2);
      transform: scale(1.1);
    }
  }
  
  svg {
    width: 50px;
    height: 50px;
    position: relative;
    z-index: 2;
    transition: all 0.4s ease;
    stroke: #667eea;
    stroke-width: 2.5;
  }
`;

export const RocketIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.41 8.59L20 10L13.41 11.41L12 18L10.59 11.41L4 10L10.59 8.59L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 12L2 15L9 22L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </IconWrapper>
);

export const LightningIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </IconWrapper>
);

export const ShieldIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22S8 18 8 12V7L12 5L16 7V12C16 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </IconWrapper>
);

export const GlobeIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M2 12H22" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M12 2A15.3 15.3 0 0 1 16 12A15.3 15.3 0 0 1 12 22A15.3 15.3 0 0 1 8 12A15.3 15.3 0 0 1 12 2Z" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  </IconWrapper>
);

export const TargetIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  </IconWrapper>
);

export const DiamondIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3H18L20 9L12 21L4 9L6 3Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 9H18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 3L10 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 3L14 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </IconWrapper>
);
