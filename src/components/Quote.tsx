import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown, Send, ArrowRight, Check } from 'lucide-react';
import { sendQuoteEmail } from '../api/email';

const Quote = () => {
  const [formData, setFormData] = useState({
    appType: '',
    completionDate: '',
    budget: '',
    features: [] as string[],
    additionalInfo: '',
    referral: '',
    followUpCall: false,
    phoneNumber: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const features = [
    'Push Notifications',
    'User Accounts',
    'GPS Integration',
    'Social Media Integration',
    'Payment Processing',
    'Real-time Chat',
    'Analytics Dashboard',
    'Multi-language Support',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFeatureChange = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const result = await sendQuoteEmail(formData);
      if (result.success) {
        alert('Thank you for your submission! We will contact you soon.');
        setFormData({
          appType: '',
          completionDate: '',
          budget: '',
          features: [],
          additionalInfo: '',
          referral: '',
          followUpCall: false,
          phoneNumber: '',
          email: ''
        });
      } else {
        setSubmitError('Failed to submit quote request. Please try again.');
      }
    } catch (error) {
      setSubmitError('An error occurred. Please try again later.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative p-4 sm:p-6 md:p-8 bg-black rounded-2xl shadow-xl border-2 border-purple-600"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-10 blur-sm"></div>
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent break-words">
              Get a Quote
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* App Type */}
              <div className="relative">
                <label className="block text-sm sm:text-base md:text-xl font-medium text-white mb-2 sm:mb-3 break-words">
                  What type of app do you need?
                </label>
                <div className="relative">
                  <select
                    name="appType"
                    value={formData.appType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base md:text-lg border border-purple-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none"
                  >
                    <option value="">Select an option</option>
                    <option value="android">Android</option>
                    <option value="ios">iOS</option>
                    <option value="web">Web App</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
                </div>
              </div>

              {/* Completion Date */}
              <div className="relative">
                <label className="block text-sm sm:text-base md:text-xl font-medium text-white mb-2 sm:mb-3 break-words">
                  When do you need it completed by?
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="completionDate"
                    value={formData.completionDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base md:text-lg border border-purple-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
                </div>
              </div>

              {/* Budget */}
              <div className="relative">
                <label className="block text-sm sm:text-base md:text-xl font-medium text-white mb-2 sm:mb-3 break-words">
                  What is your estimated budget?
                </label>
                <div className="relative">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base md:text-lg border border-purple-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none"
                  >
                    <option value="">Select an option</option>
                    <option value="under-5000">Under $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-20000">$10,000 - $20,000</option>
                    <option value="above-20000">Above $20,000</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
                </div>
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm sm:text-base md:text-xl font-medium text-white mb-2 sm:mb-3 break-words">
                  What features do you need?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {features.map((feature) => (
                    <motion.div
                      key={feature}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start space-x-3"
                    >
                      <input
                        type="checkbox"
                        id={feature}
                        checked={formData.features.includes(feature)}
                        onChange={() => handleFeatureChange(feature)}
                        className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 focus:ring-purple-500 border-purple-600 rounded bg-black mt-1"
                      />
                      <label htmlFor={feature} className="text-sm sm:text-base text-white break-words">
                        {feature}
                      </label>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-sm sm:text-base md:text-xl font-medium text-white mb-2 sm:mb-3 break-words">
                  Any additional information or special requests?
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base md:text-lg border border-purple-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              {/* Referral */}
              <div className="relative">
                <label className="block text-sm sm:text-base md:text-xl font-medium text-white mb-2 sm:mb-3 break-words">
                  How did you hear about us?
                </label>
                <div className="relative">
                  <select
                    name="referral"
                    value={formData.referral}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base md:text-lg border border-purple-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
                </div>
              </div>

              {/* Email - Always Required */}
              <div className="relative">
                <label className="block text-sm sm:text-base md:text-xl font-medium text-white mb-2 sm:mb-3 break-words">
                  Your Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base md:text-lg border border-purple-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Follow-up Call */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="followUpCall"
                  name="followUpCall"
                  checked={formData.followUpCall}
                  onChange={handleInputChange}
                  className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 focus:ring-purple-500 border-purple-600 rounded bg-black mt-1"
                />
                <label htmlFor="followUpCall" className="text-sm sm:text-base text-white break-words">
                  Would you like a follow-up call?
                </label>
              </div>

              {formData.followUpCall && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="relative"
                >
                  <label className="block text-sm sm:text-base md:text-xl font-medium text-white mb-2 sm:mb-3 break-words">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required={formData.followUpCall}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base md:text-lg border border-purple-600 rounded-lg bg-black text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="+1 (555) 555-5555"
                    />
                  </div>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base md:text-xl border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Submit Quote Request</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quote; 