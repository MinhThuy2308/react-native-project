import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Loading from './Loading';
import LoginScreen from './LoginScreen';
import Register from './Register';
import Info from './Info';
import ResultBMI from './BMI/ResultBMI';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Loading" component={Loading}/>
        <RootStack.Screen name="Login" component={LoginScreen}/>
        <RootStack.Screen name="Register" component={Register}/>
        <RootStack.Screen name="Information" component={Info}/>
        <RootStack.Screen name="Result" component={ResultBMI}/>
    </RootStack.Navigator>


);

export default RootStackScreen;