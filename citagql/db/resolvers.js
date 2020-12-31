const Usuario = require('../models/Usuario');
const Cita = require('../models/Cita');

const resolvers = {
    Query: {
       
    },

    Mutation: {
        crearUsuario: async (_ ,{input}) => {
            const { email, password} = input;

            const existeUsuario = await Usuario.findOne({ email });

            //si usuario existe 
            if( existeUsuario) {
                throw new Error('El Usuario ya esta registrado');
            }

            try {
                const nuevoUsuario = new Usuario(input);
                console.log(nuevoUsuario);
                nuevoUsuario.save();
                return "Usuario creado correctamente";
            }catch (error) {
                console.log(error);
            }
            

        },
        crearCita: async (_, {input}) => {

            const { telefono } = input;

            const existeCita = await Cita.findOne({ telefono });

            if( existeCita) {
                throw new Error('La cita ya esta registrada');
            }

            try {
                const nuevaCita = new Cita(input);
                console.log(nuevaCita);
                nuevaCita.save();
                return "Cita  creada correctamente";
            }catch (error) {
                console.log(error);
            }

        },
        actualizarCita: async (_, {id, input}, ctx) => {
            //
            let cita = await Cita.findById(id);

            if(!cita){
                throw new Error('Proyecto no encontrado')
            }

            //Guardar cita 
            cita = await Cita.findOneAndUpdate({ _id: id}, input, {new: true})
            return cita;
        },
        eliminarCita: async ( _, {id}, ctx) => {
             //
             let cita = await Cita.findById(id);

             if(!cita){
                 throw new Error('cita no encontrado')
             }

             await Cita.findOneAndDelete({ _id : id });
             return "cita Elminado";


        }
    }
    
}

module.exports = resolvers;
