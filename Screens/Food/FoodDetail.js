import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  CheckBox
} from 'react-native';
import { fetchFoodDetail } from '../../services/menus';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import checkImage from '../../utils/checkImage';

function FoodDetail({ data }) {
  const [isSelected, setSelection] = useState(false);

  console.log('FoodDetail', data);
  return (
    <>
      <View >
        <View style={styles.card}>
          <View style={styles.item}>
            {
              data.image ? <ImageBackground
                source={{ uri: checkImage(data.image) }}
                style={styles.bg}
                imageStyle={{ borderRadius: 10 }}
              /> : <View></View>
            }
            <View style={{ padding: 5 }}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.desc}>{data.desc}</Text>
            </View>
            <View>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={{fontSize:20, paddingLeft:3}}>{isSelected ? "😍" : "😊"}</Text>
            </View>
          </View>
          
        </View>
      </View>
    </>
  )
}

export default FoodDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bg: {
    width: 130,
    height: 150,
    resizeMode: "stretch",

  },

  card: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,

  },

  item: {
    flex: 2,
    flexDirection: 'row',
    width: '60%'

  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },

  // header: {
  //   flex:1
  //   // position: 'absolute',
  //   // left: 0,
  //   // right: 0,
  //   // top: 0,
  //   // height: 700,
  // },

  title: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    top: 5,
    paddingLeft: 20
  },

  desc: {
    color: '#A4A4A4',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 20
  },

  footer: {
    flex: 2,
    // backgroundColor: '#4364f7',
    alignItems: 'center',
    marginTop: 20,
    borderTopLeftRadius: 40,
    paddingVertical: 40,
    // paddingHorizontal: 30,

  },
})