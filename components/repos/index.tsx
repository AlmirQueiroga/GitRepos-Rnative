import React from 'react';
import { FlatList } from 'react-native';
import { Repositories } from '../../context';
import Repository from '../repository';
import styles from './styles';

interface RepositoriesList {
  data: Repositories[]
  isfavoritesc: boolean
}

const Repos = ({ data, isfavoritesc }: RepositoriesList) => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      renderItem={({item}) => <Repository isfavoritesc={isfavoritesc} repositoryData={item}/>}
      keyExtractor={item => String(item.id)}
    />
  );
};

export default React.memo(Repos);