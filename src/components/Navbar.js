import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="basis-48 shrink-0 max-h-full relative top-[-38px] mr-4">
      <div className="flex flex-col">
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "bg-gray-300 rounded-md py-1 px-6"
              : "py-1 px-6"
          }
        >
          Home
        </Link>
        <Link to="/" className="py-1 px-6">
          Shorts
        </Link>
        <Link to="/" className="py-1 px-6">
          Live
        </Link>
      </div>
      <h1 className="font-bold pt-5 px-2">Subscriptions</h1>
      <ul className="px-5">
        <li className="my-1"> Music</li>
        <li className="my-1"> Sports</li>
        <li className="my-1"> Gaming</li>
        <li className="my-1"> Movies</li>
      </ul>
    </div>
  );
};

export default Navbar;
