import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlexView from './src/Buscador'
import Perfil from "./src/MiPerfil"
import Navegar from './src/Navigation'
import Info from "./src/Info"


export default function App() {
    const Stack = createNativeStackNavigator()


  return (
    <>
     <NavigationContainer>
        <Stack.Navigator initialRouteName='Navigation'>
          <Stack.Screen name= 'Aplicación Lolcito' component={Navegar}></Stack.Screen>
         <Stack.Screen name = 'Buscador' component={FlexView}/>
         <Stack.Screen name = 'MiPerfil' component={Perfil}/>
         <Stack.Screen name = 'Información' component={Info}/>
        
        </Stack.Navigator>
     </NavigationContainer>
     <StatusBar style="auto" />
    </>
     
  )
}
