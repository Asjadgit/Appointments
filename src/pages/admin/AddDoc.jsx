import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';

const AddDoc = () => {
    const { specializations } = useContext(AppContext);
    const [msg, setmsg] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        contact: '',
        degree: '',
        specialization: '',
        experience: '',
        about: '',
        fee: '',
        address: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send formData to backend
        // console.log(formData);
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });
        try {
            const response = axios.post('http://127.0.0.1:8001/api/add-doctor', formDataToSend)
                .then((response) => {
                    if (response.status === 201) {
                        setmsg('Doctor Added Successfully');
                    }
                    scrollTo(0,0);
                    setTimeout(() => {
                        setmsg('');
                    }, 3000);
                })
                .catch((error) => {
                    setmsg('Please try Again. Something wrong');
                    setTimeout(() => {
                        setmsg('');
                    }, 3000);
                })

            console.log('Doctor added successfully:', response.data);
            setFormData({
                name: '',
                email: '',
                password: '',
                contact: '',
                degree: '',
                specialization: '',
                experience: '',
                about: '',
                fee: '',
                address: '',
                image: null,
            });
        } catch (error) {
            console.error('Error adding doctor:', error);
        }


    };

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-semibold text-center mb-6">Add New Doctor</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
            {msg && (
                <div className={`text-center mb-4 font-bold ${msg.includes('Successfully') ? 'text-green-600' : 'text-red-600'}`}>
                    {msg}
                </div>
            )}

                {/* Name */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Enter doctor's name"
                        required
                    />
                </div>
                {/* Email */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Enter doctor's email"
                        required
                    />
                </div>
                {/* Password */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Enter doctor's password"
                        required
                    />
                </div>

                {/* Contact */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Contact</label>
                    <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Enter doctor's contact"
                        required
                    />
                </div>

                {/* Degree */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Degree</label>
                    <input
                        type="text"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Enter doctor's degree"
                        required
                    />
                </div>

                {/* Specialization */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Specialization</label>
                    <select
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Enter doctor's specialization"
                        required
                    >
                        <option value="">Select a specialization</option>
                        {specializations.map((spec) => (
                            <option key={spec.id} value={spec.id}>
                                {spec.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Experience */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Experience</label>
                    <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Enter doctor's experience"
                        required
                    />
                </div>

                {/* About */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">About</label>
                    <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Write a short bio about the doctor"
                        required
                    />
                </div>

                {/* Fee */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Fee</label>
                    <input
                        type="text"
                        name="fee"
                        value={formData.fee}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Enter consultation fee"
                        required
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Enter doctor's address"
                        required
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Doctor's Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-primary transition duration-300"
                    >
                        Add Doctor
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddDoc;
