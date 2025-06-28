import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Search,
  Plus,
  Heart,
  User,
  Users,
  Settings,
  Bell,
  MessageCircle,
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home", route: "/home" },
  { icon: Search, label: "Explore", route: "/explore" },
  { icon: Plus, label: "Create", route: "/create" },
  { icon: Heart, label: "Saved", route: "/saved" },
  { icon: User, label: "Profile", route: "/profile" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toast, setToast] = useState(null);

  const handleNav = (item) => {
    setToast(item.label);
    navigate(item.route);
    setTimeout(() => setToast(null), 1200);
  };

  return (
    <>
      <div className="fixed left-0 top-16 h-full w-16 bg-white border-r border-gray-200 flex flex-col justify-between items-center py-4 z-40">
        <div className="flex flex-col gap-2 items-center w-full">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.route;
            return (
              <div
                key={index}
                className="relative group w-full flex justify-center"
              >
                <button
                  onClick={() => handleNav(item)}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors cursor-pointer focus:outline-none ${
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                </button>
                {/* Tooltip */}
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-2 items-center w-full mb-2">
          {/* Find Friends */}
          <div className="relative group w-full flex justify-center">
            <button
              onClick={() =>
                handleNav({ label: "Find Friends", route: "/find-friends" })
              }
              className="w-12 h-12 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <Users className="w-6 h-6" />
            </button>
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              Find Friends
            </div>
          </div>
          {/* Settings at the bottom */}
          <div className="relative group w-full flex justify-center mt-2">
            <button
              onClick={() =>
                handleNav({ label: "Settings", route: "/settings" })
              }
              className="w-12 h-12 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <Settings className="w-6 h-6" />
            </button>
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              Settings
            </div>
          </div>
        </div>
      </div>
      {/* Toast */}
      {toast && (
        <div className="fixed left-20 top-20 bg-black text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in-out">
          {toast}
        </div>
      )}
      <style>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(-10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 1.2s;
        }
      `}</style>
    </>
  );
};

export default Sidebar;
