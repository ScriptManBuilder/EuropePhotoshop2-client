import styled from 'styled-components';

export const CartWrapper = styled.div`
  margin-top: 120px;
  min-height: calc(100vh - 120px);
  padding: 60px 0;
  background: #ffffff;
  color: #1a1a1a;
`;

export const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 40px;
  align-items: start;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const CartItems = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  border: 1px solid #e5e7eb;
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr auto auto auto;
  gap: 20px;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #f3f4f6;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 100px 1fr;
    gap: 15px;
    text-align: left;
    
    /* На мобильных устройствах размещаем элементы по строкам */
    > *:nth-child(3), /* Quantity controls */
    > *:nth-child(4), /* Price */
    > *:nth-child(5)  /* Remove button */ {
      grid-column: 1 / -1;
      justify-self: center;
      margin-top: 10px;
    }
  }
`;

export const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  overflow: hidden;
  position: relative;
  
  /* Fallback background for when image fails to load */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
`;

export const ItemInfo = styled.div`
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 6px;
    color: #1f2937;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    letter-spacing: -0.01em;
    line-height: 1.4;
  }
  
  p {
    color: #6b7280;
    font-size: 0.9rem;
    line-height: 1.5;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 400;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f9fafb;
  border-radius: 25px;
  padding: 5px;
  border: 1px solid #e5e7eb;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #374151;
  
  &:hover {
    background: #667eea;
    color: white;
    border-color: #667eea;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Quantity = styled.span`
  font-weight: 600;
  min-width: 30px;
  text-align: center;
  color: #1f2937;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const ItemPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #667eea;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.01em;
`;

export const RemoveButton = styled.button`
  color: #ff6b6b;
  font-size: 1.2rem;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ff6b6b;
    color: white;
  }
`;

export const CartSummary = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  border: 1px solid #e5e7eb;
  position: sticky;
  top: 140px;
  width: 100%;
  min-width: 300px;
`;

export const CheckoutButton = styled.div`
  width: 100%;
  margin-top: 20px;
  
  button, a {
    width: 100% !important;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
    color: white !important;
    border: none !important;
    border-radius: 16px !important;
    font-size: 1.2rem !important;
    font-weight: 800 !important;
    letter-spacing: 1px !important;
    text-transform: uppercase !important;
    padding: 18px 32px !important;
    min-height: 60px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    box-shadow: 
      0 8px 24px rgba(16, 185, 129, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.1) !important;
    position: relative !important;
    overflow: hidden !important;
    text-decoration: none !important;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.6s ease;
    }
    
    &:hover {
      background: linear-gradient(135deg, #059669 0%, #047857 100%) !important;
      transform: translateY(-3px) scale(1.02) !important;
      box-shadow: 
        0 12px 32px rgba(16, 185, 129, 0.6),
        0 0 0 1px rgba(255, 255, 255, 0.2) !important;
      
      &::before {
        left: 100%;
      }
    }
    
    &:active {
      transform: translateY(-1px) scale(1.01) !important;
      box-shadow: 
        0 6px 20px rgba(16, 185, 129, 0.5),
        0 0 0 1px rgba(255, 255, 255, 0.1) !important;
    }

    @media (max-width: 768px) {
      font-size: 1.1rem !important;
      padding: 16px 24px !important;
      min-height: 56px !important;
      border-radius: 14px !important;
    }

    @media (max-width: 480px) {
      font-size: 1rem !important;
      padding: 14px 20px !important;
      min-height: 52px !important;
      border-radius: 12px !important;
      letter-spacing: 0.5px !important;
    }
  }
`;

export const ContinueShoppingButton = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 28px;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    color: #475569;
    border: 2px solid #cbd5e1;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    white-space: nowrap;
    text-transform: none;
    letter-spacing: 0;
    width: auto;
    
    &::before {
      content: '←';
      font-size: 1.1rem;
      transition: transform 0.3s ease;
    }
    
    &:hover {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-color: #667eea;
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
      
      &::before {
        transform: translateX(-3px);
      }
    }
    
    &:active {
      transform: translateY(-1px) scale(1.01);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
    }

    @media (max-width: 768px) {
      padding: 12px 24px;
      font-size: 0.95rem;
    }

    @media (max-width: 480px) {
      padding: 10px 20px;
      font-size: 0.9rem;
    }
  }
`;

export const SummaryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 22px;
  color: #1f2937;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.01em;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  color: #374151;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 400;
  
  &.total {
    border-top: 2px solid #e5e7eb;
    padding-top: 16px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #1f2937;
    letter-spacing: -0.01em;
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 80px 20px;
  background: #ffffff;
  border-radius: 15px;
  border: 1px solid #e5e7eb;
  
  .icon {
    font-size: 4rem;
    color: #d1d5db;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 1.5rem;
    color: #374151;
    margin-bottom: 16px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 600;
    letter-spacing: -0.01em;
  }
  
  p {
    color: #6b7280;
    margin-bottom: 30px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
  }
`;