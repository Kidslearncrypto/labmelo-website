import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const DailyBios: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    navigate('/', { state: { scrollTo: ref } });
  };

  const handleNavigation = (ref: React.RefObject<HTMLDivElement>) => {
    navigate('/', { state: { scrollTo: ref } });
  };

  const openContactModal = () => {
    navigate('/', { state: { openContact: true } });
  };

  const TERMS_OF_USE = `Effective Date: May 8, 2025
App Name: Daily Bios
Company: Labmelo

1. Acceptance of Terms
By downloading, accessing, or using the Daily Bios mobile application ("App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree with these Terms, do not use the App. These Terms apply to all users of the App, including trial and paid subscribers.

2. Subscription Plans & Billing
Daily Bios offers auto-renewable subscriptions that grant users access to premium features, including curated daily biographies and the ability to save favorites.

Available Subscriptions:

Monthly Starter Plan
• Price: $3.49 per month
• Billed monthly to your Apple ID account
• Auto-renews unless canceled at least 24 hours before the end of the current period

Yearly Starter Plan
• Price: $19.99 per year
• Includes a 7-day free trial (first-time subscribers only)
• Billed annually after trial ends
• Auto-renews annually unless canceled at least 24 hours before the end of the billing cycle

Free Trial Details:

New users are eligible for one (1) 7-day free trial on the Yearly Starter Plan.

Your Apple ID will not be charged during the trial period.

If you do not cancel before the end of the trial, your subscription will automatically convert to a paid subscription and your Apple ID will be charged.

3. Managing Your Subscription
You can manage or cancel your subscription at any time through your Apple account settings:

Open Settings on your device

Tap your Apple ID > Subscriptions

Choose Daily Bios and modify or cancel your plan

Deleting the App does not cancel your subscription.

4. Refund Policy
All payments are processed through the Apple App Store and are governed by Apple's terms. Labmelo does not handle refunds directly.
Refund requests must be made through Apple Support. We do not issue partial refunds for unused time.

5. License & Use
We grant you a personal, non-exclusive, non-transferable license to access and use Daily Bios for personal, non-commercial purposes. You agree not to:

Reverse-engineer or copy the App's source code

Use the App in a way that violates any applicable law

Share, resell, or distribute content outside of personal use

6. User Accounts
To access certain features, you may be required to create a user account. You agree to provide accurate, current information and to keep your credentials secure.

7. Content and Intellectual Property
All content within the App (including biographies, UI elements, and media) is protected by copyright and owned by Labmelo or its licensors. You may not reproduce, distribute, or publicly display content without written permission.

8. Modifications & Availability
We reserve the right to update or remove features at any time without notice. While we aim to maintain uninterrupted access, the App may experience downtime due to maintenance, updates, or technical issues.

9. Privacy Policy
Your use of the App is also governed by our Privacy Policy, which outlines how we collect, store, and process your data.

10. Limitation of Liability
To the maximum extent permitted by law, Labmelo is not liable for any indirect, incidental, or consequential damages arising from use of the App. Use the App at your own risk.

11. Termination
We reserve the right to suspend or terminate access to your account if we detect abuse, fraudulent activity, or violations of these Terms. If your access is terminated, you will not receive a refund for any remaining subscription period.

12. Dispute Resolution & Governing Law
These Terms are governed by the laws of the State of Florida, USA. Any disputes will be resolved through binding arbitration in Florida.

13. Contact Information
If you have any questions or concerns about these Terms, contact us at:
support@labmelo.com`;

  const PRIVACY_POLICY = `Privacy Policy

Last updated: May 1, 2025

1. Information We Collect
•	Personal Information: We collect information such as your name, email address, and payment details when you create an account or subscribe to our services.
•	Usage Data: We automatically collect information on how you interact with the App, including device information, operating system, app usage patterns, and IP addresses.
•	Third-Party Services: We use third-party services such as payment processors to handle transactions and to improve the functionality of the App.
2. How We Use Your Information
•	To provide and manage your subscription, including processing payments and delivering the daily biographies.
•	To personalize your experience and improve the functionality of the App.
•	To communicate with you about your account, subscription status, updates, promotions, or new features.
•	To analyze usage patterns and improve our services.
3. Sharing Your Information
We do not sell, rent, or trade your personal information. However, we may share information with third-party service providers who help us operate the App (such as payment processors, cloud services). These third parties are obligated to protect your information and use it only for the purpose of providing their services.
4. Data Security
We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee the absolute security of your data.
5. Your Rights
You have the right to:
•	Access, update, and delete your personal information.
•	Opt out of marketing communications at any time by clicking "unsubscribe" in any email you receive.
•	Request that we delete your account, subject to certain legal obligations.
6. Cookies and Tracking Technologies
The App may use cookies and other tracking technologies to enhance the user experience. You can control the use of cookies through your device settings. Disabling cookies may impact your ability to use certain features of the App.
7. Children's Privacy
The App is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under 13, we will delete that information.
8. Changes to Privacy Policy
We may update this Privacy Policy at any time. We will notify you of significant changes by posting the updated policy within the App or via email. Continued use of the App after any changes signifies your acceptance of the revised Privacy Policy.`;

  return (
    <div className="min-h-screen bg-black text-white">
      <Header 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        projectsRef={projectsRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
        openContactModal={openContactModal}
        handleNavigation={handleNavigation}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              About Daily Bios
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Your daily source of inspiration through carefully curated biographies of remarkable individuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              What is Daily Bios?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Daily Bios is an innovative AI-powered platform that delivers three personalized biographies every day, 
              carefully selected to inspire your personal growth journey. Whether you're interested in leadership, 
              communication, creativity, or personal development, our platform provides relevant stories and insights 
              to help you achieve your goals.
            </p>
          </motion.div>

          {/* Terms of Use Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <button
              onClick={() => toggleSection('terms')}
              className="w-full flex items-center justify-between p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <h2 className="text-2xl font-bold">Terms of Use</h2>
              <ChevronDown
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  activeSection === 'terms' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeSection === 'terms' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-6 bg-gray-900 rounded-lg"
              >
                <div className="prose prose-invert max-w-none whitespace-pre-line">
                  {TERMS_OF_USE}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Privacy Policy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <button
              onClick={() => toggleSection('privacy')}
              className="w-full flex items-center justify-between p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <h2 className="text-2xl font-bold">Privacy Policy</h2>
              <ChevronDown
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  activeSection === 'privacy' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeSection === 'privacy' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-6 bg-gray-900 rounded-lg"
              >
                <div className="prose prose-invert max-w-none whitespace-pre-line">
                  {PRIVACY_POLICY}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-900 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Personalized Content</h3>
                <p className="text-gray-300">
                  Receive biographies tailored to your interests and growth goals.
                </p>
              </div>
              <div className="p-6 bg-gray-900 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Daily Inspiration</h3>
                <p className="text-gray-300">
                  Get three new biographies every day to keep you motivated and learning.
                </p>
              </div>
              <div className="p-6 bg-gray-900 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Save & Share</h3>
                <p className="text-gray-300">
                  Save your favorite biographies and share them with friends.
                </p>
              </div>
              <div className="p-6 bg-gray-900 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
                <p className="text-gray-300">
                  Track your reading history and personal growth journey.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DailyBios; 