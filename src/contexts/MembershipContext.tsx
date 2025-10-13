import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { MembershipContextType, MembershipSubscription, MembershipPlan, MembershipStatus } from '../types/Membership';
import { MEMBERSHIP_CONFIG } from '../config/constants';

// Membership state
interface MembershipState {
  subscription: MembershipSubscription | null;
  isLoading: boolean;
}

// Membership actions
type MembershipAction = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_SUBSCRIPTION'; payload: MembershipSubscription | null }
  | { type: 'UPDATE_SUBSCRIPTION'; payload: Partial<MembershipSubscription> }
  | { type: 'CANCEL_SUBSCRIPTION' }
  | { type: 'PAUSE_SUBSCRIPTION' }
  | { type: 'RESUME_SUBSCRIPTION' };

// Initial state
const initialState: MembershipState = {
  subscription: null,
  isLoading: false,
};

// Reducer
function membershipReducer(state: MembershipState, action: MembershipAction): MembershipState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_SUBSCRIPTION':
      return { ...state, subscription: action.payload, isLoading: false };
    
    case 'UPDATE_SUBSCRIPTION':
      return { 
        ...state, 
        subscription: state.subscription ? { ...state.subscription, ...action.payload } : null 
      };
    
    case 'CANCEL_SUBSCRIPTION':
      return {
        ...state,
        subscription: state.subscription ? {
          ...state.subscription,
          status: 'cancelled',
          cancelledAt: new Date(),
          autoRenew: false
        } : null
      };
    
    case 'PAUSE_SUBSCRIPTION':
      return {
        ...state,
        subscription: state.subscription ? {
          ...state.subscription,
          pausedAt: new Date(),
          autoRenew: false
        } : null
      };
    
    case 'RESUME_SUBSCRIPTION':
      return {
        ...state,
        subscription: state.subscription ? {
          ...state.subscription,
          pausedAt: null,
          autoRenew: true
        } : null
      };
    
    default:
      return state;
  }
}

// Create context
const MembershipContext = createContext<MembershipContextType | undefined>(undefined);

// Provider props
interface MembershipProviderProps {
  children: ReactNode;
}

// Mock API functions (replace with real API calls)
const membershipAPI = {
  async getSubscription(): Promise<MembershipSubscription | null> {
    // Simulate API call
    const stored = localStorage.getItem('membership_subscription');
    if (stored) {
      const subscription = JSON.parse(stored);
      return {
        ...subscription,
        startDate: new Date(subscription.startDate),
        endDate: subscription.endDate ? new Date(subscription.endDate) : null,
        nextBillingDate: subscription.nextBillingDate ? new Date(subscription.nextBillingDate) : null,
        trialEndDate: subscription.trialEndDate ? new Date(subscription.trialEndDate) : null,
        cancelledAt: subscription.cancelledAt ? new Date(subscription.cancelledAt) : null,
        pausedAt: subscription.pausedAt ? new Date(subscription.pausedAt) : null,
      };
    }
    return null;
  },

  async subscribe(plan: MembershipPlan): Promise<MembershipSubscription> {
    // Simulate API call
    const now = new Date();
    const trialEndDate = new Date(now.getTime() + MEMBERSHIP_CONFIG.vip.trialDays * 24 * 60 * 60 * 1000);
    const nextBillingDate = new Date(trialEndDate.getTime() + 30 * 24 * 60 * 60 * 1000);

    const subscription: MembershipSubscription = {
      id: `sub_${Date.now()}`,
      plan,
      status: 'trial',
      startDate: now,
      endDate: null,
      nextBillingDate,
      trialEndDate,
      monthlyPrice: MEMBERSHIP_CONFIG.vip.monthlyPrice,
      currency: 'EUR',
      autoRenew: true,
      cancelledAt: null,
      pausedAt: null,
    };

    localStorage.setItem('membership_subscription', JSON.stringify(subscription));
    return subscription;
  },

  async cancelSubscription(): Promise<void> {
    // Simulate API call
    const stored = localStorage.getItem('membership_subscription');
    if (stored) {
      const subscription = JSON.parse(stored);
      subscription.status = 'cancelled';
      subscription.cancelledAt = new Date().toISOString();
      subscription.autoRenew = false;
      localStorage.setItem('membership_subscription', JSON.stringify(subscription));
    }
  },

  async pauseSubscription(): Promise<void> {
    // Simulate API call
    const stored = localStorage.getItem('membership_subscription');
    if (stored) {
      const subscription = JSON.parse(stored);
      subscription.pausedAt = new Date().toISOString();
      subscription.autoRenew = false;
      localStorage.setItem('membership_subscription', JSON.stringify(subscription));
    }
  },

  async resumeSubscription(): Promise<void> {
    // Simulate API call
    const stored = localStorage.getItem('membership_subscription');
    if (stored) {
      const subscription = JSON.parse(stored);
      subscription.pausedAt = null;
      subscription.autoRenew = true;
      localStorage.setItem('membership_subscription', JSON.stringify(subscription));
    }
  },

  async updatePaymentMethod(paymentMethodId: string): Promise<void> {
    // Simulate API call
    console.log('Payment method updated:', paymentMethodId);
  }
};

