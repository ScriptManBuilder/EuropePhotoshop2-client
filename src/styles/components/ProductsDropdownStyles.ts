import styled, { keyframes } from 'styled-components';

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: calc(100% - 8px);
  left: -350px;
  right: -350px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-top: none;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
  animation: ${fadeInDown} 0.2s ease-out;
  z-index: 9999; /* Увеличили z-index */
  min-height: 420px;
  width: 900px;
  border-radius: 0 0 16px 16px;
  will-change: transform, opacity;
  padding-top: 8px;
  margin-top: 0;
  
  /* Добавляем невидимую область сверху для плавного перехода */
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 0;
    right: 0;
    height: 8px;
    background: transparent;
  }
  
  @media (max-width: 1200px) {
    left: -300px;
    right: -300px;
    width: 800px;
    min-height: 320px;
  }
  
  @media (max-width: 1024px) {
    left: -250px;
    right: -250px;
    width: 700px;
    min-height: 300px;
  }
  
  @media (max-width: 768px) {
    display: none !important;
  }
`;

export const DropdownContent = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: 30px;
  gap: 40px;
  min-height: 320px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 180px 1fr;
    padding: 25px;
    gap: 30px;
    min-height: 270px;
  }
`;

export const CategoriesSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CategoryItem = styled.div<{ $isActive?: boolean }>`
  padding: 12px 15px;
  color: ${props => props.$isActive ? '#667eea' : '#4a5568'};
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: ${props => props.$isActive ? '600' : '500'};
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  min-height: 50px;
  display: flex;
  align-items: center;
  background: ${props => props.$isActive 
    ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)' 
    : 'transparent'};
  border-left: ${props => props.$isActive ? '3px solid #667eea' : '3px solid transparent'};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    color: #667eea;
    transform: translateX(3px);
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
    
    &::before {
      left: 100%;
    }
  }
`;

export const FeaturedSection = styled.div`
  flex: 1.5;
  min-width: 300px;
`;

export const FeaturedTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 30px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 25px;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  padding: 15px;
  transition: all 0.2s ease;
  text-decoration: none;
  color: inherit;
  border: 1px solid rgba(102, 126, 234, 0.1);
  position: relative;
  overflow: hidden;
  will-change: transform, box-shadow;
  height: 200px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.3);
    
    &::before {
      opacity: 1;
    }
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
  
  @media (max-width: 1024px) {
    height: 180px;
    padding: 12px;
  }
  
  @media (max-width: 768px) {
    height: 190px;
    padding: 15px;
    transition: all 0.15s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(102, 126, 234, 0.12);
    }
  }
  
  @media (max-width: 480px) {
    height: 160px;
    padding: 15px;
    flex-direction: row;
    align-items: center;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 110px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: transform 0.2s ease;
  will-change: transform;
  
  ${ProductCard}:hover & {
    transform: scale(1.03);
  }
  
  @media (max-width: 1024px) {
    height: 95px;
    margin-bottom: 10px;
  }
  
  @media (max-width: 768px) {
    height: 100px;
    margin-bottom: 12px;
    transition: transform 0.15s ease;
    
    ${ProductCard}:hover & {
      transform: scale(1.02);
    }
  }
  
  @media (max-width: 480px) {
    width: 90px;
    height: 90px;
    margin-bottom: 0;
    margin-right: 15px;
    flex-shrink: 0;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  justify-content: space-between;
  min-height: 0;
  
  @media (max-width: 480px) {
    flex: 1;
    gap: 8px;
    justify-content: center;
  }
`;

export const ProductName = styled.h4`
  font-size: 0.85rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProductPrice = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: auto;
  padding: 6px 0;
  line-height: 1.3;
  min-height: 24px;
  display: flex;
  align-items: center;
`;

export const ViewAllButton = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 12px 18px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.25);
    
    &::before {
      left: 100%;
    }
  }
`;
