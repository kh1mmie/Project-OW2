import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ImageBackground } from 'react-native';
import { agents } from '../components/agents';

export default function AgentGrid() {
  const renderAgent = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (

    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/2600_Sky_v2.webp')}
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.header}>HEROES</Text>
        <FlatList
          data={agents}
          renderItem={renderAgent}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.grid}
        />
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  
  },
  background: {
    flex: 1,
    width: '100%',
    height: 'auto',
   
  },
  header: {
    fontSize: 45,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  grid: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#F3F7FC',
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: '#1a1a1a',
    textTransform: 'uppercase',
  },
});