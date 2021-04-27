import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
} from 'react-native';

import {
  Avatar,
  Title,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Caption,

} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../components/context';
import AsyncStorage from '@react-native-community/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import backImage from '../assets/images/background.jpg';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Awesome from 'react-native-vector-icons/FontAwesome'

export function DrawerTab(props) {

  const { logOut } = React.useContext(AuthContext);
  const [useName, setUserName] = useState([]);

  useEffect(() => {
    async function retrieveData() {
      const useName = await AsyncStorage.getItem('userName');
      setUserName(useName);
    }
    retrieveData();
  }, []);

  return (
    <View style={{ flex: 1, }}>
      <LinearGradient
        colors={['#61b1fc', '#4364f7', 'transparent']}
        style={styles.background}
      />
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfo}>
            <View style={{ marginTop: 15, }}>
              <ImageBackground
                source={backImage}
                style={{ width: 300, height: 200 }}
                resizeMode="cover"
              />
            </View>
          </View>
          <Drawer.Section style={styles.menuTab}>
            <DrawerItem

              icon={({ color, size }) => (
                <Icon
                  name="home-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Homepage"
              onPress={() => { props.navigation.navigate('Homepage') }}
            />
            <DrawerItem

              icon={({ color, size }) => (
                <Material
                  name="note-text-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Note"
              onPress={() => { props.navigation.navigate('Note') }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Awesome
                  name="list-alt"
                  size={size}
                  color={color}
                />
              )}
              label="Favorite Food"
              onPress={() => { props.navigation.navigate('List') }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="restaurant-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Daily menu"
              onPress={() => { props.navigation.navigate('Menu') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="walk-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Activity"
              onPress={() => { props.navigation.navigate('Activity') }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="calculator-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Information"
              onPress={() => { props.navigation.navigate('Information') }}
            />
          </Drawer.Section>
        </View>

      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawer}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="exit-outline"
              color={color}
              size={size}
            />
          )}
          label="Log out"
          onPress={() => { logOut() }}
        />

      </Drawer.Section>

    </View>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,

  },
  userInfo: {
    bottom: 40
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  title__bmi: {
    fontSize: 14,
  },

  bottomDrawer: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
});

