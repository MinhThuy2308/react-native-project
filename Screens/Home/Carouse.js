import React, { useState, useEffect } from 'react';
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

const { width, height } = Dimensions.get("window")
let flatList

function infiniteScroll(dataList){
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    setInterval(function() {
        scrolled ++
        if(scrolled < numberOfData)
        scrollValue = scrollValue + width

        else{
            scrollValue = 0
            scrolled = 0
        }

        this._flatList.scrollToOffset({ animated: true, offset: scrollValue})
        
    }, 3000)
}


const Carouse = ({data}) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [dataList, setDataList] = useState(data)

    useEffect(() => {
        setDataList(data)
        infiniteScroll(dataList)
    })
    // const [images, SetImage] = useState([]);

    // useEffect(() => {
    //     async function getImage() {
    //         const res = await fetchImage();
    //         SetImage(res);
    //     }

    //     getImage();
    // }, [])

    // const renderItem = ({ item }) => (
    //     <CarouseItem data={item} />
    // );
    if(data && data.length) {
        return (
            <View>
                <FlatList
                    data={data}
                    ref = {(_flatList) => {this._flatList = _flatList}}
                    keyExtractor={(item, index) => 'key' + index}
                    pagingEnabled
                    scrollEnabled
                    horizontal
                    snapToAlignment = 'center'
                    scrollEventThrottle = {16}
                    decelerationRate = {"fast"}
                    showsHorizontalScrollIndicator = {false}
                    renderItem={({item}) => {
                        return <CarouseItem item={item} />
                    }}
                    onScroll = {Animated.event(
                        [{nativeEvent: { contentOffset: {x: scrollX } } }]

                    )}
                />
                <View style={StyleSheet.Dot}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i-1, i, i+1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                            key={i}
                            style={{opacity, height:10, width:10, background:'#595959', margin: 8, borderRadius: 5}}
                            />
                        )
                    })}

                </View>

            </View>

        )
    }

    return (
        <View>
            <Text>Có gì đâu</Text>
        </View>
    )

}

export default Carouse;

const styles = StyleSheet.create({
    Dot: {
        flexDirection:'row',
        justifyContent:'center',

    },
})