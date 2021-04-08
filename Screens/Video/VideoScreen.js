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
import { fetchVideo } from '../../services/video';
import VideoItem from './VideoItem';
// import Video from 'react-native-video';
import { Video, AVPlaybackStatus } from 'expo-av';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

// import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

const { width, height } = Dimensions.get('window');

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


    // const renderItem = ({ item }) => (
    //     <VideoItem data={item} />
    // );

    return (
       
            <View style={styles.container}>
                <View style={styles.header}>
                    <LinearGradient
                        colors={['#4364f7', '#fff', 'transparent']}
                        style={styles.background}
                    />
                    <View style={{ top: 40, left: 8 }}>
                        <TouchableOpacity >
                            <Icon
                                name="menu-outline"
                                size={30}
                                color="#fff"
                                backgroundColor="#61b1fc"
                                onPress={() => navigation.openDrawer()}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <FlatList
                data={video}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                
            /> */}
                <View style={styles.footer}>
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

                        {/* <Video
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
                        </View> */}
                    </View>

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
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: height / 5,
        marginTop: 30,
       

    },

    footer: {
        flex: 2,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        
    },

    desc: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10,
        backgroundColor: '#fff'

    },

    header: {
        flex: 1,
        backgroundColor: '#61b1fc',

    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 550,
    },

    // item: {
    //     height: 130,
    //     width: 150,
    //     marginLeft: 20,
    //     borderWidth: 0.5,
    //     borderColor: '#333',


    // }

})