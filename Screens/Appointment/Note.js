import React, { useState, useEffect } from 'react';
import {
   StyleSheet,
   View,
   Text,
   Image,
   Button,
   FlatList,
   Modal,
   TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AddModal from './AddModal';
import NoteItem from './AppItem/index';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { fetchNoteByUser } from '../../services/appointment';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';


const Note = ({ data }) => {
   const navigation = useNavigation();
   const route = useRoute();
   const [userId, setUserId] = useState('');
   const [note, setNote] = useState([]);
   const [showModal, setShowModal] = useState(false);
   const [chooseData, setChooseData] = useState(false);

   useEffect(() => {
      async function getUserId() {
         const value = await AsyncStorage.getItem('userId');
         setUserId(value);
      }
      async function getNote() {
         const value = await fetchNoteByUser({
            userId: parseInt(userId),
         });
         setNote(value);
      }
      getUserId();
      getNote();
   }, [userId, route]);

   const changeModal = (bool) => {
      setShowModal(bool)
   }

   const setData = (data) => {
      setChooseData(data)
   }

   const renderItem = ({ item }) => (
      <NoteItem data={item} />
   );

   return (
      <View style={styles.container}>
         <LinearGradient
            colors={['#4364f7', '#fff', 'transparent']}
            style={styles.background}
         />
         <View style={styles.header}>
            <View style={{ top: 40, left: 8 }}>
               <TouchableOpacity >
                  <Icon
                     name="menu-outline"
                     size={30}
                     color="#fff"
                     backgroundColor="#61b1fc"
                     onPress={() => navigation.openDrawer()}
                  />
               </TouchableOpacity>
            </View>

            <View style={styles.footer}>

               <TouchableOpacity style={styles.roundButton1} onPress={() => changeModal(true)}>
                  <Feather
                     name="plus"
                     size={35}
                     color='#fff'
                  />
               </TouchableOpacity>
               <Modal
                  transparent={true}
                  animationType="fade"
                  visible={showModal}
                  nRequestClose={() => changeModal(false)}
               >
                  <AddModal changeModal={changeModal} userId={userId} setData={setData} />
               </Modal>
            </View>
         </View>

         <View style={styles.content}>
            <View>
               {
                  note.length > 0 ? <FlatList
                     data={note}
                     renderItem={renderItem}
                     keyExtractor={item => item.id.toString()}
                  /> : <View style={styles.item}>
                     <Text style={{ fontSize: 30, color: '#333' }}>No Data Show</Text>
                  </View>
               }
            </View>

         </View>

      </View>
   )
}

export default Note;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#4364f7',

   },

   item: {
      marginBottom: 40,
      padding: 10,

      justifyContent: "center",
      alignItems: "center",
   },

   content: {


   },

   background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 650,
   },

   roundButton1: {
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,

   },

   footer: {
      // flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      bottom: 10,


   },

})