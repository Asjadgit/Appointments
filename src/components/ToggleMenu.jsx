import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/asset';
import { IoMdClose } from 'react-icons/io';

const ToggleMenu = ({ toggleMenu, showMenu }) => {
    const { token, logout, user } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <>
            {/* Toggle menu */}
            <div className={`fixed inset-0 bg-white z-50 flex flex-col py-4 transform transition-transform duration-300 ease-in-out ${showMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <div className="flex justify-between p-4">
                    <img src={assets.logo} alt="Logo" className="w-32 cursor-pointer" />
                    <button onClick={toggleMenu} className="p-2">
                        <IoMdClose size={28} className="text-gray-700" />
                    </button>
                </div>
                <div className="flex flex-col flex-grow space-y-4 px-4">
                    {user ? (
                        user.role === 'admin' ? (
                            <ul className="space-y-4 text-xl">
                                <NavLink
                                    onClick={toggleMenu}
                                    to="/admin"
                                    className={({ isActive }) => `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`}
                                >
                                    <li>Admin Home</li>
                                </NavLink>
                            </ul>
                        ) : user.role === 'doc' ? (
                            <ul className="space-y-4 text-xl">
                                <NavLink
                                    onClick={toggleMenu}
                                    to="/doctor"
                                    className={({ isActive }) => `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`}
                                >
                                    <li>Doctor Home</li>
                                </NavLink>
                            </ul>
                        ) : (
                            <ul className="space-y-4 text-xl">
                                <NavLink
                                    onClick={toggleMenu}
                                    to="/"
                                    className={({ isActive }) => `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`}
                                >
                                    <li>Home</li>
                                </NavLink>
                                <NavLink
                                    onClick={toggleMenu}
                                    to="/doctors"
                                    className={({ isActive }) => `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`}
                                >
                                    <li>Doctors</li>
                                </NavLink>
                                <NavLink
                                    onClick={toggleMenu}
                                    to="/about"
                                    className={({ isActive }) => `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`}
                                >
                                    <li>About</li>
                                </NavLink>
                                <NavLink
                                    onClick={toggleMenu}
                                    to="/contact"
                                    className={({ isActive }) => `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`}
                                >
                                    <li>Contact</li>
                                </NavLink>
                            </ul>
                        )
                    ) : (
                        <ul className="space-y-4 text-xl">
                            <NavLink
                                onClick={toggleMenu}
                                to="/"
                                className={({ isActive }) => `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`}
                            >
                                <li>Home</li>
                            </NavLink>
                            <NavLink
                                onClick={toggleMenu}
                                to="/doctors"
                                className={({ isActive }) => `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`}
                            >
                                <li>Doctors</li>
                            </NavLink>
                            <NavLink
                                onClick={toggleMenu}
                                to="/about"
                                className={({ isActive }) => `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`}
                            >
                                <li>About</li>
                            </NavLink>
                            <NavLink
                                onClick={toggleMenu}
                                to="/contact"
                                className={({ isActive }) => `text-sm ${isActive ? "text-primary font-bold" : "text-gray-700"} hover:text-primary`}
                            >
                                <li>Contact</li>
                            </NavLink>
                        </ul>
                    )}
                    <div className="block">
                        {token ? (
                            <div className="relative group cursor-pointer flex items-center gap-2">
                                {user ? (
                                    <img className="w-10 h-10 rounded-full" src={`http://127.0.0.1:8001/storage/${user.image}`} alt="Profile" />
                                ) : (
                                    <img className="w-10 h-10 rounded-full" src={assets.profile_pic} alt="Default Profile" />
                                )}
                                <img className="w-5 h-5 rounded-full" src={assets.drop_down} alt="Dropdown" />

                                {/* Dropdown menu */}
                                {user.role === 'user' && (
                                    <div className="absolute pt-12 left-8 top-0 md:right-0 md:pt-14 rounded-md text-base font-medium text-gray-500 z-20 hidden group-hover:block">
                                        <div className="flex flex-col p-3 min-w-48 bg-slate-300">
                                            <p onClick={() => {navigate('/my-profile'); toggleMenu();}} className="hover:text-primary cursor-pointer">My Profile</p>
                                            <p onClick={() => {navigate('/my-appointments'); toggleMenu();}} className="hover:text-primary cursor-pointer">My Appointments</p>
                                            <p onClick={logout} className="hover:text-primary cursor-pointer">Logout</p>
                                        </div>
                                    </div>
                                )}

                                {user.role === 'doc' && (
                                    <div className="absolute pt-12 left-8 top-0 md:right-0 md:pt-14 rounded-md text-base font-medium text-gray-500 z-20 hidden group-hover:block">
                                        <div className="flex flex-col p-3 min-w-48 bg-slate-300">
                                            <p onClick={() => {navigate('/doctor/profile'); toggleMenu();}} className="hover:text-primary cursor-pointer">Doctor Profile</p>
                                            <p onClick={() => {navigate('/doctor/patients'); toggleMenu();}} className="hover:text-primary cursor-pointer">My Patients</p>
                                            <p onClick={logout} className="hover:text-primary cursor-pointer">Logout</p>
                                        </div>
                                    </div>
                                )}

                                {user.role === 'admin' && (
                                    <div className="absolute pt-12 left-8 top-0 md:right-0 md:pt-14 rounded-md text-base font-medium text-gray-500 z-20 hidden group-hover:block">
                                        <div className="flex flex-col p-3 min-w-48 bg-slate-300">
                                            <p onClick={() => { navigate('/admin/profile'); toggleMenu(); }} className="hover:text-primary cursor-pointer">Admin Profile</p>
                                            <p onClick={() => { navigate('/admin/users'); toggleMenu(); }} className="hover:text-primary cursor-pointer">Manage Patients</p>
                                            <p onClick={() => { navigate('/admin/doctors'); toggleMenu(); }} className="hover:text-primary cursor-pointer">Manage Doctors</p>
                                            <p onClick={() => { navigate('/admin/speciliazation'); toggleMenu(); }} className="hover:text-primary cursor-pointer">Manage Specialization</p>
                                            <p onClick={() => { navigate('/admin/appointments'); toggleMenu(); }} className="hover:text-primary cursor-pointer">Manage Appointments</p>
                                            <p onClick={logout} className="hover:text-primary cursor-pointer">Logout</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button
                                onClick={() => { navigate('/login'); toggleMenu(); }}
                                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90"
                            >
                                Create Account
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ToggleMenu;
