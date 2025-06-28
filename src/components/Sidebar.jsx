import React from "react";
import {
  Home,
  Search,
  Plus,
  Heart,
  User,
  Settings,
  Bookmark,
  TrendingUp,
  Sparkles,
  Users,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Search, label: "Explore" },
    { icon: Plus, label: "Create" },
    { icon: Heart, label: "Saved" },
    { icon: User, label: "Profile" },
  ];

  const bottomMenuItems = [
    { icon: User, label: "Profile" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="fixed left-0 top-16 h-full w-16 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-2">
        {/* Main Menu */}
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <button
                className={`w-full h-12 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
                  item.active
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon className="w-5 h-5" />
              </button>

              {/* Hover Tooltip */}
              <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Find Friends */}
        <div className="relative group">
          <button className="w-full h-12 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer">
            <Users className="w-5 h-5" />
          </button>

          {/* Hover Tooltip */}
          <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
            Find Friends
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
