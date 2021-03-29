import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image
} from 'react-native';
import Video from 'react-native-video';



const VideoItem = ({ data }) => {
    return (
        <>
            {/* <View >
                <Text style={styles.title}>{data.title}</Text>
            </View>
            <View>
                <Image 
                style={{width:100, height:100}}
                source={{uri: "http://10.0.2.2:1337/uploads/red_velvet_joy_outfit_cover_4752f3f67c.jpg"}} /> 
            </View> 
            <View>
                <Text>{data.description}</Text>
            </View> */}

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