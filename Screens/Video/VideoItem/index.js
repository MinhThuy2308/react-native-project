import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native';
import Video from 'react-native-video';



const VideoItem = ({ data }) => {
    return (
        <>
            <View >
                <Text style={styles.title}>{data.Title}</Text>
            </View>
            {/* <View>
                <Video source={{uri: "https://youtu.be/wqHX9YmqeyQ?list=RDMMwqHX9YmqeyQ"}} /> 
            </View> */}
            <View>
                <Text>{data.Description}</Text>
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