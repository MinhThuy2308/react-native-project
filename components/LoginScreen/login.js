import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
  LinearGradient,
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
                color="#777"
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
                color="#777"
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
                style={styles.action__eye}
              />
                
            </View>

            <TouchableOpacity>
                <Text style={{color: '#2A57DF', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.btnSign}>Sign In</Text>
            </TouchableOpacity>

            <Link
          to={`/`}
          style={styles.signup}
        >
          <Text>Back to home</Text>
        </Link>
        </View>

        
      </View>
  );
};

export default LoginScreen;