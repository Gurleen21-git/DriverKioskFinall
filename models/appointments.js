const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const AppointmentSchema = new Schema({
    apptDate: { type: String, require: true },
    apptTime: { type: String, require: true },
    isTimeSlotAvailable: {type: Boolean, default: true},

});


const Appointment = mongoose.model('Appointment',AppointmentSchema);

module.exports = Appointment;
