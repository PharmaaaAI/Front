const PrivacyPolicy = () => {
  return (
    <div className="text-gray-700">
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Privacy Policy
          </h1>
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              1. Introduction
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Welcome to PharmaAI. We are committed to protecting your privacy
                and handling your personal data in an open and transparent
                manner. This privacy policy explains how we collect, use, and
                protect your information when you use our platform to find
                recommended medicines for your needs.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              2. Information We Collect
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                To provide you with personalized recommendations, we may collect
                the following types of information:
              </p>
              <ul className="list-disc list-inside pl-4 text-gray-600">
                <li>
                  <strong>Personal Data You Provide:</strong> This includes
                  information you enter, such as age, gender, symptoms, and
                  pre-existing health conditions.
                </li>
                <li>
                  <strong>Usage Data:</strong> We may collect anonymous data
                  about how you interact with our service to improve its
                  functionality and user experience.
                </li>
              </ul>
              <p>
                We do not require you to provide personally identifiable
                information (PII) like your name or email address to use our
                core recommendation service.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              3. How We Use Your Information
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                The information we collect is used exclusively for the following
                purposes:
              </p>
              <ul className="list-disc list-inside pl-4 text-gray-600">
                <li>
                  To power our AI engine and provide you with personalized
                  medicine recommendations.
                </li>
                <li>
                  To improve and optimize our platform, ensuring our
                  recommendations are accurate and helpful.
                </li>
                <li>
                  To conduct internal research and analysis on an aggregated,
                  anonymous basis to better understand health trends.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              4. Data Security
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                We take the security of your data very seriously. We implement
                state-of-the-art technical and organizational measures,
                including end-to-end encryption and secure servers, to protect
                your information against unauthorized access, alteration, or
                destruction.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              5. Your Rights
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                As a user, you have the right to understand and control how your
                data is used. Since we primarily process anonymous data, your
                ability to access or delete information is linked to your
                session. You can clear your data at any time by clearing your
                browser's cache and cookies.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              6. Changes to This Privacy Policy
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last Updated" date. We encourage you to review
                this policy periodically for any changes.
              </p>
            </div>
          </div>

          <div className="border-t pt-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:privacy@pharmaai.com"
                className="text-blue-500 hover:underline"
              >
                privacy@pharmaai.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
