import styled, { keyframes, css } from 'styled-components';

export const HeroSection = styled.section`
  margin-top: 120px;
  min-height: 90vh;
  color: var(--minimal-white);
  padding: 80px 0 40px 0;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    margin-top: 100px;
    min-height: 85vh;
    padding: 60px 0 30px 0;
  }
  
  @media (max-width: 480px) {
    margin-top: 80px;
    min-height: 80vh;
    padding: 40px 0 20px 0;
  }
`;

export const HeroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const ProductsVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.7;
`;

// Новая независимая видео секция
export const VideoSection = styled.section`
  position: relative;
  min-height: 60vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    min-height: 50vh;
  }
  
  @media (max-width: 480px) {
    min-height: 40vh;
  }
`;

export const VideoSectionVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const VideoSectionContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 40px 20px;
`;

export const VideoSectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.02em;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const VideoSectionSubtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.92;
  line-height: 1.7;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 400;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.05rem;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
  
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: var(--minimal-white);
  letter-spacing: -0.03em;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 32px;
  color: var(--minimal-white);
  font-weight: 400;
  line-height: 1.7;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 1.15rem;
    margin-bottom: 28px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.05rem;
    margin-bottom: 24px;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  
  button, a {
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s ease;
    text-decoration: none;
    
    &:hover {
      transform: translateY(-1px);
    }
  }
  
  @media (max-width: 768px) {
    gap: 12px;
    
    button, a {
      padding: 10px 20px;
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    
    button, a {
      width: 100%;
      max-width: 280px;
    }
  }
`;

export const FeaturesSection = styled.section`
  padding: 40px 0;
  background: var(--minimal-light-gray);
  
  @media (max-width: 768px) {
    padding: 30px 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px 0;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
  margin-top: 120px;
  position: relative;
  z-index: 10;
  
  /* Красивый овальный фон */
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(248, 250, 252, 0.98) 50%, 
    rgba(241, 245, 249, 0.95) 100%
  );
  backdrop-filter: blur(20px);
  border: 2px solid rgba(226, 232, 240, 0.8);
  border-radius: 50px;
  padding: 40px 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.08),
    0 8px 25px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  
  /* Деликатная анимация */
  transform: translateY(0);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 30px 80px rgba(0, 0, 0, 0.12),
      0 12px 35px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    border-color: rgba(102, 126, 234, 0.3);
  }
  
  /* Декоративный элемент */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      rgba(102, 126, 234, 0.1), 
      rgba(240, 147, 251, 0.1), 
      rgba(59, 130, 246, 0.1)
    );
    border-radius: 52px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
    margin-top: 100px;
    padding: 30px 40px;
    border-radius: 40px;
    max-width: 90%;
    
    &::before {
      border-radius: 42px;
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
    margin-top: 80px;
    padding: 24px 30px;
    border-radius: 35px;
    max-width: 95%;
    
    &::before {
      border-radius: 37px;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--minimal-gray-900);
  margin-bottom: 8px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.02em;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 7px;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 6px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.15rem;
  color: var(--minimal-gray-600);
  max-width: 600px;
  margin: 0 auto;
  font-weight: 400;
  line-height: 1.7;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.005em;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 95%;
    line-height: 1.6;
  }
`;

// Карусель плашек
export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto 40px auto;
  height: 150px;
  overflow: hidden;
  border-radius: 50px;
  z-index: 10;
  
  @media (max-width: 768px) {
    max-width: 95%;
    height: 130px;
    border-radius: 40px;
    margin: 0 auto 30px auto;
  }
  
  @media (max-width: 480px) {
    max-width: 98%;
    height: 110px;
    border-radius: 30px;
    margin: 0 auto 25px auto;
  }
  
  @media (max-width: 360px) {
    height: 100px;
    border-radius: 25px;
    margin: 0 auto 20px auto;
  }
`;

export const CarouselTrack = styled.div<{ currentSlide: number }>`
  display: flex;
  width: 300%;
  height: 100%;
  transform: translateX(-${props => props.currentSlide * 33.333}%);
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const CarouselSlide = styled.div`
  width: 33.333%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  /* Красивый цветной фон по умолчанию */
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.15) 0%,
    rgba(147, 51, 234, 0.12) 30%,
    rgba(59, 130, 246, 0.18) 60%,
    rgba(240, 147, 251, 0.1) 100%
  );
  backdrop-filter: blur(20px);
  border: 2px solid rgba(102, 126, 234, 0.2);
  margin: 0 2px;
  border-radius: 50px;
  padding: 40px 60px;
  box-shadow: 
    0 20px 60px rgba(102, 126, 234, 0.15),
    0 8px 25px rgba(59, 130, 246, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  position: relative;
  
  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, 
      rgba(102, 126, 234, 0.25) 0%,
      rgba(147, 51, 234, 0.22) 30%,
      rgba(59, 130, 246, 0.28) 60%,
      rgba(240, 147, 251, 0.2) 100%
    );
    box-shadow: 
      0 30px 80px rgba(102, 126, 234, 0.25),
      0 15px 35px rgba(59, 130, 246, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
    border-color: rgba(102, 126, 234, 0.4);
  }
  
  /* Декоративный элемент */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      rgba(102, 126, 234, 0.3), 
      rgba(240, 147, 251, 0.2), 
      rgba(59, 130, 246, 0.25)
    );
    border-radius: 52px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 25px 35px;
    border-radius: 40px;
    margin: 0 1px;
    
    &::before {
      border-radius: 42px;
    }
    
    &:hover {
      transform: translateY(-1px);
    }
  }
  
  @media (max-width: 480px) {
    padding: 20px 25px;
    border-radius: 30px;
    margin: 0 1px;
    border: 1px solid rgba(226, 232, 240, 0.8);
    
    &::before {
      border-radius: 32px;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
    }
    
    &:hover {
      transform: none;
      box-shadow: 
        0 15px 40px rgba(0, 0, 0, 0.08),
        0 6px 15px rgba(0, 0, 0, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }
  }
  
  @media (max-width: 360px) {
    padding: 15px 20px;
    border-radius: 25px;
    
    &::before {
      border-radius: 27px;
    }
  }
`;

export const CarouselContent = styled.div`
  text-align: center;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;

export const CarouselTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--minimal-gray-900);
  margin-bottom: 7px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.5px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 5px;
    letter-spacing: -0.4px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    letter-spacing: -0.3px;
    margin-bottom: 4px;
    line-height: 1.1;
  }
  
  @media (max-width: 360px) {
    font-size: 1.4rem;
    letter-spacing: -0.2px;
    margin-bottom: 3px;
  }
`;

export const CarouselSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--minimal-gray-600);
  max-width: 600px;
  margin: 0 auto;
  font-weight: 400;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.875rem;
    max-width: 95%;
    line-height: 1.4;
  }
  
  @media (max-width: 360px) {
    font-size: 0.8rem;
    line-height: 1.3;
  }
`;

/* Анимации для точек */
const dotPulse = keyframes`
  0%, 100% {
    transform: scale(1.3);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4), 0 3px 12px rgba(59, 130, 246, 0.3);
  }
  50% {
    transform: scale(1.5);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.6), 0 5px 18px rgba(59, 130, 246, 0.5);
  }
`;

const dotGlow = keyframes`
  0% {
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4), 0 3px 12px rgba(59, 130, 246, 0.3), 0 0 0 0 rgba(102, 126, 234, 0.7);
  }
  100% {
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5), 0 4px 15px rgba(59, 130, 246, 0.4), 0 0 20px 5px rgba(102, 126, 234, 0.3);
  }
`;

const innerGlow = keyframes`
  0% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

// Анимация переливания цветов для активной карточки
const colorShimmer = keyframes`
  0% {
    background: linear-gradient(135deg,
      rgba(102, 126, 234, 0.12) 0%,
      rgba(147, 51, 234, 0.08) 30%,
      rgba(59, 130, 246, 0.14) 60%,
      rgba(240, 147, 251, 0.07) 100%
    );
    border-color: rgba(102, 126, 234, 0.25);
  }
  25% {
    background: linear-gradient(135deg,
      rgba(147, 51, 234, 0.14) 0%,
      rgba(240, 147, 251, 0.10) 30%,
      rgba(102, 126, 234, 0.12) 60%,
      rgba(59, 130, 246, 0.08) 100%
    );
    border-color: rgba(147, 51, 234, 0.28);
  }
  50% {
    background: linear-gradient(135deg,
      rgba(240, 147, 251, 0.12) 0%,
      rgba(59, 130, 246, 0.14) 30%,
      rgba(147, 51, 234, 0.10) 60%,
      rgba(102, 126, 234, 0.08) 100%
    );
    border-color: rgba(240, 147, 251, 0.30);
  }
  75% {
    background: linear-gradient(135deg,
      rgba(59, 130, 246, 0.14) 0%,
      rgba(102, 126, 234, 0.12) 30%,
      rgba(240, 147, 251, 0.08) 60%,
      rgba(147, 51, 234, 0.10) 100%
    );
    border-color: rgba(59, 130, 246, 0.32);
  }
  100% {
    background: linear-gradient(135deg,
      rgba(102, 126, 234, 0.12) 0%,
      rgba(147, 51, 234, 0.08) 30%,
      rgba(59, 130, 246, 0.14) 60%,
      rgba(240, 147, 251, 0.07) 100%
    );
    border-color: rgba(102, 126, 234, 0.25);
  }
