import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const NAVIGATOR_SCREEN_OPTIONS = {
  headerStyle: {
    backgroundColor: '#1995ad',

  },
  headerTintColor: '#f1f1f2',
}

export const NavigatorHeaderLeft = ({ navigation }) => {
  return (
    <Icon.Button name="arrow-back"
      size={30}
      backgroundColor="#1995ad"
      onPress={() => navigation.goBack()}>
    </Icon.Button>
  )
}

export const NavigatorHeaderLeftDrawer = ({ navigation }) => {
  return (
    <Icon.Button name="menu-outline"
      size={30}
      backgroundColor="#1995ad"
      onPress={() => navigation.openDrawer()}>
    </Icon.Button>
  )
}