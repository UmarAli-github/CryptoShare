import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-center items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-36" />
      </div>
    </div>

    <div className="w-full flex flex-row justify-evenly items-center mt-5">
      <p className="text-white text-sm text-center">Contact me</p>
      <p className="text-white text-sm text-center font-medium mt-2">uali2407@gmail.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
  </div>
);

export default Footer;