const express = require('express');
const MedicalRecord = require('../models/MedicalRecord');
const router = express.Router();

router.post('/add', async (req, res) => {
  const { patientId, doctorId, diagnosis, prescription, date } = req.body;
  const record = new MedicalRecord({ patientId, doctorId, diagnosis, prescription, date });
  await record.save();
  res.json({ message: 'Medical record saved' });
});

router.get('/:patientId', async (req, res) => {
  const records = await MedicalRecord.find({ patientId: req.params.patientId });
  res.json(records);
});

module.exports = router;