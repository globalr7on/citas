const mongoose = require('mongoose');

const CitaSchema = mongoose.Schema({

    paciente: {
        type: String,
        require: true,
        trim: true
    },
    propietario: {
        type: String, 
        require: true,
        trim: true,
       
    },
    telefono: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    registro: {
        type: Date, 
        default: Date.now()
    
    },
    sintomas: {
        type: String, 
        require: true,
        trim: true,
        unique: true
    },
    hora: {
        type: String, 
        require: true,
        trim: true,
        unique: true
    },
    fecha: {
        type: String, 
        require: true,
        trim: true,
        unique: true
    },
})

module.exports = mongoose.model('Cita', CitaSchema);