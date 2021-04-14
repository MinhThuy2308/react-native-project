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
import { LinearGradient } from 'expo-linear-gradient';

const Profile = ({ navigation }) => {
   const [useName, setUserName] = useState([]);
   const [userBMI, setUserBMI] = useState('');
   const [userId, setUserId] = useState();
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

   const changetextColor = () => {
      if (userBMI < 18.5) {
        return '#40639A';
      } else if (userBMI < 25) {
        return '#2CD42E';
      } else if (userBMI < 30) {
        return '#DEDE00';
      } else if (userBMI < 35) {
        return '#FFA722';
      } else {
        return '#FF0D00';
      }
    }

   return (
      <View style={{ flex: 1 }}>
         <View style={styles.header}>
            <LinearGradient
               colors={['#4364f7', '#fff', 'transparent']}
               style={styles.background}
            />
            <View style={{ top: 40, left: 8 }}>
               <TouchableOpacity >
                  <Icon
                     name="menu-outline"
                     size={30}
                     color="#fff"
                     backgroundColor="#61b1fc"
                     onPress={() => navigation.openDrawer()}
                  />
               </TouchableOpacity>
            </View>
         </View>
         <View style={styles.footer}>
            <View style={{ alignItems: 'center', bottom:60 }}>

               <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 100, bottom: 70 }}>
                  <ImageBackground
                     source={{ uri: image }}
                     style={{ width: 140, height: 140, }}
                     imageStyle={{ borderRadius: 100 }}
                  >
                  </ImageBackground>
               </View>

               <Text style={{ fontSize: 30, top: -60 }}>{useName}</Text>
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
               <Text style={{color: changetextColor(userBMI),fontSize: 20,fontWeight: 'bold',top: 2,}}>{userBMI}</Text>
            </View>

            <View style={styles.chart}>
               <View style={styles.blue}>
                  <Text style={{ top: 45, right: 5 }}>15</Text>
               </View>
               <View style={styles.green}>
                  <Text style={{ top: 45, right: 10 }}>18.5</Text>
               </View>
               <View style={styles.yellow}>
                  <Text style={{ top: 45, right: 10 }}>25</Text>
               </View>
               <View style={styles.orange}>
                  <Text style={{ top: 45, right: 10 }}>30</Text>
               </View>
               <View style={styles.red}>
                  <Text style={{ top: 45, right: 10 }}>35+</Text>
               </View>

            </View>
         </View>

      </View>
   )

}

export default Profile;

const styles = StyleSheet.create({

   button: {
      alignItems: 'center',
      top: -50
   },

   click: {
      marginTop: 5,
      borderRadius: 5,
      alignItems: 'center',
      flexDirection: 'row',

   },

   header: {
      flex: 1,
      backgroundColor: '#61b1fc',

   },

   background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 550,
   },

   footer: {
      flex: 2,
      backgroundColor: '#ffffff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical:50

   },

   bmi: {
      flexDirection: 'row',
      marginTop: -70,
      marginLeft: 30
   },
   title: {
      fontSize: 23,
      fontWeight: 'bold',
   },

   chart: {
      marginTop: 20,
      marginLeft: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
      width: '92%'
   },

   blue: {
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1,
      backgroundColor: '#40639A',
      width: '20%',
      height: '25%'
   },

   green: {
      flexBasis: 80,
      flexGrow: 1,
      flexShrink: 1,
      backgroundColor: '#2CD42E',
      // width:'20%',
      height: '25%'
   },

   yellow: {
      flexBasis: 30,
      flexGrow: 2,
      flexShrink: 0,
      backgroundColor: '#DEDE00',
      height: '25%'
   },

   orange: {
      flexBasis: 30,
      flexGrow: 2,
      flexShrink: 0,
      backgroundColor: '#FFA722',
      height: '25%'
   },

   red: {
      flexBasis: 30,
      flexGrow: 2,
      flexShrink: 0,
      backgroundColor: '#FF0D00',
      height: '25%'
   },






})

