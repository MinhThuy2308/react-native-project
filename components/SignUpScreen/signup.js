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
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { Link } from 'react-router-native';

const SignUpScreen = (props) => {
  return (
    <View style={styles.signupContainer}>
        <View style={styles.header}>
            <Text style={styles.textheader}>Sign Up</Text>
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
                
            </View>

            <TouchableOpacity>
                <Text style={styles.btnSign}>Sign Up</Text>
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

export default SignUpScreen;