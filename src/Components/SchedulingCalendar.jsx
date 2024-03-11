import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import axios from 'axios';

function SchedulingCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState('Select a service')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [bookedTimes, setBookedTimes] = useState([])

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

  //get all of the appointments that have been booked
  let getBookedTimes = async () => {
    axios.get('/api/appointments')
    .then((res) => {
      //set setBookedTimes to that data
      setBookedTimes(res.data)
    })
  }

  useEffect(() => {
    getBookedTimes()
  }, [])

  const handleScheduleAppointment = (e) => {
    e.preventDefault();
    //check for errors
    if(selectedService === "Select a service") {
      alert('Please select a service')
      return
    }
    if(!firstName || !lastName || !email || !phoneNumber || !address) {
      alert('Please fill out all of the fields.')
      return
    };
    if (phoneNumber < 10) {
      alert('Please enter a valid phone number')
      return
    }
    if (!email.includes('@')) {
      alert('Please enter a valid email')
      return;
    }

    //create an appointment & customer, this is the req.body
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
      //reset the fields
      alert('Submission Recieved!')
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhoneNumber('')
      setAddress('')
      setSelectedService('selectService')
      location.reload()
    })
  };

  const isTimeBooked = (date, time) => {
    const isBooked = bookedTimes.some(bookedTime => (
      moment(bookedTime.date).isSame(moment(date), 'day') &&
      bookedTime.hour === time
    ))
    return isBooked
  }
  
  //grey out past dates and sundays on the calendar
  const greyDates = (date) => {
    return moment(date).isBefore(moment(), 'day') || date.getDay() === 0;
  };

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM'
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
          {timeSlots.map((time) => {
            const isSlotBooked = isTimeBooked(selectedDate, time);

            return (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                disabled={!moment(`${selectedDate.toISOString().split('T')[0]} ${time}`).isAfter(moment()) || isSlotBooked}
                className={isSlotBooked ? 'booked-time' : ''}
              >
                {time}
              </button>
            );
          })}
          </div>
        </div>
      ) : null}

      <div className="calander-key">
        <div>
          <div className="appoitment-available"></div>
          <span className="calendar-legend">Appointments Available</span>
        </div>
        <div>
          <div className="appointment-unavailable"></div>
          <span className="calendar-legend">No Appoinments Available/Date Passed</span>
        </div>
      </div>

      {selectedTime ? (
        <div>
          <h2>Appointment Details</h2>
          <p>Date: {moment(selectedDate).format('MMMM D, YYYY')}</p>
          <p>Time: {selectedTime}</p>
          <h4>Select desired service below</h4>
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
    </div>
  );
}

export default SchedulingCalendar