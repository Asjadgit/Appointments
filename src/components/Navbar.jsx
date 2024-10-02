import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/asset";
import { RxHamburgerMenu } from "react-icons/rx";
import { AppContext } from "../context/AppContext";
import { IoMdClose } from "react-icons/io";
import ToggleMenu from "./ToggleMenu";

const Navbar = () => {
  // const UserRole = 'user';
  const { token, logout, user } = useContext(AppContext);
  const [showMenu, setshowMenu] = useState(false);
  const navigate = useNavigate(); // for going to login when click on button create account
  const toggleMenu = () => {
    setshowMenu(!showMenu);
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between text-sm py-4 mb-5 border-b border-primary px-4 md:px-6">
      {user ? (
        user.role === 'admin' ? (
          <>
            <NavLink to='/admin'>
              <img className="w-32 md:w-44 cursor-pointer" src={assets.logo} alt="Logo" />
            </NavLink>
            <ul className="hidden md:flex space-x-4">
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`
                }
              >
                <li>Home</li>
              </NavLink>
            </ul>
          </>
        ) : user.role === 'doc' ? (
          <>
            <NavLink to='/doctor'>
              <img className="w-32 md:w-44 cursor-pointer" src={assets.logo} alt="Logo" />
            </NavLink>
            <ul className="hidden md:flex space-x-4">
              <NavLink
                to="/doctor"
                className={({ isActive }) =>
                  `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`
                }
              >
                <li>Home</li>
              </NavLink>
            </ul>
          </>
        ) : (
          <>
            <NavLink to='/'>
              <img className="w-32 md:w-44 cursor-pointer" src={assets.logo} alt="Logo" />
            </NavLink>
            <ul className="hidden md:flex space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`
                }
              >
                <li>Doctors</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`
                }
              >
                <li>About</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`
                }
              >
                <li>Contact</li>
              </NavLink>
            </ul>
          </>
        )
      ) : (
        <>
          <NavLink to='/'>
            <img className="w-32 md:w-44 cursor-pointer" src={assets.logo} alt="Logo" />
          </NavLink>
          <ul className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`
              }
            >
              <li>Doctors</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </>
      )}


      {/* hamburger for small screen */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-primary text-lg cursor-pointer font-bold">
          <RxHamburgerMenu />
        </button>
      </div>


      <ToggleMenu toggleMenu={toggleMenu} showMenu={showMenu} />



      <div className="hidden md:block">
        {token ? (
          <div className="relative group cursor-pointer flex items-center gap-2">
            {user ? ( // Check if user and image exist
              <img className="w-10 h-10 rounded-full" src={`http://127.0.0.1:8001/storage/${user.image}`} alt="Profile" />
            ) : (
              <img className="w-10 h-10 rounded-full" src={assets.profile_pic} alt="Default Profile" />
            )}
            <img className="w-5 h-5 rounded-full" src={assets.drop_down} alt="Dropdown" />

            {/* Dropdown menu */}
            {user.role === 'user' && (
              <div className="absolute top-0 right-0 pt-14 rounded-md text-base font-medium text-gray-500
              z-20 hidden group-hover:block">
                <div className="flex flex-col p-3 min-w-48 bg-slate-300">
                  <p onClick={() => {navigate('/my-profile')}} className="hover:text-primary cursor-pointer">My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className="hover:text-primary cursor-pointer">My Appointments</p>
                  <p onClick={logout} className="hover:text-primary cursor-pointer">Logout</p>
                </div>
              </div>
            )}

            {user.role === 'doc' && (
              <div className="absolute top-0 right-0 pt-14 rounded-md text-base font-medium text-gray-500
              z-20 hidden group-hover:block">
                <div className="flex flex-col p-3 min-w-48 bg-slate-300">
                  <p onClick={() => navigate('/doctor/profile')} className="hover:text-primary cursor-pointer">Doctor Profile</p>
                  <p onClick={() => navigate('/doctor/patients')} className="hover:text-primary cursor-pointer">My Patients</p>
                  <p onClick={logout} className="hover:text-primary cursor-pointer">Logout</p>
                </div>
              </div>
            )}

            {user.role === 'admin' && (
              <div className="absolute top-0 right-0 pt-14 rounded-md text-base font-medium text-gray-500
              z-20 hidden group-hover:block">
                <div className="flex flex-col p-3 min-w-48 bg-slate-300">
                  <p onClick={() => { navigate('/admin/profile'); scrollTo(0, 0) }} className="hover:text-primary cursor-pointer">Admin Profile</p>

                  <p onClick={() => { navigate('/admin/users'); scrollTo(0, 0) }} className="hover:text-primary cursor-pointer">Manage Patients</p>

                  <p onClick={() => { navigate('/admin/doctors'); scrollTo(0, 0) }} className="hover:text-primary cursor-pointer">Manage Doctors</p>

                  <p onClick={() => { navigate('/admin/speciliazation'); scrollTo(0, 0) }} className="hover:text-primary cursor-pointer">Manage Speciliazation</p>

                  <p onClick={() => { navigate('/admin/appointments'); scrollTo(0, 0) }} className="hover:text-primary cursor-pointer">Manage Appointments</p>

                  <p onClick={logout} className="hover:text-primary cursor-pointer">Logout</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90"
          >
            Create Account
          </button>
        )}
      </div>

    </div>
  );
};

export default Navbar;
