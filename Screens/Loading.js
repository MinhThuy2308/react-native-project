import React from 'react';
import {
   StyleSheet,
   View,
   Text,
   Image,
   TouchableOpacity,
 } from 'react-native';
import mainLogo from '../assets/images/background.jpg';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


 const Loading = ({navigation}) => {
    return (
        <View style={styles.container}>
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
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.textlog}>Come With Us</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>

      </View>
    )
  }
  
  export default Loading;

  const styles = StyleSheet.create ({
      container: {
          flex:1,
          backgroundColor:'#4862D5',
      },

      header: {
          flex:2,
          justifyContent:'center',
          alignItems:'center',

      },

      footer: {
          flex:1,
          backgroundColor:'#ffffff',
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
          paddingVertical:50,
          paddingHorizontal: 30,

      },

      logo: {
          width:'100%',
      },

      title: {
          fontSize:30,
          fontWeight:'bold',
          color:'#4862D5',

      },

      button: {
        alignItems: 'flex-end',
        marginTop: 30,
        
      },

      textlog: {
        backgroundColor:'#4862D5',
        borderRadius: 50,
        flexDirection: 'row',
        color: '#fff',
        fontWeight: 'bold',
        flexDirection: 'row',
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:25,
        paddingRight:25,
        
      }
  })