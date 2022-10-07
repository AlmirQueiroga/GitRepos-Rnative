import React from 'react';
import { View } from 'react-native';
import Favorites from '../../components/favorites';

export default function FavoritesScreen() {
  return (
    <View >
      <Favorites/>
    </View>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});*/
