import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { fetchDocumentDetail } from '../../../services/documents';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import checkImage from '../../../utils/checkImage';

function ActivityDayDetail({ navigation, route }) {
  const [data, SetData] = useState([]);

  useEffect(() => {
    async function getDocumentDetail() {
      const res = await fetchDocumentDetail({
        documentId: route.params.documentId,
      });
      SetData(res);
      console.log('test', data)
    }

    getDocumentDetail();
  }, [route]);

  useEffect(() => {
    navigation.setOptions({
      title: data.title,
    });
  }, [navigation]);

  return (
    <>
    
    
      <View style={styles.container}>
     
        <View style={styles.header}>
        <LinearGradient
            colors={['#4364f7', '#617EFF', 'transparent']}
            style={styles.background}
          />
          
          <View style={{ top: 40, left: 8 }}>
            <TouchableOpacity style={{ width: 40 }} >
              <Icon
                name="chevron-back-outline"
                size={35}
                color="#fff"
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          {
            data.image ? <ImageBackground
              source={{ uri: checkImage(data.image) }}
              style={styles.bg}
              imageStyle={{ borderRadius: 10 }}
            /> : <View></View>
          }
          <ScrollView style={{top:20}}>
          <Text style={styles.title}>{data.title}</Text>
          
          <Text style={styles.body}>{data.body}</Text>
          </ScrollView>
        </View>

      </View>
      
    </>
  )
}

export default ActivityDayDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#617EFF'
  },

  bg: {
    width: 180,
    height: 160,
    resizeMode: "stretch",

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
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    top: 15,
    paddingLeft: 50
  },

  body: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    top: 20,
    paddingLeft: 20
  },

  footer: {
    flex: 2,
    // backgroundColor: '#4364f7',
    alignItems: 'center',
    top:40,
    borderTopLeftRadius: 40,
    paddingVertical: 40,
    // paddingHorizontal: 30,

  },
})