import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const AdminDashboard = () => {
    const {data: users = [], isLoading} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('https://hospital-management-server-beta.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading/>
    }
    return (
        <div className='bg-gray-200 h-full p-5 min-h-screen'>
            <h3 className="text-3xl">All Users</h3>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-24"></div>
            <div className="overflow-x-auto">
                <table className="table w-full text-lg">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users &&
                            users.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.type}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;