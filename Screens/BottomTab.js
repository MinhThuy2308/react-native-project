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



const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProStack = createStackNavigator();
const VideoStack = createStackNavigator();


const BottomTab = (props) => {
    return (
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f1f1f2"
      barStyle={{ backgroundColor: '#1995ad' }}
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
      <HomeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor:'#1995ad',
          
        },
        headerTintColor:'#f1f1f2',
      }}>
        <HomeStack.Screen name="Homepage" component={Homepage} options={{
            headerLeft: () => (
              <Icon.Button name="menu-outline" 
                           size={30} 
                           backgroundColor="#1995ad" 
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
          backgroundColor:'#1995ad',
          
        },
        headerTintColor:'#f1f1f2',
      }}>
        <ProStack.Screen name="Profile" component={Profile} options={{
            headerLeft: () => (
              <Icon.Button name="menu-outline" 
                           size={30} 
                           backgroundColor="#1995ad" 
                           onPress={() => navigation.openDrawer()}>
              </Icon.Button>
            )
          }}
         />
      </ProStack.Navigator>
    )
     
  };

  const VideoStackScreen = ({navigation}) => {
    return(
      <VideoStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor:'#1995ad',
          
        },
        headerTintColor:'#f1f1f2',
      }}>
        <VideoStack.Screen name="Video" component={VideoScreen} options={{
            headerLeft: () => (
              <Icon.Button name="menu-outline" 
                           size={30} 
                           backgroundColor="#1995ad" 
                           onPress={() => navigation.openDrawer()}>
              </Icon.Button>
            )
          }}
         />
      </VideoStack.Navigator>
    )
     
  };

 