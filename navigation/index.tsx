import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from '../screens/favorites';
import ReposScreen from '../screens/repos';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Modal, View, TouchableOpacity } from 'react-native';
import { useAppContext } from '../context';
import SearchBar from '../components/searchBar';
import style from '../styles'
import DialogError from '../components/dialogs/error';

const ERROR_MSG = {
  title: 'Ops!',
  message:
    'Um erro aconteceu ao processar sua solicitação, tente um diferente parâmetro ou tente novamente'
}

export default function Navigation() {

  const { data, setData } = useAppContext()

  const closeModal = () => setData(prev => ({...prev, showModal: false}))

  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
      <RootNavigator />
			<Modal
				animated
				animationType="fade"
				visible={data.showModal}
				transparent
				onRequestClose={() => closeModal()}>
				<TouchableOpacity style={style.modal} onPress={() => closeModal()}>
					<View style={style.content}>
						<SearchBar/>
					</View>
				</TouchableOpacity>
			</Modal>
			<DialogError
				visible={data.showError}
				handleConfirm={() => setData(prev => ({...prev, showError: false}))}
				title={ERROR_MSG.title}
				message={ERROR_MSG.message}/>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  return (

    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
		
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {

  return (

    <BottomTab.Navigator
      initialRouteName="RepoS">
      <BottomTab.Screen
        name="RepoS"
        component={ReposScreen}
        options={({ navigation }: RootTabScreenProps<'RepoS'>) => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="github" color={color} />,
          tabBarActiveTintColor: 'black',
          tabBarShowLabel: false,
          headerShown:  false
        })}
      />
      <BottomTab.Screen
        name="FavoriteS"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
          tabBarActiveTintColor: 'black',
          tabBarShowLabel: false,
          headerShown:  false
        }}
      />
    </BottomTab.Navigator>

  );
}

function TabBarIcon(props: {

  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;

}) {

  return <FontAwesome size={32} {...props} />;
	
}
