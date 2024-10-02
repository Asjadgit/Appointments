import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciliaty } = useParams();
  // console.log(speciliaty);
  const [alldoctors, setFilterDoctors] = useState([]); // for filtering based on specialization
  const navigate = useNavigate();
  const { Doctors } = useContext(AppContext);


  // function to filter doctors
  const filterDoc = (doctors, speciliaty) => {
    if (speciliaty) {
      return doctors.filter((doc) => doc.specialization.name === speciliaty);
    } else {
      return doctors;
    }
  }

  useEffect(() => {
    const result = filterDoc(Doctors, speciliaty);
    setFilterDoctors(result);
    window.scrollTo(0, 0);
  }, [Doctors, speciliaty]);
  return (
    <div className='flex flex-col justify-evenly md:flex-row gap-6 h-auto'>
      <div className='flex flex-col md:w-48'>
        <p onClick={() => speciliaty === 'Dermatoligist' ? navigate('/doctors') : navigate('/doctors/Dermatoligist')} className={`text-black cursor-pointer border p-2 mb-2 ${speciliaty === "Dermatoligist" ? 'bg-primary text-white' : ''}`}>Dermatoligist</p>

        <p onClick={() => speciliaty === 'General Physician' ? navigate('/doctors') : navigate('/doctors/General Physician')} className={`text-black cursor-pointer border p-2 mb-2 ${speciliaty === "General Physician" ? 'bg-primary text-white' : ''}`}>General Physician</p>

        <p onClick={() => speciliaty === 'Gynacologist' ? navigate('/doctors') : navigate('/doctors/Gynacologist')}className={`text-black cursor-pointer border p-2 mb-2 ${speciliaty === "Gynacologist" ? 'bg-primary text-white' : ''}`}>Gynacologist</p>

        <p onClick={() => speciliaty === 'Neuroligist' ? navigate('/doctors') : navigate('/doctors/Neuroligist')} className={`text-black cursor-pointer border p-2 mb-2 ${speciliaty === "Neuroligist" ? 'bg-primary text-white' : ''}`}>Neuroligist</p>

        <p onClick={() => speciliaty === 'Orthopedics' ? navigate('/doctors') : navigate('/doctors/Orthopedics')} className={`text-black cursor-pointer border p-2 mb-2 ${speciliaty === "Orthopedics" ? 'bg-primary text-white' : ''}`}>Orthopedics</p>

        <p onClick={() => speciliaty === 'Physical Therapist' ? navigate('/doctors') : navigate('/doctors/Physical Therapist')} className={`text-black cursor-pointer border p-2 mb-2 ${speciliaty === "Physical Therapist" ? 'bg-primary text-white' : ''}`}>Physical Therapist</p>

        <p onClick={() => speciliaty === 'Plastic Surgeon' ? navigate('/doctors') : navigate('/doctors/Plastic Surgeon')} className={`text-black cursor-pointer border p-2 mb-2 ${speciliaty === "Plastic Surgeon" ? 'bg-primary text-white' : ''}`}>Plastic Surgeon</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {alldoctors.map((item, index) => (
          <div onClick={() => {navigate(`/appointment/${item.id}`); scrollTo(0,0)}}
            key={index}
            className="doctor-card flex flex-col items-center bg-white p-0 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 cursor-pointer w-auto md:h-72 transform hover:-translate-y-2" // Adds upward movement on hover
          >
            <div className="w-full h-36 bg-gray-300 md:w-full md:h-48 lg:w-full lg:h-48 p-3">
              <img
                src={`http://127.0.0.1:8001/storage/${item.image}`}
                alt={`Doctor ${index}`}
                className="w-full h-full" // Ensures image fits within the given width and height
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
    </div>
  )
}

export default Doctors
