import React, { useState, useEffect } from 'react';
import { MailIcon, PhoneIcon, ClockIcon } from '../components/Icons';
import { CONTACT_INFO } from '../config/constants';
import {
  SupportWrapper,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  SupportContent,
  ContactSection,
  SectionTitle,
  ContactMethodsGrid,
  ContactCard,
  ContactIcon,
  ContactContent,
  ContactTitle,
  ContactInfo,
  ContactLink,
  ContactText,
  FAQSection,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  Container
} from '../styles/pages/SupportStyles';

const Support: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I access my purchased Photoshop courses?",
      answer: "After purchase, you'll receive instant access to your Photoshop courses through your account dashboard. Simply log in and navigate to 'My Courses' to start learning."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 7-day refund policy for all Photoshop courses. If you're not satisfied with your purchase, contact our support team within 7 days for a full refund."
    },
    {
      question: "How long do I have access to the Photoshop courses?",
      answer: "All Photoshop course purchases include lifetime access. You can learn at your own pace and revisit the material anytime without time restrictions."
    },
    {
      question: "Do you provide certificates upon completion?",
      answer: "Yes, you'll receive a certificate of completion for each Photoshop course you finish. Certificates can be downloaded from your account and shared on professional networks."
    }
  ];

  return (
    <SupportWrapper>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Student Support</HeroTitle>
            <HeroSubtitle>
              We're here to help you succeed. Get expert assistance with your creative design learning journey from our dedicated support team.
            </HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>

      <Container>
        <SupportContent>
          <ContactSection>
            <SectionTitle>Get in Touch</SectionTitle>
            <ContactMethodsGrid>
              <ContactCard>
                <ContactIcon>
                  <MailIcon size={isMobile ? 24 : 32} />
                </ContactIcon>
                <ContactContent>
                  <ContactTitle>Email Support</ContactTitle>
                  <ContactInfo>Average response time: 2-4 hours</ContactInfo>
                  <ContactText>
                    {CONTACT_INFO.email}
                  </ContactText>
                </ContactContent>
              </ContactCard>
              
              <ContactCard>
                <ContactIcon>
                  <PhoneIcon size={isMobile ? 24 : 32} />
                </ContactIcon>
                <ContactContent>
                  <ContactTitle>Phone Support</ContactTitle>
                  <ContactInfo>Monday - Friday, 9 AM - 6 PM GMT</ContactInfo>
                  <ContactText>
                    {CONTACT_INFO.phoneFormatted}
                  </ContactText>
                </ContactContent>
              </ContactCard>
              
              <ContactCard>
                <ContactIcon>
                  <ClockIcon size={isMobile ? 24 : 32} />
                </ContactIcon>
                <ContactContent>
                  <ContactTitle>Business Hours</ContactTitle>
                  <ContactInfo>Monday - Friday: 9:00 AM - 6:00 PM GMT</ContactInfo>
                  <ContactInfo style={{ marginTop: '5px' }}>Weekend: Emergency support only</ContactInfo>
                </ContactContent>
              </ContactCard>
            </ContactMethodsGrid>
          </ContactSection>
          
          
          <FAQSection>
            <SectionTitle style={{ textAlign: 'center' }}>
              Frequently Asked Questions
            </SectionTitle>
            
            {faqData.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion
                  type="button"
                  className={activeFAQ === index ? 'active' : ''}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </FAQQuestion>
                <FAQAnswer className={activeFAQ === index ? 'active' : ''}>
                  <p>{faq.answer}</p>
                </FAQAnswer>
              </FAQItem>
            ))}
          </FAQSection>
        </SupportContent>
      </Container>
    </SupportWrapper>
  );
};

export default Support;
