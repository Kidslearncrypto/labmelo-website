import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWaitlistNotification = async (email: string, totalSignups: number, recentSignups: string[]) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Labmelo Waitlist <onboarding@resend.dev>',
      to: ['mastmigration@gmail.com'],
      subject: `🎉 New Waitlist Signup - ${email}`,
      html: `
        <h2>New Waitlist Signup!</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Signup Time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Total Signups:</strong> ${totalSignups}</p>
        
        <h3>Recent Signups:</h3>
        <ul>
          ${recentSignups.map(signup => `<li>${signup}</li>`).join('')}
        </ul>
      `
    });
    
    if (error) {
      console.error('Resend error:', error);
      return { success: false, error };
    }
    
    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
};
