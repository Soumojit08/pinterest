import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Profile = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("Saved");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Sidebar />
      {/* Main content area with sidebar and navbar offset */}
      <div className="ml-16 pt-8 md:pt-16">
        {/* Profile Section */}
        <div className="flex flex-col items-center mt-2">
          <img
            src={user?.imageUrl || "https://via.placeholder.com/120"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
          />
          <h1 className="mt-4 text-4xl font-bold text-gray-900 text-center">
            {user?.fullName || "Your Name"}
          </h1>
          <div className="flex items-center mt-1 text-gray-600">
            <span className="text-base">
              {user?.username ||
                user?.emailAddresses[0]?.emailAddress?.split("@")[0]}
            </span>
          </div>
          <div className="mt-1 text-gray-700 text-base">0 following</div>
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
    </div>
  );
};

export default Profile;
