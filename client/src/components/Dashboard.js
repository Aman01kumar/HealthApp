import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  return (
    <div>
      <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h2>
      {role === 'patient' && <button onClick={() => navigate('/book')}>Book Appointment</button>}
      <button onClick={() => navigate('/records')}>View Medical Records</button>
    </div>
  );
}

export default Dashboard;