import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
  ImageBackground,
  Button,
} from 'react-native';
import styles from './styles';
import { Link } from 'react-router-native';

const ButtonHomeScreen = (props) => {
  return (
    <View>
      <Link
        to={`/login`}
        style={styles.signin}
      >
        <Text style={styles.textIn}>Sign In</Text>
      </Link>

      <Link
        to={`/signup`}
        style={styles.signup}
      >
        <Text style={styles.textUp}>Sign Up</Text>
      </Link>

    </View>
  );
};

export default ButtonHomeScreen;