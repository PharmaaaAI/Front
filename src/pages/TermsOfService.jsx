import React from 'react';

const TermsOfService = () => {
  return (
    <div className="text-gray-700">
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Terms of Service</h1>
        </div>

        <div className="space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                By accessing or using the PharmaAI platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the Service. Your use of our platform constitutes your acceptance of these terms.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                PharmaAI provides an informational service that uses artificial intelligence to offer personalized recommendations for over-the-counter medications based on user-provided data. The Service is intended for informational purposes only.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Medical Disclaimer</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                PharmaAI is not a medical service and does not provide medical advice, diagnosis, or treatment. The information and recommendations provided by our Service are not a substitute for professional medical advice from a qualified healthcare provider. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on our platform.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. User Responsibilities</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                You agree to use the Service responsibly and to provide accurate information to the best of your ability. You are responsible for any decisions you make based on the information provided by PharmaAI. You agree not to use the service for any unlawful purpose.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                In no event shall PharmaAI, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Changes to These Terms</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
              </p>
            </div>
          </div>

          <div className="border-t pt-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@pharmaai.com" className="text-blue-500 hover:underline">legal@pharmaai.com</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService