import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import { useState } from 'react/cjs/react.development';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { addNoteByUser } from '../../services/appointment';
import { useNavigation } from '@react-navigation/native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const AddModal = (props) => {
  const navigation = useNavigation();
  // const [textInputValue, setTextInputValue] = React.useState('');

  const [data, setData] = React.useState({
    title: '',
    content: '',
    check_textInputChange: true,
  });

  const handleTitle = (val) => {
    setData({
      ...data,
      title: val,
      check_textInputChange: true,
    })
  }

  const handleContent = (val) => {
    setData({
      ...data,
      content: val,
      check_textInputChange: true,
    })
  }

  const closeModal = (bool, data) => {
    props.changeModal(bool);
    props.setData(data);
  }

  const handleSubmit = async (title, content, userId) => {
    await addNoteByUser({
      title,
      content,
      user: userId,
    }).then(res => {
      Alert.alert('Successful');
      closeModal(false, 'Cancel');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Note' }],
      });
    })
  }

  return (
    <View style={styles.container}>
      <View style={[styles.modal, { width: Width - 20, height: Height / 1.2 }]}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop:20 }}>Note</Text>

        <View style={styles.item}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Title</Text>
          <View style={styles.action}>
            <Feather
              name="edit"
              size={25}
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              autoCapitalize="sentences"
              editable
              onChangeText={(val) => handleTitle(val)}

            >
            </TextInput>
          </View>
        </View>

        <View style={styles.item}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Note</Text>
          <View style={styles.action}>
            {/* <Feather
              name="edit"
              size={25}
              style={styles.icon}
            /> */}
            <TextInput
              style={{ height: 200 }}
              autoCapitalize="sentences"
              editable
              maxLength={2000}
              multiline={true}
              numberOfLines={10}
              placeholder="Type something"
              onChangeText={(val) => handleContent(val)}


            >
            </TextInput>
          </View>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.click} onPress={() => closeModal(false, 'Cancel')}>
            <Text style={[styles.text, { color: '#4862D5' }]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.click} onPress={() => { handleSubmit(data.title, data.content, props.userId) }}>
            <Text style={[styles.text, { color: '#4862D5' }]}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

}

export default AddModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',

  },

  modal: {
    borderRadius: 10,
    shadowRadius: 10,
    backgroundColor: 'white',

  },

  button: {
    flexDirection: 'row',
    width: '100%',
    top: '10%',
  },

  text: {
    marginTop: 30,
    fontSize: 15,
    fontWeight: 'bold',
  },

  click: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },

  icon: {
    color: '#4862D5',

  },

  textInput: {
    paddingLeft: 5,
    width: '90%',

  },

  item: {
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },

  action: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#4862D5',
    borderRadius: 5,
    paddingBottom: 5,
    paddingTop: 5,
    // width: '90%',
    // height:'60%',
    paddingLeft: 10,

  },
})