import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const shimmer = keyframes`
  0% { 
    box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
  }
  50% { 
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.6), 0 0 30px rgba(118, 75, 162, 0.4);
  }
  100% { 
    box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
`;

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

// Анимация змейки по контуру
const snakeAnimation = keyframes`
  0% {
    clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%);
  }
  25% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  }
  50% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`;

// Простая анимация линии по контуру кнопки
const borderSnake = keyframes`
  0% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  75% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(248, 249, 250, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(44, 62, 80, 0.1);
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.08);
  transition: all 0.3s ease;
  min-width: 320px; /* Минимальная ширина для очень маленьких экранов */
  overflow: visible; /* Позволяет dropdown выходить за границы хедера */
  
  @media (max-width: 768px) {
    backdrop-filter: blur(15px);
    box-shadow: 0 4px 20px rgba(44, 62, 80, 0.12);
  }
  
  @media (max-width: 480px) {
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 15px rgba(44, 62, 80, 0.15);
  }
`;

export const TopBar = styled.div`
  background: var(--wc-gradient-primary);
  background-size: 200% 200%;
  animation: ${gradientShift} 12s ease infinite;
  color: white;
  padding: 8px 0;
  font-size: 14px;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: ${shimmer} 3s infinite;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 8px 0;
    /* Увеличиваем высоту для лучшей видимости */
    min-height: 35px;
    display: flex;
    align-items: center;
  }
  
  @media (max-width: 360px) {
    padding: 6px 0;
    font-size: 10px;
    min-height: 32px;
  }
`;

export const TopBarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  min-width: 0; /* Позволяет flex элементам сжиматься */
  
  @media (max-width: 768px) {
    padding: 0 10px;
    flex-direction: column;
    gap: 4px;
  }
  
  @media (max-width: 480px) {
    padding: 0 6px;
    gap: 3px;
    min-height: inherit;
    justify-content: center;
  }
  
  @media (max-width: 375px) {
    padding: 0 4px;
    gap: 2px;
  }
  
  @media (max-width: 320px) {
    padding: 0 2px;
    gap: 1px;
  }
`;

export const WarningText = styled.div`
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  text-shadow: 0 1px 3px rgba(0,0,0,0.2);
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    text-align: center;
    font-weight: 700;
  }
  
  @media (max-width: 375px) {
    font-size: 0.65rem;
  }
  
  @media (max-width: 320px) {
    font-size: 0.6rem;
  }
  
  @media (max-width: 360px) {
    font-size: 10px;
    font-weight: 700;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-shrink: 1; /* Позволяет сжиматься */
  min-width: 0;
  
  @media (max-width: 768px) {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    gap: 6px;
    font-size: 0.7rem;
    /* Показываем только телефон на маленьких экранах */
    > div:first-child {
      display: none;
    }
  }
  
  @media (max-width: 360px) {
    font-size: 9px;
    gap: 8px;
    /* Показываем только телефон */
    > div:first-child {
      display: none;
    }
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-1px);
    color: white;
    text-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }
  
  /* Стили для ссылок внутри ContactItem */
  a {
    color: inherit;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  @media (max-width: 768px) {
    gap: 4px;
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    gap: 3px;
    font-size: 0.7rem;
    
    /* Увеличиваем размер иконок для лучшей видимости */
    svg {
      width: 12px !important;
      height: 12px !important;
    }
  }
  
  @media (max-width: 360px) {
    gap: 2px;
    
    svg {
      width: 10px !important;
      height: 10px !important;
    }
  }
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: relative;
  min-width: 0; /* Позволяет flex элементам сжиматься */
  overflow: visible; /* Позволяет dropdown выходить за границы */
  
  @media (max-width: 768px) {
    padding: 0 10px;
    height: 55px;
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 0 6px;
    height: 45px;
    gap: 4px;
  }
  
  @media (max-width: 375px) {
    padding: 0 4px;
    height: 42px;
    gap: 2px;
  }
  
  @media (max-width: 360px) {
    padding: 0 3px;
    height: 40px;
    gap: 1px;
  }
  
  @media (max-width: 320px) {
    padding: 0 2px;
    height: 35px;
    gap: 0;
  }
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--wc-gradient-primary);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  letter-spacing: -0.02em;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  flex-shrink: 0; /* Предотвращает сжатие логотипа */
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--wc-gradient-accent);
    transform: scaleX(0);
    transition: transform 0.3s ease;
    border-radius: 2px;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.2;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.1;
    max-width: 120px; /* Ограничиваем ширину */
  }
  
  @media (max-width: 375px) {
    font-size: 0.85rem;
    max-width: 100px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.75rem;
    max-width: 80px;
  }
  
  @media (max-width: 360px) {
    &::before {
      font-size: 0.85rem;
    }
  }
  
  @media (max-width: 320px) {
    &::before {
      font-size: 0.8rem;
    }
  }
