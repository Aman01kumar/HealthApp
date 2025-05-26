const mongoose = require('mongoose');
const recordSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  diagnosis: String,
  prescription: String,
  date: String
});
module.exports = mongoose.model('MedicalRecord', recordSchema);