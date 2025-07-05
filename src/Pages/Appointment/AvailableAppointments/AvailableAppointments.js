import React, { useState } from 'react';
// import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const {data:appointmentOptions=[], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`https://hospital-management-server-beta.vercel.app/appointmentOptions?date=${date}`)
        .then(res => res.json())
    });

    if(isLoading){
        return <Loading/>
    }

    return (
        <section className='my-16 mx-[7%]'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption
                    key={appointmentOption._id}
                    appointmentOption={appointmentOption}
                    setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment && <BookingModal
                selectedDate = {selectedDate}
            treatment={treatment}
            setTreatment={setTreatment}
            refetch={refetch}
            ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;