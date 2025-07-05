import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { names: treatmentName, slots, prices, meet, email: doctorEmail } = treatment;
  const date = format(selectedDate, 'PP');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      doctorEmail,
      phone,
      prices,
      meet,
    }

    fetch('https://hospital-management-server-beta.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success('Booking Confirmed');
          refetch();
          navigate('/dashboard')
        }
        else {
          toast.error(data.message)
        }
      })
  }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <p>{doctorEmail}</p>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
            <input type="text" value={date} disabled className="input input-bordered w-full" />
            <select name='slot' className="select select-bordered w-full">

              {
                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
              }
            </select>
            <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full" />
            <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full" />
            <input name='phone' type="text" defaultValue={user?.phone} placeholder="Phone Number" className="input input-bordered w-full" />
            <p className='text-red-500'> Note: You must have to complete the payment for confirm your appointment</p>
            <input className='btn btn-accent w-full' type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;