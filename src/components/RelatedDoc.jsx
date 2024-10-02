import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoc = ({docId,speciality}) => {

    const [relDoc,setrelDoc] = useState([]);
    const {Doctors} = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        const docArray = Doctors.filter((doc) => doc.specialization.name === speciality && doc.id != docId);
        // console.log(docArray);
        setrelDoc(docArray);
    },[Doctors,speciality,docId]);
        
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {relDoc.slice(0, 5).map((item, index) => (
                    <div onClick={() => {navigate(`/appointment/${item.id}`),scrollTo(0,0)}}
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
  )
}

export default RelatedDoc
