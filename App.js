import React , { useState } from 'react';
//import { Root, Container, Button, H1, Input, Form, Item, Toast } from 'native-base';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';


//Apollo 

import { gql, useMutation} from '@apollo/client';



const App = () => {

  const [mostrarform, guardarMostrarForm] = useState(false);



// definir el state de cita
const [citas, setCitas] = useState([]);

//Elimina los pacientes del State
const eliminarPaciente = id => {
  setCitas( (citasActuales) => {
    return citasActuales.filter( cita => cita.id !== id );
  } )
}

 //Muestra u oculta el formulario

  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarform);
  }

  //ocultar teclado 
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado() }>
      <View style= {styles.contenedor}>
          <Text style={styles.titulo}>Administrador de Citas</Text>
          <View>
              <TouchableHighlight onPress={ () => mostrarFormulario() } style={styles.btnMostrarForm}>
                <Text style={styles.textoMostrarForm}> {mostrarform ? 'Cancelar Crear Cita' : 'Crear Nueva Cita'}  </Text>
              </TouchableHighlight>
          </View>

          <View style={styles.contenido}>
            { mostrarform ? (
              <>
              
                <Text style={styles.titulo}>Crear Nueva Cita </Text>
                <Formulario 
                  citas={citas}
                  setCitas={setCitas}
                  guardarMostrarForm={guardarMostrarForm}
                />     
              </>
            ) : (
            <>
              <Text style={styles.titulo}> {citas.length > 0 ? 'Administra tus citas' : 'NO hay citas, agende una'}</Text>
              <FlatList
                  style={styles.listado}
                  data={citas}
                  renderItem={ ({item}) => <Cita item={item} eliminarPaciente={eliminarPaciente} />
                }
                keyExtractor={ cita => cita.id}  
              />
              </>
            )}
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#AA076B",
    flex: 1
  },

  titulo: {
    color: "#FFF",
    marginTop: 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight:'bold',
    textAlign: 'center'
    
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%'
  },
  listado: {
    flex:1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#7D024E',
    marginVertical: 10
},
textoMostrarForm: {
    color: '#FFF',
    fontWeight:'bold',
    textAlign:'center'
    
}
}) 

export default App;
