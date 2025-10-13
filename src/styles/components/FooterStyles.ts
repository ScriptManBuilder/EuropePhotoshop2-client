import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #f8fafc;
  color: #374151;
  padding: 60px 0 30px;
  border-top: 1px solid #e5e7eb;
  
  @media (max-width: 768px) {
    padding: 50px 0 25px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0 20px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const FooterMain = styled.div`
  display: grid;
  grid-template-columns: 200px 150px 180px 1fr;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;export const FooterSection = styled.div`
  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #1f2937;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 10px;
      
      a {
        color: #6b7280;
        font-size: 0.95rem;
        font-weight: 500;
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
          color: #1f2937;
        }
      }
    }
  }
`;

export const MoreAboutSection = styled.div`
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
  
  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #1f2937;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const PromoCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const PromoCard = styled.a`
  display: flex;
  flex-direction: column;
  background: #1f2937;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  width: 120px;
  height: 140px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.15);
  }
  
  img {
    width: 100%;
    height: 70px;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    
    img {
      width: 80px;
      height: 60px;
      flex-shrink: 0;
    }
  }
`;

export const PromoCardContent = styled.div`
  padding: 0.5rem;
  background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h4 {
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    line-height: 1.1;
  }
  
  p {
    color: #d1d5db;
    font-size: 0.65rem;
    margin: 0;
    font-weight: 400;
    line-height: 1.2;
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem;
    
    h4 {
      font-size: 0.85rem;
    }
    
    p {
      font-size: 0.75rem;
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 30px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding-top: 25px;
  }
`;

export const Copyright = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;
