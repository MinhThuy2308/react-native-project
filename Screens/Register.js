import React from 'react';
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
import { register } from '../services/auth'

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
    if (val.trim().length >= 8) {
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
    if (val.trim().length >= 6) {
      setData({
        ...data,
        email: val,
        isValidMail: true,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        isValidMail: false,
        check_textInputChange: false,
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

  const handleValidEmail = (val) => {
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


  const registerHandle = async (email, password, username) => {
    await register({
      email,
      password,
      username

    }).then(res => {
      reGister(res);
      Alert.alert('Successfully', 'You can login now');
      return;
    })

    navigation.navigate('Information')
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
        <Text style={styles.textIntro}>Register</Text>
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
            onEndEditing={(e) => handleValidEmail(e.nativeEvent.text)}
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
        {data.isValidMail ? null :
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.error}>Email must be 6 characters long</Text>
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

        <TouchableOpacity style={styles.signUp} onPress={() => { registerHandle(data.email, data.password, data.username) }}>
          <Text style={styles.textSign}>Register</Text>
        </TouchableOpacity>

        <View style={styles.btnLog}>
          <Text style={{ color: '#F7F08D' }}>Already have a account?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.textLog1}>Log in</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Information')}>
          <Text style={styles.textLog1}>Log in</Text>
        </TouchableOpacity>
      </View>



    </View>
  )
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1995ad',

  },

  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  footer: {
    flex: 2,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',

  },

  logo: {
    width: '70%',
    top: 30,
  },

  action: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingBottom: 5,
    paddingTop: 5,
    width: '80%',
    paddingLeft: 10,
  },

  textInput: {
    paddingLeft: 5,

  },

  icon: {
    color: '#4cb5f5',

  },

  action__check: {
    marginTop: 8,
    marginLeft: 'auto',
    marginRight: 20,
  },

  textIntro: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',

  },

  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4cb5f5'
  },

  error: {
    color: '#EBFF33',
    fontSize: 14,
    right: 30,
    marginTop: 10,
  },

  signUp: {
    width: '40%',
    paddingBottom: 5,
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 20,
    backgroundColor: '#fff'
  },

  btnLog: {
    flexDirection: 'row',
    marginTop: 20,
  },

  textLog1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  }

})