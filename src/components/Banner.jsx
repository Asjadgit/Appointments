import React, { useContext } from 'react'
import { assets } from '../assets/asset'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Banner = () => {
  const { user } = useContext(AppContext);

  const navigate = useNavigate();
  return (
    <div className='bg-primary w-full h-auto md:h-68 flex flex-col-reverse mt-6 md:flex-row items-center justify-between p-4 md:p-8 rounded-md md:mt-12'>
      {/* left side */}
      <div className='w-full md:w-1/2 relative p-4 md:left-6 text-center md:text-left'>
        <h1 className='text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-2'>Book Appointment</h1>
        <h1 className='text-white font-bold text-2xl md:text-3xl lg:text-4xl'>With 50+ Trusted Doctors</h1>
        <div className='mt-4 inline-block bg-white rounded-full px-6 py-2 md:mt-6 h'>
          {user ? (
            <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='text-black font-medium text-sm md:text-base lg:text-lg'>
              Book Appointment
            </button>
          ) :
            <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='text-black font-medium text-sm md:text-base lg:text-lg'>
              Create Account
            </button>
          }

        </div>
      </div>

      {/* right side */}
      <div className='w-full md:w-1/2 mt-6 md:mt-0 md:mb-0'>
        <img className='w-full h-auto max-h-48 md:max-h-72 object-contain' src={assets.appointment_pic} alt="appointment_pic" />
      </div>
    </div>
  )
}

export default Banner
