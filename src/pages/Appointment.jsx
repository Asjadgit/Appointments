import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import RelatedDoc from '../components/RelatedDoc';
import axios from 'axios';

const Appointment = () => {
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();
  const { Doctors, currencySymbol,MyAppointments } = useContext(AppContext);
  const [doctorsInfo, setdoctorsInfo] = useState(null);
  const [slots, setSlots] = useState([]);
  const [slotIndex, setslotIndex] = useState(0);
  const [slotTime, setslotTime] = useState('');
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Get user and token from local storage
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));


  const getAvailableDates = () => {

    setSlots([]); //first empty array
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      // setting the next 7 days date
      let nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      // console.log(`${nextDate}`);

      // now setting the endtime for each date e.g 10 am to 6 pm
      let endtime = new Date();
      endtime.setDate(today.getDate() + i);
      endtime.setHours(18, 0, 0, 0); // 18 is for 6 pm
      // console.log(`${endtime}`);

      // setting hours
      if (today.getDate() === nextDate.getDate()) {
        // starting from 10 first check if currentDate time and if greater than 10 whn user arrive show next hours
        nextDate.setHours(nextDate.getHours() > 10 ? nextDate.getHours() + 1 : 10);
        // console.log(`${nextDate}`);
        nextDate.setMinutes(nextDate.getMinutes() > 30 ? 30 : 0); // if minutes greater than 30 
      } else {
        nextDate.setHours(10);
        nextDate.setMinutes(0);
      }

      let timeSlots = []; // for every time and date

      while (nextDate < endtime) {
        let formattedTime = nextDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        // now add formattedTime and date into timeSlots

        timeSlots.push({
          dateTime: new Date(nextDate),
          time: formattedTime
        });

        // increment the date by 30 minutes
        nextDate.setMinutes(nextDate.getMinutes() + 30);
      }

      // now set the slots
      setSlots(prev => ([...prev, timeSlots]));
    }

  }

  const filterDocInfo = (id) => {
    if (id) {
      return Doctors.find((doc) => doc.id == id);
    }
  }

  useEffect(() => {
    const result = filterDocInfo(id);
    // console.log('Filtered Doctor Info:', result);
    setdoctorsInfo(result);
  }, [Doctors, id]);

  useEffect(() => {
    getAvailableDates();
  }, [doctorsInfo]);

  useEffect(() => {
    // console.log(slots);
  }, [slots]);

  // function to handle the appointment booking
  const handleBookAppointment = () => {
    // Check if the user is logged in
    if (!user) {
      // Redirect to login if not logged in
      navigate('/login');
      window.scrollTo(0,0);
    } else if (!slotTime || !slots[slotIndex]) {
      // Ensure a time slot and date are selected
      alert('Please select a date and time slot');
    }
    else {
      // Proceed with booking the appointment (add your booking logic here)
      // Collect the data to send
      const appointmentData = {
        doctor_id: doctorsInfo.id,  // doc_id
        date: slots[slotIndex][0].dateTime.toISOString().split('T')[0], // sending the date (ISO format)
        time_slot: slotTime, // selected time slot
        user_id: user.id, // sending the logged-in user ID
        consultant_fee: doctorsInfo.fee
      };
      // console.log('Appointment booked:', { appointmentData });

      try {
        axios.post('http://127.0.0.1:8001/api/add-appointments',appointmentData)
          .then((response) => {
            if (response.status === 201) {
              alert('Your Appointment has been booked');
            }
            MyAppointments()
            navigate('/my-appointments');
            window.scrollTo(0,0);
          })
      } catch (error) {
        console.error('Error booking appointment:', error);
        alert('Something went wrong. Please try again.');
      }
    }
  };


  return (
    <div className="container mx-auto p-4">
      {/* Doctor's Info */}
      {doctorsInfo ? (
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6 gap-4">
          {/* Doctor's Image */}
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <img
              className="bg-primary rounded-lg object-contain w-64 h-64 md:w-48 md:h-48 lg:w-64 lg:h-64 shadow-md p-4"
              src={`http://127.0.0.1:8001/storage/${doctorsInfo.image}`}
              alt={doctorsInfo.name}
            />
          </div>

          {/* Doctor's Details */}
          <div className="flex flex-col md:w-2/3 gap-4 justify-center">
            {/* Doctor's Name */}
            <div>
              <h2 className="text-2xl text-center md:text-3xl md:text-start font-semibold text-gray-800">{doctorsInfo.name}</h2>
            </div>

            {/* Doctor's Degree and Experience */}
            <div>
              <p className="text-lg text-center md:text-xl md:text-start text-gray-600">{doctorsInfo.degree}</p>
            </div>
            <div>
              <p className="text-lg text-center md:text-xl md:text-start text-gray-600">Experience : {doctorsInfo.experience}</p>
            </div>

            {/* Doctor's About */}
            <div>
              <p className="text-base text-center md:text-lg md:text-start text-gray-500">{doctorsInfo.about}</p>
            </div>

            {/* Doctor's Fees */}
            <div>
              <p className="text-lg font-medium text-center text-green-500 md:text-start">Appointment Fee: {currencySymbol}{doctorsInfo.fee}</p>
            </div>
          </div>
        </div>



      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}

      {/* Appointment Booking */}
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Book Your Appointment</h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center">

          {/* showing date time slots */}

          {slots.length > 0 && slots.map((item, index) => (
            <div
              className={`cursor-pointer border border-gray-200 rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-300 text-center ${index === slotIndex ? 'bg-primary' : 'bg-white'}`}
              key={index}
              onClick={() => setslotIndex(index)}
            >
              <p className={`text-lg font-semibold ${index === slotIndex ? 'text-white' : 'text-blue-600'}`}>
                {item[0] && daysOfWeek[item[0].dateTime.getDay()]}
              </p>
              <p className={`text-xl font-bold ${index === slotIndex ? 'text-white' : 'text-blue-600'}`}>
                {item[0] && item[0].dateTime.getDate()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* showing appointment time slots */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {slots.length > 0 && slots[slotIndex].map((item, index) => (
          <button onClick={() => setslotTime(item.time)}
            key={index}
            className={`font-semibold rounded-lg px-4 py-2 mb-2 transition-transform duration-300 hover:scale-105 focus:outline-none ${slotTime === item.time ? 'bg-primary text-white' : 'bg-gray-300 text-black'
              }`}
          >
            {item.time}
          </button>
        ))}
      </div>

      <div className='flex justify-center items-center mt-4'>
        <button onClick={handleBookAppointment} className='rounded-full bg-primary p-4 font-mono text-white font-bold'>Book Appointment</button>
      </div>

      {/* showing realted doctors with same field */}

      <div className="p-4 md:p-8 mt-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">Related Doctors</h1>
        <RelatedDoc docId={id} speciality={doctorsInfo ? doctorsInfo.specialization.name : null} />
      </div>





    </div>
  );

}

export default Appointment
