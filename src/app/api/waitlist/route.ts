import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/api/email';

// Simple in-memory storage for demo purposes
// In production, you'd use a proper database
let waitlistEmails: Array<{ email: string; timestamp: string }> = [];

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingEmail = waitlistEmails.find(entry => entry.email === email);
    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Add to waitlist
    const newEntry = {
      email,
      timestamp: new Date().toISOString()
    };
    
    waitlistEmails.push(newEntry);

    // Send email notification to your personal email
    try {
      await sendContactEmail({
        name: 'Waitlist Signup',
        email: 'waitlist@labmelo.com',
        subject: `🎉 New Waitlist Signup - ${email}`,
        message: `
          <h2>New Waitlist Signup!</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Signup Time:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Total Signups:</strong> ${waitlistEmails.length}</p>
          
          <h3>Recent Signups:</h3>
          <ul>
            ${waitlistEmails.slice(-5).map(entry => 
              `<li>${entry.email} - ${new Date(entry.timestamp).toLocaleString()}</li>`
            ).join('')}
          </ul>
        `
      });
      console.log('Email notification sent to mastmigration@gmail.com');
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
      // Don't fail the signup if email fails
    }

    // Log the email (in production, you'd save to database)
    console.log('New waitlist signup:', newEntry);

    return NextResponse.json(
      { 
        message: 'Successfully joined waitlist',
        email: email 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return waitlist stats (for admin purposes)
  return NextResponse.json({
    totalSignups: waitlistEmails.length,
    emails: waitlistEmails
  });
}
