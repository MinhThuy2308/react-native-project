/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   StyleSheet,
   View,
   Text,
   Image
 } from 'react-native';

import { DrawerTab } from './components/Screens/DrawerTab';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Loading from './components/Screens/Loading';
import LoginScreen from './components/Screens/LoginScreen';
import Register from './components/Screens/Register';
import BottomTab from './components/Screens/BottomTab';



const Drawer = createDrawerNavigator();



 const App = () => {
   
   return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerTab {...props} />}>
          <Drawer.Screen name="Homepage" component={BottomTab} />
          {/* <Drawer.Screen name="Profile" component={ProStackScreen} /> */}
        </Drawer.Navigator>

        {/* <Stack.Navigator>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator> */}
      </NavigationContainer>
    
   );
  }

  

 
export default App;
 