import Header from '../../components/header';
import React from 'react';
import { View, Text } from 'react-native';
import Repos from '../../components/repos';
import { useAppContext } from '../../context';
import styles from './styles';

export default function FavoritesScreen() {

  const { data, setData } = useAppContext()
  
  return (
    //consider changing Header to navigation
    <View style={styles.mainView}>
      <Header onPress={() => setData(prev => ({...prev, showModal: !prev.showModal}))}/>
      <View style={styles.container}>
        {data?.favorites?.length ? (
          <Repos data={data.favorites} />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.empty}>Você ainda não tem facoritos.</Text>
          </View>
        )}
      </View>
    </View>
  );
}

