import React from 'react';
 import {
   StyleSheet,
   View,
   Text,
   Image,
   TouchableOpacity,
   Alert
 } from 'react-native';
import { createAnimatableComponent } from 'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons';
import Feather from 'react-native-vector-icons/Feather'
import mainLogo from '../assets/images/logo1.jpg';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../components/context';
import { login } from '../services/auth';

 const LoginScreen = ({ navigation }) => {

  const [data, setData] = React.useState({
    username:'',
    password:'',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { logIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if(val.trim().length >= 8) {
      setData ({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true
      });
    } else {
      setData ({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false
      });

    }
  }

  const handlePasswordChange = (val) => {
    if(val.trim().length >= 6) {
    setData({
      ...data,
      password: val,
      isValidPassword: true
    });
   } else {
    setData ({
      ...data,
      password: val,
      isValidPassword: false
    });

   } 
  }

  const handleValidUser = (val) => {
    if(val.trim().length >= 6 ) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      })
    }
  }

  const loginHandle = async (userName, password) => {

    if( data.username.length == 0 || data.password.length == 0 ) {
      Alert.alert('Wrong input','Email or password field cannot be empty', [
        {text:'OK'}
      ]);
      return;
    } 
     else {
      await login({
        identifier: userName,
        password,
      }).then(res => {
        logIn(res);
        return;
      })
    }
    // if( foundUser.length == 0) {
    //   Alert.alert('Invalid user','Username or password is incorrect', [
    //     {text:'OK'}
    //   ]);
    //   return;
    // }
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
                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                >
              </TextInput>
              {data.check_textInputChange ?
              <Animatable.View animation="bounceIn" style={styles.action__check}>
                <Feather
                  name="check-circle"
                  color="green"
                  size={15}              
                />
              </Animatable.View>              
              : null }
            </View>
            { data.isValidUser ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.error}>Username must be 8 characters long</Text>
            </Animatable.View>
            }

            <View style={styles.action}>
              <Feather
                name="lock"
                size={30}
                style={styles.icon}
              />
              <TextInput 
                placeholder="Password" 
                secureTextEntry={true} 
                style={styles.textInput} 
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
                >
              </TextInput>
            </View>
            { data.isValidPassword ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.error}>Password must be 6 characters long</Text>
            </Animatable.View>
            }
            

            <TouchableOpacity>
                <Text style={{color: '#fff', marginTop:15, right:'20%',}}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signIn} onPress={() => {loginHandle(data.username, data.password)}}>
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
        backgroundColor:'#1995ad',
        
    },

    header: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },

    footer: {
        flex:2,
        paddingVertical: 30,
        justifyContent:'center',
        alignItems:'center',
        
    },
    
    btnRes: {
        flexDirection:'row',       
        marginTop:15,
    },

    textIntro: {
        fontSize:40,
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',

    },

    action: {
        display: 'flex',
        flexDirection:'row',
        marginTop:15,
        backgroundColor:'#fff',
        borderRadius:20,
        paddingBottom:5,
        paddingTop:5,
        width:'80%',
        paddingLeft:10,
    },

    action__check: {
      marginTop: 8,
      marginLeft: 'auto',
      marginRight: 20,
    },

    textInput: {
      paddingLeft:5,
      width: '77%'
    },

    error: {
      color: '#EBFF33',
      fontSize: 14,
      right:30,
      marginTop:10,
    },

    icon: {
       color:'#4cb5f5',

    },
    logo: { 
        width:'70%',
        top:30,

    },

    signIn: {
        width: '40%',
        paddingBottom:5,
        paddingTop:5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:15,
        borderRadius: 20,
        backgroundColor:'#fff'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#4cb5f5'
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