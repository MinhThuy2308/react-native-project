import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import { fetchDocumentDetail } from '../../../services/documentdetail';
import { useNavigation } from '@react-navigation/native';

function DayDetail ({ data }) {
  const navigation = useNavigation();
  const [docdetail, SetDocumentDetail] = useState([]);

  useEffect(() => {
    async function getDocumentDetail() {
      const res = await fetchDocumentDetail({
        documentId: 1,
        documentId: 3,
      });
      SetDocumentDetail(res);
    }

    getDocumentDetail();
  }, []);


  useEffect(() => {
    navigation.setOptions({
      title: docdetail.title,
    });
  }, [navigation]);

  return (
    <>
       <View>
         <Text>Test</Text>
       </View>
    </>
  )
}

export default DayDetail;