// Provider component
export function MembershipProvider({ children }: MembershipProviderProps) {
  const [state, dispatch] = useReducer(membershipReducer, initialState);

  // Helper functions
  const isMember = (): boolean => {
    return state.subscription?.status === 'active' || state.subscription?.status === 'trial';
  };

  const isOnTrial = (): boolean => {
    return state.subscription?.status === 'trial';
  };

  // Actions
  const subscribeTo = async (plan: MembershipPlan): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const subscription = await membershipAPI.subscribe(plan);
      dispatch({ type: 'SET_SUBSCRIPTION', payload: subscription });
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw error;
    }
  };

  const cancelSubscription = async (): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      await membershipAPI.cancelSubscription();
      dispatch({ type: 'CANCEL_SUBSCRIPTION' });
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw error;
    }
  };

  const pauseSubscription = async (): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      await membershipAPI.pauseSubscription();
      dispatch({ type: 'PAUSE_SUBSCRIPTION' });
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw error;
    }
  };

  const resumeSubscription = async (): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      await membershipAPI.resumeSubscription();
      dispatch({ type: 'RESUME_SUBSCRIPTION' });
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw error;
    }
  };

  const updatePaymentMethod = async (paymentMethodId: string): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      await membershipAPI.updatePaymentMethod(paymentMethodId);
      dispatch({ type: 'SET_LOADING', payload: false });
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw error;
    }
  };

  const checkMembershipStatus = async (): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const subscription = await membershipAPI.getSubscription();
      dispatch({ type: 'SET_SUBSCRIPTION', payload: subscription });
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw error;
    }
  };

  // Load subscription on mount
  useEffect(() => {
    checkMembershipStatus();
  }, []);

  const contextValue: MembershipContextType = {
    subscription: state.subscription,
    isLoading: state.isLoading,
    isMember: isMember(),
    isOnTrial: isOnTrial(),
    upsell: {
      show: !isMember(),
      discountPercentage: MEMBERSHIP_CONFIG.vip.discountPercentage,
      trialDays: MEMBERSHIP_CONFIG.vip.trialDays,
      monthlyPrice: MEMBERSHIP_CONFIG.vip.monthlyPrice,
      benefits: MEMBERSHIP_CONFIG.vip.benefits,
    },
    subscribeTo,
    cancelSubscription,
    pauseSubscription,
    resumeSubscription,
    updatePaymentMethod,
    checkMembershipStatus,
  };

  return (
    <MembershipContext.Provider value={contextValue}>
      {children}
    </MembershipContext.Provider>
  );
}

// Hook to use membership context
export function useMembership(): MembershipContextType {
  const context = useContext(MembershipContext);
  if (!context) {
    throw new Error('useMembership must be used within a MembershipProvider');
  }
  return context;
}

export default MembershipContext;