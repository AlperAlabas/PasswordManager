import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View,Text } from 'react-native';

export default function SettingsScreen() {
    return (
      <View style={styling.screen}>
        <Text>Settings!</Text>
      </View>
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