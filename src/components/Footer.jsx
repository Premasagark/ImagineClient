import React from "react";
import { assets } from "../assets/assets.js";

const Footer = () => {
  return (
    <div className="flex items-center justify-baseline gap-4 py-3 mt-20">
      <img
        src={assets.imagine_logo}
        alt="Imagine-Logo"
        width={150}
        className="h-20 object-cover"
      />

      <p className="flex-1 border-l  border-grey-400 pl-4 text-sm text-secondary-text max-sm:hidden">
        All right reserved. Copyright @portfolio-premasagar.onrender.com{" "}
      </p>

      <div className="flex gap-2.5">
        <img src={assets.facebook_icon} alt="fb-icon" width={35} />
        <img src={assets.twitter_icon} alt="fb-icon" width={35} />
        <img src={assets.instagram_icon} alt="fb-icon" width={35} />
      </div>
    </div>
  );
};

export default Footer;
