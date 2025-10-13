import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { currencyService, Currency } from '../services/currency';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const CurrencyWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 8px;

  @media (max-width: 768px) {
    margin: 0 4px;
  }

  @media (max-width: 480px) {
    margin: 0 2px;
  }
`;

const CurrencyButton = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: 600;
  background: ${({ isActive }) => (isActive ? '#667eea' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#667eea')};
  border: 1px solid #667eea;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #667eea;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 0.8rem;
  }
`;

const CurrencyIcon = styled.span`
  font-size: 1.1rem;
  animation: ${fadeIn} 0.3s ease;
`;

const CurrencyText = styled.span`
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1000;
  min-width: 150px;

  @media (max-width: 768px) {
    min-width: 120px;
  }

  @media (max-width: 480px) {
    min-width: 100px;
  }
`;

const DropdownItem = styled.button<{ isSelected: boolean }>`
  width: 100%;
  padding: 12px 16px;
  background: ${props => props.isSelected ? 'rgba(102, 126, 234, 0.1)' : 'transparent'};
  border: none;
  color: ${props => props.isSelected ? '#667eea' : '#2d3748'};
  font-size: 0.9rem;
  font-weight: ${props => props.isSelected ? '700' : '600'};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }

  &:first-child {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  &:last-child {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;

const CurrencySymbol = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  opacity: 0.8;
`;

interface CurrencyToggleProps {
  onCurrencyChange?: (currency: Currency) => void;
}

const CurrencyToggle: React.FC<CurrencyToggleProps> = ({ onCurrencyChange }) => {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>(currencyService.getCurrency());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrentCurrency(newCurrency);
    currencyService.setCurrency(newCurrency);
    setIsDropdownOpen(false);
    
    if (onCurrencyChange) {
      onCurrencyChange(newCurrency);
    }
    
    // Trigger a custom event to update prices throughout the app
    window.dispatchEvent(new CustomEvent('currencyChanged', { 
      detail: { currency: newCurrency } 
    }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-currency-toggle]')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Listen for currency changes from other components
  useEffect(() => {
    const handleCurrencyUpdate = (event: CustomEvent) => {
      setCurrentCurrency(event.detail.currency);
    };

    window.addEventListener('currencyChanged', handleCurrencyUpdate as EventListener);
    
    return () => {
      window.removeEventListener('currencyChanged', handleCurrencyUpdate as EventListener);
    };
  }, []);

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' }
  ];

  const currentCurrencyData = currencies.find(c => c.code === currentCurrency);

  return (
    <CurrencyWrapper data-currency-toggle>
      <CurrencyButton 
        isActive={isDropdownOpen} 
        onClick={toggleDropdown}
        type="button"
      >
        <CurrencyIcon>💱</CurrencyIcon>
        <CurrencyText>{currentCurrency}</CurrencyText>
        <CurrencySymbol>{currentCurrencyData?.symbol}</CurrencySymbol>
      </CurrencyButton>
      
      <DropdownMenu isOpen={isDropdownOpen}>
        {currencies.map((currency) => (
          <DropdownItem
            key={currency.code}
            isSelected={currency.code === currentCurrency}
            onClick={() => handleCurrencyChange(currency.code as Currency)}
            type="button"
          >
            <span>{currency.code} ({currency.symbol})</span>
            <CurrencySymbol>{currency.symbol}</CurrencySymbol>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </CurrencyWrapper>
  );
};

export default CurrencyToggle;