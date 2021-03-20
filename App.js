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
   Image,
   ActivityIndicator
 } from 'react-native';


import { DrawerTab } from './Screens/DrawerTab';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Loading from './Screens/Loading';
import LoginScreen from './Screens/LoginScreen';
import Register from './Screens/Register';
import BottomTab from './Screens/BottomTab';
import RootStackScreen from './Screens/RootStackScreen';
import { useEffect } from 'react';
import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-community/async-storage';



const Drawer = createDrawerNavigator();



 const App = () => {
  //  const [isLoading, setIsLoading] = React.useState(true);
  //  const [userToken, setUserToken] = React.useState(null);

  const initialLoginState  = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type) {
      case 'Retrieve_Token' :
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'Login' :
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'Logout' :
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'Register' :
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

   const authContext = React.useMemo(() => ({
    logIn: async (foundUser) => {
      // setUserToken('minhthuy');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
        try{
          userToken = 'thuy';
          await AsyncStorage.setItem('userToken', userToken)
        } catch(e) {
          console.log(e);
        }
      // console.log('user token: ', userToken)
      dispatch({ type: 'Login', id: userName, token: userToken });
    },
    register: () => {
      // setUserToken('minhthuy');
      // setIsLoading(false);
    },
    logOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try{
        await AsyncStorage.removeItem('userToken');
      }catch(e) {
        console.log(e);
      }
      dispatch({ type: 'Logout' });
    },
   }), []);

   useEffect(() => {
     setTimeout(async() => {
      //  setIsLoading(false);
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken');
      }catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken)
      dispatch({ type: 'Register', token: userToken });
     }, 1000);
   }, []);

   if( loginState.isLoading ) {
     return(
       <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
         <ActivityIndicator size="large" />
       </View>
     );
   }
   
   return (
     <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { loginState.userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerTab {...props} />}>
            <Drawer.Screen name="Homepage" component={BottomTab} />
          </Drawer.Navigator> 

        )
      :
        <RootStackScreen />
      }
      </NavigationContainer>
     </AuthContext.Provider>
   );
  }


 
export default App;
 