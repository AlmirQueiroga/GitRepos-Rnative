import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from '../screens/favorites';
import ReposScreen from '../screens/repos';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Modal, Text, View, TouchableOpacity } from 'react-native';
import { useAppContext } from '../context';
import SearchBar from '../components/searchBar';
import style from './style';

export default function Navigation() {
  const { data, setData } = useAppContext()
  const [error, setError] = React.useState<boolean>(false)

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
            <View style={style.color}>
              <SearchBar setShowOpacity={() => setError(true)}/>
            </View>
          </TouchableOpacity>
        </Modal>
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
          title: ' ',
          headerShown:  false
        })}
      />
      <BottomTab.Screen
        name="FavoriteS"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
          tabBarActiveTintColor: 'black',
          title: ' ',
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
