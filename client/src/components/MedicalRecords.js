import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MedicalRecords() {
  const [records, setRecords] = useState([]);
  const patientId = 'YOUR_PATIENT_ID'; // Replace with real ID or decode from token

  useEffect(() => {
    axios.get(`http://localhost:5000/api/records/${patientId}`)
      .then(res => setRecords(res.data));
  }, []);

  return (
    <div>
      <h2>Medical Records</h2>
      {records.map((rec, i) => (
        <div key={i}>
          <p>Diagnosis: {rec.diagnosis}</p>
          <p>Prescription: {rec.prescription}</p>
          <p>Date: {rec.date}</p>
        </div>
      ))}
    </div>
  );
}

export default MedicalRecords;