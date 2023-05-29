import { FlatList, View, ImageBackground, StyleSheet} from 'react-native'
import React from 'react'
import ButtonTitle from '../componentes/ButtonTitle'

const Navegar = ({ navigation }) => {
  const views = [
    { title: 'Buscador', path: 'Buscador' },
    { title: 'Mi perfil', path: 'MiPerfil'},
    {title: 'Información de LOL', path: 'Información'}
  ]

  const renderItem = ({ item }) => <ButtonTitle title={item.title} action={() => navigation.navigate(item.path)}  />

  return (
    
    <View>
       <ImageBackground
      source={require('../assets/img/fondololcito.jpg')}
      style={styles.container}
    >
      
    </ImageBackground>
    <FlatList data={views} renderItem={renderItem} />
    </View>
  )
}
export default Navegar


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 800,
    width: 430,
    opacity: 0.70
  },
});




