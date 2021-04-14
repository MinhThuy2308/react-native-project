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
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import Note from './Appointment/Note';


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProStack = createStackNavigator();
const NoteStack = createStackNavigator();


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
        name="Profile"
        component={ProStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Note"
        component={NoteStackScreen}
        options={{
          tabBarLabel: 'Note',
          tabBarIcon: ({ color }) => (
            <Material name="note-text-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab;

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Homepage" component={Homepage} options={{
        headerShown: false
      }} />

    </HomeStack.Navigator>
  )

};

const ProStackScreen = ({ navigation }) => {
  return (
    <ProStack.Navigator >
      <ProStack.Screen name="Profile" component={Profile} options={{
        headerShown: false
      }}
      />
    </ProStack.Navigator>
  )

};

const NoteStackScreen = ({ navigation }) => {
  return (
    <NoteStack.Navigator >
      <NoteStack.Screen name="Note" component={Note} options={{
        headerShown: false
      }}
      />
    </NoteStack.Navigator>
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

