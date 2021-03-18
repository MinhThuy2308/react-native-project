import React from 'react';
import {
   StyleSheet,
   View,
   Text,
   Image
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './Homepage';
import Profile from './Profile';
import VideoScreen from './VideoScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProStack = createStackNavigator();

const BottomTab = (props) => {
    return (
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FFFFFF"
      barStyle={{ backgroundColor: '#4862D5' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Videos"
        component={VideoScreen}
        options={{
          tabBarLabel: 'Videos',
          tabBarIcon: ({ color }) => (
            <Icon name="videocam" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

export default BottomTab;

const HomeStackScreen = ({navigation}) => {
    return (
      <HomeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor:'#4862D5',
          
        },
        headerTintColor:'#fff',
      }}>
        <HomeStack.Screen name="Homepage" component={Homepage} options={{
            headerLeft: () => (
              <Icon.Button name="menu-outline" 
                           size={30} 
                           backgroundColor="#4862D5" 
                           onPress={() => navigation.openDrawer()}>
              </Icon.Button>
            )
          }}/>
          
      </HomeStack.Navigator>
    )
     
  };
  
  const ProStackScreen = ({navigation}) => {
    return(
      <ProStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor:'#4862D5',
          
        },
        headerTintColor:'#fff',
      }}>
        <ProStack.Screen name="Profile" component={Profile} options={{
            headerLeft: () => (
              <Icon.Button name="menu-outline" 
                           size={30} 
                           backgroundColor="#4862D5" 
                           onPress={() => navigation.openDrawer()}>
              </Icon.Button>
            )
          }}
         />
      </ProStack.Navigator>
    )
     
  };