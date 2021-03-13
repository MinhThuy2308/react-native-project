import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
// import LoginScreen from './login'
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { Link } from 'react-router-native';

const LoginScreen = (props) => {
  return (
    <View style={styles.loginContainer}>
        <View style={styles.header}>
            <Text style={styles.textheader}>Welcome</Text>
        </View>

        <View style={styles.footer}>
            <Text style={styles.textFooter}>Username</Text>
            <View style={styles.action}>
              <FontAwesome
                name="user"
                color="#202123"
                size={25}
              />
              <TextInput
                placeholder="Username"
                style={styles.textInput}
                autoCapitalize="none"
              />
                
            </View>

            <Text style={styles.textFooter}>Password</Text>
            <View style={styles.action}>
              <FontAwesome
                name="lock"
                color="#202123"
                size={25}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.textInput}
                autoCapitalize="none"
              />
              <Feather
                name="eye-off"
                color="#202123"
                size={25}
              />
                
            </View>
        </View>

        {/* <Link
          to={`/`}
          style={styles.signup}
        >
          <Text>Ve nha</Text>
        </Link> */}
      </View>
  );
};

export default LoginScreen;