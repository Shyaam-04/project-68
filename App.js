import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FaceBook from './Screens/FaceBook';
import Instagram from './Screens/Instagram';
//import {Header} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default function App() {
  return(
    
      <AppContainer/>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
var tabNavigator = createBottomTabNavigator({
     FaceBook:{screen:FaceBook},
     Instagram:{screen:Instagram}
});
const AppContainer = createAppContainer(tabNavigator);
