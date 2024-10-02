import React from 'react'
import { assets } from '../assets/asset'

const Header = () => {
    return (
        <div className='bg-primary flex flex-col-reverse md:flex-row items-center justify-between p-4 md:p-8 rounded-md'>
            {/* left side */}
            <div className='w-full md:w-1/2 relative p-4 md:left-6 text-center md:text-left'>
                <h1 className='text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-2'>
                    Book Appointment
                </h1>
                <h1 className='text-white font-bold text-2xl md:text-3xl lg:text-4xl'>
                    With Our Trusted Doctors
                </h1>
                <div className='mt-4 inline-block bg-white rounded-full px-6 py-2 md:mt-6'>
                    <a className='text-black font-medium text-sm md:text-base lg:text-lg' href='#speciality'>
                        Book Appointment
                    </a>
                </div>
            </div>

            {/* right side */}
            <div className='w-full md:w-1/2 mt-6 md:mt-0'>
                <img className='w-auto h-auto' src={assets.group_pic} alt="Group of Doctors" />
            </div>
        </div>
    )
}

export default Header
