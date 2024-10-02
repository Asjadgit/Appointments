import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const DoctorsMenu = () => {

    const navigate = useNavigate(); //when click on any doc move to appointment
    const { Doctors } = useContext(AppContext);

    
    return (
        <div className="p-4 md:p-8">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">Our Top Doctors</h1>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg text-center mb-6">
                Browse our selection of experienced doctors and book an appointment with the specialist that suits your needs.
            </p>

            {/* Responsive grid layout for doctors */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {Doctors.slice(0, 10).map((item, index) => (
                    <div onClick={() => {navigate(`/appointment/${item.id}`); scrollTo(0,0)}}
                        key={index}
                        className="doctor-card flex flex-col items-center bg-white p-0 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 cursor-pointer w-auto h-auto transform hover:-translate-y-2" // Adds upward movement on hover
                    >
                        <div className="w-full h-36 bg-gray-300 md:w-full md:h-48 lg:w-full lg:h-48 mb-0 p-4 ">
                            <img
                                src={`http://127.0.0.1:8001/storage/${item.image}`}
                                alt={`Doctor ${index}`}
                                className="w-full h-full object-contain" // Ensures image fits within the given width and height
                            />
                        </div>
                        {/* Doctor Information - vertically aligned */}
                        <div className="flex flex-col justify-between items-center h-full w-full">
                            {/* Doctor's Name and Specialty */}
                            <div className="w-full ml-5 mt-2">
                                <p className="text-xs md:text-sm text-green-500">Available</p>
                                <p className="text-sm md:text-xl font-medium text-black">{item.name}</p>
                                <p className="text-sm md:text-sm font-medium text-gray-400 mb-4">{item.specialization.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center mt-4">
                <NavLink to="/doctors">
                    <button className="rounded-full px-6 py-3 text-white bg-primary text-xs md:px-8 md:py-4 md:text-sm lg:text-base lg:font-bold shadow-md transition-transform duration-300 hover:bg-primary-dark hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-light">
                        All Doctors
                    </button>
                </NavLink>
            </div>


        </div>
    );
};

export default DoctorsMenu;
