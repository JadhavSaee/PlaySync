import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/homescreen';
import ProfileScreen from '../screens/profilescreen';
import NeonButton from '../components/neonbutton';
import LoginScreen from '../screens/loginscreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#121212', borderTopColor: '#00FFFF' },
          tabBarActiveTintColor: '#00FFFF',
          tabBarInactiveTintColor: '#FFFFFF',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
