import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlexView from './src/API'
import Perfil from "./src/perfil"
import Navegar from './src/Navigation'

export default function App() {
    const Stack = createNativeStackNavigator()


  return (
    <>
     <NavigationContainer>
        <Stack.Navigator initialRouteName='Navigation'>
          <Stack.Screen name= 'Navigation' component={Navegar}></Stack.Screen>
         <Stack.Screen name = 'API' component={FlexView}/>
         <Stack.Screen name = 'Perfil' component={Perfil}/>
        </Stack.Navigator>
     </NavigationContainer>
     <StatusBar style="auto" />
    </>
     
  )
}
