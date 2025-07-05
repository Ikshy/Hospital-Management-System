import React from 'react';
import { VscCalendar, VscCircle } from "react-icons/vsc";

const HowAppointment = () => {
    return (
        <div className='bg-blue-950'>
            <div className='mx-14 p-9'>
                <h1 className='text-4xl lg:text-6xl text-white'>How to make an <span className='text-orange-500'>appointment?</span></h1>
                <div className="mt-9 lg:flex gap-9 justify-center items-center">
                    <div className='text-orange-300'>
                        <p className='text-[150px] lg:text-[350px]'><VscCalendar/></p>
                    </div>
                    <div>
                        <div>
                        <p className='text-white text-2xl flex items-center gap-1'><VscCircle/> Select the service type</p>
                        <p className='text-white lg:w-2/3 my-2'>You can access our website by typing our clinic name into your preferred search engine or by entering our website address into your web browser.</p>
                        <hr className='lg:w-2/3' />
                        </div>
                        <div className='my-6 lg:my-12'>
                        <p className='text-gray-400 text-2xl flex items-center gap-1'><VscCircle/> Fill out appointment form</p>
                        <p className='text-gray-400 lg:w-2/3 my-2'>You can access our website by typing our clinic name into your preferred search engine or by entering our website address into your web browser.</p>
                        <hr className='w-2/3' />
                        </div>
                        <div>
                        <p className='text-gray-400 text-2xl flex items-center gap-1'><VscCircle/> Wait for confirmation</p>
                        <p className='text-gray-400 lg:w-2/3 my-2'>You can access our website by typing our clinic name into your preferred search engine or by entering our website address into your web browser.</p>
                        <hr className='w-2/3' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowAppointment;