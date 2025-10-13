// Membership types and interfaces
export type MembershipStatus = 'none' | 'trial' | 'active' | 'cancelled' | 'expired';

export type MembershipPlan = 'vip';

export interface MembershipSubscription {
  id: string;
  plan: MembershipPlan;
  status: MembershipStatus;
  startDate: Date;
  endDate: Date | null;
  nextBillingDate: Date | null;
  trialEndDate: Date | null;
  monthlyPrice: number;
  currency: 'EUR' | 'USD';
  autoRenew: boolean;
  cancelledAt: Date | null;
  pausedAt: Date | null;
}

export interface MembershipBenefits {
  discountPercentage: number;
  exclusiveContent: boolean;
  prioritySupport: boolean;
  earlyAccess: boolean;
  unlimitedDownloads: boolean;
  certificateOfCompletion: boolean;
}

export interface MembershipUpsell {
  show: boolean;
  discountPercentage: number;
  trialDays: number;
  monthlyPrice: number;
  originalPrice?: number;
  benefits: MembershipBenefits;
}

export interface MembershipContextType {
  subscription: MembershipSubscription | null;
  isLoading: boolean;
  isMember: boolean;
  isOnTrial: boolean;
  upsell: MembershipUpsell;
  
  // Actions
  subscribeTo: (plan: MembershipPlan) => Promise<void>;
  cancelSubscription: () => Promise<void>;
  pauseSubscription: () => Promise<void>;
  resumeSubscription: () => Promise<void>;
  updatePaymentMethod: (paymentMethodId: string) => Promise<void>;
  checkMembershipStatus: () => Promise<void>;
}