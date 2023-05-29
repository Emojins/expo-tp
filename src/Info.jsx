import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>League of Legends</Text>
      <Text style={styles.paragraph}>
        La API móvil de <Text style={styles.highlight}>League of Legends</Text> es una emocionante aplicación desarrollada utilizando <Text style={styles.highlight}>React Native</Text>, 
        que ofrece a los jugadores de <Text style={styles.highlight}>League of Legends</Text> una forma conveniente de acceder a información en tiempo real sobre el popular juego de  
         <Text style={styles.highlight}> Riot Games</Text>.
      </Text>
      <Text style={styles.sectionTitle}>Características clave:</Text>
      <Text style={styles.listItem}>1) Información detallada de los campeones</Text>
      <Text style={styles.listItem}>2) Seguimiento de partidas en tiempo real</Text>
      <Text style={styles.listItem}>3) Estadísticas y rendimiento del jugador</Text>
      <Text style={styles.listItem}>4) Noticias y actualizaciones del juego</Text>
      <Text style={styles.listItem}>5) Interfaz intuitiva y personalizable</Text>
      <Text style={styles.subtitle}>¿Qué es League of Legends?</Text>
      <Text>League of Legends es un juego de estrategia por <Text style={styles.highlight}>equipos</Text> en el que dos equipos de <Text style={styles.highlight}>cinco campeones </Text>
        se enfrentan para ver quién destruye antes la base del otro. 
        Elige de entre un elenco de 140 campeones para realizar jugadas épicas, asesinar rivales y derribar torretas para alzarte con la victoria.
      </Text>
      <View style= {styles.viewPaso}>
      <Text style={styles.subtitle}>ÁBRETE PASO</Text>
      <Text>
            Para llegar hasta el <Text style={styles.highlight}>nexo enemigo</Text>, tu equipo tendrá que avanzar por al menos una calle. Hay estructuras defensivas que bloquean tu avance: <Text style={styles.highlight}>las torretas y los inhibidores</Text>. 
            Cada calle cuenta con tres torretas y un inhibidor. Además, cada nexo tiene dos torretas adicionales.
      </Text>
      <Text style={styles.sectionTitle}> * TORRETAS</Text>
      <Text>
          Las <Text style={styles.highlight}>Torretas</Text> infligen daño a los súbditos y campeones enemigos, y ofrecen a su equipo un campo de visión limitado a través de la niebla de guerra. 
          Ataca a estas estructuras con un grupo de súbditos delante, para que no te ataquen a ti, y <Text style={styles.highlight}>sigue avanzando.</Text>
      </Text>
      <Text style={styles.sectionTitle}> * INHIBIDORES</Text>
      <Text>
       Todos los <Text style={styles.highlight}>inhibidores</Text> están protegidos por una torreta. Destruirlos hará que aparezcan <Text style={styles.highlight}>supersúbditos </Text> 
       de tu equipo en esa calle durante varios minutos. 
       Después de un tiempo, el inhibidor volverá a aparecer y se dejarán de generar supersúbditos.
      </Text>
      </View>
      <View style= {styles.viewCarril}>
      <Text style= {styles.subtitle}>ELIGE TU CARRIL</Text>
      <Text>
      La composición de equipo más recomendada está integrada por <Text style={styles.highlight}>cinco posiciones diferentes. </Text>
      Las características de cada una de las calles favorecen a ciertos tipos de campeones y roles. 
      ¡Pruébalas todas o elige la que más te guste!
      </Text>
      <Text style= {styles.sectionTitle}> 1) CALLE SUPERIOR</Text>
      <Text>
           Los campeones de la calle superior son los luchadores solitarios por excelencia. 
           Su trabajo es proteger su calle y centrarse en eliminar a las mayores amenazas del equipo enemigo.
      </Text>
      <Text style= {styles.sectionTitle}> 2) JUNGLA</Text>
      <Text>
      Los junglas dedican su partida a la caza. Se sirven de su destreza y sigilo para saltar de una calle a otra, 
      se encargan de vigilar los monstruos neutrales más importantes y atacan en el momento preciso cuando un enemigo baja la guardia.
      </Text>
      <Text style= {styles.sectionTitle}> 3) CARRIL CENTRAL</Text>
      <Text>
      Los campeones de la calle central cuentan con un gran daño explosivo y funcionan muy bien tanto de forma independiente como en equipo. 
      Para ellos, el combate es una peligrosa danza que consiste en encontrar el momento idóneo para acabar con su rival.
      </Text>
      <Text style= {styles.sectionTitle}> 4) CARRIL INFERIOR</Text>
      <Text>
      Los campeones de la calle inferior son la dinamita del equipo. 
      Hay que protegerlos al comienzo de la partida para asegurarse de que consiguen suficiente oro y experiencia para llevar al equipo a la victoria.
      </Text>
      <Text style= {styles.sectionTitle}> 5) SOPORTE</Text>
      <Text>
      Los campeones de apoyo son los protectores del equipo. 
      Mantienen con vida a sus aliados y se centran en que consigan asesinatos, así como en proteger a su compañero de la calle inferior hasta que se vuelva más fuerte.
      </Text>
      </View>
     
    </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#C0F5D8',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff7f00',
    marginBottom: 16,
    textAlign: 'center'
  },
  listItem: {
    color: '#9333ea',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff7f00',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  viewPaso: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff7f00',
    backgroundColor: '#8FEFF0',
    textAlign: 'center'
  },
  viewCarril: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff7f00',
    backgroundColor: '#B0D3F9',
    textAlign: 'center'
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
