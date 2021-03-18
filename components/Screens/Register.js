import React from 'react';
 import {
   StyleSheet,
   View,
   Text,
   Image,
   TouchableOpacity
 } from 'react-native';
 import mainLogo from '../../assets/images/background.jpg';
 import Feather from 'react-native-vector-icons/Feather';
 import { TextInput } from 'react-native-gesture-handler';;

 const Register =({navigation}) => {

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

            <Text style={styles.textIntro}>Register</Text>

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

            <View style={styles.action}>
              <Feather
                name="lock"
                size={30}
                style={styles.icon}
              />
              <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.textInput} autoCapitalize="none">

              </TextInput>
            </View>

            <TouchableOpacity style={styles.signUp}>
              <Text style={styles.textSign}>Register</Text>
            </TouchableOpacity>

            <View style={styles.btnLog}>
              <Text style={{color:'#F7F08D'}}>Already have a account?</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.textLog1}>Log in</Text>
              </TouchableOpacity>
            </View>


            
         </View>
     )
 }

 export default Register;

 const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor:'#4862D5',
        paddingBottom: 70
    },

    header: {
        flex:2,
        justifyContent:'center',
        alignItems:'center',

    },
    logo: {
        width:'70%',
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

    textIntro: {
        fontSize:40,
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',

    },

    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#4862D5'
    },

    signUp: {
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

    btnLog: {
      flexDirection:'row',
      marginLeft:100,
      marginTop:20,
    },

    cancel: {
        width: '35%',
        paddingBottom:5,
        paddingTop:5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:38,
        marginTop:20,
        borderRadius: 20,
        backgroundColor:'#818BB5'
    },

    textLog1: {
      fontSize: 15,
      fontWeight: 'bold',
      color:'#fff',
      marginLeft:10,
    }

 })