import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, {useState, useEffect } from 'react';
import { Input, Button } from 'react-native-elements';
import { saveSearchTerm, getSearchHistory, eliminateKey} from './SearchHistory';

const App = () => {
  const [summonerName, setSummonerName] = useState(''); //invocador
  const [playerData, setPlayerData] = useState('vacio'); //datos del invocador
  const [searchHistory, setSearchHistory] = useState([]);

  const handleInputChange = (event) => {
    setSummonerName(event.target.value);
  };
  const loadSearchHistory = async () => {
    const history = await getSearchHistory();
    setSearchHistory(history);
  };
  useEffect(() => {
    loadSearchHistory();
  }, []);

  const fetchData = async () => {
    try {
      console.log(summonerName)
      const response = await fetch(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
        {
          headers: {
            'X-Riot-Token': 'RGAPI-c914ed86-cbec-42a4-8001-9082b691965a',
          },
        }
      );
      
      const res = await response.json()
      console.log(res)
  
      setPlayerData(res);
      
    } catch (error) {
      console.error(error);
    }

    saveSearchTerm(summonerName);
    loadSearchHistory();
   
  };

  return (
    <>
    <ScrollView>
    <View style= {styles.container}>
      <Text style={styles.titulos}>Busca tu Cuenta Aquí</Text>
      <Input
      onChangeText={(value)=>setSummonerName(value)} 
      leftIcon={{ type: 'font-awesome', name: 'search' }} 
      placeholder="Buscar..." 
      style={{marginBottom: 10 }}/>
        <Button
        title="Buscar"
        onPress={fetchData}
        containerStyle={{ marginBottom: 10 }}
      />
      <View>
           <Text style={styles.texto}>Nombre: {playerData.name}</Text>
           <Text style={styles.texto}>Nivel: {playerData.summonerLevel}</Text>
           <Text style={styles.texto}>Icono:</Text>
        <Image
      source={{uri:`http://ddragon.leagueoflegends.com/cdn/13.9.1/img/profileicon/${playerData.profileIconId}.png`}}
      style= {styles.imagen}
        />
    </View>
       <View>
        <Text>Perfiles buscados:</Text>
      {searchHistory.map((term, index) => (
        <Text
        style= {styles.input2}
        key={index}>{term}
        </Text>
      ))}
      <Button
        rightIcon={{ type: 'font-awesome', name: 'trash' }}  
        title= 'Eliminar'
      />

      
      </View>
    
     </View>
     </ScrollView>
     </>
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
    color: 'blue',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input2: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'skyblue'
  },
  imagen:{
    height: 250,
    width: 250,
    borderRadius: 150,
    marginTop: 50,
    marginLeft: 60
  }
})
