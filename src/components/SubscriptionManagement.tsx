import React, { useState } from 'react';
import styled from 'styled-components';
import { useMembership } from '../contexts/MembershipContext';
import { usePrice } from '../hooks/usePrice';
import { MEMBERSHIP_CONFIG } from '../config/constants';

const SubscriptionSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
  margin-bottom: 32px;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 16px;
    margin: 0 -12px 24px -12px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin: 0 -8px 20px -8px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin: 0 0 24px 0;
  display: flex;
  align-items: center;
  gap: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 16px;
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`;

const StatusBadge = styled.div<{ status: string }>`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  
  ${props => {
    switch (props.status) {
      case 'trial':
        return `
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          animation: pulse 2s infinite;
        `;
      case 'active':
        return `
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
        `;
      case 'cancelled':
        return `
          background: rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.3);
        `;
      default:
        return `
          background: rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.8);
        `;
    }
  }}

  @keyframes pulse {
    0% { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); }
    50% { box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4); }
    100% { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); }
  }
`;

const SubscriptionCard = styled.div`
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;

  &.premium {
    border: 2px solid #ffd700;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 164, 0, 0.05));
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #ffd700, #ffa500);
    }
  }
`;

const SubscriptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const SubscriptionInfo = styled.div`
  flex: 1;
`;

const PlanTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  margin: 0 0 8px 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 1.3rem;
    text-align: center;
  }
`;

const PlanDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 16px 0;
  font-size: 1.1rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    text-align: center;
    font-size: 1rem;
  }
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    justify-content: center;
    margin-bottom: 16px;
  }
`;

const Price = styled.span`
  font-size: 2rem;
  font-weight: 900;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const PriceUnit = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SubscriptionDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 24px 0;
  padding: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
    padding: 16px;
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DetailLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.1em;
  margin-bottom: 4px;
`;

const DetailValue = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 24px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 12px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.95);
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }

  &::before {
    content: '✓';
    color: white;
    font-weight: bold;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    font-size: 14px;
    flex-shrink: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    gap: 10px;

    &::before {
      width: 18px;
      height: 18px;
      font-size: 12px;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 24px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 12px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 0.9rem;
    width: 100%;
    max-width: 280px;
  }

  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border-color: transparent;
          
          &:hover:not(:disabled) {
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
          }
        `;
      case 'danger':
        return `
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          border-color: transparent;
          
          &:hover:not(:disabled) {
            background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          }
        `;
      default:
        return `
          background: rgba(255, 255, 255, 0.9);
          color: #1f2937;
          border-color: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          
          &:hover:not(:disabled) {
            background: white;
            border-color: rgba(255, 255, 255, 0.8);
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #6b7280;
`;

const TrialBanner = styled.div`
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  text-align: center;
`;

