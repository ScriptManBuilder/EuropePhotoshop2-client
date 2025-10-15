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

const ShippingPolicy: React.FC = () => {
  const { formatPrice } = usePrice();

  return (
    <Container>
      <Title>Digital Course Delivery Policy</Title>
      
      <Section>
        <Paragraph><strong>Last updated:</strong> {new Date().toLocaleDateString()}</Paragraph>
      </Section>

      <Section>
        <Paragraph>
          {COMPANY_INFO.name} delivers Adobe Photoshop courses digitally through our secure online learning platform. 
          This policy explains how your courses are delivered and accessed after purchase.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Important Notice: No Physical Shipping</SectionTitle>
        <Paragraph>
          <strong>Our Adobe Photoshop courses are 100% digital products.</strong> There are no physical items to ship. All course materials, 
          including videos, PDFs, templates, and resources, are delivered instantly through your online account.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>1. Instant Digital Delivery</SectionTitle>
        <Paragraph>
          Upon successful payment, you will receive immediate access to your purchased Adobe Photoshop courses. No waiting, no shipping delays - 
          start learning within minutes of your purchase.
        </Paragraph>
        <Paragraph>
          <strong>Delivery Method:</strong> Secure online learning platform access<br/>
          <strong>Delivery Time:</strong> Instant upon payment confirmation<br/>
          <strong>Access Duration:</strong> Lifetime access to all course materials
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>2. How to Access Your Courses</SectionTitle>
        <Paragraph>
          After purchase, you will receive an email confirmation within 15 minutes containing:
        </Paragraph>
        <Paragraph>
          • Order confirmation and receipt<br/>
          • Login credentials for your learning account<br/>
          • Direct links to your purchased courses<br/>
          • Getting started guide and platform tutorial<br/>
          • Customer support contact information
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>3. Email Delivery Requirements</SectionTitle>
        <Paragraph>
          To ensure successful course delivery:
        </Paragraph>
        <Paragraph>
          • Provide a valid, active email address during checkout<br/>
          • Check your spam/junk folders if you don't receive confirmation within 15 minutes<br/>
          • Add {CONTACT_INFO.email} to your email whitelist<br/>
          • Ensure your email provider accepts emails from our domain
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>4. Global Availability</SectionTitle>
        <Paragraph>
          Our digital Adobe Photoshop courses are available worldwide with internet access. There are no geographical restrictions 
          or additional delivery fees based on location.
        </Paragraph>
        <Paragraph>
          <strong>Supported Regions:</strong> Worldwide<br/>
          <strong>Language:</strong> English<br/>
          <strong>Requirements:</strong> Internet connection and modern web browser<br/>
          <strong>Additional Fees:</strong> None (no shipping costs apply)
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. Course Platform Access</SectionTitle>
        <Paragraph>
          Your courses are hosted on our secure learning management system, accessible 24/7 from any device:
        </Paragraph>
        <Paragraph>
          • Desktop computers (Windows, Mac, Linux)<br/>
          • Tablets (iPad, Android tablets)<br/>
          • Smartphones (iOS, Android)<br/>
          • Smart TVs with internet browsers<br/>
          • Any device with a modern web browser
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. Download Options</SectionTitle>
        <Paragraph>
          Many course materials are available for download, allowing offline access:
        </Paragraph>
        <Paragraph>
          • PDF guides and worksheets<br/>
          • Audio versions of course content<br/>
          • Template files and resources<br/>
          • Course completion certificates<br/>
          • Note: Video content streaming requires internet connection
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>7. Delivery Issues and Support</SectionTitle>
        <Paragraph>
          If you experience any issues accessing your courses:
        </Paragraph>
        <Paragraph>
          • Check your email (including spam folders) for login credentials<br/>
          • Try logging in with the provided username and password<br/>
          • Clear your browser cache and cookies<br/>
          • Try accessing from a different device or browser<br/>
          • Contact our support team for immediate assistance
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>8. Technical Requirements</SectionTitle>
        <Paragraph>
          Minimum requirements for optimal course experience:
        </Paragraph>
        <Paragraph>
          • High-speed internet connection (broadband recommended)<br/>
          • Modern web browser (Chrome, Firefox, Safari, Edge)<br/>
          • JavaScript enabled<br/>
          • Audio/video playback capability<br/>
          • PDF reader for downloadable materials
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>9. Account Security</SectionTitle>
        <Paragraph>
          Your course access is protected by secure login credentials. Keep your account information safe:
        </Paragraph>
        <Paragraph>
          • Use a strong, unique password<br/>
          • Don't share login credentials with others<br/>
          • Log out when using public computers<br/>
          • Contact us immediately if you suspect unauthorized access
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>10. Contact Information</SectionTitle>
        <Paragraph>
          For course delivery issues or technical support:
        </Paragraph>
        <Paragraph>
          <strong>{COMPANY_INFO.name}</strong><br/>
          Company: {COMPANY_INFO.owner}<br/>
          Email: {CONTACT_INFO.email}<br/>
          Phone: {CONTACT_INFO.phoneFormatted}<br/>
          Address: {COMPANY_INFO.address}<br/>
          Support Hours: Monday-Friday, 9 AM - 5 PM GMT
        </Paragraph>
        <Paragraph>
          <strong>Emergency Access Issues:</strong> Include "URGENT ACCESS" in your email subject line for priority technical support.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default ShippingPolicy;
