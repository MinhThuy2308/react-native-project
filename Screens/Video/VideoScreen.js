import React, { useEffect, useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { fetchVideo } from '../../services/video';
import VideoItem from './VideoItem';
// import Video from 'react-native-video';
import { Video, AVPlaybackStatus } from 'expo-av';

// import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';


const VideoScreen = (props) => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    //     const [video, SetVideo] = useState([]);

    //     useEffect(() => {
    //         async function getVideo() {
    //             const res = await fetchVideo();
    //             SetVideo(res);
    //         }

    //         getVideo();
    //     }, [])

    //     const renderItem = ({ item }) => (
    //         <VideoItem data={item} />
    //     );

    return (
        <View style={styles.container}>

            {/* <FlatList
                data={video}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}

            /> */}
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={styles.buttons}>
                <TouchableOpacity
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View>
        </View>

    )
}

export default VideoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },

})