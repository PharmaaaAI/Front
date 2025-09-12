import React, { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import addOrderApi from "../utils/addOrderApi";
import { AuthContext } from "../context/AuthContext.jsx";

const stripePromise = loadStripe("pk_test_51RzZu6FxxGGRs7ZcdappY7xy6wVDf00rVGUoZJJFDs0VvSyUy1ZPPihXM6D2s5wHxzaNvB1aIjskAQxOFntL18Rc00DugaCRnD");



function CheckoutForm({ method, amount, items, clear, setShow }) {
  const { token } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setMessage("");

    try {
      let result;
      const data = await addOrderApi(method, amount, items, token);
      if (data && data.clientSecret) {
        result = await stripe.confirmCardPayment(data.clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });

        if (result.error) {
          setMessage(`❌ ${result.error.message}`);
        } else if (result.paymentIntent.status === "succeeded") {
          setShow(true)
          setTimeout(() => setShow(false), 2000)
          clear()
          setMessage("✅ Payment successful!");
        }
      }
    } catch (err) {
      setMessage(`⚠ ${err.message}`);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md mx-auto space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Secure Payment
      </h2>

      {/* Card Input */}
      <div className="p-3 border rounded-lg focus-within:ring-2 focus-within:ring-blue-500 transition">
        <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
      >
        {loading ? "Processing..." : "Pay"}
      </button>

      {/* Status Message */}
      {message && (
        <p className="text-center text-sm font-medium mt-3">
          {message.startsWith("✅") ? (
            <span className="text-green-600">{message}</span>
          ) : (
            <span className="text-red-600">{message}</span>
          )}
        </p>
      )}
    </form>
  );
}

export default function Payment({ method, amount, clear, setShow }) {
  const items = useSelector((state) => state.items);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Elements stripe={stripePromise}>
        <CheckoutForm
          method={method}
          amount={amount}
          items={items}
          clear={clear}
          setShow={setShow}
        />
      </Elements>
    </div>
  );
}
