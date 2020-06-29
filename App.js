import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import Splashscreen from './src/Splashscreen';
import Login from './src/Login'
import Payment from './src/Payment';

const LoginNavigator = createStackNavigator(
  {
  'Login': {screen: Login,
  navigationOptions: ({navigation}) => ({
  headerLeft: () => (
  <TouchableOpacity
  style={{marginLeft: 20}}
  onPress={() => navigation.toggleDrawer()}>
  <Icon name="menu" size={25} /></TouchableOpacity>
  )})
  },
  });

const PaymentNavigator = createStackNavigator({
  'Payment': {screen: Payment,
    navigationOptions : ({navigation}) =>({
      headerLeft : () =>(
        <TouchableOpacity
          style={{marginLeft:20}}
          onPress={() => navigation.toggleDrawer()}>
            <Icon name ="imenu" size={25}/>
        </TouchableOpacity>
      )
    })
  }
});

const DrawerNavigator = createDrawerNavigator({
  Login: {
    navigationOptions: {
    drawerLabel: 'Login', // Name shown in the drawer of the screen
    },
    screen: LoginNavigator,
    },

    Payment: {
      navigationOptions:{
        drawerLabel: 'Payment',
      },
      screen: PaymentNavigator,
    },
});

const AppSwitchNavigator = createSwitchNavigator({
  'Splashscreen' : {screen : Splashscreen},
  'Login' : {screen : Login}, 
},

{
  initialRouteName: 'Splashscreen'
});

const App = createAppContainer(AppSwitchNavigator);

export default App;