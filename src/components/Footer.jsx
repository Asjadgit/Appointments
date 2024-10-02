import React from 'react'
import { assets } from '../assets/asset'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer className="bg-gray-100 text-white py-8 mt-12 md:mt-24 rounded border-b-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src={assets.logo} alt="logo" className="w-32 h-auto mb-4" />
            <p className="text-black text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </p>
          </div>

          {/* Company Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-black">Company</h4>
            <ul className="space-y-2 text-sm text-black">
              <li><p onClick={() => {navigate('/'); scrollTo(0,0)}} className="hover:text-primary cursor-pointer">Home</p></li>
              <li><p onClick={() => {navigate('/about'); scrollTo(0,0)}} className="hover:text-primary cursor-pointer">About Us</p></li>
              <li><p onClick={() => {navigate('/contact'); scrollTo(0,0)}} className="hover:text-primary cursor-pointer">Contact Us</p></li>
              <li><p onClick={() => {navigate('/'); scrollTo(0,0)}} className="hover:text-primary cursor-pointer">Privacy Policy</p></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-black">Get in Touch</h4>
            <p className="text-black text-sm">Phone: +100 6719 11</p>
            <p className="text-black text-sm">Email: citamedica@gmail.com</p>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-gray-100 text-center py-4 mb-2 md:mb-4">
        <p className="text-black text-sm">&copy; 2024 Citamedica. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer
