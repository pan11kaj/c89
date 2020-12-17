import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import {AppTabNavigator} from './components/AppTabNavigator'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

export default function App() {
  return (
    <Appcontainer/>
  );
}
const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:WelcomeScreen,
  Drawer:AppDrawerNavigator,
  BottomTab: {screen: AppTabNavigator},
})
const Appcontainer = createAppContainer(SwitchNavigator);