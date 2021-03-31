import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    Video
} from 'react-native';




const VideoItem = ({ data }) => {
    return (
        <>
            <View>
                <Video 
                style={{width:100, height:100}}
                source={{uri: `http://10.0.2.2:1337${data.url}`}} /> 
            </View> 
            <View>
                <Text>{data.description}</Text>
            </View>

        </>
    )
}

export default VideoItem;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginLeft: 10,
    },
})