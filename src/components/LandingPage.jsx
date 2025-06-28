import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Pinterest</h1>
          <p className="text-gray-600 mb-8">
            Welcome to your personalized Pinterest Grid application
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/sign-in"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Sign In
          </Link>

          <Link
            to="/sign-up"
            className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Create Account
          </Link>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Get started by signing in or creating a new account
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
