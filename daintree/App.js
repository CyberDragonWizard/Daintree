import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox } from "react-native";
import { NavigationContainer } from '@react-navigation/native'

// Screens
import Header from './shared/Header';

//Navigation
import Main from './navigators/Main';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NavigationContainer>
        <Header />
        <Main/>
    </NavigationContainer>
  );
}
