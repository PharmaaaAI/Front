import React from 'react'

import { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const faqItems = [
    {
      question: "How does the AI chatbot work",
      answer: (
        <p className="text-gray-600">
        Our AI is trained on a vast database of medical information and product data. It uses a secure, conversational questionnaire to understand your unique needs—like skin type, health goals, allergies, and current medications—to provide personalized product recommendations and general wellness guidance. It is not a substitute for professional medical diagnosis.
        </p>
      )
    },
    {
      question: " Is my health data private and secure?",
      answer: (
        <>
          <p className="text-gray-600 mb-3">
       Absolutely. We adhere to strict data protection regulations (like HIPAA/GDPR). Your conversation history and personal health information are encrypted, anonymized where possible, and never sold to third parties. You can request deletion of your data at any time.
          </p>
         
        </>
      )
    },
    {
      question: " Can the AI diagnose my condition or prescribe medication?",
      answer: (
        <p className="text-gray-600">
         No. Our AI chatbot is designed for guidance and recommendation only. It cannot provide a medical diagnosis, prescribe medication, or treat serious conditions. It is a tool to help you make informed decisions about over-the-counter products and wellness routines. Always consult a doctor or pharmacist for serious health concerns.
        </p>
      )
    },
    {
      question: "What if the AI recommends a product I'm allergic to?",
      answer: (
        <>
          <p className="text-gray-600 mb-3">The AI will explicitly ask about allergies and sensitivities during your initial conversation. This information is stored securely in your profile and is used to filter out any unsuitable recommendations. You can always update your allergy profile in your account settings.</p>
        
        </>
      )
    },
    {
      question: "How do I cancel my subscription?",
      answer: (
        <p className="text-gray-600">
         You can cancel your subscription at any time from your account dashboard. After cancellation, you will retain access to the AI features until the end of your current billing period. We offer a full 14-day money-back guarantee if you are not satisfied.
        </p>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-sage mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600">
          Your privacy and understanding of our service are our top priorities.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <button 
              className="w-full flex justify-between items-center p-6 text-left"
              onClick={() => toggleItem(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {item.question}
              </h3>
              <i className={`fas fa-chevron-down text-indigo-600 transition-transform duration-300 ${openItems[index] ? 'transform rotate-180' : ''}`} />
            </button>
            <div className={`px-6 pb-6 transition-all duration-300 ${openItems[index] ? 'block' : 'hidden'}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
      
      {/* Contact Support */}
      <div className="mt-16 text-center bg-indigo-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold  mb-3">
          Still have questions?
        </h2>
        <p className="text-gray-600 mb-6">
          Our support team is happy to help you with any other questions you might
          have.
        </p>
        <button className="px-6 py-3 bg-sage text-white rounded-lg hover:bg-indigo-700 transition font-medium">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default FAQ;