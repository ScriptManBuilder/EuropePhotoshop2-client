import styled from 'styled-components';

export const SupportWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  @media (max-width: 768px) {
    padding-top: 80px;
  }
  
  @media (max-width: 480px) {
    padding-top: 100px;
  }
`;

export const HeroSection = styled.section`
  padding: 120px 0 80px;
  text-align: center;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 60px 0 60px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0 40px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -1px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 5px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 90%;
    padding: 0 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

export const SupportContent = styled.div`
  background: white;
  margin-top: -60px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  padding: 60px 40px;
  position: relative;
  z-index: 3;
  
  @media (max-width: 768px) {
    margin-top: -40px;
    padding: 40px 20px;
    border-radius: 15px;
  }
  
  @media (max-width: 480px) {
    margin-top: -30px;
    padding: 30px 15px;
    border-radius: 10px;
  }
`;

export const ContactSection = styled.section`
  margin-bottom: 80px;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 50px;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 25px;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 2px;
    
    @media (max-width: 480px) {
      width: 60px;
      height: 3px;
      bottom: -10px;
    }
  }
`;

export const ContactMethodsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    gap: 15px;
    margin-bottom: 25px;
  }
`;

export const ContactCard = styled.div`
  background: #f8f9fa;
  padding: 40px 30px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 15px;
    border-radius: 10px;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: #667eea;
    background: white;
    
    @media (max-width: 480px) {
      transform: translateY(-5px);
    }
  }
`;

export const ContactIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  transition: all 0.3s ease;
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
  }
  
  ${ContactCard}:hover & {
    transform: scale(1.1);
    
    @media (max-width: 480px) {
      transform: scale(1.05);
    }
  }
`;

export const ContactContent = styled.div``;

export const ContactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 15px;
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

export const ContactInfo = styled.p`
  color: #6c757d;
  margin-bottom: 15px;
  line-height: 1.6;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
`;

export const ContactLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  word-break: break-all;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
  
  &:hover {
    color: #764ba2;
    text-decoration: underline;
  }
`;

export const ContactText = styled.span`
  color: #667eea;
  font-weight: 600;
  font-size: 1.1rem;
  word-break: break-all;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ContactForm = styled.form`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 15px;
  }
`;

export const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  margin-bottom: 15px;
  background: #f8f9fa;
  border-radius: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e9ecef;
    transform: translateY(-2px);
  }
  
  .icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  
  .content {
    flex: 1;
    
    h4 {
      color: #333;
      margin-bottom: 5px;
      font-size: 1.1rem;
    }
    
    p {
      color: #666;
      margin: 0;
      font-size: 0.9rem;
    }
    
    a {
      color: #667eea;
      text-decoration: none;
      font-weight: 500;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 8px;
    color: #333;
    font-weight: 500;
  }
  
  input,
  textarea,
  select {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e9ecef;
    border-radius: 10px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #667eea;
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const FAQSection = styled.section`
  margin-top: 60px;
  
  @media (max-width: 768px) {
    margin-top: 40px;
  }
  
  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

export const FAQItem = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  margin-bottom: 15px;
  overflow: hidden;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const FAQQuestion = styled.button`
  width: 100%;
  padding: 25px 30px;
  background: none;
  border: none;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 20px 25px;
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    padding: 15px 20px;
    font-size: 1rem;
    line-height: 1.4;
  }
  
  &::after {
    content: '+';
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    font-weight: 300;
    transition: transform 0.3s ease;
    
    @media (max-width: 480px) {
      right: 20px;
      font-size: 1.3rem;
    }
  }
  
  &.active::after {
    transform: translateY(-50%) rotate(45deg);
  }
  
  &:hover {
    color: #667eea;
    background: rgba(102, 126, 234, 0.05);
  }
`;

export const FAQAnswer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: white;
  
  &.active {
    max-height: 200px;
  }
  
  p {
    padding: 0 30px 25px;
    color: #6c757d;
    line-height: 1.6;
    margin: 0;
    
    @media (max-width: 768px) {
      padding: 0 25px 20px;
      font-size: 0.95rem;
    }
    
    @media (max-width: 480px) {
      padding: 0 20px 15px;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`;
