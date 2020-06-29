const { requireNativeComponent } = require("react-native");

import React, { Component } from 'react';
import { Platform,StyleSheet, View, Text , Image,ActivityIndicator,Dimensions,Modal } from 'react-native';

class Splashscreen extends Component {

componentDidMount()
{
    setTimeout(() =>{
        this.props.navigation.navigate('Login');
    },4000)
}


  render() {
    return (
      <View style={styles.container}>
        <Image source ={{uri: 'http://waqas1234567890.freeasphost.net/0e5e9bbd-3696-4edb-a171-c9b4a199b264_200x200.png'}}
        style={styles.logo}
        />

        <ActivityIndicator size="large" color="blue" style={{margin:10}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        width:150,
        height:150
    },
})

export default Splashscreen;
