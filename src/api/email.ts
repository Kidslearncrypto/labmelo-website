// Client-side email functionality using Formspree

export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    // Using Formspree webhook for contact form
    const formDataToSend = new FormData();
    formDataToSend.append('_replyto', formData.email);
    formDataToSend.append('_subject', `New Contact Form Submission from ${formData.name}`);
    formDataToSend.append('message', `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
    `);
    
    const response = await fetch('https://formspree.io/f/xnngpdgn', {
      method: 'POST',
      body: formDataToSend
    });
    
    if (response.ok) {
      console.log('Contact email sent successfully');
      return { success: true };
    } else {
      console.error('Failed to send contact email');
      return { success: false, error: 'Failed to send email' };
    }
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, error };
  }
};

export const sendQuoteEmail = async (formData: {
  appType: string;
  completionDate: string;
  budget: string;
  features: string[];
  additionalInfo: string;
  referral: string;
  followUpCall: boolean;
  phoneNumber: string;
  email: string;
}) => {
  try {
    // Using Formspree webhook for quote form
    const formDataToSend = new FormData();
    formDataToSend.append('_replyto', formData.email);
    formDataToSend.append('_subject', 'New Quote Request');
    formDataToSend.append('message', `
New Quote Request

App Type: ${formData.appType}
Completion Date: ${formData.completionDate}
Budget: ${formData.budget}
Features: ${formData.features.join(', ')}
Additional Info: ${formData.additionalInfo}
Referral Source: ${formData.referral}
Follow-up Call Requested: ${formData.followUpCall ? 'Yes' : 'No'}
${formData.followUpCall ? `Phone Number: ${formData.phoneNumber}` : ''}
Contact Email: ${formData.email}
    `);
    
    const response = await fetch('https://formspree.io/f/xnngpdgn', {
      method: 'POST',
      body: formDataToSend
    });
    
    if (response.ok) {
      console.log('Quote email sent successfully');
      return { success: true };
    } else {
      console.error('Failed to send quote email');
      return { success: false, error: 'Failed to send email' };
    }
  } catch (error) {
    console.error('Error sending quote email:', error);
    return { success: false, error };
  }
};