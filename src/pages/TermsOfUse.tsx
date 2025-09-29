import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using Labmelo's services, you accept and agree to be bound by the 
                terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Use License</h2>
              <p className="text-gray-300 mb-4">
                Permission is granted to temporarily use Labmelo's services for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a 
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained in the services</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
              <p className="text-gray-300 mb-4">
                We strive to provide continuous service availability, but we do not guarantee 
                uninterrupted access to our services. We reserve the right to modify or 
                discontinue services at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of your account</li>
                <li>All activities that occur under your account</li>
                <li>Complying with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                In no event shall Labmelo or its suppliers be liable for any damages arising out 
                of the use or inability to use our services, even if we have been notified of 
                the possibility of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These terms and conditions are governed by and construed in accordance with the 
                laws of the United States and you irrevocably submit to the exclusive jurisdiction 
                of the courts in that state or location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Use, please contact us at:
              </p>
              <p className="text-gray-300">
                Email: support@labmelo.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
