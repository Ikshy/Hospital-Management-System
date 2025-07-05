import React from 'react';
import { HiOutlineCode, HiOutlineDesktopComputer, HiOutlineDeviceMobile, HiPhone } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ModernService = () => {
    return (
        <div className='bg-gray-100 p-12'>
            <div className="mx-14">
                <h1 className='text-6xl lg:w-[600px]'>We provide a modern <span className='text-orange-500'>service care</span></h1>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div></div>
                    <div>
                        <p className='w-2/4 text-justify'>We belive in technology and our team to take care of your health problems. We guarantee you will get the best service that you never experienced before.</p>
                    </div>
                </div>
                <div className="mt-7 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className='bg-white p-5'>
                        <HiOutlineDesktopComputer className='bg-green-600 p-2 text-5xl text-white mb-3'/>
                        <h4 className='text-2xl font-semibold'>Virtual care Coordination</h4>
                        <p>Collaboration care management for complex medical conditions.</p>
                    </div>
                    <div className='bg-white p-5'>
                        <HiOutlineDeviceMobile className='bg-green-600 p-2 text-5xl text-white mb-3'/>
                        <h4 className='text-2xl font-semibold'>Mobile apps</h4>
                        <p>Convenient digital tools for accessing medical records with healthcare providers</p>
                    </div>
                    <div className='bg-white p-5'>
                        <HiPhone className='bg-green-600 p-2 text-5xl text-white mb-3'/>
                        <h4 className='text-2xl font-semibold'>Telemedicine services</h4>
                        <p>Remote connection with healthcare providers via video, phone or meessaging</p>
                    </div>
                    <div className='bg-white p-5'>
                        <HiOutlineCode className='bg-green-600 p-2 text-5xl text-white mb-3'/>
                        <h4 className='text-2xl font-semibold'>Health coaching</h4>
                        <p>Personalized support for nutrition, exercise, and chronic disease management.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernService;