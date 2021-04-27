import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions
} from 'react-native';
import { fetchDocumentDetail } from '../../../services/documents';
import Icon from 'react-native-vector-icons/Ionicons';
import checkImage from '../../../utils/checkImage';

const { width, height } = Dimensions.get("window")
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
          <ScrollView style={{ top: 20 }}>
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
  },

  bg: {
    width: 180,
    height: 160,
    resizeMode: "stretch",

  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',

  },

  header: {
    backgroundColor: '#4364f7',
    height:230,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    
  },

  title: {
    color: '#333',
    fontSize: 25,
    fontWeight: 'bold',
    top: 15,
    paddingLeft: 35,
    
  },

  body: {
    color: '#333',
    fontSize: 17,
    top: 10,
    padding:20,
    lineHeight:25,
  },

  footer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: width - 30,
    height: height / 1.3,
    marginLeft: 16,
    borderRadius: 40,
    paddingVertical: 40,
    padding: 10,
    bottom:100,
    elevation:10

  },
})