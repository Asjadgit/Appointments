import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import AdminHome from './pages/admin/AdminHome';
import ManageUsers from './pages/admin/ManageUsers';
import ManageDoc from './pages/admin/ManageDoc';
import ManageAppointments from './pages/admin/ManageAppointments';
import ManageSpeciality from './pages/admin/ManageSpeciality';
import AddDoc from './pages/admin/AddDoc';
import AddSpeciality from './pages/admin/AddSpeciality';
import DoctorHome from './pages/doctor/DoctorHome';
import MyPatients from './pages/doctor/MyPatients';

const App = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
      <Navbar /> {/* showing navbar at every page */}
        <Routes>
        {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciliaty" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/appointment/:id" element={<Appointment />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/profile" element={<MyProfile />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/doctors" element={<ManageDoc />} />
          <Route path="/admin/add-doctors" element={<AddDoc />} />
          <Route path="/admin/speciliazation" element={<ManageSpeciality />} />
          <Route path="/admin/add-speciliazation" element={<AddSpeciality />} />
          <Route path="/admin/appointments" element={<ManageAppointments />} />

          {/* Admin Routes */}
          <Route path="/doctor" element={<DoctorHome />} />
          <Route path="/doctor/profile" element={<MyProfile />} />
          <Route path="/doctor/patients" element={<MyPatients />} />
        </Routes>
      <Footer /> {/* showing footer at every page  */}
    </div>
  );
};

export default App;
