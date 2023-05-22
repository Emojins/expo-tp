import React, { useState} from 'react';
import { Image, View, StyleSheet,TouchableOpacity,Text, ImageBackground  } from 'react-native';
import { Input } from 'react-native-elements';

import * as ImagePicker from 'expo-image-picker';


export default function App() {
  const [image, setImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const pickImage = async () => {
   
    let result = await ImagePicker.launchImageLibraryAsync({
      selectionLimit: 0,
      mediaType: 'photo',
      allowsEditing: false,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
   
  };
  return (
      <View style={styles.avatar}>
          <ImageBackground
      source={require('../assets/img/fondoperfil.jpg')}
      style={styles.imagenFondo}
    ></ImageBackground>
        <Input placeholder="Nombre de tu cuenta..." style={styles.textoInput}/>
        <Input placeholder="Nivel de tu cuenta..." style={styles.textoInput}/>
        <Input placeholder="Región de Cuenta..." style={styles.textoInput}/>
        <Input placeholder="Gilada..." style={styles.textoInput}/>
      <Text style={styles.text}>Selecciona tu imagen</Text>
      <Image
          style={styles.avatarImage}
          source={image ? { uri: image } : require('../assets/img/desconocido.png')}
        />
        <TouchableOpacity style={styles.addButton} onPress={pickImage}>

       <Image
        style={styles.addButtonIcon}
        source={require('../assets/img/mas.png')}
      />
        </TouchableOpacity>
      </View>

 )
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },

  
  avatar: {
    alignItems: 'center',
  },
  avatarImage: {
    height: 260,
    width: 260,
    overflow: 'hidden',
    borderColor: '#ffffff',
    borderWidth: 4,
    borderRadius: 260 / 2,
  },
  addButton: {
    height: 54,
    width: 54,
    backgroundColor: '#f2f2fC',
    borderRadius: 50,
    position: 'absolute',
    right: 140,
    bottom: 40,
  },
  addButtonIcon: {
    height: 54,
    width: 54,
    marginTop: 0
  },

  textimg:{
    fontSize:30,
    top:-100,
  margin:30
    
      },

  text:{
fontSize:30,
margin:10

  },
  photos: {
    width: 50,
    height: 50,
    margin:10,
    position:'relative',
    top:-100
  },
  imagenFondo:{
    flex: 1,
    height: 800,
    width: 430,
    opacity: 0.70
},
textoInput:{
  color: '#ffffff',
  marginBottom: 10,
}

});