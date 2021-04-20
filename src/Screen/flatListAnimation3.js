import React from "react"
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    ActivityIndicator,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    ScrollView,
    Animated
} from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';


import Colors from "../component/Style/Colors";
import Data from "../component/Style/Data";

const { height: wheight, width } = Dimensions.get('window')
const height = wheight - 64;

const ratio = 228 / 362;
const image_width = width * 0.8
const image_height = image_width * ratio
const SPACING = 10
const ITEM_SIZE = image_height + SPACING * 2

const scrollY = new Animated.Value(0)

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList)
class flatListAnimation3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    desc: 'Lorem ipsum dolro amet nfbsdsaf',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDlxKTjjPrnr0rujpewG4CiO4uuzRaLG2qw&usqp=CAU',
                    id: 1,
                    title: 'Night Party'
                },
                {
                    desc: 'Lorem ipsum dolro amet nfbsdsaf',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7gaJW3I7vyajlRT1_qssTQGYlBkiYxGe3A&usqp=CAU',
                    id: 2,
                    title: 'Night Beach'
                },
                {
                    desc: 'Lorem ipsum dolro amet nfbsadassd',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7gaJW3I7vyajlRT1_qssTQGYlBkiYxGe3A&usqp=CAU',
                    id: 3,
                    title: 'Night Beach'
                },
                {
                    desc: 'Lorem ipsum dolro amet nfbsadassd',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7gaJW3I7vyajlRT1_qssTQGYlBkiYxGe3A&usqp=CAU',
                    id: 4,
                    title: 'Night Beach'
                },
                {
                    desc: 'Lorem ipsum dolro amet nfbsadassd',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7gaJW3I7vyajlRT1_qssTQGYlBkiYxGe3A&usqp=CAU',
                    id: 5,
                    title: 'Night Beach'
                }
            ]
        };
    }
    render() {
        // console.log(this.state.scrollY)
        return (
            <SafeAreaView style={{ flex: 1, }}>
                <Animated.FlatList
                    style={{ paddingTop: 15, }}
                    data={Data.NumberData}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    scrollEventThrottle={16}
                    bounces={false}
                    keyExtractor={(item, index) => `${index}K`}

                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        const position = Animated.subtract(index * ITEM_SIZE, scrollY);
                        const isDissappearing = -ITEM_SIZE;
                        const isTop = 0;
                        const isBottom = height - ITEM_SIZE;
                        const isAppearing = height;
                        const translateY = Animated.add(
                            Animated.add(
                                scrollY,
                                scrollY.interpolate({
                                    inputRange: [0, 0.00001 + index * ITEM_SIZE],
                                    outputRange: [0, -index * ITEM_SIZE],
                                    extrapolateRight: "clamp",
                                })
                            ),
                            position.interpolate({
                                inputRange: [isBottom, isAppearing],
                                outputRange: [0, -ITEM_SIZE / 4],
                                extrapolate: 'clamp'
                            })
                        );
                        const scale = position.interpolate({
                            inputRange: [isDissappearing, isTop, isBottom, isAppearing],
                            outputRange: [0.5, 1, 1, 0.5],
                            extrapolate: 'clamp'
                        })
                        const opacity = position.interpolate({
                            inputRange: [isDissappearing, isTop, isBottom, isAppearing],
                            outputRange: [0.5, 1, 1, 0.5],
                            extrapolate: 'clamp'
                        })
                        // const inputRange = [
                        //     -1,
                        //     0,
                        //     ITEM_SIZE * index,
                        //     ITEM_SIZE * (index + 2)
                        // ]
                        // const opacityInputRange = [
                        //     -1,
                        //     0,
                        //     ITEM_SIZE * index,
                        //     ITEM_SIZE * (index + 2)
                        // ]
                        // const scale = scrollY.interpolate({
                        //     inputRange,
                        //     outputRange: [1, 1, 1, 0]
                        // })
                        // const opacity = scrollY.interpolate({
                        //     inputRange: opacityInputRange,
                        //     outputRange: [1, 1, 1, 0]
                        // })
                        return (
                            <Animated.View style={[styles.card, { opacity, transform: [{ translateY }, { scale }] }]}>
                                <ImageBackground source={{ uri: item.image }}
                                    style={{
                                        width: width * .9,
                                        height: image_height,
                                        justifyContent: 'flex-end',
                                        // marginBottom: 15,
                                        alignSelf: 'center',
                                        borderRadius: 15,
                                        overflow: 'hidden',

                                    }} resizeMode={'cover'} >
                                    <Animated.View style={{ ...styles.main_view, }} >
                                        <View>
                                            <Text style={styles.title} >City Name</Text>
                                            <Text style={styles.sub_text}>Lorem ipsum dolro amet nfb</Text>
                                        </View>

                                    </Animated.View>
                                </ImageBackground>
                            </Animated.View>

                        )

                    }}
                />
            </SafeAreaView>
        )
    };
}

export default flatListAnimation3;

const styles = StyleSheet.create({
    main_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        // marginBottom: 15
    },
    title: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: Colors.font_Bold
    },
    sub_text: {
        color: Colors.white,
        fontSize: 18,
        // fontWeight: 'bold',
        fontFamily: Colors.font_medium
    },
    icon: {
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingLeft: 7,
        paddingRight: 5,
        alignSelf: 'center'
    },
    card: {
        marginVertical: 10,
        // alignSelf: 'center'
    }
});