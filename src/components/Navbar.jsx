import React from "react";
import { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user,setShowLogin, logout, credit } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between pb-2">
      <Link to="/ ">
        <img
          src={assets.imagine_logo}
          alt="Imagine"
          className="w-25 sm:w-32 lg:w-40 h-20 object-cover"
        />
      </Link>

      <div>
        {user ? (
          <div className="flex text-center gap-3 sm:gap-3 items-center">
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 bg-shade2 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer"
            >
              <img className="w-5" src={assets.credit_star} alt="credit-star" />
              <p className="text-xs sm:text-sm font-medium text-secondary-text">
                Credit left: {credit}
              </p>
            </button>
            <p className="text-secondary-text max-sm:hidden pl-4">
              Hi, {user.name}
            </p>

            <div className="relative group cursor-pointer">
              <img
                className="w-10 drop-shadow "
                src={assets.profile_icon}
                alt="profile-img"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-primary-text rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-full  text-sm ">
                  <li onClick={logout} className="py-1 px-2 cursor-pointer">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              className="cursor-pointer text-secondary-text hover:text-secondary-base"
              onClick={() => navigate("/buy")}
            >
              Pricing
            </p>
            <button onClick={()=> setShowLogin(true)} className="bg-zinc-800 font-bold text-white px-7 py-2 sm:px-10 text-sm rounded-full hover:bg-secondary-base hover:text-primary-text hover:font-bold cursor-pointer">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
