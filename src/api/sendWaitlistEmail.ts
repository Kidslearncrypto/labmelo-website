// Note: Resend should be used server-side, but we're in a client-side environment
// For now, let's use a simple approach that works in the browser

export const sendWaitlistEmail = async (email: string) => {
  try {
    // Get existing emails from localStorage
    const existingEmails = JSON.parse(
      typeof window !== 'undefined' 
        ? localStorage.getItem('waitlistEmails') || '[]'
        : '[]'
    );
    
    const newEntry = {
      email,
      timestamp: new Date().toISOString()
    };
    
    // Add to the list
    const updatedEmails = [...existingEmails, newEntry];
    
    // Send email using Formspree (free webhook service)
    const formData = new FormData();
    formData.append('_replyto', 'mastmigration@gmail.com');
    formData.append('_subject', `🎉 New Waitlist Signup - ${email}`);
    formData.append('message', `
New Waitlist Signup!

Email: ${email}
Signup Time: ${new Date().toLocaleString()}
Total Signups: ${updatedEmails.length}

Recent Signups:
${updatedEmails.slice(-5).map(entry => 
  `• ${entry.email} - ${new Date(entry.timestamp).toLocaleString()}`
).join('\n')}
    `);
    
    try {
      // Using Formspree webhook
      const response = await fetch('https://formspree.io/f/xnngpdgn', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        console.log('📧 Email notification sent successfully to mastmigration@gmail.com');
      } else {
        console.error('📧 Failed to send email notification');
      }
    } catch (error) {
      console.error('📧 Email sending error:', error);
      // Still log the data for manual checking
      console.log('📧 Email notification data:', {
        email: email,
        timestamp: new Date().toLocaleString(),
        totalSignups: updatedEmails.length,
        recentSignups: updatedEmails.slice(-5).map(entry => 
          `${entry.email} - ${new Date(entry.timestamp).toLocaleString()}`
        ).join('\n')
      });
    }
    
    return { success: true };
  } catch (error) {
    console.error('Failed to send waitlist email:', error);
    return { success: false, error };
  }
};
