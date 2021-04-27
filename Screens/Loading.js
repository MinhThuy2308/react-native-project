import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import mainLogo from '../assets/images/logo1.jpg';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const Loading = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4364f7', '#fff', 'transparent']}
        style={styles.background}
      />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          source={mainLogo}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Yoga is harmony.</Text>
        <View style={styles.button}>
          <LinearGradient
            colors={['#4364f7', '#6fb1fc']}
            style={{ borderRadius: 10 }}
          >
            <TouchableOpacity style={styles.confirm} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textlog}>Come With Us</Text>
              <Icon
                name="arrow-forward"
                size={20}
                color="#fff"
                style={{ top: 15, right: 15 }}
              />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Animatable.View>
    </View>
  )
}

export default Loading;

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
    height: 450,
  },

  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',

  },

  footer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,

  },

  logo: {
    width: '100%',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4364f7',

  },

  button: {
    alignItems: 'flex-end',
    marginTop: 30,

  },

  confirm: {
    flexDirection: 'row',
    borderRadius: 20,
    width: '38%',

  },

  textlog: {
    borderRadius: 50,
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 25,

  }
})