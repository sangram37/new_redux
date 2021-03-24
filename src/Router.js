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
import Splash from './Screen/Splash';
import Intro from './Screen/Intro';
import Login from './Screen/Login/Login';
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
        <Stack.Navigator headerMode={'none'} initialRouteName={'Splash'}>
          <Stack.Screen name="foodfrom" component={foodfrom} />
          <Stack.Screen name="foodlist" component={foodlist} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}
export default Router;