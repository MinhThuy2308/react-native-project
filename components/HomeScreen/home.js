import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import ButtonHomeScreen from '../ButtonHomeScreen/buttonhome'
import styles from './styles';
import mainLogo from '../../assets/images/logo.jpg';
const HomeScreen = (props) => {
  return (
      <View style={styles.yogaContainer}>
        <View style={styles.titles}>
          <Text style={styles.title}>The Beauty of Yoga</Text>
          <Text style={styles.subtitle}>Good health, good life</Text>
          <Image
            source={mainLogo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <ButtonHomeScreen />
      </View>
  );
};

export default HomeScreen;