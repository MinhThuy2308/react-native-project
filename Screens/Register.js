import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import mainLogo from '../assets/images/logo1.jpg';
import Feather from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../components/context';
import { register } from '../services/auth';
import { LinearGradient } from 'expo-linear-gradient';

const Register = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    username: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    isValidMail: true,
  });

  const { reGister } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        username: val,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        username: val,
        isValidUser: false
      });

    }
  }

  const handleMailChange = (val) => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        email: val,
        isValidMail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        isValidMail: false,
      });

    }
  }

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      });

    }
  }

  const registerHandle = async (email, password, username) => {
    await register({
      email,
      password,
      username
    }).then(res => {
      reGister(res);
      return;
    }).catch(err => {
      Alert.alert('Oops', 'Email or Username is already exist', [
        { text: 'OK' }
      ]);
    })
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#61b1fc', '#4364f7', 'transparent']}
        style={styles.background}
      />
      <View style={styles.header}>
        <Text style={styles.textIntro}>Register</Text>
        {/* <Image
          source={mainLogo}
          style={styles.logo}
          resizeMode="contain"
        /> */}
      </View>
      <View style={styles.footer}>

        <View style={styles.action}>
          <Feather
            name="mail"
            size={30}
            style={styles.icon}
          />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handleMailChange(val)}
            // onEndEditing={(email) => validateEmail(email)}
          >
          </TextInput>
          {/* {data.check_textInputChange ?
            <Animatable.View animation="bounceIn" style={styles.action__check}>
              <Feather
                name="check-circle"
                color="green"
                size={15}
              />
            </Animatable.View>
            : null} */}
        </View>
        {data.isValidMail ? null :
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.error}>Please enter email</Text>
          </Animatable.View>
        }

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
        {data.isValidUser ? null :
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.error}>Username must be 6 characters long</Text>
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
        {data.isValidPassword ? null :
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.error}>Password must be 6 characters long</Text>
          </Animatable.View>
        }



        {/* <View style={styles.action}>
          <Feather
            name="lock"
            size={30}
            style={styles.icon}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
          >
          </TextInput>
        </View> */}
        <View style={styles.button}>
          <LinearGradient
            colors={['#4364f7', '#6fb1fc']}
            style={{ borderRadius: 10 }}
          >
            <TouchableOpacity style={styles.signUp} onPress={() => { registerHandle(data.email, data.password, data.username) }}>
              <Text style={styles.textSign}>Register</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.btnLog}>
          <Text style={{ color: '#61b1fc' }}>Already have a account?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.textLog1}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 550,
  },

  header: {
    flex: 1,
    justifyContent: 'center',

  },

  footer: {
    flex: 2,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,

  },

  textIntro: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
    marginTop: 50

  },

  action: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    // backgroundColor: '#ff5f6d',
    borderRadius: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#4364f7',
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10,
  },

  textInput: {
    paddingLeft: 5,

  },

  icon: {
    color: '#4364f7',

  },

  action__check: {
    marginTop: 8,
    marginLeft: 'auto',
    marginRight: 20,
  },

  textSign: {
    fontSize: 18,
    borderRadius: 10,
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    // paddingLeft: 30,
    // paddingRight: 30,
    textAlign: 'center',
  },

  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
    marginLeft:18
  },

  button: {
    marginTop: 20,
    width: '95%',
    marginLeft: 10
  },

  signUp: {
    borderRadius: 10,
  },

  btnLog: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center'
  },

  textLog1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#61b1fc',
    marginLeft: 10,
  }

})