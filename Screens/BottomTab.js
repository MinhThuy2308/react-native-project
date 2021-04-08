import React from 'react';
import {
   StyleSheet,
   View,
   Text,
   Image
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './Home/Homepage';
import Profile from './Profile';
import VideoScreen from './Video/VideoScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProStack = createStackNavigator();
const VideoStack = createStackNavigator();


const BottomTab = (props) => {
    return (
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#4364f7' }}
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
        component={VideoStackScreen}
        options={{
          tabBarLabel: 'Video',
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
      <HomeStack.Navigator >
        <HomeStack.Screen name="Homepage" component={Homepage} options={{
            headerShown:false
          }}/>
          
      </HomeStack.Navigator>
    )
     
  };
  
  const ProStackScreen = ({navigation}) => {
    return(
      <ProStack.Navigator >
        <ProStack.Screen name="Profile" component={Profile} options={{
            headerShown:false
          }}
         />
      </ProStack.Navigator>
    )
     
  };

  const VideoStackScreen = ({navigation}) => {
    return(
      <VideoStack.Navigator >
        <VideoStack.Screen name="Video" component={VideoScreen} options={{
            headerShown:false
          }}
         />
      </VideoStack.Navigator>
    )
     
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
  
    },
  
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 550,
    },
  
  })

 