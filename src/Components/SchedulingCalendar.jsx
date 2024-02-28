import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

function SchedulingCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Reset selected time when date changes
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  // //grey out Sundays
  // const isSunday = (date) => {
  //   //Sunday === 0 in JS
  //   return date.getDay() === 0;
  // }

  //grey out past dates
  const greyDates = (date) => {
    return moment(date).isBefore(moment(), 'day') || date.getDay() === 0;
  }

  // Dummy time slots for demonstration
  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM'
  ];

  return (
    <div>
      <h1>Appointment Scheduler</h1>
      <div>
        <h2>Select Date</h2>
        <Calendar 
          onChange={handleDateChange} 
          value={selectedDate}
          tileDisabled={({ date }) => greyDates(date)}
          />
      </div>

      {selectedDate ? (
        <div>
          <h2>Select Time</h2>
          <div>
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                disabled={!moment(`${selectedDate.toISOString().split('T')[0]} ${time}`).isAfter(moment())}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div className="calander-key">
        <div>
          <div className="appoitment-available"></div>
          <span className="calendar-legend"></span>
        </div>
        <div>
          <div className="appointment-unavailable">Appointments Available</div>
          <span className="calendar-legend">No Appoinments Available/Date Passed</span>
        </div>
      </div>

      {selectedTime ? (
        <div>
          <h2>Appointment Details</h2>
          <p>Date: {moment(selectedDate).format('MMMM D, YYYY')}</p>
          <p>Time: {selectedTime}</p>
          {/* Add additional appointment details or form inputs here */}
          <button onClick={() => console.log('Schedule appointment')}>Schedule Appointment</button>
        </div>
      ) : null}
    </div>
  );
}

export default SchedulingCalendar