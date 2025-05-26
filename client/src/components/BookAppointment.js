import React, { useState } from 'react';
import axios from 'axios';

function BookAppointment() {
  const [form, setForm] = useState({ doctorId: '', datetime: '' });

  const book = async () => {
    const patientId = 'YOUR_PATIENT_ID'; // Replace this with your actual ID or fetch from token
    await axios.post('http://localhost:5000/api/appointments/book', { ...form, patientId });
    alert('Appointment booked!');
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <input placeholder="Doctor ID" onChange={(e) => setForm({ ...form, doctorId: e.target.value })} />
      <input placeholder="DateTime" onChange={(e) => setForm({ ...form, datetime: e.target.value })} />
      <button onClick={book}>Book</button>
    </div>
  );
}

export default BookAppointment;