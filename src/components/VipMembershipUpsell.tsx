import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useMembership } from '../contexts/MembershipContext';
import { usePrice } from '../hooks/usePrice';
import { MEMBERSHIP_CONFIG } from '../config/constants';

interface VipMembershipUpsellProps {
  onAccept?: () => void;
  onDecline?: () => void;
  cartSubtotal?: number;
  showDiscount?: boolean;
}

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const UpsellContainer = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 32px;
  margin: 24px 0;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 24px;
    margin: 16px 0;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

const Badge = styled.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
  backdrop-filter: blur(10px);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 8px 0;
  background: linear-gradient(45deg, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
`;

const OfferBox = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const TrialText = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;

const PriceText = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #FFD700;
`;

const RegularPriceText = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const SavingsHighlight = styled.div<{ show?: boolean }>`
  background: #FFD700;
  color: #333;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 16px;
  opacity: ${props => props.show ? 1 : 0};
  transform: ${props => props.show ? 'scale(1)' : 'scale(0.9)'};
  transition: all 0.3s ease;
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 24px 0;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 8px;
`;

const BenefitIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #FFD700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

const BenefitText = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const AcceptButton = styled.button`
  flex: 1;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: #333;
  border: none;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
    animation: ${pulseAnimation} 1.5s ease-in-out infinite;
  }

  &:active {
    transform: translateY(0);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

const DeclineButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 140px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const TimerText = styled.div`
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 16px;
`;

export const VipMembershipUpsell: React.FC<VipMembershipUpsellProps> = ({
  onAccept,
  onDecline,
  cartSubtotal = 0,
  showDiscount = true
}) => {
  const { subscribeTo, isLoading, isMember } = useMembership();
  const { formatPrice } = usePrice();
  const [isProcessing, setIsProcessing] = useState(false);

  // Don't show if already a member
  if (isMember) {
    return null;
  }

  const config = MEMBERSHIP_CONFIG.vip;
  const monthlyPrice = formatPrice(config.monthlyPrice);
  const potentialSavings = showDiscount && cartSubtotal > 0 ? 
    formatPrice((cartSubtotal * config.discountPercentage) / 100) : null;

  const handleAccept = async () => {
    if (isProcessing) return;
    
    setIsProcessing(true);
    try {
      await subscribeTo('vip');
      onAccept?.();
    } catch (error) {
      console.error('Failed to subscribe:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDecline = () => {
    onDecline?.();
  };

  return (
    <UpsellContainer>
      <Header>
        <Badge>🌟 LIMITED TIME OFFER</Badge>
        <Title>Join VIP Membership</Title>
        <Subtitle>Unlock exclusive benefits and save on every course</Subtitle>
      </Header>

      <OfferBox>
        <PriceRow>
          <TrialText>
            🎁 <strong>{config.trialDays} days FREE trial</strong>
          </TrialText>
          <div>
            <PriceText>FREE</PriceText>
          </div>
        </PriceRow>
        <PriceRow>
          <RegularPriceText>Then just {monthlyPrice}/month</RegularPriceText>
          <RegularPriceText>Cancel anytime</RegularPriceText>
        </PriceRow>
      </OfferBox>

      <SavingsHighlight show={!!potentialSavings}>
        {potentialSavings && (
          <>💰 Save {potentialSavings} on your current cart with VIP discount!</>
        )}
      </SavingsHighlight>

      <BenefitsList>
        {config.features.map((feature, index) => (
          <BenefitItem key={index}>
            <BenefitIcon>✓</BenefitIcon>
            <BenefitText>{feature}</BenefitText>
          </BenefitItem>
        ))}
      </BenefitsList>

      <ButtonContainer>
        <AcceptButton 
          onClick={handleAccept} 
          disabled={isProcessing || isLoading}
        >
          {isProcessing || isLoading ? (
            '⏳ Starting Your Trial...'
          ) : (
            `🚀 Start My ${config.trialDays}-Day FREE Trial`
          )}
        </AcceptButton>
        <DeclineButton onClick={handleDecline}>
          Maybe Later
        </DeclineButton>
      </ButtonContainer>

      <TimerText>
        ⚡ This offer is only available during checkout
      </TimerText>
    </UpsellContainer>
  );
};

export default VipMembershipUpsell;