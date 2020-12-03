import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import component
import foodfrom from '../src/foodfrom';
import foodlist from '../src/foodlist';
import Home from '../src/Screen/Home';
import Dashboard from '../src/Screen/Dashboard';
// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (

      <NavigationContainer>
        <Stack.Navigator headerMode={'none'} initialRouteName={'Home'}>
          <Stack.Screen name="foodfrom" component={foodfrom} />
          <Stack.Screen name="foodlist" component={foodlist} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}
export default Router;