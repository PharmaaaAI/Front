import React from 'react';

const ShippingReturns = () => {
  return (
    <div className="text-gray-700">
      <div className=" mx-auto px-6 py-16 md:py-24 max-w-5xl">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Shipping & Returns Policy</h1>
        </div>

        <div className="space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Overview</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Our returns and refunds policy lasts 30 days. If 30 days have passed since your purchase, we unfortunately can’t offer you a full refund or exchange.
              </p>
              <p>
                To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. For health and safety reasons, several types of goods are exempt from being returned, including perishable items, health and personal care products, and supplements that have been opened.
              </p>
              <p>
                To complete your return, we require a receipt or proof of purchase. Please do not send your purchase back to the manufacturer.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Refunds</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
              </p>
              <p>
                If you are approved, then your refund will be processed, and a credit will automatically be applied to your original method of payment within 7-10 business days.
              </p>
              <p className="font-medium text-gray-800">Late or missing refunds?</p>
              <p>
                If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company; it may take some time before your refund is officially posted. If you’ve done all of this and you still have not received your refund, please contact us at <a href="mailto:support@pharmaai.com" className="text-blue-500 hover:underline">support@pharmaai.com</a>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Exchanges</h2>
            <p className="leading-relaxed">
              We only replace items if they are defective or damaged upon arrival. If you need to exchange it for the same item, send us an email at <a href="mailto:support@pharmaai.com" className="text-blue-500 hover:underline">support@pharmaai.com</a> and send your item to: PharmaAI Returns, 123 Innovation Drive, Boston, MA 02110.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Shipping Returns</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                To return your product, you should mail your product to: PharmaAI Returns, New York.
              </p>
              <p>
                You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
              </p>
              <p>
                If you are returning more expensive items, you may consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.
              </p>
            </div>
          </div>

          <div className="border-t pt-8 mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Need help?</h2>
            <p className="leading-relaxed">
              Contact us at <a href="mailto:support@pharmaai.com" className="text-blue-500 hover:underline">support@pharmaai.com</a> for questions related to refunds and returns.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShippingReturns