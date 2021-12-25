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
import TabScreen from './TabScreen';
import { ScreenHeight } from 'react-native-elements/dist/helpers';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from './SettingsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerScreen()
{
    return(
       
        <Drawer.Navigator screenOptions={{ headerShown: false } }>
              
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Settings" component={TabScreen} />
              
              
      </Drawer.Navigator>
      
    )
}