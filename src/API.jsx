import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { TouchableHighlight, TextInput, Image} from 'react-native'

function App() {
  const [summonerName, setSummonerName] = useState('');
  const [playerData, setPlayerData] = useState('vacio');

  const handleInputChange = (event) => {
    setSummonerName(event.target.value);
  };
  
  const fetchData = async () => {
    try {
      console.log(summonerName)
      const response = await fetch(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
        {
          headers: {
            'X-Riot-Token': 'RGAPI-b317a50d-dabc-410b-90cb-778d1daed13f',
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
      <Text style={styles.titulos}>Lolcito API</Text>
      <TextInput onChangeText={(value)=>setSummonerName(value)} placeholder="Nombre de invocador:" style={styles.input}/>
      <TouchableHighlight underlayColor={'blue'} onPress={()=>fetchData()}>
          <Text style={styles.texto}>Buscar</Text>
        </TouchableHighlight> 
        {playerData && (
  <View>
    <Text>Nombre: {playerData.name}</Text>
    <Text>Nivel: {playerData.summonerLevel}</Text>
    <Text>Icono:</Text>
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
    fontSize: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 20
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