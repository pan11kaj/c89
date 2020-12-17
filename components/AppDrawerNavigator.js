import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/Settings';
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/notificationScreen'
import MyRecievedBookScreen from '../screens/MyRecievedBooksScreen';
import {Icon} from 'react-native-elements';
export const AppDrawerNavigator = createDrawerNavigator({
        Home : {
          screen : AppTabNavigator,
          navigationOptions:{
            drawerIcon :<Icon name="home" type="fontawesome5"/>
          }
          },
        MyDonations : {
          screen : MyDonationScreen,
          navigationOptions:{
            drawerIcon :<Icon name="gift" type="font-awesome"/>,
            drawerLabel:"my-donations"
          }
        },
        Notification : {
          screen : NotificationScreen,
          navigationOptions:{
            drawerIcon :<Icon name="bell" type="font-awesome"/>,
            drawerLabel:"Notifications"
          }
        },
        MyRecievedBooks:{
           screen : MyRecievedBookScreen,
           navigationOptions:{
            drawerIcon :<Icon name="gft" type="font-awesome"/>,
            drawerLabel:"MyRecievedBooks"
          }
        },
        Setting : {
          screen : SettingScreen,
          navigationOptions:{
            drawerIcon :<Icon name="setting" type="fontawesome5"/>,
            drawerLabel:"Settings"
          }
        }
      },
        {
          contentComponent:CustomSideBarMenu
        },
        {
          initialRouteName : 'Home'
        })



