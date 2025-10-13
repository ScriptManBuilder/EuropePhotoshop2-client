import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    margin-top: 70px;
    padding: 15px;
    min-height: calc(100vh - 70px);
  }

  @media (max-width: 480px) {
    margin-top: 60px;
    padding: 10px;
    min-height: calc(100vh - 60px);
  }
`;

export const RegisterCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 50px 40px;
  box-shadow: 
    0 32px 64px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 520px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 40px 30px;
    border-radius: 20px;
    max-width: 460px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
    border-radius: 16px;
    margin: 0 auto;
  }

  @media (max-width: 360px) {
    padding: 25px 15px;
  }
`;

export const RegisterHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

export const RegisterTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #2d3748;
  margin: 20px 0 12px 0;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin: 15px 0 10px 0;
  }

  @media (max-width: 480px) {
    font-size: 1.9rem;
    margin: 12px 0 8px 0;
  }

  @media (max-width: 360px) {
    font-size: 1.7rem;
  }
`;

export const RegisterSubtitle = styled.p`
  color: #718096;
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.6;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

export const BrandLogo = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
  margin: 0 auto 25px auto;
  box-shadow: 
    0 12px 30px rgba(102, 126, 234, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea);
    border-radius: 22px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.6rem;
    border-radius: 16px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 55px;
    height: 55px;
    font-size: 1.4rem;
    margin-bottom: 15px;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 24px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 28px;
  position: relative;

  @media (max-width: 480px) {
    margin-bottom: 24px;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 10px;
  font-size: 1rem;
  transition: color 0.2s ease;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  background: rgba(247, 250, 252, 0.8);
  backdrop-filter: blur(10px);
  color: #2d3748;
  font-weight: 500;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 
      0 0 0 4px rgba(102, 126, 234, 0.1),
      0 8px 25px rgba(102, 126, 234, 0.15);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #a0aec0;
    font-weight: 400;
  }

  &:hover:not(:focus) {
    border-color: #cbd5e0;
    background: rgba(255, 255, 255, 0.85);
  }

  @media (max-width: 768px) {
    padding: 14px 18px;
    font-size: 1rem;
    border-radius: 14px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    font-size: 0.95rem;
    border-radius: 12px;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 18px 24px;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 15px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 16px 20px;
    font-size: 1rem;
    border-radius: 14px;
  }

  @media (max-width: 480px) {
    padding: 14px 18px;
    font-size: 0.95rem;
    border-radius: 12px;
  }
`;

export const ErrorMessage = styled.div`
  background: linear-gradient(135deg, #fed7d7 0%, #feb2b2 100%);
  border: 1px solid #f56565;
  color: #c53030;
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  font-size: 0.95rem;
  text-align: center;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(245, 101, 101, 0.2);

  @media (max-width: 480px) {
    padding: 14px 16px;
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
`;

export const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #c6f6d5 0%, #9ae6b4 100%);
  border: 1px solid #48bb78;
  color: #2f855a;
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  font-size: 0.95rem;
  text-align: center;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(72, 187, 120, 0.2);

  @media (max-width: 480px) {
    padding: 14px 16px;
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
`;

export const PasswordStrengthContainer = styled.div`
  margin-top: 12px;

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const PasswordStrengthLabel = styled.div`
  font-size: 0.85rem;
  color: #718096;
  margin-bottom: 8px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 6px;
  }
`;

export const PasswordStrengthBar = styled.div`
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 5px;
  }
`;

export const PasswordStrengthFill = styled.div<{ width: number; color: string }>`
  width: ${props => props.width}%;
  height: 100%;
  background: ${props => props.color};
  transition: all 0.3s ease;
  border-radius: 3px;
`;

export const LoginLink = styled.div`
  text-align: center;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 2px solid #e2e8f0;
  color: #718096;
  font-size: 1rem;
  font-weight: 500;

  a {
    color: #667eea;
    text-decoration: none;
    font-weight: 700;
    margin-left: 8px;
    transition: all 0.2s ease;
    
    &:hover {
      text-decoration: underline;
      color: #5a67d8;
    }
  }

  @media (max-width: 480px) {
    margin-top: 25px;
    padding-top: 25px;
    font-size: 0.95rem;
  }

  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;
