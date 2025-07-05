import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const Contact = () => {
    return (
        <div className='h-[99vh] bg-gradient-to-r from-violet-500 to-fuchsia-500 pt-10 pb-16'>
            <div className='text-white'>
                <h1 className='text-3xl font-bold text-center'>Get in touch</h1>
                <p></p>
                <div className='my-5 grid gap-5 grid-cols-1 lg:grid-cols-3 mx-[15%]'>
                    <div className='hover:bg-blue-600 rounded text-center py-5'>
                        <FaLocationDot className='mx-auto text-2xl mb-4' />
                        <p>102 Street 2714 Don</p>
                    </div>
                    <div className='hover:bg-blue-600 rounded text-center py-5'>
                        <FaPhone className='mx-auto text-2xl mb-4' />
                        <p>+02 1234 507</p>
                    </div>
                    <div className='hover:bg-blue-600 rounded text-center py-5'>
                        <HiMail className='mx-auto text-2xl mb-4' />
                        <p>hello@heavencare.com</p>
                    </div>
                </div>
            </div>
            <div className="lg:mx-[25%] my-10 bg-white py-9 px-6 rounded-md">
                <p className='italic font-semibold'>Contact Form</p>
                <div className='mt-5'>
                    <form>
                        <div className='lg:flex gap-4 items-center justify-center'>
                            <div>
                                <label class="block">
                                    <span class="block text-sm font-medium text-slate-700">Your Name</span>
                                    <input type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                         invalid:border-pink-500 invalid:text-pink-600
                         focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                                </label>
                                <label class="block my-5">
                                    <span class="block text-sm font-medium text-slate-700">Email</span>
                                    <input type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
     focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                                </label>
                                <label class="block my-5">
                                    <span class="block text-sm font-medium text-slate-700">Phone</span>
                                    <input type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
     focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                                </label>
                            </div>
                            <div>

                                <span class="block text-sm font-medium text-slate-700">Message</span>
                                <textarea class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                         invalid:border-pink-500 invalid:text-pink-600
                         focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    " name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <input className='flex justify-center mt-9 mx-auto bg-pink-600 p-3 rounded text-white' type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;