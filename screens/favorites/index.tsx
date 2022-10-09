import React from 'react';
import { View, Text } from 'react-native';
import Repos from '../../components/repos';
import { useAppContext } from '../../context';
import styles from './styles';

export default function FavoritesScreen() {

  const { data } = useAppContext()
  
  return (
    <View style={styles.container}>
      {data?.favorites?.length ? (
        <Repos data={data.favorites} />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.empty}>Você ainda não tem facoritos.</Text>
        </View>
      )}
    </View>
  );
}