`;

// Навигационные точки
export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
  z-index: 10;
  position: relative;
  padding: 10px;
  
  @media (max-width: 768px) {
    gap: 14px;
    margin-bottom: 30px;
    padding: 8px;
  }
  
  @media (max-width: 480px) {
    gap: 12px;
    margin-bottom: 25px;
    padding: 6px;
  }
  
  @media (max-width: 360px) {
    gap: 10px;
    margin-bottom: 20px;
    padding: 4px;
  }
`;

export const CarouselDot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  min-width: 12px;
  min-height: 12px;
  max-width: 12px;
  max-height: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  padding: 0;
  margin: 0;
  flex-shrink: 0;
  
  background: ${props => props.active 
    ? 'linear-gradient(135deg, rgba(102, 126, 234, 1), rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.8))'
    : 'linear-gradient(135deg, rgba(148, 163, 184, 0.5), rgba(203, 213, 225, 0.6))'
  };
  
  box-shadow: ${props => props.active 
    ? '0 6px 20px rgba(102, 126, 234, 0.4), 0 3px 12px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
    : '0 3px 10px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
  };
  
  transform: ${props => props.active ? 'scale(1.3)' : 'scale(1)'};
  
  /* Пульсирующая анимация для активной точки */
  ${props => props.active && css`
    animation: ${dotPulse} 2s ease-in-out infinite, ${dotGlow} 3s ease-in-out infinite alternate;
  `}
  
  &:hover {
    transform: scale(1.4);
    background: ${props => props.active 
      ? 'linear-gradient(135deg, rgba(102, 126, 234, 1), rgba(147, 51, 234, 1), rgba(59, 130, 246, 1))'
      : 'linear-gradient(135deg, rgba(102, 126, 234, 0.7), rgba(147, 51, 234, 0.6))'
    };
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5), 0 4px 15px rgba(59, 130, 246, 0.4);
    
    ${css`
      animation: ${dotPulse} 1.5s ease-in-out infinite, ${dotGlow} 2s ease-in-out infinite alternate;
    `}
  }
  
  /* Блестящий эффект при наведении */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.6) 50%, transparent 70%);
    transform: translateX(-100%) rotate(45deg);
    transition: transform 0.8s;
  }
  
  &:hover::before {
    transform: translateX(100%) rotate(45deg);
  }
  
  /* Внутренний светящийся эффект */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${props => props.active ? '6px' : '4px'};
    height: ${props => props.active ? '6px' : '4px'};
    border-radius: 50%;
    background: ${props => props.active 
      ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 100%)'
      : 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 100%)'
    };
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
    
    ${props => props.active && css`
      animation: ${innerGlow} 2s ease-in-out infinite alternate;
    `}
  }

  @media (max-width: 768px) {
    width: 11px;
    height: 11px;
    min-width: 11px;
    min-height: 11px;
    max-width: 11px;
    max-height: 11px;
    
    &::after {
      width: ${props => props.active ? '5px' : '3px'};
      height: ${props => props.active ? '5px' : '3px'};
    }
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
    min-width: 10px;
    min-height: 10px;
    max-width: 10px;
    max-height: 10px;
    
    /* Увеличиваем область клика для пальцев */
    &::before {
      content: '';
      position: absolute;
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
      z-index: -2;
    }
    
    &::after {
      width: ${props => props.active ? '4px' : '3px'};
      height: ${props => props.active ? '4px' : '3px'};
    }
  }
  
  @media (max-width: 360px) {
    width: 9px;
    height: 9px;
    min-width: 9px;
    min-height: 9px;
    max-width: 9px;
    max-height: 9px;
    
    /* Ещё больше увеличиваем область клика */
    &::before {
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
    }
    
    &::after {
      width: ${props => props.active ? '4px' : '2px'};
      height: ${props => props.active ? '4px' : '2px'};
    }
  }
  
  /* Улучшаем тач-взаимодействие */
  @media (pointer: coarse) {
    &:hover {
      transform: scale(1.6);
    }
    
    &:active {
      transform: scale(1.8);
      transition: transform 0.1s ease;
    }
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 14px;
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: -20px auto 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 90%;
    margin: -15px auto 0 auto;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 95%;
    margin: -10px auto 0 auto;
  }
