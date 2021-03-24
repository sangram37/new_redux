import React, { Component, createRef } from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    StyleSheet,
    Dimensions,
    FlatList,
    Animated
} from 'react-native';
import Colors from '../Style/Colors';


let CurrentSlide = 0;
let IntervalTime = 4000;
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
class Slider extends Component {
    state = {
        scrollX: new Animated.Value(0),
        link: this.props.images,
        x: windowWidth,
        y: false

    };

    flatList = React.createRef();

    // TODO _goToNextPage()
    _goToNextPage = () => {
        if (CurrentSlide >= this.state.link.length - 1) CurrentSlide = 0;

        this.flatList.current.scrollToIndex({
            index: ++CurrentSlide,
            animated: true,
        });
    };

    _startAutoPlay = () => {
        this._timerId = setInterval(this._goToNextPage, IntervalTime);
    };

    _stopAutoPlay = () => {
        if (this._timerId) {
            clearInterval(this._timerId);
            this._timerId = null;
        }
    };
    componentDidMount() {
        this._stopAutoPlay();
        this._startAutoPlay();
    }
    componentWillUnmount() {
        this._stopAutoPlay();

    }

    // TODO _renderItem()


    // TODO _keyExtractor()





    render() {
        console.log('images', this.props.images)
        const { scrollX } = this.state
        return (
            <View style={{ marginTop: 10, marginBottom: 10, height: 200, alignSelf: 'center' }}>
                {this.state.link.length === 0 ? (null) : (
                    <FlatList

                        data={this.state.link}
                        keyExtractor={(item, index) => `${index}K`}
                        renderItem={({ item, index }) => (
                            <Image source={{ uri: item.sliderImage }} style={{
                                marginLeft: 5,
                                marginRight: 5,
                                height: 200,
                                width: 500,
                            }} />
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        flatListRef={React.createRef()}
                        ref={this.flatList}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: false }
                        )}

                    />
                )}

                <View style={{ flexDirection: 'row', alignSelf: 'center', top: -20 }} >
                    {this.state.link.map((_, i) => {
                        const inputRange = [
                            (i - 1) * windowWidth, i * windowWidth, (i + 1) * windowWidth];
                        // const translatex = scrollX.interpolate({
                        //     inputRange,
                        //     outputRange: [10, 20, 10],
                        //     Extrapolate: 'clamp'
                        // })
                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.3, 1, 0.3],
                            Extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View style={{ ...styles.dot, width: 10, opacity }} key={i.toString()}

                            />
                        );
                    })}
                </View>
                <Text>hiii sangram</Text>
            </View>
        );
    }
}
export default Slider;
const styles = StyleSheet.create({
    sliderItems: {
        marginLeft: 5,
        marginRight: 5,
        height: 200,
        width: 50,
    },
    slide: {
        height: windowHeight,
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
    },
    slideImage: { width: windowWidth * 0.9, height: windowHeight * 0.7 },
    slideTitle: { fontSize: 24 },
    slideSubtitle: { fontSize: 18 },


    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 2,
    },
    paginationDotActive: { backgroundColor: "lightblue" },
    paginationDotInactive: { backgroundColor: "gray" },

    carousel: { flex: 1 },
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.color_red,
        marginHorizontal: 8
    }
});