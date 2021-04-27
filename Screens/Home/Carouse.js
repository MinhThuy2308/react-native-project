import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Image,
    FlatList,
    ScrollView,
    Dimensions,
    Animated
} from 'react-native';



import { fetchImage } from '../../services/homepage'

import CarouseItem from './CarouseItem'

const { width, heigth } = Dimensions.get('window');

function infiniteScroll(dataList, mySlide) {
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    setInterval(function () {
        scrolled++
        if (scrolled < numberOfData)
            scrollValue = scrollValue + width

        else {
            scrollValue = 0
            scrolled = 0
        }
        if(mySlide.current) {
            mySlide.current.scrollToOffset({
                animated: true,
                offset: scrollValue,
            });
        }

    }, 7000)
}

const Carouse = ({ data }) => {

    const [image, setImage] = useState([]);

  useEffect(() => {
    async function getImage() {
      const res = await fetchImage();
      setImage(res);
    }
    getImage();
  }, []);
    const mySlide = useRef();

    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);
    const [dataList, setDataList] = useState(data);

    useEffect(() => {
        setDataList(data);
        infiniteScroll(dataList, mySlide);
    })


    if (data && data.length) {
        return (
            <View>
                <FlatList data={data}
                    ref={mySlide}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouseItem item={item} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                />
                {/* <View style={styles.Dot}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
                            />
                        )
                    })}

                </View> */}
            </View>
        )
    }
    return null;
}

export default Carouse;

const styles = StyleSheet.create({
    Dot: {
        flexDirection:'row',
        justifyContent:'center',

    },
})