`;

export const FeatureCard = styled.div`
  background: linear-gradient(135deg,
    rgba(102, 126, 234, 0.05) 0%,
    rgba(147, 51, 234, 0.03) 30%,
    rgba(59, 130, 246, 0.06) 60%,
    rgba(240, 147, 251, 0.04) 100%
  );
  backdrop-filter: blur(20px);
  border: 2px solid rgba(102, 126, 234, 0.15);
  border-radius: 20px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 
    0 12px 32px rgba(102, 126, 234, 0.1),
    0 6px 16px rgba(59, 130, 246, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  /* Декоративная рамка - видна изначально */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      rgba(102, 126, 234, 0.2), 
      rgba(240, 147, 251, 0.15), 
      rgba(59, 130, 246, 0.2),
      rgba(147, 51, 234, 0.15)
    );
    border-radius: 22px;
    z-index: -1;
    opacity: 0.6;
    transition: opacity 0.4s ease;
  }
  
  /* Светящийся градиент сверху - слабо видимый изначально */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 0%,
      rgba(102, 126, 234, 0.1) 0%,
      transparent 60%
    );
    opacity: 0.5;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    background: linear-gradient(135deg,
      rgba(102, 126, 234, 0.12) 0%,
      rgba(147, 51, 234, 0.08) 30%,
      rgba(59, 130, 246, 0.14) 60%,
      rgba(240, 147, 251, 0.09) 100%
    );
    box-shadow: 
      0 24px 60px rgba(102, 126, 234, 0.18),
      0 16px 40px rgba(59, 130, 246, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
    border-color: rgba(102, 126, 234, 0.3);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    padding: 28px 20px;
    height: 320px;
    border-radius: 16px;
    
    &::before {
      border-radius: 18px;
    }
    
    &:hover {
      transform: translateY(-6px) scale(1.01);
    }
  }
  
  @media (max-width: 480px) {
    padding: 24px 16px;
    height: 300px;
    border-radius: 14px;
    
    &::before {
      border-radius: 16px;
    }
    
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

export const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 28px;
  border-radius: 20px;
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.85) 0%,
    rgba(147, 51, 234, 0.8) 50%,
    rgba(59, 130, 246, 0.85) 100%
  );
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.25);
  color: var(--minimal-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 
    0 10px 28px rgba(102, 126, 234, 0.25),
    0 6px 16px rgba(59, 130, 246, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  
  /* Внутреннее свечение - видимое изначально */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.25) 0%,
      transparent 70%
    );
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.8;
    transition: all 0.4s ease;
  }
  
  /* Внешнее декоративное кольцо - слабо видимое изначально */
  &::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 23px;
    background: linear-gradient(45deg, 
      rgba(102, 126, 234, 0.3), 
      rgba(240, 147, 251, 0.25), 
      rgba(59, 130, 246, 0.3),
      rgba(147, 51, 234, 0.25)
    );
    z-index: -1;
    opacity: 0.4;
    transition: all 0.4s ease;
  }
  
  ${FeatureCard}:hover & {
    transform: translateY(-6px) scale(1.15) rotate(5deg);
    background: linear-gradient(135deg, 
      rgba(102, 126, 234, 1) 0%,
      rgba(147, 51, 234, 0.95) 50%,
      rgba(59, 130, 246, 1) 100%
    );
    box-shadow: 
      0 18px 45px rgba(102, 126, 234, 0.4),
      0 10px 25px rgba(59, 130, 246, 0.35),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.5);
    
    &::before {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.3);
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 2.2rem;
    margin: 0 auto 24px;
    border-radius: 18px;
    
    &::after {
      border-radius: 21px;
    }
    
    ${FeatureCard}:hover & {
      transform: translateY(-4px) scale(1.1) rotate(3deg);
    }
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    font-size: 2rem;
    margin: 0 auto 20px;
    border-radius: 16px;
    
    &::after {
      border-radius: 19px;
    }
    
    ${FeatureCard}:hover & {
      transform: translateY(-3px) scale(1.08) rotate(2deg);
    }
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 18px;
  color: var(--minimal-text-primary);
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
  letter-spacing: -0.02em;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 14px;
  }
`;

export const FeatureDescription = styled.p`
  color: var(--minimal-text-secondary);
  line-height: 1.7;
  font-size: 1.05rem;
  font-weight: 400;
  text-align: center;
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.005em;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

export const ProductsSection = styled.section`
  padding: 40px 0 60px 0;
  position: relative;
  overflow: hidden;
  
  /* Красивый градиентный фон */
  background: linear-gradient(135deg,
    rgba(247, 250, 252, 1) 0%,
    rgba(241, 245, 249, 0.95) 25%,
    rgba(248, 250, 252, 0.98) 50%,
    rgba(241, 245, 249, 0.95) 75%,
    rgba(247, 250, 252, 1) 100%
  );
  
  /* Декоративные элементы фона */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -10%;
    width: 120%;
    height: 200%;
    background: radial-gradient(
      ellipse at center,
      rgba(102, 126, 234, 0.03) 0%,
      rgba(59, 130, 246, 0.02) 30%,
      transparent 70%
    );
    animation: backgroundFloat 20s ease-in-out infinite;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    right: -5%;
    width: 60%;
    height: 80%;
    background: radial-gradient(
      ellipse at center,
      rgba(240, 147, 251, 0.04) 0%,
      rgba(147, 51, 234, 0.02) 40%,
      transparent 70%
    );
    animation: backgroundFloat 25s ease-in-out infinite reverse;
    z-index: 0;
  }
  
  /* Обеспечиваем что контент поверх фона */
  & > * {
    position: relative;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    padding: 30px 0 40px 0;
    
    &::before, &::after {
      opacity: 0.7;
    }
  }
  
  @media (max-width: 480px) {
    padding: 20px 0 30px 0;
    
    &::before, &::after {
      opacity: 0.5;
    }
  }
`;

/* Анимация для фоновых элементов */
const backgroundFloat = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(1deg);
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 30px;
  margin-top: 30px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-top: 20px;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 30px;
    padding: 0 5px;
  }
`;

export const ProductCard = styled.div<{ $isActive?: boolean }>`
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(248, 250, 252, 0.98) 50%,
    rgba(241, 245, 249, 0.95) 100%
  );
  backdrop-filter: blur(20px);
  border: 2px solid rgba(102, 126, 234, 0.12);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  height: 460px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 
    0 8px 32px rgba(102, 126, 234, 0.08),
    0 4px 16px rgba(59, 130, 246, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  
  /* Декоративная рамка */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      rgba(102, 126, 234, 0.2), 
      rgba(240, 147, 251, 0.15), 
      rgba(59, 130, 246, 0.18),
      rgba(147, 51, 234, 0.12)
    );
    border-radius: 22px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover,
  ${props => props.$isActive && css`
    transform: translateY(-6px) scale(1.05);
    animation: ${colorShimmer} 3s ease-in-out infinite;
    box-shadow: 
      0 20px 60px rgba(102, 126, 234, 0.15),
      0 12px 40px rgba(59, 130, 246, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  `} {
    transform: translateY(-6px) scale(1.05);
    background: linear-gradient(135deg,
      rgba(102, 126, 234, 0.08) 0%,
      rgba(147, 51, 234, 0.06) 30%,
      rgba(59, 130, 246, 0.1) 60%,
      rgba(240, 147, 251, 0.05) 100%
    );
    box-shadow: 
      0 20px 60px rgba(102, 126, 234, 0.15),
      0 12px 40px rgba(59, 130, 246, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
    border-color: rgba(102, 126, 234, 0.25);
  }
  
  &:hover::before,
  ${props => props.$isActive && css`&::before`} {
    opacity: 1;
  }
  
  /* Дополнительный светящийся эффект */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 0%,
      rgba(102, 126, 234, 0.1) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  &:hover::after,
  ${props => props.$isActive && css`&::after`} {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    height: 450px;
    border-radius: 16px;
    
    &::before {
      border-radius: 18px;
    }
    
    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }
  
  @media (max-width: 480px) {
    height: 420px;
    border-radius: 14px;
    
    &::before {
      border-radius: 16px;
    }
    
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: all 0.3s ease;
  
  ${ProductCard}:hover & {
    transform: scale(1.02);
  }
  
  @media (max-width: 768px) {
    height: 180px;
  }
  
  @media (max-width: 480px) {
    height: 160px;
  }
`;

export const ProductInfo = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  gap: 12px;
  
  @media (max-width: 768px) {
    padding: 14px 16px;
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    gap: 8px;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  
  @media (max-width: 480px) {
    gap: 6px;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 8px 0;
  color: var(--minimal-text-primary);
  font-weight: 600;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0 0 6px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 0 0 4px 0;
  }
`;

export const ProductPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--minimal-primary);
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 4px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: var(--minimal-text-secondary);
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    -webkit-line-clamp: 2;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.4;
    -webkit-line-clamp: 2;
  }
