import React from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity,
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DayItem = ({data }) => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: `http://10.0.2.2:1337${data.image.formats.medium.url}`}}
      style={styles.bg}
      imageStyle={{ borderRadius: 10 }}
    >
      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('ActivityDay', {
        activity: 1,
        category: 1,
      })}>
        <Text style={styles.text}>{data.name}</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default DayItem;

const styles = StyleSheet.create({
    bg: {
      width: 350,
      height: 50,
      resizeMode: "stretch",
      marginTop: 30,
    },
  
    text: {
      fontSize: 17, 
      color: '#fff',
    },
  
    link: {
      flexDirection: 'row',
      paddingTop: 14,
      paddingBottom: 13,
      justifyContent:'center'
      
    }
  })