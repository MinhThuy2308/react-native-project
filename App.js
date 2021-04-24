/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  
} from 'react-native';


import { DrawerTab } from './Screens/DrawerTab';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './Screens/BottomTab';
import RootStackScreen from './Screens/RootStackScreen';
import Info from './Screens/Info';
import ResultBMI from './Screens/BMI/ResultBMI';
import Note from './Screens/Appointment/Note';
import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-community/async-storage';
import Menu from './Screens/Menu/Menu';
import Activity from './Screens/Activity/Activity';
import BasicYoga from './Screens/Activity/BasicYoga';
import Loseweight from './Screens/Activity/Loseweight';
import Gainweight from './Screens/Activity/Gainweight';
import AdvancedYoga from './Screens/Activity/AdvancedYoga';
import ActivityDay from './Screens/Activity/Day/ActivityDay';
import ActivityDayDetail from './Screens/Activity/Day/ActivityDayDetail';
import FoodMenu from './Screens/Food/FoodMenu';
import List from './Screens/Food/List'


const Drawer = createDrawerNavigator();

const App = () => {
  //  const [isLoading, setIsLoading] = React.useState(true);
  //  const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'Retrieve_Token':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'Login':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'Logout':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'Register':
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
      const userToken = String(foundUser.jwt);
      const userName = foundUser.user.username;
      const userId = foundUser.user.id;
      const userBMI = foundUser.user.bmi ? foundUser.user.bmi : 0;

      console.log('Login uid', userId.toString());

      try {
        await AsyncStorage.setItem('userToken', userToken);
        await AsyncStorage.setItem('userName', userName);
        await AsyncStorage.setItem('userId', userId.toString());
        await AsyncStorage.setItem('userBMI', userBMI.toString());
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'Login', id: userName, token: userToken });
    },
    reGister: async (data) => {
      const userToken = String(data.jwt);
      const userName = data.user.username;
      try {
        await AsyncStorage.setItem('userToken', userToken);
        await AsyncStorage.setItem('userName', userName);
        await AsyncStorage.setItem('userBMI', 'USER_NEW_REGISTER');
      } catch (e) {
        console.log(e);
      }

      dispatch({ type: 'Login', id: userName, token: userToken });
    },
    logOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'Logout' });
    },
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      //  setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken)
      dispatch({ type: 'Register', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <>
            <Drawer.Navigator drawerContent={props => <DrawerTab {...props} />}>
              <Drawer.Screen name="Homepage" component={BottomTab} />
              <Drawer.Screen name="Note" component={Note} />
              <Drawer.Screen name="Menu" component={Menu} />
              <Drawer.Screen name="FoodMenu" component={FoodMenu} />
              <Drawer.Screen name="List" component={List} />
              <Drawer.Screen name="Activity" component={Activity} />
              <Drawer.Screen name="ActivityBasicYoga" component={BasicYoga} />
              <Drawer.Screen name="ActivityLoseWeight" component={Loseweight} />
              <Drawer.Screen name="ActivityGainWeight" component={Gainweight} />
              <Drawer.Screen name="ActivityAdvancedYoga" component={AdvancedYoga} />
              <Drawer.Screen name="ActivityDay" component={ActivityDay} />
              <Drawer.Screen name="ActivityDayDetail" component={ActivityDayDetail} />
              <Drawer.Screen name="Information" component={Info} />
              <Drawer.Screen name="Result" component={ResultBMI} />
            </Drawer.Navigator>
          </>
        )
          :
          <RootStackScreen />
        }
      </NavigationContainer>
    </AuthContext.Provider>

  );
}
const Stack = createStackNavigator();

export default App;
