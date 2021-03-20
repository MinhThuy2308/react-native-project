import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Loading from './Loading';
import LoginScreen from './LoginScreen';
import Register from './Register';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Loading" component={Loading}/>
        <RootStack.Screen name="Login" component={LoginScreen}/>
        <RootStack.Screen name="Register" component={Register}/>
    </RootStack.Navigator>
);

export default RootStackScreen;