import React, { useState } from 'react';
import pharmacompany1 from "../assets/pharmacompany1.png"
import pharmacompany2 from "../assets/pharmacompany2.webp"
import pharmacompany3 from "../assets/pharmacompany3.webp"
import pharmacompany4 from "../assets/pharmacompany4.png"
import pharmacompany5 from "../assets/pharmacompany5.png"

const monthlyPrices = ['$9', '$29', '$79'];
const yearlyPrices = ['$7', '$23', '$63'];

const PricingSection1 = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = (yearly) => {
    setIsYearly(yearly);
  };

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto mt-15">
        {/* Pricing Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Choose Your AI Wellness Plan
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
        Select the level of personalized care that's right for you.
          </p>
          {/* Billing Toggle */}
          <div className="inline-flex items-center mt-8 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => handleToggle(false)}
              className={`px-4 py-2 rounded-md font-medium ${
                !isYearly
                  ? 'bg-white shadow text-gray-800'
                  : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => handleToggle(true)}
              className={`px-4 py-2 rounded-md font-medium ${
                isYearly
                  ? 'bg-white shadow text-gray-800'
                  : 'text-gray-600'
              }`}
            >
              Yearly{" "}
              <span className="text-xs font-normal text-primary-600 ml-1">
                Save 20%
              </span>
            </button>
          </div>
        </div>
        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="pricing-card bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary-300 hover:scale-105 hover:-translate-y-1">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <p className="text-gray-600 mb-6">
                Your AI-Powered Starter Kit
              </p>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl md:text-5xl font-extrabold text-gray-900">
                  {isYearly ? yearlyPrices[0] : monthlyPrices[0]}
                </span>
                <span className="pricing-duration text-gray-500 font-medium ml-2">
                  {isYearly ? '/ month, billed annually' : '/ month'}
                </span>
              </div>
              <button className="w-full py-3 px-6 rounded-lg border border-primary-600 text-primary-600 font-medium transition-colors duration-300 hover:bg-primary-50 mb-6">
                Get Started
              </button>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-primary-500 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>AI Chatbot Access</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-primary-500 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Personalized Regimen</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-primary-500 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Unlimited Conversations</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-primary-500 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Product Recommendations</span>
                </li>
                <li className="flex items-start ">
                  <svg
                    className="pricing-check w-5 h-5 text-primary-500 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Basic Health Library Access</span>
                </li>
                <li className="flex items-start ">
                  <svg
                    className="pricing-check w-5 h-5 text-primary-500 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Standard Email Support</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Pro Plan (Popular) */}
          <div className="pricing-card pricing-popular bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-lg text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="text-primary-100 mb-6">
                For Proactive Health Management
              </p>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl md:text-5xl font-extrabold">
                  {isYearly ? yearlyPrices[1] : monthlyPrices[1]}
                </span>
                <span className="pricing-duration text-primary-100 font-medium ml-2">
                  {isYearly ? '/ month, billed annually' : '/ month'}
                </span>
              </div>
              <button className="w-full py-3 px-6 rounded-lg bg-white text-primary-700 font-medium transition-colors duration-300 hover:bg-primary-50 mb-6">
                Get Started
              </button>
              <ul className="space-y-4 text-white">
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-white mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Advanced AI Analysis</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-white mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19-7"
                    />
                  </svg>
                  <span>Multi-Concern Support</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-white mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Personalized Health Insights</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-white mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Priority Product Notifications</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-white mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Integration with Wearables</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-white mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Priority Email & Chat Support</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Enterprise Plan */}
          <div className="pricing-card bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary-300 hover:scale-105 hover:-translate-y-1">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive AI Health Partner
              </p>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl md:text-5xl font-extrabold text-gray-900">
                  {isYearly ? yearlyPrices[2] : monthlyPrices[2]}
                </span>
                <span className="pricing-duration text-gray-500 font-medium ml-2">
                  {isYearly ? '/ month, billed annually' : '/ month'}
                </span>
              </div>
              <button className="w-full py-3 px-6 rounded-lg border border-primary-600 text-primary-600 font-medium transition-colors duration-300 hover:bg-primary-50 mb-6">
                Get Started
              </button>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-primary-500 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Unlimited AI Guidance</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-primary-500 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Family Plan</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-primary-500 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>In-Depth Consultation Recaps</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-primary-500 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Direct Chat with a Pharmacist</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-primary-500 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Highest Priority Support</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="pricing-check w-5 h-5 text-primary-500 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Early Access to New Features</span>
                </li>
          
              </ul>
            </div>
          </div>
        </div>



        {/* Testimonial/Trust Section */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
            <img
              src={pharmacompany1}
              alt="Company Logo"
              className="h-15 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
            <img
              src={pharmacompany2}
              alt="Company Logo"
              className="h-15 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
            <img
              src={pharmacompany3}
              alt="Company Logo"
              className="h-15 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
            <img
              src={pharmacompany4}
              alt="Company Logo"
              className="h-15 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
            <img
              src={pharmacompany5}
              alt="Company Logo"
              className="h-25 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by over 10,000+ customers worldwide
          </p>
        </div>
        {/* FAQ Section Toggle */}
       
      </div>
    </div>
  );
};

export default PricingSection1;