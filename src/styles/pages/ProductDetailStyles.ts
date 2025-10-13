import styled from 'styled-components';

export const ProductWrapper = styled.div`
  padding-top: 120px;
  min-height: calc(100vh - 120px);
  padding-bottom: 80px;
  background: var(--minimal-bg);
  color: var(--minimal-text);
  
  @media (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
  background: var(--minimal-white);
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid var(--minimal-gray-200);
  color: var(--minimal-text);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 24px;
  }
  
  @media (max-width: 480px) {
    padding: 16px;
    gap: 16px;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  z-index: 1;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: contain;
  object-position: center;
  border-radius: 12px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #000;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    height: 350px;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    height: 300px;
    border-radius: 8px;
  }
`;

export const ImageGallery = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 8px 0;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--minimal-gray-100);
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--minimal-primary);
    border-radius: 2px;
  }
`;

export const ThumbnailImage = styled.img<{ isSelected: boolean }>`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.isSelected ? 'var(--minimal-primary)' : 'var(--minimal-gray-200)'};
  opacity: ${props => props.isSelected ? 1 : 0.7};
  
  &:hover {
    opacity: 1;
    border-color: var(--minimal-primary);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    border-radius: 6px;
  }
`;

export const VideoThumbnailContainer = styled.div<{ isSelected: boolean }>`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.isSelected ? 'var(--minimal-primary)' : 'var(--minimal-gray-200)'};
  opacity: ${props => props.isSelected ? 1 : 0.7};
  overflow: hidden;
  
  &:hover {
    opacity: 1;
    border-color: var(--minimal-primary);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    border-radius: 6px;
  }
`;

export const VideoThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const VideoPlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  pointer-events: none;
  
  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    font-size: 10px;
  }
`;

export const VideoPlayer = styled.video`
  width: 100%;
  height: 400px;
  object-fit: contain;
  object-position: center;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  background-color: #000;
  
  @media (max-width: 768px) {
    height: 350px;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    height: 300px;
    border-radius: 8px;
  }
`;

export const InfoSection = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProductTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--minimal-text-primary);
  margin-bottom: 16px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
`;

export const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--minimal-primary);
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
`;

export const ProductDescription = styled.p`
  color: var(--minimal-text-secondary);
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 1rem;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 16px;
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 30px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 15px;
  }
`;

export const FeatureItem = styled.li`
  color: var(--minimal-text-secondary);
  padding: 12px 16px;
  background: var(--minimal-gray-50);
  border: 1px solid var(--minimal-gray-200);
  border-radius: 8px;
  font-size: 0.9rem;
  position: relative;
  
  &::before {
    content: '✓';
    color: var(--minimal-primary);
    font-weight: bold;
    margin-right: 8px;
  }
  
  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.8rem;
    border-radius: 6px;
  }
`;

export const CategoryBadge = styled.span`
  background: var(--minimal-primary);
  color: var(--minimal-white);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.75rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 4px 10px;
    font-size: 0.7rem;
    margin-bottom: 10px;
    border-radius: 15px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 24px;
  
  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 20px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
  }
`;

export const SpecificationsSection = styled.div`
  margin: 24px 0;
  
  @media (max-width: 768px) {
    margin: 20px 0;
  }
  
  @media (max-width: 480px) {
    margin: 16px 0;
  }
`;

export const SpecificationsTitle = styled.h3`
  color: var(--minimal-text-primary);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

export const SpecificationsList = styled.div`
  display: grid;
  gap: 12px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const SpecificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background: var(--minimal-gray-50);
  border: 1px solid var(--minimal-gray-200);
  border-radius: 8px;
  
  @media (max-width: 768px) {
    padding: 10px 14px;
  }
  
  @media (max-width: 480px) {
    padding: 8px 12px;
    border-radius: 6px;
    flex-direction: column;
    gap: 4px;
  }
`;

export const SpecLabel = styled.span`
  font-weight: 600;
  color: var(--minimal-text-secondary);
  font-size: 0.9rem;
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const SpecValue = styled.span`
  color: var(--minimal-primary);
  font-weight: 500;
  font-size: 0.9rem;
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    font-weight: 400;
  }
`;

export const DetailedDescription = styled.div`
  margin: 20px 0;
  
  h4 {
    color: var(--minimal-text-primary);
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 12px;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 10px;
    }
    
    @media (max-width: 480px) {
      font-size: 0.95rem;
      margin-bottom: 8px;
    }
  }
  
  p {
    color: var(--minimal-text-secondary);
    line-height: 1.6;
    font-size: 0.95rem;
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 1.5;
    }
    
    @media (max-width: 480px) {
      font-size: 0.85rem;
      line-height: 1.4;
    }
  }
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  background: var(--minimal-white);
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
    padding: 16px;
    border-radius: 8px;
  }
`;

export const PageTitle = styled.h1`
  color: var(--minimal-text-primary);
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;