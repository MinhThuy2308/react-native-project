import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../components/context';
import { login } from '../services/auth';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { logIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false
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

  const handleValidUser = (val) => {
    if (val.trim().length >= 6) {
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

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert('Wrong input', 'Username or password field cannot be empty', [
        { text: 'OK' }
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
      }).catch(err => {
        Alert.alert('Oops', 'Username or password is not correct.', [
          { text: 'OK' }
        ]);
      })
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4364f7', '#fff', 'transparent']}
        style={styles.background}
      />
      <View style={styles.header}>
        <Text style={styles.textIntro}>Beauty of Yoga</Text>
      </View>

      <View style={styles.footer}>

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
            : null}
        </View>
        {data.isValidUser ? null :
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
        {data.isValidPassword ? null :
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.error}>Password must be 6 characters long</Text>
          </Animatable.View>
        }

        <TouchableOpacity>
          <Text style={{ color: '#fff', marginTop: 15, right: '20%', }}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <LinearGradient
            colors={['#4364f7', '#6fb1fc']}
            style={{ borderRadius: 10 }}
          >
            <TouchableOpacity style={styles.signIn} onPress={() => { loginHandle(data.username, data.password) }}>
              <Text style={styles.textSign}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={styles.btnRes}>
          <Text style={{ color: '#61b1fc', marginTop: 2 }}>Don't have account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textSign1}>Create new account</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4364f7',

  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 650,
  },

  header: {
    flex: 1,
    justifyContent: 'center',

  },

  footer: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    flex: 2,

  },

  btnRes: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center'
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
    borderRadius: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#4364f7',
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10,
  },

  action__check: {
    marginTop: 8,
    marginLeft: 'auto',
    marginRight: 20,
  },

  textInput: {
    paddingLeft: 5,
    width: '77%'
  },

  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
    left: 10
  },

  icon: {
    color: '#4364f7',

  },
  logo: {
    width: '70%',
    top: 30,

  },
  button: {
    marginTop: 20,
    width: '95%',
    marginLeft: 10
  },

  signIn: {
    borderRadius: 10,

  },
  textSign: {
    fontSize: 18,
    borderRadius: 10,
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',

  },

  textSign1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4364f7',
    marginLeft: 10,
  }
})