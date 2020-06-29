import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View , Image, TextInput, TouchableOpacity,Alert} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        UserID: '',
        Pass: ''
    };

    FunctionLogin = () =>
    {
        const {UserID} = this.state;
        const {Pass} = this.state;
        fetch('https://access-continental.com/api/login.php',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userid: UserID,
                pass: Pass
              })
        }).then((response) =>response.json())
        .then((responseJson) => {
            if(responseJson === 'Ok')
            {
                this.props.navigation.navigate('Payment');
            }
            else
            {
                Alert.alert(responseJson);
            }
        }).catch((error) =>{
            console.error(error);
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <Image
            source={{uri: 'http://waqas1234567890.freeasphost.net/0e5e9bbd-3696-4edb-a171-c9b4a199b264_200x200.png'}}
         style={styles.logo} />
        <Text style={{textAlign:'left',fontSize:40,color: '#009999'}}> Sign In</Text>
        <TextInput
        placeholder = "Username"
        onChangeText={UserID => this.setState({UserID})}
        style={styles.input}
        />

        <TextInput
        placeholder = "Password"
        onChangeText={Pass => this.setState({Pass})}
        style={styles.input}
        secureTextEntry={true} />

        <TouchableOpacity onPress={() => {FunctionLogin();}} style={styles.button}>
        <Text style={styles.loginbtn}> Login </Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent :"center",
        alignItems:"center"
    },

    input:{
        width:300,
        margin:10,
        borderColor:'#d91e41',
        borderWidth: 2
    },

    button:{
        width:300,
        padding:10,
        backgroundColor:'#d91e41',
        alignItems: 'center'
    },

    loginbtn:{
        color:'#ffff'
    },

    logo:{
    width:100,
    height:100
    }
});

export default Login;
