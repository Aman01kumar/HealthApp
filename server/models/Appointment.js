const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  datetime: String,
  status: { type: String, default: 'scheduled' }
});
module.exports = mongoose.model('Appointment', appointmentSchema);