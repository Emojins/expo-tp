import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, {useState, useEffect } from 'react';
import { Input, Button } from 'react-native-elements';
import { saveSearchTerm, getSearchHistory, eliminateKey} from './SearchHistory';

const App = () => {
  const [summonerName, setSummonerName] = useState(''); //invocador
  const [playerData, setPlayerData] = useState('vacio'); //datos del invocador
  const [searchHistory, setSearchHistory] = useState([]);
  const [mostrarContenido, setMostrarContenido] = useState(false);

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
       if (response.ok){

        alert('Usuario encontrado :)')
       } else {
        alert('Usuario no encontrado :(')
       }
      const res = await response.json()
      console.log(res)
      setPlayerData(res);
      
    } catch (error) {
      console.error(error);
    }
    
    saveSearchTerm(summonerName);
    loadSearchHistory();
   
  };
  const toggleContenido = () => {
    setMostrarContenido(!mostrarContenido);
  };
  return (
    <>
    <View style= {styles.container}>
      <View style= {styles.viewHeader}>
      <Text style={styles.titulos}>Busca tu Cuenta Aquí</Text>
      <Input
      onChangeText={(value)=>setSummonerName(value)} 
      leftIcon={{ type: 'font-awesome', name: 'search' }} 
      placeholder="Buscar..." 
      />
        <Button
        title="Buscar"
        onPress={fetchData}
      />
      </View>
     
      <Button
      title={mostrarContenido ? "Ocultar Contenido" : "Mostrar Contenido"} 
      onPress={toggleContenido} />
      { mostrarContenido && 
      <View style= {styles.viewBody}>
      <Text style={styles.texto}>Nombre: {playerData.name}</Text>
           <Text style={styles.texto}>Nivel: {playerData.summonerLevel}</Text>
           <Text style={styles.texto}>Icono:</Text>
        <Image
      source={{uri:`http://ddragon.leagueoflegends.com/cdn/13.9.1/img/profileicon/${playerData.profileIconId}.png`}}
      style= {styles.imagen}
        />
      </View>
      }
          
    
       <View style= {styles.viewFooter}>
        <ScrollView>
        <Text style= {styles.texto}>Perfiles buscados:</Text>
      {searchHistory.map((term, index) => (
        <Input
        rightIcon={{ type: 'font-awesome', name: 'trash' }}  
        style= {styles.input2}
        key={index}>{term}
        </Input>
      ))}
     

     </ScrollView>
      </View>
    
     </View>
    
     </>
  );
}

export default App;


// Flex nos permite especificar que los elementos que se encuentren en el contenedor
// se acomodaran para ocupar todo el tamaño posible
const styles = StyleSheet.create({
  container: {
    flex: 5,
    /// flexDirection nos permite especificar de que manera se acomodaran los elementos
   
  },
  texto: {
    fontSize: 20,
    textAlignVertical: 'center',
    marginBottom: 20,
  },
  viewHeader: {
    backgroundColor: '#C0F5D8',
    flex: 1,
  },
  viewBody: {
    backgroundColor: '#79F1A3',
    flex: 3,
  },
  viewFooter: {
    backgroundColor: '#2DD67A',
    flex: 1,
    
  },
  titulos:{
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
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
    marginLeft: 80,
    marginTop: 100,
    position: 'absolute'
  }
})
