import axios from 'axios';
import React, { useState } from 'react'

const AddSpeciality = () => {

    const [msg,setmsg] = useState('');
    const [name, setname] = useState('');
    const [img, setimg] = useState(null);

    const handleSpecialization = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', img);

        // Store in db
        axios.post('http://127.0.0.1:8001/api/add-specialization',formData)
        .then((response) => {
            if (response.status === 201) {
                setmsg('Specialization Added Successfully');
            }
            setTimeout(() => {
                setmsg('');
            },3000);
        })
        .catch((error) => {
            setmsg('Please try Again. Something wrong');
            setTimeout(() => {
                setmsg('');
            },3000);
        })

        // Log the formData entries properly
        // for (let pair of formData.entries()) {
        //     console.log(pair[0] + ': ' + pair[1]);
        // }
        setname('');
        setimg('');
    }
    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-semibold text-center mb-6">Add New Specialization</h1>
            <form onSubmit={handleSpecialization} className='w-full'>
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
                        onChange={(e) => setname(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 mb-2"
                        placeholder="Enter Specialization's name"
                        required
                    />
                </div>
                {/* Image */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2 mt-2">Specialization's Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={(e) => setimg(e.target.files[0])}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 mb-2"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-primary transition duration-300"
                    >
                        Add Specialization
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddSpeciality
