/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   ImageBackground,
 } from 'react-native';
 
 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

import { NativeRouter, Route, Link } from "react-router-native";

 
import HomeScreen from './components/HomeScreen/home';
import LoginScreen from './components/LoginScreen/login';
 
 
 const App = () => {
   
   return (
    <NativeRouter>
      <View style={styles.container}>        
        <StatusBar style="auto"/>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
      </View>
     </NativeRouter>
   );
  }
 
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#61AAFD',
      padding: 10,
      paddingTop: 35,
      height: '100%',
    },
  });
 
export default App;
 