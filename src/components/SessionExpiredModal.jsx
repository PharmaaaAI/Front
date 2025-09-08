import { useEffect } from "react";

export default function SessionExpiredModal({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm text-center">
        <h2 className="text-xl font-semibold text-red-600">Session Expired</h2>
        <p className="mt-2 text-gray-700">
          You’ll be redirected to the login page.
        </p>
      </div>
    </div>
  );
}
