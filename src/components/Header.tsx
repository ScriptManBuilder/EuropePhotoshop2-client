import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, MenuIcon, CloseIcon, PhoneIcon, MailIcon } from './Icons';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { usePrice } from '../hooks/usePrice';
import ProductsDropdown from './ProductsDropdown';
import CurrencyToggle from './CurrencyToggle';
import LanguageToggle from './LanguageToggle';
import { CONTACT_INFO } from '../config/constants';
import {
  HeaderWrapper,
  TopBar,
  TopBarContent,
  WarningText,
  ContactInfo,
  ContactItem,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  RightSection,
  CartIcon,
  CartBadge,
  UserButton,
  MenuButton,
  ProductsNavItem
} from '../styles/components/HeaderStyles';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownVisible, setIsProductsDropdownVisible] = useState(false);
  const { state } = useCart();
  const { isAuthenticated } = useAuth();
  const { formatPrice } = usePrice();
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMouseOverProducts = useRef(false);
  const isMouseOverDropdown = useRef(false);

  // Определяем активную категорию из URL
  const getSelectedCategory = () => {
    if (location.pathname === '/products') {
      const searchParams = new URLSearchParams(location.search);
      return searchParams.get('category') || 'all';
    }
    return 'all';
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const phone = CONTACT_INFO.phone;
    
    // Просто пытаемся позвонить/открыть приложение для звонков
    window.location.href = `tel:${phone}`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProductsMouseLeave = () => {
    isMouseOverProducts.current = false;
    // Добавляем небольшую задержку для перехода к выпадающему меню
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      // Проверяем, не находится ли курсор над выпадающим меню
      if (!isMouseOverProducts.current && !isMouseOverDropdown.current) {
        setIsProductsDropdownVisible(false);
      }
    }, 150); // Уменьшили задержку для более быстрой реакции
  };

  const handleDropdownMouseEnter = () => {
    isMouseOverDropdown.current = true;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    // Убеждаемся, что меню открыто
    setIsProductsDropdownVisible(true);
  };

  const handleDropdownMouseLeave = () => {
    isMouseOverDropdown.current = false;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      // Закрываем только если курсор не над кнопкой CATALOG
      if (!isMouseOverProducts.current && !isMouseOverDropdown.current) {
        setIsProductsDropdownVisible(false);
      }
    }, 150); // Уменьшили задержку
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isProductsDropdownVisible) {
        const target = event.target as Element;
        const isClickInsideDropdown = target.closest('[data-dropdown="products"]');
        const isClickInsideNavItem = target.closest('[data-nav="products"]');
        
        if (!isClickInsideDropdown && !isClickInsideNavItem) {
          setIsProductsDropdownVisible(false);
          isMouseOverProducts.current = false;
          isMouseOverDropdown.current = false;
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
        }
      }
    };

    // Добавляем обработчик для движения мыши по всему документу
    const handleMouseMove = (event: MouseEvent) => {
      if (isProductsDropdownVisible) {
        const target = event.target as Element;
        const isOverDropdown = target.closest('[data-dropdown="products"]');
        const isOverNavItem = target.closest('[data-nav="products"]');
        
        // Обновляем состояние в зависимости от позиции курсора
        if (isOverNavItem && !isOverDropdown) {
          isMouseOverProducts.current = true;
          isMouseOverDropdown.current = false;
        } else if (isOverDropdown && !isOverNavItem) {
          isMouseOverProducts.current = false;
          isMouseOverDropdown.current = true;
        } else if (!isOverNavItem && !isOverDropdown) {
          // Если курсор вне обеих областей, запускаем таймер закрытия
          if (!timeoutRef.current) {
            timeoutRef.current = setTimeout(() => {
              setIsProductsDropdownVisible(false);
              isMouseOverProducts.current = false;
              isMouseOverDropdown.current = false;
            }, 200);
          }
        } else {
          // Если курсор в одной из областей, отменяем закрытие
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      isMouseOverProducts.current = false;
      isMouseOverDropdown.current = false;
    };
  }, [isProductsDropdownVisible]);

  return (
    <HeaderWrapper>
      <TopBar>
        <TopBarContent>
          <WarningText>
             Professional Photoshop Education
          </WarningText>
          <ContactInfo>
            <ContactItem>
              <MailIcon size={14} />
              <span style={{ color: 'inherit' }}>
                {CONTACT_INFO.email}
              </span>
            </ContactItem>
            <ContactItem>
              <PhoneIcon size={14} />
              <a 
                href={`tel:${CONTACT_INFO.phone}`} 
                onClick={handlePhoneClick}
                style={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }}
              >
                {CONTACT_INFO.phoneFormatted}
              </a>
            </ContactItem>
          </ContactInfo>
        </TopBarContent>
      </TopBar>
      
      <Nav>
        <Logo to="/">Photoshop</Logo>
        
        <NavLinks isOpen={isMenuOpen} data-nav="mobile-menu" data-is-open={isMenuOpen}>
          <div className="nav-items">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>HOME</NavLink>
            <ProductsNavItem data-nav="products">
              <NavLink 
                to="/products" 
                onClick={() => setIsMenuOpen(false)}
                onMouseLeave={handleProductsMouseLeave}
              >
                CATALOG
              </NavLink>
              <ProductsDropdown 
                isVisible={isProductsDropdownVisible} 
                onClose={() => setIsProductsDropdownVisible(false)}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
                selectedCategory={getSelectedCategory()}
              />
            </ProductsNavItem>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</NavLink>
            <NavLink to="/blog" onClick={() => setIsMenuOpen(false)}>BLOG</NavLink>
            <NavLink to="/support" onClick={() => setIsMenuOpen(false)}>SUPPORT</NavLink>
          </div>
          <button className="close-button" onClick={() => setIsMenuOpen(false)}>✕</button>
        </NavLinks>
        
        <RightSection>
          <CurrencyToggle />
          <LanguageToggle />
          
          <CartIcon to="/cart">
            <ShoppingCartIcon />
            {state.itemCount > 0 && (
              <CartBadge>{state.itemCount}</CartBadge>
            )}
          </CartIcon>
          
          <UserButton as={Link} to={isAuthenticated ? "/account" : "/login"}>
            <UserIcon />
          </UserButton>
          
          <MenuButton onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </MenuButton>
        </RightSection>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
