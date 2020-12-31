const { gql } = require('apollo-server');

const typeDefs = gql`

   type Cita {
        paciente: String
        propietario: String
        telefono: String
        sintomas: String
        id: ID
   }

    type Query {
        obtenerCita: [Cita]
    }

    input UsuarioInput {
        nombre: String!
        email: String!
        password: String!
    }

    input CitaInput {
        paciente: String!
        propietario: String!
        telefono: String!
        sintomas: String!
        hora: String!
        fecha: String!
    }

    type Mutation {
        crearUsuario(input: UsuarioInput) : String
        crearCita(input: CitaInput) : String
        actualizarCita(id : ID! , input: CitaInput): Cita
        eliminarCita(id: ID!): String
    }

`;

module.exports = typeDefs;