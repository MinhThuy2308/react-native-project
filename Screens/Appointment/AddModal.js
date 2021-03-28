import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useState } from 'react/cjs/react.development';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';





const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const AddModal = (props) => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);


  const onChange = (event, selectedDate) => {
    if (selectedDate === undefined) {
      // dismissedAction
      return;
    }

    setShow(Platform.OS === 'ios');
    const currentDate = selectedDate || date;

    if (event.type == "set") {          //ok button
      setDate(currentDate);
    } else {                                    //cancel Button
      return null
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const closeModal = (bool, data) => {
    props.changeModal(bool);
    props.setData(data);
  }
  return (
    <View style={styles.container}>
      <View style={[styles.modal, { width: Width - 20, height: Height / 2 }]}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>Make a schedule</Text>

        <View style={styles.action}>
          <Feather
            name="edit"
            size={25}
            style={styles.icon}
          />
          <TextInput
            placeholder="Workout"
            style={styles.textInput}
            autoCapitalize="none"
          >
          </TextInput>
        </View>

        <View style={{marginTop:10}}>
          <TouchableOpacity
            onPress={() => showDatepicker()}
          >
            <View style={styles.action_input}>
              <Feather
                name="calendar"
                size={25}
                style={styles.icon}
              />
              <Text
                placeholder="Date"
                style={styles.textInput}
                autoCapitalize="none"
                type={date}
              >
              </Text>
            </View>
          </TouchableOpacity>
        </View>



        <View style={{marginTop:10}}>
          <TouchableOpacity
            onPress={() => showTimepicker()}
          >
            <View style={styles.action_input}>
              <Feather
                name="clock"
                size={25}
                style={styles.icon}
              />
              <Text
                placeholder="Date"
                style={styles.textInput}
                autoCapitalize="none"
                type={date}
              >
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <View style={styles.button}>
          <TouchableOpacity style={styles.click} onPress={() => closeModal(false, 'Cancel')}>
            <Text style={[styles.text, { color: '#4862D5' }]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.click}>
            <Text style={[styles.text, { color: '#4862D5' }]}>Save</Text>
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
    width: '100%'
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
    color: '#4cb5f5',

  },

  textInput: {
    paddingLeft: 5,

  },

  action: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#4cb5f5',
    borderRadius: 5,
    paddingBottom: 5,
    paddingTop: 5,
    width: '90%',
    paddingLeft: 10,
    marginLeft: 20,
  },

  action_input: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#4cb5f5',
    borderRadius: 5,
    paddingBottom: 5,
    paddingTop: 5,
    width: '90%',
    paddingLeft: 10,
    marginLeft: 20,
  },
})