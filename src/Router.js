import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import component
import HomeScreen from '../src/Screen/HomeScreen';
import foodfrom from '../src/foodfrom';
import foodlist from '../src/foodlist';
import Home from '../src/Screen/Home';
import Dashboard from '../src/Screen/Dashboard';
import Splash from './Screen/Splash';
import Intro from './Screen/Intro';
import Login from './Screen/Login/Login';
import flatListAnimation1 from './Screen/flatListAnimation1';
import flatListAnimation2 from './Screen/flatListAnimation2';
import flatListAnimation3 from './Screen/flatListAnimation3';
import Popup_Screen from './component/Popup/Popup_Screen';
import Tinder from './Screen/Tinder/Tinder';

import Skeleton_loader from './Screen/Skeleton_loader';
import Skeleton_loader1 from './Screen/Skeleton_loader1';
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
        <Stack.Navigator headerMode={'none'} initialRouteName={'HomeScreen'}>
          <Stack.Screen name="foodfrom" component={foodfrom} />
          <Stack.Screen name="foodlist" component={foodlist} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="flatListAnimation1" component={flatListAnimation1} />
          <Stack.Screen name="flatListAnimation2" component={flatListAnimation2} />
          <Stack.Screen name="flatListAnimation3" component={flatListAnimation3} />
          <Stack.Screen name="Popup_Screen" component={Popup_Screen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Tinder" component={Tinder} />
          <Stack.Screen name="Skeleton_loader" component={Skeleton_loader} />
          <Stack.Screen name="Skeleton_loader1" component={Skeleton_loader1} />
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}
export default Router;