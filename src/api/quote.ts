export async function submitQuote(formData: {
  appType: string;
  completionDate: string;
  budget: string;
  features: string[];
  additionalInfo: string;
  referral: string;
  followUpCall: boolean;
}) {
  try {
    // Create email content
    const emailContent = `
      New Quote Request:
      
      App Type: ${formData.appType}
      Completion Date: ${formData.completionDate}
      Budget: ${formData.budget}
      Features: ${formData.features.join(', ')}
      Additional Info: ${formData.additionalInfo}
      Referral Source: ${formData.referral}
      Follow-up Call Requested: ${formData.followUpCall ? 'Yes' : 'No'}
    `;

    // Send email using the existing email service
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'YOUR_SERVICE_ID',
        template_id: 'YOUR_TEMPLATE_ID',
        user_id: 'YOUR_USER_ID',
        template_params: {
          to_email: 'support@labmelo.com',
          message: emailContent,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return { success: true, message: 'Quote request submitted successfully' };
  } catch (error) {
    console.error('Error processing quote request:', error);
    throw new Error('Error processing quote request');
  }
} 