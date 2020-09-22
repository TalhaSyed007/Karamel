import React, { Component } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import RootStack from './src/navigation/RootStack'
import { NavigationContainer } from '@react-navigation/native';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <NavigationContainer>

          <RootStack />

        </NavigationContainer>
      </SafeAreaView>
    );
  }
}