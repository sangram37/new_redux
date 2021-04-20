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
    Dimensions,
    Animated
} from "react-native"
import Data from "../component/Style/Data";
const { width, height } = Dimensions.get('screen')
const IMAGE_WIDTH = width * 0.65
const IMAGE_HEIGHT = IMAGE_WIDTH * 0.7
const SPACING = 20;
const scrollX = new Animated.Value(0)
const progress = Animated.modulo(Animated.divide(scrollX, width), width)

function Content({ item }) {
    return (
        <View>
            <Text style={styles.title} >{item.title}</Text>
            <Text style={styles.sub_text}>{item.desc}</Text>
        </View>
    )

}

class CarouselAnimation3d extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <View style={{ backgroundColor: '#A5f1FA', flex: 1 }}>
                <SafeAreaView style={{ marginTop: SPACING * 4 }} >

                    <View style={{ height: IMAGE_HEIGHT * 2.1 }}>
                        <Animated.FlatList
                            style={{ flexGrow: 0 }}
                            data={Data.NumberData}

                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                { useNativeDriver: true }
                            )}
                            keyExtractor={(item, index) => `${index}K`}
                            horizontal
                            pagingEnabled
                            bounces={false}
                            contentContainerStyle={{
                                height: IMAGE_HEIGHT + SPACING * 2,
                                backgroundColor: 'transparent',
                                paddingHorizontal: SPACING * 2
                            }}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                const inputRange = [
                                    (index - 1) * width,
                                    index * width,
                                    (index + 1) * width
                                ]
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
                                const opacity = scrollX.interpolate({
                                    inputRange,
                                    outputRange: [0, 1, 0]
                                })
                                const translateY = scrollX.interpolate({
                                    inputRange,
                                    outputRange: [50, 0, 20]
                                })
                                return (
                                    <Animated.View style={{
                                        width,
                                        paddingVertical: SPACING,
                                        opacity,
                                        transform: [{ translateY }]
                                    }}>
                                        <Image source={{ uri: item.image }}
                                            style={{
                                                height: IMAGE_HEIGHT,
                                                width: IMAGE_WIDTH
                                            }} />

                                    </Animated.View>

                                )

                            }}
                        />

                        <View style={{
                            width: IMAGE_WIDTH,
                            alignItems: 'center',
                            paddingHorizontal: SPACING * 2,
                            marginLeft: SPACING * 2,
                            zIndex: 99,
                        }}>
                            {Data.NumberData.map((item, index) => {
                                const inputRange = [
                                    (index - 1) * width,
                                    index * width,
                                    (index + 1) * width
                                ]
                                const opacity = scrollX.interpolate({
                                    inputRange,
                                    outputRange: [0, 1, 0],
                                })
                                const rotateY = scrollX.interpolate({
                                    inputRange,
                                    outputRange: ['45deg', '0deg', '45deg']
                                })
                                return (
                                    <Animated.View key={item.id} style={{
                                        position: 'absolute',
                                        opacity,
                                        transform: [{ perspective: IMAGE_WIDTH * 4 }, { rotateY }]
                                    }} >
                                        <Content item={item} />
                                    </Animated.View>
                                )
                            })}
                        </View>
                        <Animated.View style={{
                            width: IMAGE_WIDTH + SPACING * 2,
                            position: 'absolute',
                            backgroundColor: '#fff',
                            top: SPACING * 2,
                            left: SPACING,
                            bottom: 0,
                            shadowColor: '#000',
                            shadowOpacity: 0.2,
                            shadowRadius: 24,
                            shadowOffset: {
                                width: 0,
                                height: 0,
                            },
                            zIndex: -1,
                            // backfaceVisibility: true,
                            transform: [{
                                perspective: IMAGE_WIDTH * 4
                            }, {
                                rotateY: progress.interpolate({
                                    inputRange: [0, 0.5, 1],
                                    outputRange: ['0deg', '90deg', '180deg']
                                })
                            },]
                        }} />



                    </View>

                </SafeAreaView>
            </View>

        )
    };
}

export default CarouselAnimation3d;

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    sub_text: {
        fontSize: 15
    },

});