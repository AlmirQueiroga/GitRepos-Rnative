import React from 'react';
import { View } from 'react-native';
import Header from '../../components/header';
import Repos from '../../components/repos';
import { useAppContext } from '../../context';
import { RootTabScreenProps } from '../../types';
import styles from './styles'

export default function ReposScreen({ navigation }: RootTabScreenProps<'RepoS'>) {

  const { data,setData } = useAppContext()
  
  return (

		<View style={styles.mainView}>
			<Header onPress={() => setData(prev => ({...prev, showModal: !prev.showModal}))}/>
			<Repos isfavoritesc={false} data={data.loadedRepositories || []} />
		</View> 

  );
}

