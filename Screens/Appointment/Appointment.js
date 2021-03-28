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
 import AppItem from './AppItem';
 import { fetchAppointment } from '../../services/appointment';

 const Appointment = (props) => {

  

   // const [showModal, setShowModal] = useState(false);
   // const [chooseData, setChooseData] = useState(false);

   // const changeModal = (bool) => {
   //    setShowModal(bool)
   // }

   // const setData = (data) => {
   //    setChooseData(data)
   // }

   const [appointment, SetAppointment] = useState([]);

    useEffect(() => {
        async function getAppointment() {
            const res = await fetchAppointment();
            SetAppointment(res);
        }

        getAppointment();
    }, [])

    const renderItem = ({ item }) => (
        <AppItem data={item} />
    );
     return(
        <View style={styles.container}>
           <View style={styles.header}>
           <FlatList
                data={appointment}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                
            />
            
           </View>
           {/* <View style={styles.footer}>
            <TouchableOpacity style={styles.roundButton1} onPress={() => changeModal(true)}>
               <Feather
                name="plus"
                size={30}
                color='#fff'
               />
            </TouchableOpacity>
            <Modal
             transparent={true}
             animationType="fade"
             visible={showModal}
             nRequestClose={() => changeModal(false)}
            >
             <AddModal changeModal={changeModal} setData={setData} />
            </Modal>
           </View> */}
        </View>
     )
     
 }

 export default Appointment;

 const styles = StyleSheet.create ({
    container: {
      flex:1
    },

    header: {
       flex:2,
       
    },
    roundButton1: {
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: '#1995ad',
      
    },

    footer: {
       flex:1,
       alignItems:'flex-end',
       justifyContent:'flex-start',
       top:'20%',
       right:20,

    },

    item: { 
       padding:30,
       marginTop:20,
       marginLeft:20,
       width:'90%',
       borderBottomWidth:1,

    },

 })