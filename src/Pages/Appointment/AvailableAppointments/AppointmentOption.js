import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, prices, slots, names, image, email } = appointmentOption;
  return (
    <div className="card shadow-xl p-3">
      <div className="flex">
        <div className="avatar ml-4">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold  text-secondary">{names}</h2>
          <p>{name}</p>
          {/* <h3 className="text-red-600">{email}</h3> */}
          <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
          </p>
          <p className="font-semibold"><small>Consultation fee: {prices} BDT</small></p>
          <div className="card-actions justify-center">
            <label disabled={slots.length === 0}
              htmlFor="booking-modal"
              className="btn btn-primary text-white border-0 bg-gradient-to-r from-primary to-secondary" onClick={() => setTreatment(appointmentOption)}
            >Book Appointment</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;