import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Loader from '../components/Loader';

const Login = () => {
  const { login, loading } = useContext(AppContext);
  const [formType, setFormType] = useState('Log In');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [Image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formType === 'Log In') {
      login({ email, password });
    } else {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('contact', contact);
      formData.append('address', address);
      formData.append('password', password);
      formData.append('gender', gender);
      formData.append('Image', Image);

      // Send data to backend
      axios.post('http://127.0.0.1:8001/api/users', formData)
        .then((response) => {
          console.log('User has been registered', response);
        })
        .catch((error) => {
          console.error('Error Registering Users', error);
        });
    }

    resetFields();
  };

  const toggleForm = () => {
    setFormType((prev) => (prev === 'Sign Up' ? 'Log In' : 'Sign Up'));
    resetFields();
  };

  const resetFields = () => {
    setName('');
    setEmail('');
    setContact('');
    setAddress('');
    setPassword('');
    setGender('');
    setImage('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">{formType}</h1>
        {loading ? (
          <Loader />  
        ) : (
          <form onSubmit={handleSubmit} className="w-full">
            {formType === 'Sign Up' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                    name='name'
                  />
                </div>
                <div>
                  <label className="block mb-2">Contact</label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                    name='contact'
                  />
                </div>
              </div>
            )}
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded mb-4 w-full"
              required
              name='email'
            />
            <label className="block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded mb-4 w-full"
              required
              name='password'
            />
            {formType === 'Sign Up' && (
              <>
                <div>
                  <label className="block mb-2">Address</label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                    name='address'
                  />
                </div>
                <label className="block mb-2">Gender</label>
                <div className="flex items-center mb-4">
                  <label className="mr-4 cursor-pointer">
                    <input
                      type="radio"
                      value="Male"
                      checked={gender === 'Male'}
                      onChange={(e) => setGender(e.target.value)}
                      required
                      name='gender'
                    />
                    Male
                  </label>
                  <label className='mr-4 cursor-pointer'>
                    <input
                      type="radio"
                      value="Female"
                      checked={gender === 'Female'}
                      onChange={(e) => setGender(e.target.value)}
                      name='gender'
                    />
                    Female
                  </label>
                </div>
                <div>
                  <label className="block mb-2">Picture</label>
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="border p-2 rounded w-full"
                    required
                    name='Image'
                  />
                </div>
              </>
            )}
            <button
              type="submit"
              className="bg-primary text-white p-2 rounded w-full"
              disabled={loading}
            >
              {formType === 'Sign Up' ? 'Sign Up' : 'Log In'}
            </button>
            <p className="mt-4 text-center">
              {formType === 'Sign Up' ? 'Already have an account? ' : "Don't have an account? "}
              <button
                type="button"
                onClick={toggleForm}
                className="text-primary underline"
              >
                {formType === 'Sign Up' ? 'Log In' : 'Sign Up'}
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
