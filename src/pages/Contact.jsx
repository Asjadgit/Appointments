import React from 'react';
import { assets } from '../assets/asset';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>

      <div className="mb-6">
        <p className="text-gray-600 text-center mb-4">
          We’re here to assist you with all your inquiries. Please reach out to us through any of the channels below!
        </p>
        <p className="text-gray-600 text-center mb-2">Our Office Hours: Mon-Fri: 10 AM - 6 PM | Sat: 10 AM - 4 PM</p>
        <p className="text-gray-600 text-center mb-4">Visit us at: 123 Health St, Wellness City, Country</p>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex-1 mb-6 md:mb-0">
          <img 
            src={assets.contact} 
            alt="Contact Us" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Contact Number</h2>
          <p className="text-xl text-gray-600 mb-4">+100 6719 11</p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Email</h2>
          <p className="text-xl text-gray-600">citamedica@gmail.com</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h2>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-primary hover:text-blue-700">Facebook</a>
          <a href="#" className="text-primary hover:text-blue-700">Twitter</a>
          <a href="#" className="text-primary hover:text-blue-700">Instagram</a>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Get in Touch!</h2>
        <p className="text-gray-600 mb-4">
          Prefer to write to us? Fill out our <a href="#" className="text-primary">Contact Form</a> for a quick response!
        </p>
        <p className="text-gray-600 mb-4">“Cita Médica transformed my healthcare experience!”</p>
        <p className="text-gray-600">We look forward to hearing from you and assisting you with your health needs!</p>
      </div>
    </div>
  );
}

export default Contact;
