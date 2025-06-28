import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { ArrowLeft, BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("Saved");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Back Arrow */}
      <div className="flex items-center pt-8 pl-8">
        <button
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-2">
        {/* Profile Image */}
        <img
          src={user?.imageUrl || "https://via.placeholder.com/120"}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
        />
        {/* Name */}
        <h1 className="mt-4 text-4xl font-bold text-gray-900 text-center">
          {user?.fullName || "Your Name"}
        </h1>
        {/* Username with Pinterest icon */}
        <div className="flex items-center mt-1 text-gray-600">
          <svg
            className="w-5 h-5 mr-1 text-red-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="12" />
          </svg>
          <span className="text-base">
            {user?.username ||
              user?.emailAddresses[0]?.emailAddress?.split("@")[0]}
          </span>
        </div>
        {/* Following stats */}
        <div className="mt-1 text-gray-700 text-base">0 following</div>
        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-base font-medium transition-colors">
            Share
          </button>
          <button className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-base font-medium transition-colors">
            Edit profile
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-8">
        <div className="flex gap-8 border-b border-gray-200">
          {["Created", "Saved"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 pb-3 text-lg font-semibold transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Placeholder */}
      <div className="max-w-6xl mx-auto mt-8 px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-xl h-40 flex items-center justify-center text-gray-400 text-2xl font-bold"
          >
            Pin {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
