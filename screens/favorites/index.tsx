import React from 'react';
import { View, Text } from 'react-native';
import Repos from '../../components/repos';
import { useAppContext } from '../../context';
import styles from './styles';

export default function FavoritesScreen() {

  const { data } = useAppContext()
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favorites repository list:</Text>
      {data?.favorites?.length ? (
        <Repos data={data.favorites} />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.empty}>You don't have favorites yet.</Text>
        </View>
      )}
    </View>
  );
}

