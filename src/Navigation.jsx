import { FlatList, View } from 'react-native'
import React from 'react'
import ButtonTitle from '../componentes/ButtonTitle'

const Navegar = ({ navigation }) => {
  const views = [
    { title: 'API', path: 'API' },
    { title: 'Perfil', path: 'Perfil'},
   
  ]

  const renderItem = ({ item }) => <ButtonTitle title={item.title} action={() => navigation.navigate(item.path)} />

  return (
    <View>
      <FlatList data={views} renderItem={renderItem} />
    </View>
  )
}

export default Navegar