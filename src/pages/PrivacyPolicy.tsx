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

const PrivacyPolicy: React.FC = () => {
  const { formatPrice } = usePrice();

  return (
    <Container>
      <Title>Privacy Policy</Title>
      
      <Section>
        <Paragraph><strong>Last updated:</strong> {new Date().toLocaleDateString()}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>How We Collect, Use, and Protect Your Personal Information</SectionTitle>
        <Paragraph>
          This Privacy Policy explains how {COMPANY_INFO.name} (the "Site", "we", "us", or "our") 
          collects, uses, and shares your personal information when you visit, interact with, or make a purchase 
          through our Adobe Photoshop course platform or communicate with us (collectively referred to as the "Services"). 
          "You" and "your" refer to you as a user of the Services, whether you are a customer, a website visitor, 
          or another individual whose information we collect in accordance with this Privacy Policy.
        </Paragraph>
        <Paragraph>
          Please read this Privacy Policy carefully. By using or accessing the Services, you consent to the 
          collection, use, and sharing of your information as outlined here. If you do not agree with this 
          Privacy Policy, please refrain from using the Services.
        </Paragraph>
        <Paragraph>
          At {COMPANY_INFO.name}, we prioritize your privacy and are committed to safeguarding your 
          personal information. We will never sell or share your personal details or credit card information 
          with third parties without your explicit consent.
        </Paragraph>
        <Paragraph>
          Any personal information we collect is used exclusively for providing our Adobe Photoshop course services and 
          enhancing your learning experience with our platform. We may use your information to process course 
          purchases, communicate with you, and personalize your educational journey.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Changes to This Privacy Policy</SectionTitle>
        <Paragraph>
          We may update this Privacy Policy from time to time, including to reflect changes in our practices 
          or for legal, regulatory, or operational reasons. When we do so, we'll update the "Last updated" 
          date at the top of this policy and post the revised version on our Site.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>How We Collect and Use Your Personal Information</SectionTitle>
        <Paragraph>
          We collect personal information from various sources to provide our Adobe Photoshop course Services. 
          Below are the types of information we collect and how we use it:
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Information We Collect Directly from You</SectionTitle>
        <Paragraph>
          When you use our Services, we collect personal information that you provide directly. This includes:
        </Paragraph>
        <Paragraph>
          <strong>Contact Details:</strong> Name, address, phone number, and email address.<br/>
          <strong>Course Information:</strong> Details about your course purchases, including billing addresses, 
          payment information, and course progress.<br/>
          <strong>Account Information:</strong> Username, password, and security questions.<br/>
          <strong>Learning Preferences:</strong> Courses you view, add to your cart, or wish list, and learning progress.<br/>
          <strong>Customer Support:</strong> Information you provide when reaching out for assistance.
        </Paragraph>
        <Paragraph>
          You may choose not to provide certain information, but this may limit your ability to access specific 
          courses or complete transactions.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Information We Collect via Cookies</SectionTitle>
        <Paragraph>
          We also automatically collect data about your interaction with our Services ("Usage Data") using cookies, 
          pixels, and similar technologies. This can include your IP address, device details, browser type, and 
          browsing activity on the Site. This data helps us understand how users interact with our Adobe Photoshop courses 
          to improve the Site's functionality and learning experience.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Information from Third Parties</SectionTitle>
        <Paragraph>
          We may receive personal information about you from third parties, including vendors and service 
          providers who collect data on our behalf, such as:
        </Paragraph>
        <Paragraph>
          Payment processors who manage your course transactions.<br/>
          Companies that support our Site and course delivery Services.<br/>
          Advertisers or marketing partners who help us reach you with relevant Adobe Photoshop course promotions.
        </Paragraph>
        <Paragraph>
          Information from third parties is used in accordance with this Privacy Policy. However, we are not 
          responsible for the privacy practices of third parties.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>How We Use Your Personal Information</SectionTitle>
        <Paragraph>
          We use the personal information we collect to:
        </Paragraph>
        <Paragraph>
          <strong>Provide Services:</strong> Process course transactions, deliver digital course content, 
          create and manage your account, and send you notifications related to purchases and course access.<br/>
          <strong>Marketing and Advertising:</strong> Send you promotional communications about new Adobe Photoshop courses 
          or show you targeted ads based on your learning preferences.<br/>
          <strong>Security and Fraud Prevention:</strong> Detect and prevent fraud or other malicious activities.<br/>
          <strong>Communication:</strong> Provide customer support and improve your learning experience with us.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Cookies and Tracking Technologies</SectionTitle>
        <Paragraph>
          Our Site uses cookies to enhance your learning experience and gather usage statistics. Cookies help us 
          remember your course progress, perform analytics, and improve functionality. You can manage cookie 
          settings through your browser, but please note that disabling cookies may impact your ability to 
          access certain course features.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Sharing Your Personal Information</SectionTitle>
        <Paragraph>
          We may share your personal information in certain situations, including:
        </Paragraph>
        <Paragraph>
          With service providers who perform functions on our behalf (payment processing, customer support, 
          course analytics, etc.).<br/>
          With marketing partners who may use your data for targeted Adobe Photoshop course ads or promotions.<br/>
          When we have your consent, such as when you choose to share information with third-party platforms 
          (e.g., social media).<br/>
          In connection with business transactions (e.g., mergers or bankruptcy), or to comply with legal 
          obligations, enforce terms of service, or protect the rights of users.
        </Paragraph>
        <Paragraph>
          We do not use or disclose sensitive personal data to infer characteristics about you.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Digital Course Content</SectionTitle>
        <Paragraph>
          If you post reviews or other content on our course platform, be aware that this content may be 
          public and viewed by other students. We cannot control how others use or interact with the 
          information you share in course discussions or reviews.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Third-Party Links</SectionTitle>
        <Paragraph>
          Our Site may contain links to third-party websites or AI tools. These sites have their own privacy 
          policies, and we are not responsible for their content or practices. We encourage you to review 
          their policies before interacting with these sites.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Children's Privacy</SectionTitle>
        <Paragraph>
          Our Adobe Photoshop course Services are not intended for children, and we do not knowingly collect information 
          from individuals under 16 years of age. If we discover that we have collected personal information 
          from a child, we will take steps to delete it.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Security and Data Retention</SectionTitle>
        <Paragraph>
          We have put in place certain physical, electronic, and managerial procedures to help prevent 
          unauthorized access and maintain data security. Payments are processed using secure 256-bit SSL 
          Encryption. We will not share, trade or sell credit card information or personal information to 
          any third party providers.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Your Rights and Choices</SectionTitle>
        <Paragraph>
          Depending on your location, you may have rights regarding your personal information, including:
        </Paragraph>
        <Paragraph>
          <strong>Access:</strong> Request details about the personal information we hold.<br/>
          <strong>Delete:</strong> Request that we delete your personal information.<br/>
          <strong>Correct:</strong> Request corrections to any inaccuracies.<br/>
          <strong>Portability:</strong> Request a copy of your personal data in a usable format for transfer.<br/>
          <strong>Restriction:</strong> Ask us to limit how we process your data.<br/>
          <strong>Withdraw Consent:</strong> If consent is required, you can withdraw it at any time.
        </Paragraph>
        <Paragraph>
          To exercise these rights, contact us using the details below. We may need to verify your identity 
          before fulfilling your request.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Complaints</SectionTitle>
        <Paragraph>
          If you have concerns about how we handle your personal data, please contact us. If you are 
          unsatisfied with our response, you may have the right to file a complaint with your local 
          data protection authority.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>International Users</SectionTitle>
        <Paragraph>
          If you are outside the U.S., please note that your personal data may be transferred to and 
          processed in the United States. We take appropriate steps to ensure that your information is 
          protected according to relevant laws.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <Paragraph>
          If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
        </Paragraph>
        <Paragraph>
          <strong>{COMPANY_INFO.name}</strong><br/>
          Director: {COMPANY_INFO.owner}<br/>
          {COMPANY_INFO.address}<br/>
          Email: {CONTACT_INFO.email}<br/>
          Phone: {CONTACT_INFO.phoneFormatted}
        </Paragraph>
      </Section>
    </Container>
  );
};

export default PrivacyPolicy;
