import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'

export default function App() {
  const [Mostrar, modMostrar] = useState(false);
  const vistasDos = [
      { compa: 'Dieguito', apellido: 'Brito' },
      { compa: 'Lucia', apellido: 'Alla' },
      { compa: 'Lucas', apellido: 'Duran' },
      { compa: 'Tamara', apellido: 'Queso' },
      { compa: 'Kiko', apellido: 'Dreven' },
  ]
  
  

  const mostrargilada = ()=>{
    modMostrar(!Mostrar);
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize: '25px'}} >Compañeros del curso: </Text>
      <Pressable style={({ pressed }) => ({ backgroundColor: pressed ? 'blue': 'blue' })}
        onPress={mostrargilada}>
        <Text style={styles.botonKP}>Presiona para ver los compañeros del curso kp</Text>
      </Pressable>
      {Mostrar && (
        <View>
          <FlatList data={vistasDos} renderItem={({ item }) => <Text>{` nombre: ${item.compa}    apellido: ${item.apellido}`}</Text>}/>
        </View>
      )}
       <StatusBar style="auto" />
    </View>
     
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(140,234,213)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    fontFamily: 'Algerian',
    fontSize: '40px'
  },
  botonKP:{
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'blue'
  }
});
