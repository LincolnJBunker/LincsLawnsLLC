import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import axios from 'axios';

function SchedulingCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState('selectService')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Reset selected time when date changes
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleServiceSelect = (event) => {
    setSelectedService(event.target.value)
  }

  const handleScheduleAppointment = (e) => {
    e.preventDefault();
    axios.post('/api/newAppointment', {
      date: selectedDate,
      hour: selectedTime,
      service: selectedService,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      address: address
    })
    .then((res) => {
      alert('Submission Recieved!')
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhoneNumber('')
      setAddress('')
      setSelectedService('selectService')
    })

    console.log(`Schedule Appointment:`, {
      date: moment(selectedDate).format('MMMM, D, YYYY'),
      time: selectedTime,
      service: selectedService
    });
  };

  //grey out past dates and sundays
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
      <div className="container"></div>
      <div className='calendar-container'>
        <h2>Select Date</h2>
        <Calendar 
          onChange={handleDateChange} 
          value={selectedDate}
          tileDisabled={({ date }) => greyDates(date)}
          />
      </div>

      {selectedDate ? (
        <div className='time-slots-container'>
          <h2>Select Time</h2>
          <div className='time-slots'>
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
          <h4>Select desired service below?</h4>
          <select name="service" value={selectedService} onChange={handleServiceSelect}>
            <option value="selectService">Select a service</option>
            <option value="Aeration">Aeration</option>
            <option value="Powerwashing">Powerwashing</option>
            <option value="GrillCleaning">Grill Cleaning</option>
          </select>
          <div>
          <h2>Appointment Form</h2>
          <div className="appointment-form">
            <label htmlFor="first-name">First Name</label>
            <input 
            type="text"
            className="appointment-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
        </div>

        <div className="appointment-form">
            <label htmlFor="last-name">Last Name</label>
            <input 
            type="text"
            className="appointment-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
        </div>

        <div className="appointment-form">
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            className="appointment-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className="appointment-form">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input 
            type="number" 
            className="appointment-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            />
        </div>

        <div className="appointment-form">
            <label htmlFor="address">Address</label>
            <input 
            type="text" 
            className="appointment-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
        </div>
            </div>
          <button onClick={handleScheduleAppointment}>Schedule Appointment</button>
        </div>
      ) : null}

      {/* {selectedTime && selectedService !== 'selectService' && (
        <div>
          <h2>Appointment Form</h2>
          <AppointmentForm
            date={moment(selectedDate).format('MMMM D, YYYY')}
            time={selectedTime}
            service={selectedService}
            />
            </div>
      )} */}
    </div>
  );
}

export default SchedulingCalendar