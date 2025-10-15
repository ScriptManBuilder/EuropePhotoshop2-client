// Contact Information Constants
export const CONTACT_INFO = {
  email: process.env.REACT_APP_SUPPORT_EMAIL || 'support@photoshop-ecourses.com',
  phone: process.env.REACT_APP_SUPPORT_PHONE || '+14632639480',
  phoneFormatted: process.env.REACT_APP_SUPPORT_PHONE_FORMATTED || '+1 (463) 263-9480',
} as const;

// Company Information Constants
export const COMPANY_INFO = {
  name: process.env.REACT_APP_COMPANY_NAME || 'Elariosso Digital',
  websiteUrl: process.env.REACT_APP_WEBSITE_URL || 'photoshop-ecourses.com',
  address: process.env.REACT_APP_COMPANY_ADDRESS || '1350 Tumbleweed Way, Sacramento, CA, USA, 95834',
  owner: process.env.REACT_APP_COMPANY_OWNER || 'Elariosso Digital',
} as const;

// API Configuration
export const API_CONFIG = {
  baseUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3007',
} as const;

// App Configuration
export const APP_CONFIG = {
  name: process.env.REACT_APP_APP_NAME || 'CopywritingEcourses',
  version: process.env.REACT_APP_VERSION || '1.0.0',
} as const;

// Membership Configuration
export const MEMBERSHIP_CONFIG = {
  vip: {
    name: 'VIP Membership',
    monthlyPrice: 19.99,
    trialDays: 3,
    discountPercentage: 25,
    currency: 'EUR' as const,
    benefits: {
      discountPercentage: 25,
      exclusiveContent: true,
      prioritySupport: true,
      earlyAccess: true,
      unlimitedDownloads: true,
      certificateOfCompletion: true,
    },
    description: 'Get exclusive access to premium content and save 25% on all courses',
    features: [
      '25% discount on all courses',
      'Exclusive premium content',
      'Priority customer support',
      'Early access to new courses',
      'Unlimited course downloads',
      'Certificate of completion for all courses'
    ]
  }
} as const;