`;

// Анимация для премиальной кнопки
const shimmerEffect = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const buttonColorShimmer = keyframes`
  0% {
    background: linear-gradient(135deg, 
      rgba(248, 250, 252, 0.98) 0%, 
      rgba(241, 245, 249, 0.95) 50%,
      rgba(235, 240, 245, 0.92) 100%
    );
    color: rgba(102, 126, 234, 1);
    border-color: rgba(102, 126, 234, 0.4);
  }
  25% {
    background: linear-gradient(135deg, 
      rgba(248, 250, 252, 0.98) 0%, 
      rgba(241, 245, 249, 0.95) 50%,
      rgba(235, 240, 245, 0.92) 100%
    );
    color: rgba(147, 51, 234, 1);
    border-color: rgba(147, 51, 234, 0.4);
  }
  50% {
    background: linear-gradient(135deg, 
      rgba(248, 250, 252, 0.98) 0%, 
      rgba(241, 245, 249, 0.95) 50%,
      rgba(235, 240, 245, 0.92) 100%
    );
    color: rgba(59, 130, 246, 1);
    border-color: rgba(59, 130, 246, 0.4);
  }
  75% {
    background: linear-gradient(135deg, 
      rgba(248, 250, 252, 0.98) 0%, 
      rgba(241, 245, 249, 0.95) 50%,
      rgba(235, 240, 245, 0.92) 100%
    );
    color: rgba(240, 147, 251, 1);
    border-color: rgba(240, 147, 251, 0.4);
  }
  100% {
    background: linear-gradient(135deg, 
      rgba(248, 250, 252, 0.98) 0%, 
      rgba(241, 245, 249, 0.95) 50%,
      rgba(235, 240, 245, 0.92) 100%
    );
    color: rgba(102, 126, 234, 1);
    border-color: rgba(102, 126, 234, 0.4);
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 
      0 20px 60px rgba(102, 126, 234, 0.4),
      0 12px 30px rgba(59, 130, 246, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
  50% {
    box-shadow: 
      0 25px 80px rgba(102, 126, 234, 0.6),
      0 15px 40px rgba(59, 130, 246, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }
`;

export const PremiumButton = styled.button`
  font-size: 1.3rem;
  font-weight: 600;
  padding: 24px 60px;
  background: linear-gradient(135deg, 
    rgba(248, 250, 252, 0.98) 0%, 
    rgba(241, 245, 249, 0.95) 50%,
    rgba(235, 240, 245, 0.92) 100%
  );
  border: 2px solid rgba(102, 126, 234, 0.4);
  border-radius: 50px;
  color: rgba(102, 126, 234, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  animation: ${buttonColorShimmer} 4s ease-in-out infinite;
  box-shadow: 
    0 20px 60px rgba(102, 126, 234, 0.2),
    0 12px 30px rgba(59, 130, 246, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  
  /* Shimmer effect overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(102, 126, 234, 0.2),
      transparent
    );
    transition: left 0.5s;
    z-index: 1;
  }
  
  /* Glow effect */
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      rgba(102, 126, 234, 0.4), 
      rgba(240, 147, 251, 0.3), 
      rgba(59, 130, 246, 0.4),
      rgba(147, 51, 234, 0.3)
    );
    border-radius: 52px;
    z-index: -1;
    opacity: 0.5;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 
      0 30px 80px rgba(102, 126, 234, 0.3),
      0 18px 50px rgba(59, 130, 246, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    
    &::before {
      animation: ${shimmerEffect} 0.8s ease-out;
    }
    
    &::after {
      opacity: 0.8;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
  }
  
  /* Стили для inner span */
  span {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 20px 50px;
    
    &:hover {
      transform: translateY(-2px) scale(1.03);
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 18px 40px;
    
    &:hover {
      transform: translateY(-1px) scale(1.02);
    }
  }
`;

export const ProductButton = styled.button`
  background: var(--minimal-primary);
  border: 2px solid var(--minimal-primary);
  color: var(--minimal-white);
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-decoration: none;
  
  &:hover {
    background: var(--minimal-white);
    color: var(--minimal-primary);
    border-color: var(--minimal-primary);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.8rem;
    min-height: 36px;
  }
  
  @media (max-width: 480px) {
    padding: 6px 14px;
    font-size: 0.75rem;
    min-height: 32px;
  }
`;

// Дополнительные стили для scroll-эффектов
export const ScrollReveal = styled.div<{ delay?: number }>`
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${props => props.delay || 0}ms;
  
  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ParallaxElement = styled.div<{ speed?: number }>`
  transform: translateY(0);
  transition: transform 0.1s linear;
`;

// Photo Gallery Styles
export const PhotoGallerySection = styled.section`
  width: 100%;
  overflow: hidden;
  background: linear-gradient(
    135deg, 
    #667eea 0%, 
    #764ba2 25%, 
    #f093fb 50%, 
    #f5576c 75%, 
    #4facfe 100%
  );
  background-size: 400% 400%;
  animation: chameleonGradient 8s ease infinite;
  padding: 40px 0 60px 0;
  position: relative;
  
  /* Переливающийся хамелеон эффект */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(102, 126, 234, 0.3) 0%,
      rgba(118, 75, 162, 0.2) 25%,
      rgba(240, 147, 251, 0.3) 50%,
      rgba(245, 87, 108, 0.2) 75%,
      rgba(79, 172, 254, 0.3) 100%
    );
    background-size: 600% 600%;
    animation: chameleonOverlay 12s ease infinite reverse;
    pointer-events: none;
  }
  
  /* Дополнительный сияющий слой */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.1) 30%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:hover::after {
    opacity: 1;
  }
  
  @keyframes chameleonGradient {
    0% { background-position: 0% 50%; }
    25% { background-position: 100% 50%; }
    50% { background-position: 100% 100%; }
    75% { background-position: 0% 100%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes chameleonOverlay {
    0% { background-position: 0% 0%; }
    33% { background-position: 100% 100%; }
    66% { background-position: 0% 100%; }
    100% { background-position: 0% 0%; }
  }
  
  @media (max-width: 768px) {
    padding: 30px 0 40px 0;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

export const ScrollingTextBanner = styled.div`
  width: 100%;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    var(--minimal-primary) 0%,
    #3b82f6 50%,
    var(--minimal-primary) 100%
  );
  background-size: 200% 100%;
  animation: gradientShift 8s ease infinite;
  padding: 24px 0;
  margin-top: 50px;
  position: relative;
  box-shadow: 
    0 -4px 20px rgba(0,0,0,0.2),
    0 4px 20px rgba(59, 130, 246, 0.3);
  
  /* Современный блик */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255,255,255,0.2) 50%,
      transparent 100%
    );
    animation: shine 4s infinite;
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 0%; }
    100% { background-position: 0% 0%; }
  }
  
  @keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
  }
  
  @media (max-width: 768px) {
    padding: 20px 0;
    margin-top: 40px;
  }
  
  @media (max-width: 480px) {
    padding: 16px 0;
    margin-top: 30px;
  }
`;

export const ScrollingText = styled.div`
  display: flex;
  white-space: nowrap;
  animation: scrollText 25s linear infinite;
  font-weight: 800;
  font-size: 1.8rem;
  color: #fff;
  text-shadow: 
    2px 2px 4px rgba(0,0,0,0.8),
    0 0 20px rgba(255,255,255,0.5),
    0 0 40px rgba(255,255,255,0.3);
  letter-spacing: 4px;
  text-transform: uppercase;
  font-family: 'Arial Black', sans-serif;
  
  @keyframes scrollText {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
  
  span {
    padding-right: 120px;
    display: inline-block;
    position: relative;
    
    /* Добавляем разделители между текстами */
    &::after {
      content: '●';
      position: absolute;
      right: 60px;
      color: rgba(255,255,255,0.8);
      font-size: 0.8em;
    }
    
    &:last-child::after {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    letter-spacing: 3px;
    animation: scrollText 20s linear infinite;
    
    span {
      padding-right: 100px;
      
      &::after {
        right: 50px;
      }
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    letter-spacing: 2px;
    animation: scrollText 15s linear infinite;
    
    span {
      padding-right: 80px;
      
      &::after {
        right: 40px;
      }
    }
  }
  
  /* Пауза анимации при hover */
  &:hover {
    animation-play-state: paused;
  }
  
  /* Reduce motion для accessibility */
  @media (prefers-reduced-motion: reduce) {
    animation: scrollText 50s linear infinite;
  }
`;

export const PhotoStrip = styled.div`
  display: flex;
  width: calc(300% + 300px); /* Увеличиваем ширину для трех наборов */
  animation: scrollPhotos 45s linear infinite; /* Увеличиваем время для плавности */
  transform: translateZ(0); /* GPU acceleration */
  will-change: transform; /* Оптимизация для анимации */
  
  /* Переливающаяся тень с эффектом хамелеона */
  filter: 
    drop-shadow(0 10px 30px rgba(102, 126, 234, 0.4))
    drop-shadow(0 5px 15px rgba(245, 87, 108, 0.3))
    drop-shadow(0 0 40px rgba(240, 147, 251, 0.2));
  
  /* Анимация тени */
  animation: 
    scrollPhotos 45s linear infinite,
    chameleonShadow 6s ease infinite;
  
  @keyframes scrollPhotos {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-33.33%, 0, 0); /* Сдвигаем на треть для бесконечности */
    }
  }
  
  @keyframes chameleonShadow {
    0% {
      filter: 
        drop-shadow(0 10px 30px rgba(102, 126, 234, 0.5))
        drop-shadow(0 5px 15px rgba(245, 87, 108, 0.2));
    }
    25% {
      filter: 
        drop-shadow(0 10px 30px rgba(118, 75, 162, 0.5))
        drop-shadow(0 5px 15px rgba(79, 172, 254, 0.3));
    }
    50% {
      filter: 
        drop-shadow(0 10px 30px rgba(240, 147, 251, 0.5))
        drop-shadow(0 5px 15px rgba(102, 126, 234, 0.3));
    }
    75% {
      filter: 
        drop-shadow(0 10px 30px rgba(245, 87, 108, 0.5))
        drop-shadow(0 5px 15px rgba(118, 75, 162, 0.3));
    }
    100% {
      filter: 
        drop-shadow(0 10px 30px rgba(79, 172, 254, 0.5))
        drop-shadow(0 5px 15px rgba(240, 147, 251, 0.2));
    }
  }
  
  /* При ховере усиливаем эффект */
  &:hover {
    animation-play-state: paused;
    transform: translateZ(0) scale(1.02);
    transition: transform 0.3s ease;
    
    filter: 
      drop-shadow(0 15px 40px rgba(102, 126, 234, 0.6))
      drop-shadow(0 8px 20px rgba(245, 87, 108, 0.4))
      drop-shadow(0 0 60px rgba(240, 147, 251, 0.3));
  }
  
  @media (max-width: 768px) {
    animation: scrollPhotos 30s linear infinite, chameleonShadow 6s ease infinite;
  }
  
  @media (max-width: 480px) {
    animation: scrollPhotos 25s linear infinite, chameleonShadow 6s ease infinite;
  }
  
  /* Reduce motion для пользователей с настройками accessibility */
  @media (prefers-reduced-motion: reduce) {
    animation: scrollPhotos 80s linear infinite;
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
  }
`;

export const PhotoItem = styled.div`
  flex: 0 0 280px;
  height: 200px;
  margin-right: 24px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* Переливающиеся тени с эффектом хамелеона */
  box-shadow: 
    0 4px 20px rgba(102, 126, 234, 0.2),
    0 2px 10px rgba(240, 147, 251, 0.15),
    0 1px 3px rgba(0,0,0,0.1);
  
  /* Переливающаяся граница */
  border: 2px solid;
  border-image: linear-gradient(
    45deg,
    rgba(102, 126, 234, 0.6),
    rgba(240, 147, 251, 0.6),
    rgba(245, 87, 108, 0.6),
    rgba(79, 172, 254, 0.6)
  ) 1;
  
  /* Анимация границы */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 18px;
    background: linear-gradient(
      45deg,
      #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe
    );
    background-size: 400% 400%;
    animation: chameleonBorder 4s ease infinite;
    z-index: -1;
  }
  
  @keyframes chameleonBorder {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.05);
    box-shadow: 
      0 20px 50px rgba(102, 126, 234, 0.3),
      0 10px 25px rgba(240, 147, 251, 0.25),
      0 5px 15px rgba(245, 87, 108, 0.2);
  }
  
  /* Overlay эффекты для категорий */
  .photo-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.7) 0%,
      rgba(102, 126, 234, 0.3) 50%,
      transparent 100%
    );
    opacity: 0;
    transition: all 0.3s ease;
    display: flex;
    align-items: flex-end;
    padding: 20px;
  }
  
  &:hover .photo-overlay {
    opacity: 1;
  }
  
  .photo-category {
    background: rgba(255,255,255,0.9);
    color: #1a1a1a;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
  
  /* Оптимизация производительности */
  will-change: transform;
  
  @media (max-width: 768px) {
    flex: 0 0 240px;
    height: 180px;
    margin-right: 20px;
    border-radius: 14px;
    
    &::before {
      border-radius: 16px;
    }
  }
  
  @media (max-width: 480px) {
    flex: 0 0 200px;
    height: 150px;
    margin-right: 16px;
    border-radius: 12px;
    
    &::before {
      border-radius: 14px;
    }
    
    .photo-overlay {
      padding: 15px;
    }
    
    .photo-category {
      padding: 6px 12px;
      font-size: 0.8rem;
    }
  }
`;

// Информационная секция перед футером
export const InfoSection = styled.section`
  padding: 80px 0;
  background: var(--minimal-white);
  position: relative;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    gap: 40px;
  }
  
  @media (max-width: 480px) {
    gap: 30px;
  }
`;

export const InfoBlock = styled.div`
  text-align: left;
`;

export const InfoTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--minimal-text-primary);
  margin-bottom: 24px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 16px;
  }
`;

export const InfoDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--minimal-text-secondary);
  margin-bottom: 32px;
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 24px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }
`;

export const InfoSubsection = styled.div`
  margin-bottom: 40px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 24px;
  }
`;

export const InfoSubtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--minimal-text-primary);
  margin-bottom: 16px;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

export const InfoText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--minimal-text-secondary);
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  strong {
    color: var(--minimal-text-primary);
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }
`;

export const InfoHighlight = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
`;
