const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

router.post('/book', async (req, res) => {
  const { patientId, doctorId, datetime } = req.body;
  const appt = new Appointment({ patientId, doctorId, datetime });
  await appt.save();
  res.json({ message: 'Appointment booked' });
});

router.get('/:userId', async (req, res) => {
  const appts = await Appointment.find({ patientId: req.params.userId }).populate('doctorId');
  res.json(appts);
});

module.exports = router;