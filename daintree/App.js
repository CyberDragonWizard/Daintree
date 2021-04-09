import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

// Redux
import { Provider } from 'react-redux';
import store from './Redux/Store';

// Screens
import Header from './shared/Header';

// Navigation
import Main from './navigators/Main';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Header />
          <Main/>
      </NavigationContainer>
    </Provider>
  );
}
