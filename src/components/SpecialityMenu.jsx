import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const SpecialityMenu = () => {
    const {specializations} = useContext(AppContext); // get from apcontext
    return (
        <div id='speciality' className='p-4 md:p-8'>
            <h1 className='text-2xl md:text-4xl font-bold text-center mb-4'>
                Find Doctors by Speciality
            </h1>
            <p className='text-gray-600 text-sm md:text-base lg:text-lg text-center mb-6'>
                Explore a variety of medical specializations to find the right doctor for your health needs.
                Whether you are looking for a general physician, a dermatoligist, or any other specialist, we
                have doctors across all fields to cater to your needs.
            </p>

            <div className='p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 cursor-pointer'>
                {specializations.map((item, index) => (
                    <Link
                        key={index}
                        to={`/doctors/${item.name}`}
                        className='flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg'
                    >
                        <img
                            src={`http://127.0.0.1:8001/storage/${item.image}`}
                            alt={item.name}
                            className='w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover mb-3 transition-transform duration-300 hover:scale-110'
                        />
                        <p className='text-sm md:text-base font-medium text-gray-700 transition-colors duration-300 hover:text-primary'>
                            {item.name}
                        </p>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default SpecialityMenu
