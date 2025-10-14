import styled from 'styled-components';
import { Button } from '../GlobalStyles';

export const AccountWrapper = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  
  @media (max-width: 768px) {
    padding-top: 80px;
    background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
  }
  
  @media (max-width: 480px) {
    padding-top: 70px;
  }
`;

export const AccountContent = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 32px;
  margin-top: 32px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 16px;
  }
  
  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 12px;
  }
`;

export const Sidebar = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  height: fit-content;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);

  h3 {
    margin: 0 0 20px 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--minimal-gray-900);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    letter-spacing: -0.01em;
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

export const SidebarItem = styled.button<{ active: boolean }>`
  width: 100%;
  text-align: left;
  padding: 16px 20px;
  margin-bottom: 8px;
  border: none;
  border-radius: 12px;
  background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--minimal-gray-700)'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1rem;
  font-weight: ${props => props.active ? '500' : '400'};
  letter-spacing: -0.01em;
  
  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'rgba(102, 126, 234, 0.08)'};
    color: ${props => props.active ? 'white' : 'var(--minimal-gray-900)'};
    transform: translateY(-1px);
    box-shadow: ${props => props.active ? '0 4px 12px rgba(102, 126, 234, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)'};
  }
`;

export const MainContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);

  @media (max-width: 968px) {
    padding: 24px;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin: 0 12px;
    border-radius: 12px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.06);
  }

  @media (max-width: 480px) {
    padding: 16px;
    margin: 0 8px;
    border-radius: 10px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);
  }
  
  @media (max-width: 375px) {
    padding: 12px;
    margin: 0 4px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--minimal-gray-900);
  margin: 0 0 32px 0;
  padding-bottom: 16px;
  border-bottom: 2px solid rgba(102, 126, 234, 0.1);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.02em;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 60px;
    height: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }

  @media (max-width: 968px) {
    font-size: 2rem;
    margin-bottom: 28px;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 20px;
    text-align: center;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 16px;
    padding-bottom: 12px;
    
    &::after {
      width: 40px;
    }
  }
  
  @media (max-width: 375px) {
    font-size: 1.2rem;
    margin-bottom: 12px;
    padding-bottom: 8px;
  }
`;

export const InfoCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(255,255,255,0.04) 100%);
    pointer-events: none;
  }

  h3 {
    margin: 0 0 16px 0;
    font-size: 1.4rem;
    font-weight: 600;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    letter-spacing: -0.01em;
    position: relative;
    z-index: 1;
  }

  p {
    margin: 0 0 20px 0;
    opacity: 0.92;
    line-height: 1.6;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 1.05rem;
    position: relative;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    padding: 24px;
    margin-bottom: 20px;
    border-radius: 12px;
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 12px;
    }
    
    p {
      font-size: 1rem;
      margin-bottom: 16px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 18px;
    margin-bottom: 16px;
    border-radius: 10px;
    
    h3 {
      font-size: 1.1rem;
      margin-bottom: 10px;
    }
    
    p {
      font-size: 0.95rem;
      margin-bottom: 12px;
    }
  }
  
  @media (max-width: 375px) {
    padding: 14px;
    margin-bottom: 12px;
    
    h3 {
      font-size: 1rem;
      margin-bottom: 8px;
    }
    
    p {
      font-size: 0.9rem;
      margin-bottom: 10px;
    }
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin: 24px 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 16px 0;
  }
  
  @media (max-width: 480px) {
    gap: 12px;
    margin: 12px 0;
  }
`;

export const InfoItem = styled.div`
  h4 {
    color: rgba(255, 255, 255, 0.95);
    font-size: 1rem;
    margin-bottom: 8px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
  p {
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    letter-spacing: -0.01em;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    text-align: center;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    
    h4 {
      font-size: 0.9rem;
      margin-bottom: 6px;
    }
    
    p {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 10px;
    
    h4 {
      font-size: 0.85rem;
      margin-bottom: 4px;
    }
    
    p {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 375px) {
    padding: 8px;
    
    h4 {
      font-size: 0.8rem;
    }
    
    p {
      font-size: 0.95rem;
    }
  }
`;

export const LoginPromptWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const LoginPromptCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  max-width: 520px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 40px 30px;
    border-radius: 16px;
  }
`;

export const LoginIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* Lock icon styling */
  &::before {
    content: "🔒";
    filter: grayscale(1);
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 20px;
  }
`;

export const LoginTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--minimal-text-primary);
  margin-bottom: 16px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const LoginSubtitle = styled.p`
  color: var(--minimal-text-secondary);
  font-size: 1.15rem;
  margin-bottom: 40px;
  line-height: 1.7;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 32px;
  }
`;

export const LoginButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const LoginButton = styled(Button)`
  padding: 16px 32px;
  font-size: 1.1rem;
  min-width: 150px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 600;
  letter-spacing: -0.01em;
  
  /* Переопределяем стили для outline кнопки на светлом фоне */
  ${props => props.variant === 'outline' && `
    background: transparent !important;
    color: var(--minimal-primary) !important;
    border: 2px solid var(--minimal-primary) !important;
    backdrop-filter: none !important;
    
    &:hover {
      background: var(--minimal-primary) !important;
      color: white !important;
      border-color: var(--minimal-primary) !important;
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3) !important;
    }
  `}
  
  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 1.05rem;
    width: 100%;
  }
`;

export const WelcomeSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 32px;
  color: white;
  text-align: center;
  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.25);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%);
    pointer-events: none;
  }
`;

export const WelcomeTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 16px 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const WelcomeSubtitle = styled.p`
  font-size: 1.4rem;
  margin: 0;
  opacity: 0.95;
  font-weight: 500;
  line-height: 1.6;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  position: relative;
  z-index: 1;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const EmptyOrdersText = styled.p`
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
  padding: 40px;
  margin: 0;
  font-size: 1.2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.01em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 32px 20px;
  }
`;

export const EmptyOrdersButtonWrapper = styled.div`
  text-align: center;
  padding-bottom: 20px;
`;

export const ShoppingButton = styled(Button)`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 700;
  letter-spacing: -0.005em;
  padding: 16px 32px;
  font-size: 1.1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
  }
`;

export const CoursesHeaderTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const CoursesHeaderSubtitle = styled.p`
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.95;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

export const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 24px;
  }
`;

export const CourseCard = styled.div`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-4px);
    border-color: rgba(102, 126, 234, 0.4);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

export const CourseCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const CourseIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
`;

export const CourseTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
  line-height: 1.2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const CourseDescription = styled.p`
  font-size: 0.95rem;
  color: #4a5568;
  margin: 12px 0;
  line-height: 1.5;
`;

export const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const CourseDuration = styled.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
`;

export const CourseLevel = styled.span`
  font-size: 0.8rem;
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CoursePrice = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #667eea;
  background: rgba(102, 126, 234, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
`;

export const CourseStatus = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 0.75rem;
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CourseVideoWrapper = styled.div`
  margin: 16px 0;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.05);
  position: relative;
  
  /* Disable text selection */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  
  /* Disable drag */
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
`;

export const CourseVideo = styled.video`
  width: 100%;
  height: 250px;
  object-fit: contain;
  background: #000;
  border-radius: 12px;
  
  /* Disable right click context menu */
  pointer-events: auto;
  
  /* Disable text selection */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  
  /* Disable drag */
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  
  &:focus {
    outline: 2px solid #667eea;
    outline-offset: 2px;
  }
`;