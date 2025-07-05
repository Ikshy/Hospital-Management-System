import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useDoctor from '../../hooks/useDoctor';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';

const DashboardLayout = () => {
    const {user,loading} = useContext(AuthContext);
    const [isDoctor] = useDoctor(user?.email);
    const [isAdmin] = useAdmin(user?.email);
    
    if(loading){
        return <Loading/>
     }
    return (
        <div>
            <Navbar />
            <div className='flex gap-2'>
                <div className='w-[20%]'>
                    <div className='text-center mt-10'>
                        <div className="avatar text-center">
                            <div className="w-24 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <h4 className="text-2xl font-bold">{user?.displayName}</h4>
                        <hr className='my-5'/>
                        <ul>
                            <li className='my-2 cursor-pointer hover:text-orange-600 font-semibold'><Link to='/dashboard'>Dashboard</Link></li>
                            { isDoctor &&
                                <li className='my-2 cursor-pointer hover:text-orange-600 font-semibold'><Link to='/dashboard/myappointment'>My Appointment</Link></li>
                            }
                            {
                                isAdmin && 
                                <li className='my-2 cursor-pointer hover:text-orange-600 font-semibold'><Link to='/dashboard/adminDashboard'>All User</Link></li>
                            }
                        </ul>
                    </div>
                </div>
                <div className='w-[80%]'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;