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


function Content({ item }) {
    return (
        <View>
            <Text style={styles.title} >{item.title}</Text>
            <Text style={styles.sub_text}>{item.desc}</Text>
        </View>
    )

}

class flatListAnimation1 extends React.Component {
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
                            contentContainerStyle={{ height: IMAGE_HEIGHT + SPACING * 2, backgroundColor: '#fff', paddingHorizontal: SPACING * 2 }}
                            showsVerticalScrollIndicator={false}
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
                        <View>
                            <Content item={Data.NumberData[0]} />
                        </View>
                    </View>

                </SafeAreaView>
            </View>

        )
    };
}

export default flatListAnimation1;

const styles = StyleSheet.create({
});