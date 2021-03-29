import React, { useEffect, useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    FlatList,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { fetchImage } from '../../services/homepage';
import VideoItem from './VideoItem';
// import Video from 'react-native-video';
import { Video, AVPlaybackStatus } from 'expo-av';
import { ScrollView } from 'react-native-gesture-handler';

// import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

const { width, height} = Dimensions.get('window');

const VideoScreen = (props) => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    //     const [video, SetVideo] = useState([]);

    //     useEffect(() => {
    //         async function getVideo() {
    //             const res = await fetchImage();
    //             SetVideo(res);
    //         }

    //         getVideo();
    //     }, [])


    // const renderItem = ({ item }) => (
    //     <VideoItem data={item} />
    // );

    return (
        <ScrollView>
            <View style={styles.container}>
            {/* <FlatList
                data={video}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                
            /> */}

                    <View style={styles.item}>
                        <Video
                            ref={video}
                            style={styles.video}
                            source={{
                                uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                            }}
                            useNativeControls
                            resizeMode="cover"
                            shouldPlay={false}
                            rate={1.0}
                            volume={1.0}
                            isMuted={false}
                            isLooping={false}
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <View style={styles.desc}>
                            <Text>Yoga at home: Lose weight with basic yoga poses every day</Text>
                        </View>

                        <Video
                            ref={video}
                            style={styles.video}
                            source={{
                                uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                            }}
                            useNativeControls
                            resizeMode="cover"
                            shouldPlay={false}
                            rate={1.0}
                            volume={1.0}
                            isMuted={false}
                            isLooping={false}
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <View style={styles.desc}>
                            <Text>Video</Text>
                        </View>

                        <Video
                            ref={video}
                            style={styles.video}
                            source={{
                                uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                            }}
                            useNativeControls
                            resizeMode="cover"
                            shouldPlay={false}
                            rate={1.0}
                            volume={1.0}
                            isMuted={false}
                            isLooping={false}
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <View style={styles.desc}>
                            <Text>Video</Text>
                        </View>

                        <Video
                            ref={video}
                            style={styles.video}
                            source={{
                                uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                            }}
                            useNativeControls
                            resizeMode="cover"
                            shouldPlay={false}
                            rate={1.0}
                            volume={1.0}
                            isMuted={false}
                            isLooping={false}
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <View style={styles.desc}>
                            <Text>Video</Text>
                        </View>

                        <Video
                            ref={video}
                            style={styles.video}
                            source={{
                                uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                            }}
                            useNativeControls
                            resizeMode="cover"
                            shouldPlay={false}
                            rate={1.0}
                            volume={1.0}
                            isMuted={false}
                            isLooping={false}
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <View style={styles.desc}>
                            <Text>Video</Text>
                        </View>
                    </View>

                    

                </View>
            
        </ScrollView>

    )
}

export default VideoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        

    },


    video: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height / 3,
        marginTop:30,

    },

    desc: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10,
        backgroundColor:'#fff'

    },

    // item: {
    //     height: 130,
    //     width: 150,
    //     marginLeft: 20,
    //     borderWidth: 0.5,
    //     borderColor: '#333',
      

    // }

})