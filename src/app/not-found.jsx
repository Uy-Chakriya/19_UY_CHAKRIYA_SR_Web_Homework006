import CustomerDetailComponent from "@/components/CustomerDetailComponent";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-[1200px] ml-10 mt-5 p-5 flex items-center justify-center ">
      <div className="w-[600px] text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <div className="relative">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </p>

          <div className="flex flex-row gap-3 my-5 items-center justify-center ">
            <button className="w-[200px] py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg ">
              Back to Homepage
            </button>
            <button className="w-[200px] py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-lg ">
              Browse Products
            </button>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            Need help?{" "}
            <a href="#" className="text-blue-600 ">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
