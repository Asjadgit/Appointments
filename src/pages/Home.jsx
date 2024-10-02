import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import DoctorsMenu from '../components/DoctorsMenu'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Header /> {/* showing header img and text  */} 
      <SpecialityMenu /> {/* showing find doctor by speciality  */}
      <DoctorsMenu /> {/* showing Top Doctors Menu */}
      <Banner /> {/* showing Banner img and text */}
    </div>
  )
}

export default Home
