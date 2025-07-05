import React from 'react';
import { IoIosInfinite, IoIosWoman } from "react-icons/io";
import { HiOutlineViewGrid } from 'react-icons/hi';

const WhyUS = () => {
    return (
        <div className='bg-white p-9'>
            <div className='mx-14 grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div>
                    <h1 className='text-4xl lg:text-7xl'>Why are we <span className='text-orange-500'>different</span></h1>
                    <p className='my-6'>We are brave compared to other clinic, because we belive that what we have the best.</p>
                    <div className='flex gap-20 mb-6'>
                        <div>
                            <h1 className='text-green-500 text-6xl font-semibold'>3000+</h1>
                            <p>Patients served every day</p>
                        </div>
                        <div>
                            <h1 className='text-green-500 text-6xl font-semibold'>200K</h1>
                            <p>Medical Team around the world</p>
                        </div>
                    </div>
                </div>
                <div>
                        <div>
                            <p className='flex gap-5 items-center'><IoIosWoman className='bg-orange-700 p-2 text-5xl text-white'/>
                            <h3 className='text-3xl'>Personalized Care</h3></p>
                            <p className='lg:w-2/3 ml-16 text-justify mt-1'>Modern Clinics provides individualized treatment plans that consider each patient's unique needs, resulting in more effective and efficient care.</p>
                        </div>
                        <div className='my-9'>
                            <p className='flex gap-5 items-center'><IoIosInfinite className='bg-orange-700 p-2 text-5xl text-white'/>
                            <h3 className='text-3xl'>Digital Health Solution</h3></p>
                            <p className='lg:w-2/3 ml-16 text-justify mt-1'>Modern Clinics provides individualized treatment plans that consider each patient's unique needs, resulting in more effective and efficient care.</p>
                        </div>
                        <div>
                            <p className='flex gap-5 items-center'><HiOutlineViewGrid className='bg-orange-700 p-2 text-5xl text-white'/>
                            <h3 className='text-3xl'>Collaborative Care</h3></p>
                            <p className='lg:w-2/3 ml-16 text-justify mt-1'>Modern Clinics provides individualized treatment plans that consider each patient's unique needs, resulting in more effective and efficient care.</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUS;