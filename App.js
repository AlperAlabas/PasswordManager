import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect, useRef } from 'react';
import { StyleSheet,View,Text, Button, Platform} from 'react-native';
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
import TabScreen from './TabScreen';
import DrawerScreen from './DrawerScreen';
import { collection, addDoc,doc,setDoc,getDocs ,getFirestore, collectionGroup,query,onSnapshot,serverTimestamp} from "firebase/firestore";
import { getAuth ,onAuthStateChanged} from 'firebase/auth';

import {app} from "./Firebase" 

const Stack = createStackNavigator();






export default function App() {
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="PassJam" component={DrawerScreen} />
      
      
      
    </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styling = StyleSheet.create({
  header:
  {
    backgroundColor:"#4D4948",
    
  },
  headerTitle:
  {
    color:"white",
    
  },
  screen:
  {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor:"#EBD660"
  },
  tabBar:
  {
    position:"absolute",
    height:(ScreenHeight*7)/100,
    backgroundColor:"#4D4948",
    paddingVertical:4,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:30
  },
});



