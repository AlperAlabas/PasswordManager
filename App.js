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
import TabScreen from './TabScreen';




const Stack = createStackNavigator();





const Drawer = createDrawerNavigator();



export default function App() {
  
  return (
    /*<NavigationContainer>
      <Tab.Navigator

      screenOptions={({ route }) => ({
        headerStyle: styling.header,
        headerTitleStyle: styling.headerTitle,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'list'
              : 'list';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'gear' : 'gear';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#EBD660',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: "transparent",
        tabBarInactiveBackgroundColor: "transparent",
        tabBarStyle: styling.tabBar,
        headerTransparent:false,
        
      })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>*/
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tab" component={TabScreen} />
      
      
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



