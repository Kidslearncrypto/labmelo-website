import React, { useState } from 'react';
import { sendWaitlistEmail } from '../api/sendWaitlistEmail';

const WaitlistPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send email notification to mastmigration@gmail.com
      const result = await sendWaitlistEmail(email);
      
      if (!result.success) {
        console.error('Email sending failed:', result.error);
        // Still proceed with signup even if email fails
      } else {
        console.log('Email notification sent successfully to mastmigration@gmail.com');
      }

      // Store in localStorage for backup
      const existingEmails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
      existingEmails.push({
        email,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('waitlistEmails', JSON.stringify(existingEmails));
      
      setIsSubmitted(true);
    } catch (err) {
      console.error('Waitlist signup error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Polka Dot Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none'
        }}>
          {/* Large dots */}
          <div className="polka-dot large" style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255, 105, 180, 0.5)',
            top: '10%',
            left: '15%',
            animation: 'float 8s ease-in-out infinite'
          }} />
          <div className="polka-dot large" style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(186, 85, 211, 0.6)',
            top: '20%',
            right: '20%',
            animation: 'float 10s ease-in-out infinite reverse'
          }} />
          <div className="polka-dot large" style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'rgba(135, 206, 250, 0.5)',
            bottom: '15%',
            left: '10%',
            animation: 'float 12s ease-in-out infinite'
          }} />
          
          {/* Medium dots */}
          <div className="polka-dot medium" style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 165, 0, 0.5)',
            top: '30%',
            left: '60%',
            animation: 'float 9s ease-in-out infinite reverse'
          }} />
          <div className="polka-dot medium" style={{
            position: 'absolute',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(144, 238, 144, 0.6)',
            top: '60%',
            right: '15%',
            animation: 'float 11s ease-in-out infinite'
          }} />
          <div className="polka-dot medium" style={{
            position: 'absolute',
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            background: 'rgba(255, 182, 193, 0.6)',
            bottom: '30%',
            right: '40%',
            animation: 'float 7s ease-in-out infinite reverse'
          }} />
          
          {/* Small dots */}
          <div className="polka-dot small" style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'rgba(255, 20, 147, 0.7)',
            top: '15%',
            left: '70%',
            animation: 'float 6s ease-in-out infinite'
          }} />
          <div className="polka-dot small" style={{
            position: 'absolute',
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            background: 'rgba(138, 43, 226, 0.6)',
            top: '70%',
            left: '25%',
            animation: 'float 8s ease-in-out infinite reverse'
          }} />
          <div className="polka-dot small" style={{
            position: 'absolute',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: 'rgba(255, 215, 0, 0.6)',
            bottom: '20%',
            right: '30%',
            animation: 'float 10s ease-in-out infinite'
          }} />
          <div className="polka-dot small" style={{
            position: 'absolute',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: 'rgba(255, 105, 180, 0.7)',
            top: '40%',
            left: '80%',
            animation: 'float 7s ease-in-out infinite reverse'
          }} />
          <div className="polka-dot small" style={{
            position: 'absolute',
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            background: 'rgba(50, 205, 50, 0.6)',
            bottom: '50%',
            left: '5%',
            animation: 'float 9s ease-in-out infinite'
          }} />
        </div>
        
        {/* Additional Floating Images */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          zIndex: 2,
          pointerEvents: 'none',
          animation: 'float 11s ease-in-out infinite reverse'
        }}>
          <img 
            src="/image-1.png" 
            alt="Voice technology" 
            style={{
              width: '100px',
              height: 'auto',
              borderRadius: '14px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
              filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.1))'
            }}
          />
        </div>
        
        <div style={{
          position: 'absolute',
          top: '70%',
          left: '5%',
          zIndex: 2,
          pointerEvents: 'none',
          animation: 'float 9s ease-in-out infinite'
        }}>
          <img 
            src="/image-2.png" 
            alt="Voice technology" 
            style={{
              width: '85px',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
              filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.1))'
            }}
          />
        </div>
        
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '15%',
          zIndex: 2,
          pointerEvents: 'none',
          animation: 'float 13s ease-in-out infinite reverse'
        }}>
          <img 
            src="/image-3.png" 
            alt="Voice technology" 
            style={{
              width: '95px',
              height: 'auto',
              borderRadius: '13px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
              filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.1))'
            }}
          />
        </div>
        
        <div style={{
          position: 'absolute',
          top: '80%',
          right: '25%',
          zIndex: 2,
          pointerEvents: 'none',
          animation: 'float 15s ease-in-out infinite'
        }}>
          <img 
            src="/image-4.png" 
            alt="Voice technology" 
            style={{
              width: '110px',
              height: 'auto',
              borderRadius: '15px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
              filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.1))'
            }}
          />
        </div>
        
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '40%',
          zIndex: 2,
          pointerEvents: 'none',
          animation: 'float 12s ease-in-out infinite reverse'
        }}>
          <img 
            src="/image-5.png" 
            alt="Voice technology" 
            style={{
              width: '75px',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
              filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.1))'
            }}
          />
        </div>
        
        {/* Additional Floating Image 6 */}
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '15%',
          zIndex: 2,
          pointerEvents: 'none',
          animation: 'float 17s ease-in-out infinite'
        }}>
          <img 
            src="/image-6.png" 
            alt="Voice technology" 
            style={{
              width: '90px',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
              filter: 'drop-shadow(0 3px 6px rgba(0, 0, 0, 0.1))'
            }}
          />
        </div>
        
        {/* Main Floating Image */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '90px',
          transform: 'translateY(-50%)',
          zIndex: 5,
          pointerEvents: 'none',
          animation: 'float 16s ease-in-out infinite reverse'
        }}>
          <img 
            src="/untitled-design.png" 
            alt="Voice restoration technology" 
            style={{
              width: '120px',
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
            }}
          />
        </div>
        
        <div style={{
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
          background: '#f5ece1',
          borderRadius: '24px',
          padding: '32px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          zIndex: 10,
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            color: 'white',
            fontSize: '24px'
          }}>
            ✓
          </div>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#333', 
            marginBottom: '16px' 
          }}>
            You're on the list!
          </h2>
          <p style={{ 
            color: '#666', 
            marginBottom: '24px',
            lineHeight: '1.5'
          }}>
            Thank you for joining our waitlist. We'll be in touch soon with updates about our voice restoration technology.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setEmail('');
            }}
            style={{
              background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Join Another Email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Polka Dot Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        {/* Large dots */}
        <div className="polka-dot large" style={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(255, 105, 180, 0.5)',
          top: '10%',
          left: '15%',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div className="polka-dot large" style={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'rgba(186, 85, 211, 0.6)',
          top: '20%',
          right: '20%',
          animation: 'float 10s ease-in-out infinite reverse'
        }} />
        <div className="polka-dot large" style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'rgba(135, 206, 250, 0.5)',
          bottom: '15%',
          left: '10%',
          animation: 'float 12s ease-in-out infinite'
        }} />
        
        {/* Medium dots */}
        <div className="polka-dot medium" style={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'rgba(255, 165, 0, 0.5)',
          top: '30%',
          left: '60%',
          animation: 'float 9s ease-in-out infinite reverse'
        }} />
        <div className="polka-dot medium" style={{
          position: 'absolute',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'rgba(144, 238, 144, 0.6)',
          top: '60%',
          right: '15%',
          animation: 'float 11s ease-in-out infinite'
        }} />
        <div className="polka-dot medium" style={{
          position: 'absolute',
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          background: 'rgba(255, 182, 193, 0.6)',
          bottom: '30%',
          right: '40%',
          animation: 'float 7s ease-in-out infinite reverse'
        }} />
        
        {/* Small dots */}
        <div className="polka-dot small" style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'rgba(255, 20, 147, 0.7)',
          top: '15%',
          left: '70%',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div className="polka-dot small" style={{
          position: 'absolute',
          width: '25px',
          height: '25px',
          borderRadius: '50%',
          background: 'rgba(138, 43, 226, 0.6)',
          top: '70%',
          left: '25%',
          animation: 'float 8s ease-in-out infinite reverse'
        }} />
        <div className="polka-dot small" style={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          background: 'rgba(255, 215, 0, 0.6)',
          bottom: '20%',
          right: '30%',
          animation: 'float 10s ease-in-out infinite'
        }} />
        <div className="polka-dot small" style={{
          position: 'absolute',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          background: 'rgba(255, 105, 180, 0.7)',
          top: '40%',
          left: '80%',
          animation: 'float 7s ease-in-out infinite reverse'
        }} />
        <div className="polka-dot small" style={{
          position: 'absolute',
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          background: 'rgba(50, 205, 50, 0.6)',
          bottom: '50%',
          left: '5%',
          animation: 'float 9s ease-in-out infinite'
        }} />
      </div>
      
      {/* Additional Floating Images */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        zIndex: 2,
        pointerEvents: 'none',
        animation: 'float 11s ease-in-out infinite reverse'
      }}>
        <img 
          src="/image-1.png" 
          alt="Voice technology" 
          style={{
            width: '120px',
            height: 'auto',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
          }}
        />
      </div>
      
      <div style={{
        position: 'absolute',
        top: '70%',
        left: '5%',
        zIndex: 2,
        pointerEvents: 'none',
        animation: 'float 9s ease-in-out infinite'
      }}>
        <img 
          src="/image-2.png" 
          alt="Voice technology" 
          style={{
            width: '100px',
            height: 'auto',
            borderRadius: '14px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
          }}
        />
      </div>
      
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '15%',
        zIndex: 2,
        pointerEvents: 'none',
        animation: 'float 13s ease-in-out infinite reverse'
      }}>
        <img 
          src="/image-3.png" 
          alt="Voice technology" 
          style={{
            width: '110px',
            height: 'auto',
            borderRadius: '15px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
          }}
        />
      </div>
      
      <div style={{
        position: 'absolute',
        top: '80%',
        right: '25%',
        zIndex: 2,
        pointerEvents: 'none',
        animation: 'float 15s ease-in-out infinite'
      }}>
        <img 
          src="/image-4.png" 
          alt="Voice technology" 
          style={{
            width: '130px',
            height: 'auto',
            borderRadius: '18px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
          }}
        />
      </div>
      
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '40%',
        zIndex: 2,
        pointerEvents: 'none',
        animation: 'float 12s ease-in-out infinite reverse'
      }}>
        <img 
          src="/image-5.png" 
          alt="Voice technology" 
          style={{
            width: '90px',
            height: 'auto',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
          }}
        />
      </div>
      
      {/* Additional Floating Image 6 */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '15%',
        zIndex: 2,
        pointerEvents: 'none',
        animation: 'float 17s ease-in-out infinite'
      }}>
        <img 
          src="/image-6.png" 
          alt="Voice technology" 
          style={{
            width: '105px',
            height: 'auto',
            borderRadius: '14px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
          }}
        />
      </div>
      
      {/* Main Floating Image */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '80px',
        transform: 'translateY(-50%)',
        zIndex: 5,
        pointerEvents: 'none',
        animation: 'float 14s ease-in-out infinite'
      }}>
        <img 
          src="/untitled-design.png" 
          alt="Voice restoration technology" 
          style={{
            width: '160px',
            height: 'auto',
            borderRadius: '20px',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
          }}
        />
      </div>
      
        <div style={{
          maxWidth: '400px',
          width: '100%',
          background: '#f5ece1',
          borderRadius: '24px',
          padding: '32px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          zIndex: 10,
          backdropFilter: 'blur(10px)'
        }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            color: '#333', 
            marginBottom: '16px',
            lineHeight: '1.2'
          }}>
            Bring Back the Voices You Miss.
          </h1>
          <p style={{ 
            color: '#666', 
            fontSize: '16px',
            lineHeight: '1.5'
          }}>
            Upload a memory. Our AI rebuilds their voice so you can speak with them again.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ marginBottom: '24px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: '500', 
              color: '#333', 
              marginBottom: '8px' 
            }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e1e5e9',
                borderRadius: '12px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box',
                color: '#333',
                backgroundColor: 'white'
              }}
              onFocus={(e) => e.target.style.borderColor = '#ff6b6b'}
              onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
              placeholder="Enter your email address"
            />
          </div>

          {error && (
            <div style={{ 
              color: '#e74c3c', 
              fontSize: '14px', 
              textAlign: 'center',
              marginBottom: '16px'
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !email}
            style={{
              width: '100%',
              background: isSubmitting || !email 
                ? 'linear-gradient(135deg, #bdc3c7, #95a5a6)' 
                : 'linear-gradient(135deg, #ff9a9e, #fecfef)',
              color: 'white',
              padding: '16px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '16px',
              fontWeight: '500',
              cursor: isSubmitting || !email ? 'not-allowed' : 'pointer',
              transition: 'transform 0.2s',
              opacity: isSubmitting || !email ? 0.6 : 1
            }}
            onMouseOver={(e) => {
              if (!isSubmitting && email) {
                e.currentTarget.style.transform = 'scale(1.02)';
              }
            }}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {isSubmitting ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  border: '2px solid white',
                  borderTop: '2px solid transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  marginRight: '8px'
                }} />
                Joining...
              </div>
            ) : (
              'Join the Waitlist'
            )}
          </button>
        </form>

        {/* Footer */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ 
            fontSize: '14px', 
            color: '#a87242',
            fontWeight: 'bold'
          }}>
            Be the first to experience voice restoration technology
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-15px) translateX(8px);
            opacity: 0.5;
          }
        }
        
        .polka-dot {
          will-change: transform, opacity;
        }
        
        .polka-dot.large {
          animation-duration: 8s, 10s, 12s;
        }
        
        .polka-dot.medium {
          animation-duration: 7s, 9s, 11s;
        }
        
        .polka-dot.small {
          animation-duration: 6s, 8s, 10s;
        }
      `}</style>
    </div>
  );
};

export default WaitlistPage;
