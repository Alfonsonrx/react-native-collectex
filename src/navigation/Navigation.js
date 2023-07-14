import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'
import FavoriteScreen from '../screens/Favorite';
import Account from '../screens/Account';
import CollectexNavigation from './CollectexNavigation';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName='CollectexNav'>
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
        headerTitle: "Favoritos",
        headerTitleAlign: 'center',
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ color, size }) => (
          <Icon name="heart" color={color} size={size} />
        ),
        tabBarActiveTintColor: '#d85933',
        tabBarInactiveTintColor: 'gray'
      }} />
      <Tab.Screen name="CollectexNav" component={CollectexNavigation} options={{
        headerTitle: "Collectex",
        headerTitleAlign: 'center',
        tabBarLabel: "",
        tabBarIcon: () => renderPokeball()
      }} />
      <Tab.Screen name="Account" component={Account} options={{
        headerTitle: "Mi cuenta",
        headerTitleAlign: 'center',
        tabBarLabel: "Mi cuenta",
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={size} />
        ),
        tabBarActiveTintColor: '#d85933',
        tabBarInactiveTintColor: 'gray'
      }} />
    </Tab.Navigator>
  );
}

const renderPokeball = () => {
  return (
    <Image
      source={require('../assets/collectball.png')}
      style={{ width: 45, height: 45, top: -15 }}
    />
  )
}

export default Navigation;