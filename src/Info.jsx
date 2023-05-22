import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>League of Legends</Text>
      <Text style={styles.subtitle}>Información en tiempo real</Text>
      <Text style={styles.paragraph}>
        La API móvil de <Text style={styles.highlight}>League of Legends</Text> es una emocionante aplicación desarrollada utilizando <Text style={styles.highlight}>React Native</Text>, que ofrece a los jugadores de <Text style={styles.highlight}>League of Legends</Text> una forma conveniente de acceder a información en tiempo real sobre el popular juego de <Text style={styles.highlight}>Riot Games</Text>.
      </Text>
      <Text style={styles.sectionTitle}>Características clave:</Text>
      <Text style={styles.listItem}>1) Información detallada de los campeones</Text>
      <Text style={styles.listItem}>2) Seguimiento de partidas en tiempo real</Text>
      <Text style={styles.listItem}>3) Estadísticas y rendimiento del jugador</Text>
      <Text style={styles.listItem}>4) Noticias y actualizaciones del juego</Text>
      <Text style={styles.listItem}>5)Interfaz intuitiva y personalizable</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff7f00',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff7f00',
    marginBottom: 24,
  },
  paragraph: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 16,
  },
  highlight: {
    color: '#9333ea',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },
}
)
