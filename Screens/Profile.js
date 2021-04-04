import React, { useState, useEffect, useRef } from 'react';
import {
   StyleSheet,
   View,
   Text,
   Image,
   Button,
   ScrollView,
   TouchableOpacity,
   ImageBackground,
   Dimensions,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from './Profile/images/logo1.jpg';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import * as ImagePicker from 'expo-image-picker';

const Profile = (props) => {
   const [useName, setUserName] = useState([]);
   const [userBMI, setUserBMI] = useState('');
   const [image, setImage] = useState(null);

   useEffect(() => {
      (async () => {
         if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
               alert('Sorry, we need camera roll permissions to make this work!');
            }
         }
      })();
   }, []);

   // useEffect(() => {
   //    (async () => {
   //       if (Platform.OS !== 'web') {
   //          const { status } = await ImagePicker.requestCameraPermissionsAsync();
   //          if (status !== 'granted') {
   //             alert('Sorry, we need camera roll permissions to make this work!');
   //          }
   //       }
   //    })();
   // }, []);

   const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
         setImage(result.uri);
      }
   };

   const takeImage = async () => {
      let result = await ImagePicker.launchCameraAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
         setImage(result.uri);
      }
   };

   useEffect(() => {
      async function retrieveData() {
         const value = await AsyncStorage.getItem('userName');
         setUserName(value);
      }
      retrieveData();
   }, []);

   

   useEffect(() => {
     async function retrieveData() {
       const userBMI = await AsyncStorage.getItem('userBMI');
       setUserBMI(userBMI);
     }
     retrieveData();
   }, []);

   return (
      <View style={{ flex: 1 }}>
         <View style={{ alignItems: 'center' }}>

            <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
               <ImageBackground
                  source={{ uri: image }}
                  style={{ width: 140, height: 140, }}
                  imageStyle={{ borderRadius: 100 }}
               >
               </ImageBackground>
            </View>


            <Text style={{ fontSize: 30, marginTop: 10, }}>{useName}</Text>
            <View style={styles.button}>
               <TouchableOpacity style={styles.click} onPress={takeImage}>
                  <Icon
                     name="camera"
                     size={25}
                     color="#333"
                  />
                  <Text style={{ color: '#1995ad', marginLeft: 5, fontSize: 16 }}>Take Photo</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.click} onPress={pickImage}>
                  <Icon
                     name="image"
                     size={25}
                     color="#333"
                  />
                  <Text style={{ color: '#1995ad', marginLeft: 5, fontSize: 16 }}>Choose from library</Text>
               </TouchableOpacity>
            </View>

         </View>

         <View style={styles.bmi}>
            <Text style={styles.title}>Your BMI: </Text>
            <Text style={styles.result}>{userBMI}</Text>
         </View>

         <View style={styles.chart}>
            <View style={styles.blue}>
               <Text style={{top:45, right:5}}>15</Text>
            </View>
            <View style={styles.green}>
               <Text style={{top:45, right:10}}>18.5</Text>
            </View>
            <View style={styles.yellow}>
            <Text style={{top:45, right:10}}>25</Text>
            </View>
            <View style={styles.orange}>
            <Text style={{top:45, right:10}}>30</Text>
            </View>
            <View style={styles.red}>
            <Text style={{top:45, right:10}}>35+</Text>
            </View>
            
         </View>

      </View>
   )

}

export default Profile;

const styles = StyleSheet.create({

   button: {
      alignItems: 'center',
   },

   click: {
      marginTop: 5,
      borderRadius: 5,
      alignItems: 'center',
      flexDirection: 'row',

   },

   bmi: {
      flexDirection:'row',
      marginTop:30,
      marginLeft:30
   },
   title: {
      fontSize:23,
      fontWeight:'bold',
   },

   result: {
      fontSize:20,
      color:'red',
      fontWeight:'bold',
      top:2,
   },
   chart: {
      marginTop:30,
      marginLeft:17,
      flexDirection:'row',
      justifyContent:'space-between',
      flex:1,
      width:'92%'
   },

   blue: {
      flexBasis:'auto',
      flexGrow:0,
      flexShrink:1,
      backgroundColor:'#40639A',
      width:'20%',
      height:'20%'
   },

   green: { 
      flexBasis:80,
      flexGrow:1,
      flexShrink:1,
      backgroundColor:'#2CD42E',
      // width:'20%',
      height:'20%'
   },

   yellow: { 
      flexBasis:30,
      flexGrow:2,
      flexShrink:0,
      backgroundColor:'#C8E630',
      height:'20%'
   },

   orange: { 
      flexBasis:30,
      flexGrow:2,
      flexShrink:0,
      backgroundColor:'#FFA722',
      height:'20%'
   },

   red: { 
      flexBasis:30,
      flexGrow:2,
      flexShrink:0,
      backgroundColor:'#FF0D00',
      height:'20%'
   },

   




})

