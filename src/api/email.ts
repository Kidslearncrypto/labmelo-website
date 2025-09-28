import nodemailer from 'nodemailer';

// Create a test account on Ethereal Email
const createTestAccount = async () => {
  const testAccount = await nodemailer.createTestAccount();
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
};

// Initialize transporter
let transporter: nodemailer.Transporter;

// Create test account and transporter
createTestAccount().then(t => {
  transporter = t;
  console.log('Ethereal Email test account created:', t.options.auth);
});

export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const mailOptions = {
    from: '"Labmelo Contact Form" <contact@labmelo.com>',
    to: 'support@labmelo.com',
    subject: `New Contact Form Submission from ${formData.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
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
  const mailOptions = {
    from: '"Labmelo Quote Form" <quotes@labmelo.com>',
    to: 'support@labmelo.com',
    subject: 'New Quote Request',
    html: `
      <h2>New Quote Request</h2>
      <p><strong>App Type:</strong> ${formData.appType}</p>
      <p><strong>Completion Date:</strong> ${formData.completionDate}</p>
      <p><strong>Budget:</strong> ${formData.budget}</p>
      <p><strong>Features:</strong></p>
      <ul>
        ${formData.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      <p><strong>Additional Info:</strong> ${formData.additionalInfo}</p>
      <p><strong>Referral Source:</strong> ${formData.referral}</p>
      <p><strong>Follow-up Call Requested:</strong> ${formData.followUpCall ? 'Yes' : 'No'}</p>
      ${formData.followUpCall ? `<p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>` : ''}
      <p><strong>Contact Email:</strong> ${formData.email}</p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}; 