`;

export const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 30px;
  align-items: center;
  overflow: visible; /* Позволяет dropdown выходить за границы */
  
  .close-button {
    display: none;
  }
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 6px 10px;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
    border-bottom: 1px solid rgba(102, 126, 234, 0.1);
    transform: translateY(${props => props.isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
    max-height: calc(100vh - 55px);
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    .close-button {
      position: absolute;
      top: 5px;
      right: 5px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 10px;
      font-weight: bold;
      box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
      transition: all 0.2s ease;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
      }
    }
  }

  @media (max-width: 480px) {
    gap: 3px;
    padding: 4px 8px;

    .close-button {
      width: 22px;
      height: 22px;
      font-size: 9px;
      top: 4px;
      right: 4px;
    }
  }

  @media (max-width: 375px) {
    gap: 2px;
    padding: 3px 6px;

    .close-button {
      width: 20px;
      height: 20px;
      font-size: 8px;
      top: 3px;
      right: 3px;
    }
  }

  @media (max-width: 320px) {
    gap: 1px;
    padding: 2px 3px;

    .close-button {
      width: 18px;
      height: 18px;
      font-size: 7px;
      top: 2px;
      right: 2px;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #333;
  font-weight: 600;
  text-align: center;
  padding: 8px 16px;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.005em;
  
  /* Псевдоэлемент для анимации змейки */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(90deg, 
      #667eea 0%, 
      transparent 10%, 
      transparent 90%, 
      #667eea 100%
    );
    background-size: 200% 100%;
    border-radius: 10px;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }
  
  /* Линии по контуру */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-radius: 8px;
    background: 
      linear-gradient(90deg, #667eea, #764ba2, #f093fb, #667eea) border-box,
      linear-gradient(90deg, #667eea, #764ba2, #f093fb, #667eea) border-box;
    background-size: 300% 300%;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: subtract;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    animation: ${borderSnake} 2s linear infinite;
    animation-play-state: paused;
  }

  &:hover {
    color: #667eea;
    transform: translateY(-2px);
    
    &::before {
      opacity: 0.1;
    }
    
    &::after {
      opacity: 1;
      animation-play-state: running;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 4px 8px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 3px 6px;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
    padding: 2px 4px;
  }

  @media (max-width: 320px) {
    font-size: 0.7rem;
    padding: 2px 3px;
  }
`;

export const ProductsNavItem = styled.div`
  position: relative;
  display: inline-block;
  z-index: 10000; /* Высокий z-index для корректного отображения dropdown */
  
  /* Увеличиваем невидимую область для стабильного наведения */
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    z-index: -1;
    pointer-events: none;
  }
  
  /* Создаем мостик к выпадающему меню */
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: -250px;
    right: -250px;
    height: 15px;
    z-index: 9998;
    pointer-events: auto;
    background: transparent;
  }
  
  @media (max-width: 768px) {
    position: static;
    display: block;
    width: 100%;
    text-align: center;
    
    /* Обеспечиваем центрирование NavLink внутри */
    & a {
      display: block;
      width: 100%;
      text-align: center !important;
      margin: 0 auto;
    }
    
    &::before,
    &::after {
      display: none;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid;
    border-color: transparent;
    border-radius: 10px;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea) border-box;
    background-size: 300% 300%;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: subtract;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    animation: ${borderSnake} 2s linear infinite;
    animation-play-state: paused;
  }
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: scale(1.1);
    
    &::after {
      opacity: 1;
      animation-play-state: running;
    }
  }
  
  @media (max-width: 768px) {
    display: block;
    font-size: 1.2rem;
    padding: 4px;
  }
  
  @media (max-width: 480px) {
    display: block;
    font-size: 1rem;
    padding: 3px;
  }
  
  @media (max-width: 375px) {
    font-size: 0.9rem;
    padding: 2px;
  }
  
  @media (max-width: 360px) {
    font-size: 0.85rem;
    padding: 2px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.8rem;
    padding: 1px;
  }
`;

export const CartIcon = styled(Link)`
  color: #333;
  font-size: 1.5rem;
  position: relative;
  padding: 8px;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid;
    border-color: transparent;
    border-radius: 14px;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea) border-box;
    background-size: 300% 300%;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: subtract;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    animation: ${borderSnake} 2s linear infinite;
    animation-play-state: paused;
  }
  
  &:hover {
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
    
    &::after {
      opacity: 1;
      animation-play-state: running;
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
    padding: 2px;
  }
  
  @media (max-width: 375px) {
    font-size: 0.85rem;
    padding: 1px;
  }
  
  @media (max-width: 360px) {
    font-size: 0.8rem;
    padding: 1px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.75rem;
    padding: 1px;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -1px;
  right: -3px;
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  animation: ${float} 2s ease-in-out infinite;
  box-shadow: 0 2px 8px rgba(238, 90, 82, 0.4);
  border: 2px solid white;
  z-index: 1000;
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    font-size: 0.7rem;
    top: -3px;
    right: -3px;
  }
  
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    font-size: 0.65rem;
    top: -2px;
    right: -2px;
  }
  
  @media (max-width: 375px) {
    width: 16px;
    height: 16px;
    font-size: 0.6rem;
  }
  
  @media (max-width: 360px) {
    width: 15px;
    height: 15px;
    font-size: 0.55rem;
  }
  
  @media (max-width: 320px) {
    width: 14px;
    height: 14px;
    font-size: 0.5rem;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    gap: 4px;
  }
  
  @media (max-width: 375px) {
    gap: 3px;
  }
  
  @media (max-width: 360px) {
    gap: 2px;
  }
  
  @media (max-width: 320px) {
    gap: 1px;
  }
`;

export const UserButton = styled.button`
  color: #333;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid;
    border-color: transparent;
    border-radius: 14px;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea) border-box;
    background-size: 300% 300%;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: subtract;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    animation: ${borderSnake} 2s linear infinite;
    animation-play-state: paused;
  }
  
  &:hover {
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
    
    &::after {
      opacity: 1;
      animation-play-state: running;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 2px;
  }
  
  @media (max-width: 360px) {
    font-size: 0.9rem;
    padding: 1px;
  }
  
  @media (max-width: 320px) {
    font-size: 0.8rem;
    padding: 1px;
  }
`;

export {};