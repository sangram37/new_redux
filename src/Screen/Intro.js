import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    FlatList,
    BackHandler,
    Alert, Dimensions,
    Animated,
    TextInput,
    useWindowDimensions
} from 'react-native';
import Colors from '../component/Style/Colors';
const { width, height } = Dimensions.get('screen')
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = (width * .45) * 1.6
let CurrentSlide = 0;
let IntervalTime = 3000;
class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollX: new Animated.Value(0),
            index: 0,
            images: [
                {
                    "sliderId": "4",
                    "title": "YEAR BOOK 2021 | The 40th edition of the CSR English Year Book packs quite a punch with hundreds of the most up-to-date and comprehensive general studies topics.",
                    "buttonName": "Shop Now",
                    "buttonLink": "https://www.competitionreview.in/view/book/24",
                    "sliderImage": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                },
                {
                    "sliderId": "19",
                    "title": "MBA PGDM ENTRANCE TESTS AND DIRECTORY | It veritably packs a punch as a one-stop resource for all the latest and up-to-date MBA and PGDM-related information and guidance.",
                    "buttonName": "Shop Now",
                    "buttonLink": "https://www.competitionreview.in/view/book/27",
                    "sliderImage": "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_960_720.jpg"
                },
                {
                    "sliderId": "13",
                    "title": "CSR Career Almanac | It is a compendium that offers up-to-date information and comprehensive guidance on a wide range of careers for students.",
                    "buttonName": "Shop Now",
                    "buttonLink": "https://www.competitionreview.in/view/book/28",
                    "sliderImage": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881_960_720.jpg"
                },


            ]
        };
        this.slider = React.createRef();
    }
    _goToNextPage = () => {
        if (this.state.index >= this.state.images.length - 1) this.setState({ index: -1 });

        this.setState({ index: this.state.index + 1 });
        this.slider.current.scrollToIndex({
            index: this.state.index,
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
    async componentDidMount() {

        this._startAutoPlay()

    }
    onViewableItemsChanged = ({ viewableItems, changed }) => {
        if (viewableItems.length > 0) {
            let currentIndex = viewableItems[0].index;
            if (
                currentIndex % this.state.images.length === this.state.images.length - 1 &&
                this.props.loop
            ) {
                this.setState({
                    index: currentIndex,
                    data: [...this.state.images, ...this.props.data],
                });
            } else {
                this.setState({ index: currentIndex });
            }

            if (this.props.currentIndexCallback) {
                this.props.currentIndexCallback(currentIndex);
            }
        }
    };


    componentWillUnmount() {
        // BackHandler.removeEventListener(
        //     'hardwareBackPress',
        //     this.handleBackButtonPressAndroid
        // );
        this._stopAutoPlay();
    }
    login = (type) => {
        this.props.navigation.replace('Login', {
            type: type
        })
    }
    Skip = () => {

        this.props.navigation.replace('Home')
    }
    render() {
        const { scrollX } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.images}
                        keyExtractor={(item, index) => `${index}K`}
                        renderItem={({ item, index }) => (
                            <View style={{
                                flex: 1
                            }}>
                                <ImageBackground source={{ uri: item.sliderImage }} style={{

                                    height: height,
                                    width: width,
                                }} >
                                    <View style={{ marginTop: '43%' }}>
                                        <Text style={styles.details}>{item.title}</Text>
                                    </View>


                                    <View style={styles.indicatorContainer}>
                                        {this.state.images.map((image, imageIndex) => {
                                            const widths = scrollX.interpolate({
                                                inputRange: [
                                                    width * (imageIndex - 1),
                                                    width * imageIndex,
                                                    width * (imageIndex + 1)
                                                ],
                                                outputRange: [8, 16, 8],
                                                extrapolate: "clamp"
                                            });
                                            return (
                                                <Animated.View
                                                    key={imageIndex}
                                                    style={[styles.normalDot, { width: widths, backgroundColor: this.state.index === imageIndex ? Colors.color_red : "#fff" }]}
                                                />
                                            );
                                        })}
                                    </View>

                                </ImageBackground>

                            </View>
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        flatListRef={React.createRef()}
                        viewabilityConfig={this.viewabilityConfig}
                        ref={this.slider}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: false }
                        )}
                        pagingEnabled
                    />
                    <View style={{ position: 'absolute', bottom: 30, width: '100%' }}>


                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <TouchableOpacity style={{
                                borderWidth: 2, borderColor: Colors.white,
                                width: '45%', marginLeft: -20,
                                alignItems: 'center',
                                borderRadius: 20,
                                padding: 10,
                            }} onPress={() => this.login("Login")}>
                                <Text style={styles.text}>Login</Text>
                            </TouchableOpacity>

                            <Text style={styles.text}>or</Text>

                            <TouchableOpacity style={{
                                borderWidth: 2, borderColor: Colors.white,
                                width: '45%', marginRight: -20,
                                alignItems: 'center',
                                borderRadius: 20,
                                padding: 10
                            }} onPress={() => this.login("Signup")}>
                                <Text style={styles.text}>Signup</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{
                            borderWidth: 2, borderColor: Colors.white,
                            width: '45%', marginRight: -20,
                            alignItems: 'center',
                            borderRadius: 20,
                            padding: 10,
                            alignSelf: 'flex-end', marginTop: 50
                        }} onPress={this.Skip}>
                            <Text style={styles.text}>Skip</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ position: 'absolute', top: "8%", width: '100%' }}>
                    <Image source={{ uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" }} style={{ width: 80, height: 80, borderRadius: 80, marginLeft: 20 }} />
                    <Text style={styles.headertext}>Berlin city guide</Text>
                </View>

            </SafeAreaView>
        )
    };
}

export default Intro;

const styles = StyleSheet.create({
    dot: {

        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4

    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    headertext: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 20
    },
    details: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 20,
        marginRight: 10
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginTop: 15

    }
});