import { StyleSheet, Text, View } from 'react-native'
import React, {useState } from 'react';
import { Image} from 'react-native'
import { Input, Button } from 'react-native-elements';

function App() {
  const [summonerName, setSummonerName] = useState(''); //invocador
  const [playerData, setPlayerData] = useState('vacio'); //datos del invocador

  const handleInputChange = (event) => {
    setSummonerName(event.target.value);
  };
  
  const fetchData = async () => {
    try {
      console.log(summonerName)
      const response = await fetch(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
        {
          headers: {
            'X-Riot-Token': 'RGAPI-c715515e-44cf-4a25-beb7-50d7a58429de',
          },
        }
      );

      const res = await response.json()
      console.log(res)
  
      setPlayerData(res);

    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View style= {styles.container}>
      <Text style={styles.titulos}>Busca tu Cuenta Aquí</Text>
      <Input onChangeText={(value)=>setSummonerName(value)} 
      leftIcon={{ type: 'font-awesome', name: 'search' }} 
      placeholder="Buscar..." 
      style={{marginBottom: 10 }}/>
        <Button
        title="Buscar"
        onPress={()=>fetchData()}
        buttonStyle={{ backgroundColor: '#f4511e' }}
        containerStyle={{ marginBottom: 10 }}
      />
        {playerData && (
  <View>
    <Text style={styles.texto}>Nombre: {playerData.name}</Text>
    <Text style={styles.texto}>Nivel: {playerData.summonerLevel}</Text>
    <Text style={styles.texto}>Icono:</Text>
    <Image
      source={{uri:`http://ddragon.leagueoflegends.com/cdn/13.9.1/img/profileicon/${playerData.profileIconId}.png`}}
      style= {styles.imagen}
    />
  </View>
)}

    </View>
  );
}

export default App;


// Flex nos permite especificar que los elementos que se encuentren en el contenedor
// se acomodaran para ocupar todo el tamaño posible
const styles = StyleSheet.create({
  container: {
    flex: 1,
    /// flexDirection nos permite especificar de que manera se acomodaran los elementos
    // flexDirection: 'row'
  },
  texto: {
    fontSize: 20,
    textAlignVertical: 'center',
    marginBottom: 20,
  },
  titulos:{
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'red',
    fontFamily: 'Roboto'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  imagen:{
    height: 200,
    width: 200,
    borderRadius: 100
  }
})