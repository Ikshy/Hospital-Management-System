import React from 'react';
import { Link } from 'react-router-dom';

const History = () => {
    return (
        <div className='bg-blue-950 p-9 text-white'>
            <div className="mx-14">
                <h1 className='text-6xl lg:w-2/4 lg:ml-10'>Our clinic has been treating patients for over <span className='text-orange-500'>25 years</span> on an international scale</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div></div>
                    <div>
                        <p className='w-2/4 text-justify'>Eastablished by charles Xavier in 1993, Shifacare started as a health clinic in Pasadena, California and has now expanded to over 25,000 branches worldwide.</p>
                        <Link className='text-green-600'>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;