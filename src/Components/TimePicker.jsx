import React, { useState } from 'react';

const TimeSlotPicker = ({ selectedDate, availableTimeSlots }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    // add more functionality as time slot is selected
  };

  return (
    <div className='time-slot-picker'>
      <h2 className='text-center'>Available Time Slots</h2>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {selectedDate.toDateString()}
      </p>
      <div className='time-slots-container'>
        {availableTimeSlots.map((timeSlot, index) => (
          <div
            key={index}
            className={`time-slot ${selectedTimeSlot === timeSlot ? 'selected' : ''}`}
            onClick={() => handleTimeSlotClick(timeSlot)}
          >
            {`${timeSlot.startTime} - ${timeSlot.endTime}`}
          </div>
        ))}
      </div>
      {selectedTimeSlot && (
        <p className='text-center'>
          <span className='bold'>Selected Time Slot:</span>{' '}
          {`${selectedTimeSlot.startTime} - ${selectedTimeSlot.endTime}`}
        </p>
      )}
    </div>
  );
};

export default TimeSlotPicker;
