import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Card } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from "./HomeScreen"
import Settings from "./SettingsScreen"
import Login from "./LoginScreen"
import Logout from "./LogoutScreen"
import { ScreenHeight } from 'react-native-elements/dist/helpers';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();

export default function TabScreen()
{
    return(
       
        <Tab.Navigator screenOptions={{ headerShown: false }}>
              
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Logout" component={Logout} />
              
      </Tab.Navigator>
      
    )
}