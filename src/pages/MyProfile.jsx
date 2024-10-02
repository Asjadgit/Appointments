import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { FaEdit } from "react-icons/fa";
import axios from 'axios';

const MyProfile = () => {
  const { user } = useContext(AppContext);
  const [image, setImage] = useState(`http://127.0.0.1:8001/storage/${user.image}`);

  // Function to handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Preview the selected image
      setImage(imageUrl);

      uploadImage(file, user.id); // Call upload function here
    }
  };

  const uploadImage = async (file,userId) => {
    // console.log(userId);
    const formData = new FormData();
    formData.append('image', file);
    formData.append('user_id', userId);
    const res = await axios.post('http://127.0.0.1:8001/api/userImage',formData)
    .then((response)=>{
      if(response.status === 201){
        console.log('updated');
      }
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <>
      {user ? (
        <div className="flex flex-col justify-center items-center md:flex-row bg-white shadow-lg rounded-lg max-w-4xl mx-auto p-6 gap-8 border border-gray-200">
          <div className="relative w-36 h-36 p-4 md:w-72 md:h-72 bg-primary overflow-hidden border-4 border-white shadow-md cursor-pointer rounded-full group">
            {/* Profile Image */}
            <img
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 rounded-full"
              src={image}
              alt="Profile"
            />

            {/* FaEdit Icon */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
              onClick={() => document.getElementById('imageInput').click()} // Trigger file input click
            >
              <FaEdit className="text-white text-3xl" />
            </div>

            {/* Hidden file input */}
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Profile Details</h1>
            <div className="space-y-2">
              <h2 className="text-lg text-gray-700"><span className="font-semibold">Name:</span> {user.name}</h2>
              <h2 className="text-lg text-gray-700"><span className="font-semibold">Email:</span> {user.email}</h2>
              <h2 className="text-lg text-gray-700"><span className="font-semibold">Contact:</span> {user.contact}</h2>
              <h2 className="text-lg text-gray-700"><span className="font-semibold">Address:</span> {user.address}</h2>
              {user.role !== "doc" ? (
                <h2 className="text-lg text-gray-700"><span className="font-semibold">Gender:</span> {user.gender}</h2>
              ) : (
                <h2></h2>
              )}
              
            </div>
            <div className="mt-4">
              <button className="bg-primary text-white py-2 px-6 rounded-lg shadow hover:bg-primary-dark transition duration-300">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>No Profile Data</h1>
        </div>
      )}
    </>

  );
};

export default MyProfile;
