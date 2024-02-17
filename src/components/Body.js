import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import React from "react";
import { useSelector } from "react-redux";

const Body = () => {
  const menuSelector = useSelector((store) => store.app);
  return (
    <div className="flex px-6">
      {menuSelector.isMenuOpen && <Navbar />}

      <div
        className="overflow-scroll h-screen flex-1"
        style={{ height: "calc(100vh - 140px)" }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
