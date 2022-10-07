import React from 'react';
import { View } from 'react-native';
import Header from '../../components/header';
import Repos from '../../components/repos';
import { useAppContext } from '../../context';

import { RootTabScreenProps } from '../../types';
import styles from './styles'

export default function ReposScreen({ navigation }: RootTabScreenProps<'RepoS'>) {

  const { data } = useAppContext()

  return (

    <View style={styles.mainView}>
      <Header />
      <Repos data={data.loadedRepositories || []} />
    </View>
  );
}

