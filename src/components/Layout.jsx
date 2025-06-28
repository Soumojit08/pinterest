import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <Sidebar />
    <div className="ml-16 pt-8 md:pt-16">{children}</div>
  </div>
);

export default Layout;
