import React from 'react';
import {
   StyleSheet,
   View,
   Text,
   Image,
   Button
 } from 'react-native';

 const Homepage = ({navigation}) => {
     return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Go to profile"
      />
    </View>
     )
 }

 export default Homepage;

//  const styles = StyleSheet.create({
//      container: { 
//          flex:1,
//          alignItems:'center',
//          justifyContent:'center',
//      }
//  })