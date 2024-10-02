import React from 'react';
import { assets } from '../assets/asset';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      
      {/* About Us Image and Text */}
      <div className="text-center mb-8">
        <img 
          src={assets.about_pic} 
          alt="About Us" 
          className="w-full h-full object-cover rounded-lg mb-4"
        />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed">
          Welcome to <span className="font-semibold text-blue-600">Cita Médica</span>, your trusted partner in health and wellness. We are dedicated to providing exceptional medical services across various specialties, including dermatology, gynecology, neurology, and more. Our mission is to make healthcare accessible, efficient, and tailored to your individual needs.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          At Cita Médica, we understand that finding the right doctor can be challenging. That’s why we have assembled a team of highly qualified specialists, each committed to delivering personalized care and expertise in their respective fields. Whether you need a routine check-up or specialized treatment, you can trust our doctors to provide the highest standard of medical attention.
        </p>
      </div>

      {/* Why Choose Us and Our Values */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Cita Médica?</h1>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
          <li>
            <strong>Expertise:</strong> Our doctors are experienced professionals who stay updated with the latest advancements in their specialties.
          </li>
          <li>
            <strong>Comprehensive Services:</strong> From routine consultations to specialized treatments, we offer a wide range of services to meet your healthcare needs.
          </li>
          <li>
            <strong>Patient-Centric Approach:</strong> Your health and comfort are our top priorities. We listen to your concerns and work collaboratively to create a tailored treatment plan.
          </li>
          <li>
            <strong>Convenient Appointments:</strong> We provide a seamless online appointment booking system, making it easy for you to schedule visits at your convenience.
          </li>
        </ul>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h1>
        <p className="text-gray-600 mb-4">
          We are guided by a set of core values that shape our approach to healthcare:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
          <li>
            <span className="text-blue-600">✔️</span> <strong>Integrity:</strong> We maintain the highest ethical standards in every aspect of our practice.
          </li>
          <li>
            <span className="text-blue-600">✔️</span> <strong>Compassion:</strong> We care deeply about our patients’ well-being and strive to provide a supportive environment.
          </li>
          <li>
            <span className="text-blue-600">✔️</span> <strong>Innovation:</strong> We embrace the latest technologies and techniques to improve patient outcomes.
          </li>
          <li>
            <span className="text-blue-600">✔️</span> <strong>Collaboration:</strong> We work together as a team to ensure comprehensive care for our patients.
          </li>
        </ul>
        <p className="text-gray-600">
          Join us on a journey towards better health. At Cita Médica, we are here to empower you with the knowledge and resources you need to make informed decisions about your health.
        </p>
      </div>
    </div>
  );
}

export default About;
