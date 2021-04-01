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
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import BasicYoga from './Screens/Activity/BasicYoga';
import Loseweight from './Screens/Activity/Loseweight';
import Gainweight from './Screens/Activity/Gainweight';
import AdvancedYoga from './Screens/Activity/AdvancedYoga';
import ActivityDay from './Screens/Activity/Day';
import DayDetail from './Screens/Activity/Day/DayDetail';

const Drawer = createDrawerNavigator();

const App = () => {
  //  const [isLoading, setIsLoading] = React.useState(true);
  //  const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  // const initialRegisterState  = {
  //   isLoading: true,
  //   userName: null,
  //   passWord: null,

  //   userToken: null,
  // };

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
      const userName = foundUser.user.username;
      try {
        await AsyncStorage.setItem('userToken', userToken);
        await AsyncStorage.setItem('userName', userName);
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken)
      dispatch({ type: 'Login', id: userName, token: userToken });
    },
    reGister: async () => {

      // setUserToken('minhthuy');
      // setIsLoading(false);
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
        {loginState.userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerTab {...props} />}>
            <Drawer.Screen name="Homepage" component={BottomTab} />
            <Drawer.Screen name="Appointment" component={AppointStack} />
            <Drawer.Screen name="Menu" component={MenuStack} />
            <Drawer.Screen name="Activity" component={ActivityStack} />
            <Drawer.Screen name="Basic" component={BasicStack} />
            <Drawer.Screen name="LoseWeight" component={LoseStack} />
            <Drawer.Screen name="GainWeight" component={GainStack} />
            <Drawer.Screen name="Advanced" component={AdvancedStack} />
            <Drawer.Screen name="ActivityDay" component={ActivityDayStack} />
            <Drawer.Screen name="Detail" component={DetailStack} />
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
function AppointStack({ navigation }) {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1995ad',

      },
      headerTintColor: '#f1f1f2',
    }}>
      <Stack.Screen name="Appointment" component={Appointment} options={{
        headerLeft: () => (
          <Icon.Button name="arrow-back"
            size={30}
            backgroundColor="#1995ad"
            onPress={() => navigation.goBack()}>
          </Icon.Button>
        ),
      }} />


    </Stack.Navigator>
  );
}

function MenuStack({ navigation }) {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1995ad',

      },
      headerTintColor: '#f1f1f2',
    }}>
      <Stack.Screen name="Daily menu" component={Menu} options={{
        headerLeft: () => (
          <Icon.Button name="arrow-back"
            size={30}
            backgroundColor="#1995ad"
            onPress={() => navigation.goBack()}>
          </Icon.Button>
        ),
      }} />


    </Stack.Navigator>
  );
}

function ActivityDayStack({ navigation, route }) {
  console.log('ActivityDayStack', route)
  return (
    <Stack.Navigator screenOptions={
      {
      headerStyle: {
        backgroundColor: '#1995ad',

      },
      headerTintColor: '#f1f1f2',
      
    }}>
      <Stack.Screen name="Day" component={ActivityDay} options={({ route }) => ({
    title: route.params.category
  })} />
    </Stack.Navigator>
  );
}

function DetailStack({ navigation }) {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1995ad',

      },
      headerTintColor: '#f1f1f2',
    }}>
      <Stack.Screen name="Detail" component={DayDetail} options={
        ({ route }) => ({ title: route.params.productTitle }),
        {
          headerLeft: () => (
            <Icon.Button name="arrow-back"
              size={30}
              backgroundColor="#1995ad"
              onPress={() => navigation.goBack()}>
            </Icon.Button>
          ),
        }} />
    </Stack.Navigator>
  );
}

function ActivityStack({ navigation }) {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1995ad',

      },
      headerTintColor: '#f1f1f2',
    }}>
      <Stack.Screen name="Activity" component={Activity} options={
        ({ route }) => ({ title: route.params.productTitle }),
        {
          headerLeft: () => (
            <Icon.Button name="arrow-back"
              size={30}
              backgroundColor="#1995ad"
              onPress={() => navigation.goBack()}>
            </Icon.Button>
          ),
        }} />
    </Stack.Navigator>
  );
}

function BasicStack({ navigation }) {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1995ad',

      },
      headerTintColor: '#f1f1f2',
    }}>
      <Stack.Screen name="Yoga" component={BasicYoga} options={
        ({ route }) => ({ title: route.params.productTitle }),
        {
          headerLeft: () => (
            <Icon.Button name="arrow-back"
              size={30}
              backgroundColor="#1995ad"
              onPress={() => navigation.goBack()}>
            </Icon.Button>
          ),
        }} />
    </Stack.Navigator>
  );
}

function LoseStack({ navigation }) {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1995ad',

      },
      headerTintColor: '#f1f1f2',
    }}>
      <Stack.Screen name="Lose Weight" component={Loseweight} options={{
        headerLeft: () => (
          <Icon.Button name="arrow-back"
            size={30}
            backgroundColor="#1995ad"
            onPress={() => navigation.goBack()}>
          </Icon.Button>
        ),
      }} />


    </Stack.Navigator>
  );
}

function GainStack({ navigation }) {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1995ad',

      },
      headerTintColor: '#f1f1f2',
    }}>
      <Stack.Screen name="Gain Weight" component={Gainweight} options={{
        headerLeft: () => (
          <Icon.Button name="arrow-back"
            size={30}
            backgroundColor="#1995ad"
            onPress={() => navigation.goBack()}>
          </Icon.Button>
        ),
      }} />


    </Stack.Navigator>
  );
}

function AdvancedStack({ navigation }) {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#1995ad',

      },
      headerTintColor: '#f1f1f2',
    }}>
      <Stack.Screen name="Advanced Yoga" component={AdvancedYoga} options={{
        headerLeft: () => (
          <Icon.Button name="arrow-back"
            size={30}
            backgroundColor="#1995ad"
            onPress={() => navigation.goBack()}>
          </Icon.Button>
        ),
      }} />


    </Stack.Navigator>
  );
}






export default App;
