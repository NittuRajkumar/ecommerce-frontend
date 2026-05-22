import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

/**
 * Payment Success Page
 * Shows order confirmation after successful checkout
 */
const PaymentSuccess = () => {
  const location = useLocation();
  const order = location.state?.order;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <svg
              className="w-16 h-16 mx-auto text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been successfully placed.
          </p>

          {/* Order Details */}
          {order && (
            <div className="bg-gray-50 rounded-lg p-6 text-left mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Order Details
              </h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-semibold">{order._id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Customer Name:</span>
                  <span className="font-semibold">
                    {order.customerInfo.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold">
                    {order.customerInfo.email}
                  </span>
                </div>
              </div>

              {/* Items */}
              <div className="border-t pt-4 mb-4">
                <h3 className="font-bold text-gray-800 mb-3">Items Ordered:</h3>
                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-gray-600"
                    >
                      <span>
                        {item.title} x {item.quantity}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="border-t pt-4 flex justify-between text-lg font-bold">
                <span>Total Amount:</span>
                <span className="text-blue-600">
                  ${order.totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          )}

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-6 text-left">
            <p className="text-sm text-gray-700 mb-2">
              <strong>What's Next:</strong>
            </p>
            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>We'll send you a confirmation email shortly</li>
              <li>Your order will be processed and shipped within 2-3 business days</li>
              <li>You'll receive a tracking number once shipped</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link
              to="/"
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Continue Shopping
            </Link>
            <button
              onClick={() => window.print()}
              className="flex-1 bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              Print Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