const formatDate = (date: Date | null): string => {
  if (!date) return 'N/A';
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

const getDaysRemaining = (date: Date | null): number => {
  if (!date) return 0;
  const now = new Date();
  const diffTime = date.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const SubscriptionManagement: React.FC = () => {
  const { 
    subscription, 
    isLoading, 
    isMember, 
    isOnTrial, 
    cancelSubscription, 
    pauseSubscription, 
    resumeSubscription 
  } = useMembership();
  
  const { formatPrice } = usePrice();
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const handleAction = async (action: string, actionFn: () => Promise<void>) => {
    setActionLoading(action);
    try {
      await actionFn();
    } catch (error) {
      console.error(`Failed to ${action}:`, error);
    } finally {
      setActionLoading(null);
    }
  };

  if (isLoading) {
    return (
      <SubscriptionSection>
        <SectionTitle>VIP Membership</SectionTitle>
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div>Loading subscription details...</div>
        </div>
      </SubscriptionSection>
    );
  }

  if (!isMember || !subscription) {
    return (
      <SubscriptionSection>
        <SectionTitle>🌟 VIP Membership</SectionTitle>
        <EmptyState>
          <h3 style={{ margin: '0 0 8px 0' }}>You're not a VIP member yet</h3>
          <p style={{ margin: '0 0 20px 0' }}>Join our VIP membership to get exclusive benefits and discounts!</p>
          <ActionButton variant="primary">
            Become a VIP Member
          </ActionButton>
        </EmptyState>
      </SubscriptionSection>
    );
  }

  const config = MEMBERSHIP_CONFIG.vip;
  const trialDaysRemaining = subscription.trialEndDate ? getDaysRemaining(subscription.trialEndDate) : 0;

  return (
    <SubscriptionSection>
      <SectionTitle>
        🌟 VIP Membership
        <StatusBadge status={subscription.status}>
          {subscription.status === 'trial' ? `Trial (${trialDaysRemaining} days left)` : 
           subscription.status === 'active' ? 'Active' :
           subscription.status === 'cancelled' ? 'Cancelled' : 
           subscription.status}
        </StatusBadge>
      </SectionTitle>

      {isOnTrial && (
        <TrialBanner>
          🎉 You're on a free trial! Enjoy {trialDaysRemaining} more days of VIP benefits.
          {trialDaysRemaining <= 1 && ' Your trial ends soon!'}
        </TrialBanner>
      )}

      <SubscriptionCard className="premium">
        <SubscriptionHeader>
          <SubscriptionInfo>
            <PlanTitle>{config.name}</PlanTitle>
            <PlanDescription>{config.description}</PlanDescription>
            <PriceInfo>
              <Price>{formatPrice(config.monthlyPrice)}</Price>
              <PriceUnit>/month</PriceUnit>
            </PriceInfo>
          </SubscriptionInfo>
        </SubscriptionHeader>

        <SubscriptionDetails>
          <DetailItem>
            <DetailLabel>Status</DetailLabel>
            <DetailValue>
              {subscription.status === 'trial' ? 'Free Trial' : 
               subscription.status === 'active' ? 'Active Subscription' :
               subscription.status === 'cancelled' ? 'Cancelled' : 
               subscription.status}
            </DetailValue>
          </DetailItem>
          
          <DetailItem>
            <DetailLabel>Started</DetailLabel>
            <DetailValue>{formatDate(subscription.startDate)}</DetailValue>
          </DetailItem>

          {subscription.nextBillingDate && (
            <DetailItem>
              <DetailLabel>Next Billing</DetailLabel>
              <DetailValue>{formatDate(subscription.nextBillingDate)}</DetailValue>
            </DetailItem>
          )}

          {subscription.trialEndDate && isOnTrial && (
            <DetailItem>
              <DetailLabel>Trial Ends</DetailLabel>
              <DetailValue>{formatDate(subscription.trialEndDate)}</DetailValue>
            </DetailItem>
          )}

          <DetailItem>
            <DetailLabel>Auto-Renew</DetailLabel>
            <DetailValue>{subscription.autoRenew ? 'Enabled' : 'Disabled'}</DetailValue>
          </DetailItem>
        </SubscriptionDetails>

        <BenefitsList>
          {config.features.map((feature, index) => (
            <BenefitItem key={index}>{feature}</BenefitItem>
          ))}
        </BenefitsList>

        <ActionButtons>
          {subscription.status === 'active' && !subscription.pausedAt && (
            <>
              <ActionButton
                variant="secondary"
                onClick={() => handleAction('pause', pauseSubscription)}
                disabled={actionLoading === 'pause'}
              >
                {actionLoading === 'pause' ? 'Pausing...' : 'Pause Subscription'}
              </ActionButton>
              
              <ActionButton
                variant="danger"
                onClick={() => handleAction('cancel', cancelSubscription)}
                disabled={actionLoading === 'cancel'}
              >
                {actionLoading === 'cancel' ? 'Cancelling...' : 'Cancel Subscription'}
              </ActionButton>
            </>
          )}

          {subscription.pausedAt && (
            <ActionButton
              variant="primary"
              onClick={() => handleAction('resume', resumeSubscription)}
              disabled={actionLoading === 'resume'}
            >
              {actionLoading === 'resume' ? 'Resuming...' : 'Resume Subscription'}
            </ActionButton>
          )}

          {subscription.status === 'trial' && (
            <ActionButton variant="secondary" disabled>
              Manage Payment Method
            </ActionButton>
          )}

          {subscription.status === 'cancelled' && (
            <ActionButton variant="primary" disabled>
              Resubscribe
            </ActionButton>
          )}
        </ActionButtons>
      </SubscriptionCard>

      <div style={{ fontSize: '0.875rem', color: '#6b7280', textAlign: 'center' }}>
        Need help? <a href="/support" style={{ color: '#3b82f6' }}>Contact Support</a>
      </div>
    </SubscriptionSection>
  );
};

export default SubscriptionManagement;