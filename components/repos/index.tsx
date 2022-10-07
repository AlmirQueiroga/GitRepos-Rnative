import React from 'react';
import { FlatList } from 'react-native';
import { Repositories } from '../../context';
import Repository from '../repository';
import styles from './styles';

interface RepositoriesList {
  data: Repositories[]
}

const Repos = ({ data }: RepositoriesList) => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      renderItem={({item}) => <Repository repositoryData={item}/>}
      keyExtractor={item => String(item.id)}
    />
  );
};

export default React.memo(Repos);