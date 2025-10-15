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

const ReturnPolicy: React.FC = () => {
  const { formatPrice } = usePrice();

  return (
    <Container>
      <Title>Digital Course Return Policy</Title>
      
      <Section>
        <Paragraph><strong>Last updated:</strong> {new Date().toLocaleDateString()}</Paragraph>
      </Section>

      <Section>
        <Paragraph>
          {COMPANY_INFO.name} understands that digital products require different return considerations than physical items. 
          This policy explains our approach to Adobe Photoshop course returns and refunds for digital educational content.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Important Notice: Digital Products Policy</SectionTitle>
        <Paragraph>
          Our Adobe Photoshop courses are digital products delivered instantly upon purchase. Due to the nature of digital 
          educational content, traditional "returns" do not apply. Instead, we offer a satisfaction guarantee and refund policy 
          as outlined below.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>1. No Physical Returns Required</SectionTitle>
        <Paragraph>
          Since our Adobe Photoshop courses are delivered digitally through your online account, there are no physical items to return. 
          All course materials, including videos, PDFs, and resources, are accessed through our secure learning platform.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. 7-Day Satisfaction Guarantee</SectionTitle>
        <Paragraph>
          Instead of returns, we offer a 7-day satisfaction guarantee on all Adobe Photoshop course purchases. You may request a full refund 
          within 7 days of purchase if you have completed less than 25% of the course content.
        </Paragraph>
        <Paragraph>
          This policy ensures you have adequate time to evaluate the course quality while protecting our intellectual property 
          and the value we provide to all students.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. Refund Request Process</SectionTitle>
        <Paragraph>
          To request a refund for your Adobe Photoshop course:
        </Paragraph>
        <Paragraph>
          1. Email us at {CONTACT_INFO.email} within 7 days of purchase<br/>
          2. Include your order number and registered email address<br/>
          3. Provide a brief reason for your refund request<br/>
          4. Confirm that you have accessed less than 25% of the course content<br/>
          5. Our team will review and respond within 24-48 hours
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. What Happens After Refund Approval</SectionTitle>
        <Paragraph>
          Upon refund approval:
        </Paragraph>
        <Paragraph>
          • Your course access will be immediately revoked<br/>
          • Any downloaded materials must be deleted from your devices<br/>
          • Your account will show the course as "Refunded"<br/>
          • Refund will be processed to your original payment method within 5-10 business days<br/>
          • You will receive a confirmation email with refund details
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Non-Refundable Situations</SectionTitle>
        <Paragraph>
          Refunds cannot be processed in these circumstances:
        </Paragraph>
        <Paragraph>
          • More than 7 days have passed since purchase<br/>
          • More than 25% of course content has been accessed<br/>
          • Course completion certificate has been downloaded<br/>
          • Downloadable course materials have been accessed<br/>
          • Technical issues on your end (device compatibility, internet connection)<br/>
          • Change of mind after substantial course progress
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Alternative Solutions</SectionTitle>
        <Paragraph>
          Before requesting a refund, consider these options:
        </Paragraph>
        <Paragraph>
          • Contact support for technical assistance with course access<br/>
          • Request a course credit to switch to a different Adobe Photoshop course<br/>
          • Access our student community for additional learning support<br/>
          • Review our course preview materials to set proper expectations<br/>
          • Schedule a consultation with our education team
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Course Credit Option</SectionTitle>
        <Paragraph>
          If you're not satisfied with your current course but would like to try a different Adobe Photoshop course from our collection, 
          we may offer a course credit instead of a refund. This credit can be applied to any course of equal or lesser value.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Lifetime Access Guarantee</SectionTitle>
        <Paragraph>
          For courses you choose to keep, we guarantee lifetime access to your purchased content, including all future updates 
          and improvements. This ensures ongoing value for your investment in Animation education.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Dispute Resolution</SectionTitle>
        <Paragraph>
          If you disagree with our refund decision, you may appeal by contacting our customer service team at {CONTACT_INFO.email} with "REFUND APPEAL" in the subject line. All appeals are reviewed personally and responded to within 5 business days.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>10. Contact Information</SectionTitle>
        <Paragraph>
          For refund requests or questions about this policy:
        </Paragraph>
        <Paragraph>
      
          Company: {COMPANY_INFO.owner}<br/>
          Email: {CONTACT_INFO.email}<br/>
          Phone: {CONTACT_INFO.phoneFormatted}<br/>
          Address: {COMPANY_INFO.address}<br/>
          Support Hours: Monday-Friday, 9 AM - 5 PM GMT
        </Paragraph>
        <Paragraph>
          <strong>Emergency Contact:</strong> For urgent refund issues, include "URGENT" in your email subject line for priority handling.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default ReturnPolicy;
