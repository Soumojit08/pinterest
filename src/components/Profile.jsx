import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Masonry from "./Masonry";

const Profile = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("Saved");
  const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "5",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "6",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "7",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "8",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "9",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "10",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "11",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "12",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "13",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "14",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "15",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "16",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "17",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "18",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "19",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "20",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
  ];

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
        {/* No pins message */}
        <div className="flex flex-col items-center justify-center mt-16">
          <div className="w-full max-w-8xl px-4">
            <Masonry
              items={items}
              ease="power2.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
