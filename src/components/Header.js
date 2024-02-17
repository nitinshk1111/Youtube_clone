import React from "react";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSLice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="fixed w-full bg-white top-0">
      <div className="flex items-center justify-between px-4 ">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
            className="w-12 h-8"
            alt="logo"
            onClick={() => dispatch(toggleMenu())}
          />

          <img
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-970-80.jpg.webp"
            className="w-32 h-[60px]"
            alt="logo"
          />
        </div>
        <div>
          <Search />
        </div>

        <img
          src="https://images.rawpixel.com/image_png_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          className="w-140 h-10"
          alt="logo"
        />
      </div>
      {/* <VideoCategory /> */}
    </div>
  );
};

export default Header;
