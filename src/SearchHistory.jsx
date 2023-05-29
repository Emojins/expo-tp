import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@searchHistory';

export const saveSearchTerm = async (term) => {
  try {
    const existingHistory = await AsyncStorage.getItem(STORAGE_KEY);
    let newHistory = [];

    if (existingHistory) {
      newHistory = JSON.parse(existingHistory);
    }
       
    // Agregar el nuevo término de búsqueda al historial (eliminar duplicados si es necesario)
    newHistory = [term, ...newHistory.filter((item) => item !== term)];

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
  } catch (error) {
    console.log(error);
  }
};

export const getSearchHistory = async () => {
  try {
    const history = await AsyncStorage.getItem(STORAGE_KEY);
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const eliminateKey = () => {
   try{
      const eliminar =  AsyncStorage.removeItem(STORAGE_KEY)
      if(eliminar){
        
      }
   } catch(error){
    console.log(error);
   }
}