import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {

    // Check for token in local storage on initialization
    const [token, setToken] = useState(() => {
        return localStorage.getItem('token') || false; // Retrieve token from local storage
    });
    const [loading, setLoading] = useState(false); // Loading state

    // Initialize user from localStorage, or set to null if not found
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null; // Parse user from localStorage if it exists
    });
    const [specializations, setSpecializations] = useState([]);
    const [Doctors, setDoctors] = useState([]);
    const [Patients, setPatients] = useState([]);
    const [appointment, setAppointments] = useState([]);
    const [dashboardData, setDashboardData] = useState({
        docs: [],
        patients: [],
        appointments: [],
        recentAppointments: []
    });

    const navigate = useNavigate();

    const login = async (credentials) => {
        setLoading(true);
        try {
            // send data to backend
            const response = await axios.post('http://127.0.0.1:8001/api/login', credentials);
            setToken(true);
            localStorage.setItem('token', 'true'); // Store token in local storage
            setUser(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            const expirationTime = new Date().getTime() + 60 * 60 * 1000; // Current time + 60 minutes
            localStorage.setItem('expirationTime', expirationTime);

            // Clear user and token after 60 minutes
            setTimeout(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setUser(null); // Update state to reflect the removal of the user
                setToken(false); // Update state to reflect the removal of the token
            }, 60 * 60 * 1000); // 60 minutes in milliseconds


            // Check the user's role and navigate accordingly
            if (response.data.user.role === 'admin') {
                navigate('/admin'); // Redirect to admin dashboard
            } else if (response.data.user.role === 'doc') {
                navigate('/doctor'); // Redirect to home for regular users
            } else {
                navigate('/');
            }
            // console.log('User has been Logged in', user);

        } catch (error) {
            console.error('Some Error Occured', error);
        } finally {
            setLoading(false); // Set loading to false after the request completes
        }
    }

    const logout = () => {
        setToken(false);
        setUser(null); // Reset user state
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
        window.scrollTo(0, 0);
    };

    // Check if user is logged out when the component mounts
    useEffect(() => {
        if (!user) {
            logout();
        }
    }, [user]);


    // get doctors data
    useEffect(() => {
        const fetchDocs = async () => {
            const res = await axios.get('http://127.0.0.1:8001/api/getDoctors')
                .then((response) => {
                    // console.log('Get');
                    setDoctors(response.data.doctor);
                })
                .catch((error) => {
                    console.log(error);
                })
        }

        fetchDocs();
    }, []);

    // get specializations data
    useEffect(() => {
        const fetchSpecializations = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8001/api/getspciality');
                // Assuming the response contains the specializations in response.data.speciliazation
                setSpecializations(response.data.speciliazation);
            } catch (error) {
                console.log(error);
            }
        };

        fetchSpecializations();
    }, []);

    // get patients data
    useEffect(() => {
        const fetchPateints = async () => {
            const res = await axios.get('http://127.0.0.1:8001/api/getpatients')
                .then((response) => {
                    // console.log('Get');
                    setPatients(response.data.pateints);
                    // console.log(response.data.pateints);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        fetchPateints();
    }, [Patients]);

    // get appointments
    const MyAppointments = async () => {
        const res = axios.get('http://127.0.0.1:8001/api/myappointment')
            .then((res) => {
                if (res.status === 201) {
                    // console.log(res.data.appointment);
                    setAppointments(res.data.appointment);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        MyAppointments();
    }, [appointment]);

    //   get Dashboard Data
    useEffect(() => {
        const AdminDashboard = async () => {
            const res = await axios.get('http://127.0.0.1:8001/api/dashboard')
                .then((response) => {
                    // set all data here
                    setDashboardData({
                        docs: response.data.docs,
                        patients: response.data.pateints,
                        appointments: response.data.appintments,
                        recentAppointments: response.data.recentAppointments,
                    });
                    // console.log(response.data.docs);
                    // console.log(response.data.pateints);
                    // console.log(response.data.appintments);
                    // console.log(response.data.recentAppointments);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        AdminDashboard();
    }, []);

    const currencySymbol = '$';

    const value = {
        Doctors,
        currencySymbol,
        login,
        logout,
        token,
        user,
        loading,
        specializations,
        Patients,
        appointment,
        dashboardData,
        MyAppointments,
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider