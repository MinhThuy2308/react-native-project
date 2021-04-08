import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, TouchableOpacity } from 'react-native'

export const NAVIGATOR_SCREEN_OPTIONS = {
  // return (
  //   <View style={styles.header}>
  //     <LinearGradient
  //       colors={['#4364f7', '#61b1fc', 'transparent']}
  //       style={styles.background}
  //     />
  //     <View style={{ top: 40, left: 8 }}>
  //       <TouchableOpacity >
  //         <Icon
  //           name="menu-outline"
  //           size={30}
  //           color="#fff"
  //           backgroundColor="#61b1fc"
  //           onPress={() => navigation.openDrawer()}
  //         />
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // )
  headerStyle: {
    backgroundColor: '#4364f7',

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
    <View style={styles.header}>
    {/* <LinearGradient
      colors={['#4364f7', '#61b1fc', 'transparent']}
      style={styles.background}
    /> */}
    <View style={{ left: 8 }}>
      <TouchableOpacity >
        <Icon
          name="menu-outline"
          size={30}
          color="#fff"
          backgroundColor="#4364f7"
          onPress={() => navigation.openDrawer()}
        />
      </TouchableOpacity>
    </View>
  </View>

  )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 200,
  },

  // header: {
  //   flex: 1,
  //   backgroundColor: '#61b1fc',

  // },
})