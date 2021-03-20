import React from 'react';
 import {
   StyleSheet,
   View,
   Image,
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

 import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
 import Icon from 'react-native-vector-icons/Ionicons';
 import { AuthContext } from '../components/context';

 export function DrawerTab(props) {

  const { logOut } = React.useContext(AuthContext);

     return (
         <View style={{flex:1,}}>
             <DrawerContentScrollView {...props}>
                 <View style={styles.drawerContent}>
                     <View style={styles.userInfo}>
                         <View style={{flexDirection:'row', marginTop:15,}}>
                             <Avatar.Image
                               source={{
                                   uri:'https://www.google.com.vn/url?sa=i&url=https%3A%2F%2Fkbizoom.com%2Fred-velvet-revealed-their-comeback-teaser-images-of-joy-staying-elegant-with-a-crown&psig=AOvVaw338Ud7N_AP0izWahc5PnCv&ust=1616173295820000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKD1ifWouu8CFQAAAAAdAAAAABAR'
                               }}
                               size={50}
                               />   
                             <View style={{marginLeft:15}}>
                                 <Title style={styles.title}>Thùy Nguyễn</Title>
                             </View>                          
                         </View>
                     </View>
                     <Drawer.Section style={styles.menuTab}>
                        <DrawerItem
                          icon={({color, size}) => (
                        <Icon 
                          name="create-outline"
                          color={color}
                          size={size}
                        />
                        )}
                          label="Appointment"
                          onPress={() => {}}
                        />

                        <DrawerItem
                          icon={({color, size}) => (
                        <Icon 
                          name="notifications-outline"
                          color={color}
                          size={size}
                        />
                        )}
                          label="Notification"
                          onPress={() => {}}
                        />

                        <DrawerItem
                          icon={({color, size}) => (
                        <Icon 
                          name="settings-outline"
                          color={color}
                          size={size}
                        />
                        )}
                          label="Settings"
                          onPress={() => {}}
                        />

                        <DrawerItem
                          icon={({color, size}) => (
                        <Icon 
                          name="restaurant-outline"
                          color={color}
                          size={size}
                        />
                        )}
                          label="Daily menu"
                          onPress={() => {}}
                        /> 

             </Drawer.Section>
                 </View>

             </DrawerContentScrollView>
             <Drawer.Section style={styles.bottomDrawer}>
                 <DrawerItem
                   icon={({color, size}) => (
                       <Icon 
                        name="exit-outline"
                        color={color}
                        size={size}
                       />
                   )}
                   label="Log out"
                   onPress={() => {logOut()}}
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
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    menuTab: {
      marginTop: 15,
    },
    bottomDrawer: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
  });

