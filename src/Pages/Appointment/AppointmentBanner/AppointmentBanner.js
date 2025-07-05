
import chairbg from "../../../assets/bg.png";
import chair from "../../../assets/appointment.jpg"
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  
  return (
    <header
      className="my-6"
      style={{ background: `url(${chairbg})`, backgroundSize: "cover" }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/pwXsdxR/appointment.jpg"
            alt="dentist chair"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;