/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {
   StyleSheet,
   View,
   Text,
   Image,
   ActivityIndicator,
   Button
 } from 'react-native';


import { DrawerTab } from './Screens/DrawerTab';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './Screens/BottomTab';
import RootStackScreen from './Screens/RootStackScreen';
import Appointment from './Screens/Appointment/Appointment';
import { useEffect } from 'react';
import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import Menu from './Screens/Menu/Menu';
import Activity from './Screens/Activity/Activity';

const Drawer = createDrawerNavigator();

 const App = () => {
  //  const [isLoading, setIsLoading] = React.useState(true);
  //  const [userToken, setUserToken] = React.useState(null);

  const initialLoginState  = {
    isLoading: true,
    eMail: null,
    userToken: null,
  };

  // const initialRegisterState  = {
  //   isLoading: true,
  //   userName: null,
  //   passWord: null,
    
  //   userToken: null,
  // };

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
          eMail: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'Logout' :
        return {
          ...prevState,
          eMail: null,
          userToken: null,
          isLoading: false,
        };
      case 'Register' :
        return {
          ...prevState,
          eMail: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };


  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  // const [registerState, dispatch] = React.useReducer(registerReducer, initialRegisterState)

   const authContext = React.useMemo(() => ({
    logIn: async (foundUser) => {
      // setUserToken('minhthuy');
      // setIsLoading(false);
      console.log('foundUser', foundUser);
      const userToken = String(foundUser.jwt);
      const eMail = foundUser.user.email;
        try{
          await AsyncStorage.setItem('userToken', userToken);
          await AsyncStorage.setItem('eMail', eMail);
        } catch(e) {
          console.log(e);
        }
      // console.log('user token: ', userToken)
      dispatch({ type: 'Login', id: eMail, token: userToken });
    },
    reGister: async () => {
     
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

  //  if( registerState.isLoading ) {
  //   return(
  //     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }
   
   return (
     <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { loginState.userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerTab {...props} />}>
            <Drawer.Screen name="Homepage" component={BottomTab} />
            <Drawer.Screen name="Appointment" component={AppointStack} />
            <Drawer.Screen name="Menu" component={MenuStack} />
            <Drawer.Screen name="Activity" component={ActivityStack} />
          </Drawer.Navigator> 
        )
      :
        <RootStackScreen />
      }
      </NavigationContainer>
     </AuthContext.Provider>

   );
  }
  const Stack = createStackNavigator();
function AppointStack({navigation}) {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor:'#1995ad',
        
      },
      headerTintColor:'#f1f1f2',
    }}>
      <Stack.Screen name="Appointment" component={Appointment} options={{
            headerLeft: () => (
              <Icon.Button name="arrow-back" 
                           size={30} 
                           backgroundColor="#1995ad" 
                           onPress={() => navigation.goBack()}>
              </Icon.Button>
            ),
          }}/>

          
    </Stack.Navigator>
  );
}

function MenuStack({navigation}) {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor:'#1995ad',
        
      },
      headerTintColor:'#f1f1f2',
    }}>
      <Stack.Screen name="Daily menu" component={Menu} options={{
            headerLeft: () => (
              <Icon.Button name="arrow-back" 
                           size={30} 
                           backgroundColor="#1995ad" 
                           onPress={() => navigation.goBack()}>
              </Icon.Button>
            ),
          }}/>

          
    </Stack.Navigator>
  );
}

function ActivityStack({navigation}) {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor:'#1995ad',
        
      },
      headerTintColor:'#f1f1f2',
    }}>
      <Stack.Screen name="Activity" component={Activity} options={{
            headerLeft: () => (
              <Icon.Button name="arrow-back" 
                           size={30} 
                           backgroundColor="#1995ad" 
                           onPress={() => navigation.goBack()}>
              </Icon.Button>
            ),
          }}/>

          
    </Stack.Navigator>
  );
}

  



 
export default App;
 