import React from 'react';
 import {
   StyleSheet,
   View,
   Text,
   Image,
   TouchableOpacity
 } from 'react-native';
import { createAnimatableComponent } from 'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons';
import Feather from 'react-native-vector-icons/Feather'
import mainLogo from '../../assets/images/background.jpg';
import * as Animatable from 'react-native-animatable';

 const LoginScreen = ({navigation}) => {

  const [data, setData] = React.useState({
    username:'',
    password:'',
    check_textInputChange: false,
    secureTextEntry: true
  });

  const textInputChange = (val) => {
    if(val.length > 0) {
      setData ({
        ...data,
        username: val,
        check_textInputChange: true
      });
    } else {
      setData ({
        ...data,
        username: val,
        check_textInputChange: false
      });

    }
  }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <Image
              source={mainLogo}
              style={styles.logo}
              resizeMode="contain"
            />
            </View>

            <View style={styles.footer}>
            <Text style={styles.textIntro}>Healthy Body</Text>
            <View style={styles.action}>
              <Feather
                name="user"
                size={30}
                style={styles.icon}
              />
              <TextInput 
                placeholder="Username" 
                style={styles.textInput} 
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
                >
              </TextInput>
              {data.check_textInputChange ?
              <Animatable.View animation="bounceIn">
                <Feather
                  style={{marginTop:10}}
                  name="check-circle"
                  color="green"
                  size={15}
              
                />
              </Animatable.View>              
              : null }
            </View>

            <View style={styles.action}>
              <Feather
                name="lock"
                size={30}
                style={styles.icon}
              />
              <TextInput placeholder="Password" secureTextEntry={true} style={styles.textInput} autoCapitalize="none">

              </TextInput>
            </View>

            <TouchableOpacity>
                <Text style={{color: '#fff', marginTop:20, marginLeft:50}}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate('Homepage')}>
                <Text style={styles.textSign}>Login</Text>
            </TouchableOpacity>
            
            <View style={styles.btnRes}>
            <Text style={{color:'#F7F08D'}}>Don't have account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.textSign1}>Create new account</Text>
            </TouchableOpacity>
            </View>
            </View>

      </View>
    )
  }
  
  export default LoginScreen;

  const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor:'#4862D5',
        paddingBottom: 200
    },

    header: {
        flex:2,
        justifyContent:'center',
        alignItems:'center',

    },

    footer: {
        flex:1,
        paddingVertical: 30
        

    },
    
    btnRes: {
        flexDirection:'row',
        marginLeft:60,
        marginTop:20,
    },

    textIntro: {
        fontSize:40,
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',

    },

    action: {
        flexDirection:'row',
        marginTop:15,
        backgroundColor:'#fff',
        borderRadius:20,
        paddingBottom:5,
        paddingTop:5,
        marginLeft:45,
        width:'80%',
        paddingLeft:10,
    },

    textInput: {
        paddingLeft:5,

    },

    icon: {
       color:'#4862D5',

    },
    logo: { 
        width:'70%',

    },

    signIn: {
        width: '40%',
        paddingBottom:5,
        paddingTop:5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:'30%',
        marginTop:25,
        borderRadius: 20,
        backgroundColor:'#fff'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#4862D5'
    },

    signUp: {
        width: '80%',
        paddingBottom:5,
        paddingTop:5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:45,
        marginTop:10,
        borderRadius: 20,
        backgroundColor:'#818BB5'
    },
    textSign1: {
        fontSize: 15,
        fontWeight: 'bold',
        color:'#fff',
        marginLeft:10,
    }




  })