import React from 'react';
import styled from 'styled-components';
import { usePrice } from '../hooks/usePrice';
import { CONTACT_INFO, COMPANY_INFO } from '../config/constants';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 60px;
  color: var(--minimal-gray-900);
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: var(--minimal-gray-900);
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--minimal-gray-900);
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const RefundPolicy: React.FC = () => {
  const { formatPrice } = usePrice();

  return (
    <Container>
      <Title>Digital Course Refund Policy</Title>
      
      <Section>
        <Paragraph><strong>Last updated:</strong> {new Date().toLocaleDateString()}</Paragraph>
      </Section>

      <Section>
        <Paragraph>
          At {COMPANY_INFO.name}, we stand behind the quality of our Adobe Photoshop courses and want you to be satisfied with your learning experience. 
          This refund policy outlines the terms and conditions for refunds on our digital Adobe Photoshop course purchases.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>1. Digital Course Refund Period</SectionTitle>
        <Paragraph>
          We offer a 7-day satisfaction guarantee on all Adobe Photoshop course purchases. You may request a refund within 7 days 
          of your course purchase, provided you have completed less than 25% of the course content.
        </Paragraph>
        <Paragraph>
          This policy ensures that you have sufficient time to evaluate the course quality while protecting the 
          intellectual property of our comprehensive course materials.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. Refund Eligibility Requirements</SectionTitle>
        <Paragraph>
          To be eligible for a refund, the following conditions must be met:
        </Paragraph>
        <Paragraph>
          • Course was purchased within the last 7 days<br/>
          • Less than 25% of course content has been accessed/completed<br/>
          • No downloadable course materials have been accessed<br/>
          • Valid reason for refund request is provided<br/>
          • Original payment method is available for refund processing
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. Digital Course Refund Process</SectionTitle>
        <Paragraph>
          To request a refund for your Adobe Photoshop course purchase:
        </Paragraph>
        <Paragraph>
          1. Contact our support team at {CONTACT_INFO.email}<br/>
          2. Include your order number and account email address<br/>
          3. Provide a brief explanation for your refund request<br/>
          4. Our team will review your request within 24-48 hours<br/>
          5. Upon approval, your refund will be processed within 5-10 business days
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Non-Refundable Circumstances</SectionTitle>
        <Paragraph>
          Refunds will NOT be granted in the following situations:
        </Paragraph>
        <Paragraph>
          • More than 7 days have passed since purchase<br/>
          • More than 25% of course content has been accessed<br/>
          • Course completion certificate has been downloaded<br/>
          • Course materials have been downloaded or shared<br/>
          • Technical issues on the user's end (incompatible devices, internet connectivity)<br/>
          • Change of mind after substantial course completion<br/>
          • Duplicate purchases (contact support for account credit instead)
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Refund Processing and Timeline</SectionTitle>
        <Paragraph>
          Approved refunds will be processed to your original payment method within 5-10 business days. 
          You will see "PHOTOSHOP COURSES" or "PHOTOSHOP.ECOURSES" as the refund descriptor on your statement.
        </Paragraph>
        <Paragraph>
          Processing times may vary depending on your bank or credit card company. International customers 
          may experience longer processing times due to currency conversion requirements.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Course Access After Refund</SectionTitle>
        <Paragraph>
          Upon refund approval, your access to the course content will be immediately revoked. Any downloaded 
          materials must be deleted, and continued use of course content after refund constitutes a violation 
          of our terms of service.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Alternative Solutions</SectionTitle>
        <Paragraph>
          Before requesting a refund, consider these alternatives:
        </Paragraph>
        <Paragraph>
          • Contact our support team for technical assistance<br/>
          • Request a course credit for a different Adobe Photoshop course that better suits your needs<br/>
          • Access our community forum for additional learning support<br/>
          • Review our course preview materials to better understand content expectations
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Dispute Resolution</SectionTitle>
        <Paragraph>
          If you disagree with our refund decision, you may escalate your request to our management team 
          by emailing {CONTACT_INFO.email} with "Refund Appeal" in the subject line. All appeals 
          will be reviewed within 5 business days.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Special Circumstances</SectionTitle>
        <Paragraph>
          We understand that exceptional circumstances may arise. For cases involving medical emergencies, 
          technical platform issues, or other extraordinary situations, please contact our support team 
          to discuss your specific situation.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>10. Contact Information</SectionTitle>
        <Paragraph>
          For refund requests or questions about this policy, please contact us:
        </Paragraph>
        <Paragraph>
   
          Company: {COMPANY_INFO.owner}<br/>
          Email: {CONTACT_INFO.email}<br/>
          Phone: {CONTACT_INFO.phoneFormatted}<br/>
          Address: {COMPANY_INFO.address}<br/>
          Support Hours: Monday-Friday, 9 AM - 6 PM GMT
        </Paragraph>
        <Paragraph>
          <strong>For urgent refund requests:</strong> Please include "URGENT REFUND" in your email subject line.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default RefundPolicy;
