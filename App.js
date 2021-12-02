import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Card } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


function HomeScreen() {
  return (
    <View style={styling.screen}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styling.screen}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
        tabBarActiveBackgroundColor: "#4D4948",
        tabBarInactiveBackgroundColor: "#4D4948",
        
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
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
    color:"white"
  },
  screen:
  {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor:"#EBD660"
  }
});



