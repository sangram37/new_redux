import React from "react"
import {
    View,
    StyleSheet,
    Animated,
    ActivityIndicator,
    PanResponder,
    Image,
    Text,
    Dimensions,
    SafeAreaView
} from "react-native"
import { Extrapolate } from "react-native-reanimated"

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const Users = [
    {
        "title": "Death Bed",
        "artist": "Powfu",
        "artwork": "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
        "url": "https://samplesongs.netlify.app/Death%20Bed.mp3",
        "id": "1"
    },
    {
        "title": "Bad Liar",
        "artist": "Imagine Dragons",
        "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
        "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
        "id": "2"
    },
    {
        "title": "Faded",
        "artist": "Alan Walker",
        "artwork": "https://samplesongs.netlify.app/album-arts/faded.jpg",
        "url": "https://samplesongs.netlify.app/Faded.mp3",
        "id": "3"
    },
    {
        "title": "Hate Me",
        "artist": "Ellie Goulding",
        "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
        "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
        "id": "4"
    },
    {
        "title": "Solo",
        "artist": "Clean Bandit",
        "artwork": "https://samplesongs.netlify.app/album-arts/solo.jpg",
        "url": "https://samplesongs.netlify.app/Solo.mp3",
        "id": "5"
    },
    {
        "title": "Without Me",
        "artist": "Halsey",
        "artwork": "https://samplesongs.netlify.app/album-arts/without-me.jpg",
        "url": "https://samplesongs.netlify.app/Without%20Me.mp3",
        "id": "6"
    }
]
class Tinder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0

        };
        this.position = new Animated.ValueXY()
        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: ['-10deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })
        this.rotateAndTranlate = {
            transform: [{
                rotate: this.rotate
            },
            ...this.position.getTranslateTransform()]
        }
        this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        })
        this.dislikeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
        })
        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        })
        this.nextCardScall = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp'
        })
    }
    componentWillMount() {
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx > 120) {
                    Animated.spring(this.position, {
                        toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                } else if (gestureState.dx < -120) {
                    Animated.spring(this.position, {
                        toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                } else {
                    Animated.spring(this.position, {
                        toValue: { x: 0, y: 0 },
                        friction: 4
                    }).start()
                }
            }
        })
    }
    renderUsers = () => {
        return Users.map((item, i) => {
            if (i < this.state.currentIndex) {
                return null
            } else if (
                i === this.state.currentIndex
            ) {
                return (
                    <Animated.View
                        {...this.PanResponder.panHandlers}
                        key={item.id} style={[this.rotateAndTranlate, { width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 120, padding: 10, position: 'absolute' }]}>
                        <Animated.View style={{ opacity: this.likeOpacity, position: 'absolute', top: 50, left: 40, zIndex: 1000, transform: [{ rotate: '-30deg' }] }}>
                            <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', paddingTop: 10, }}>Like</Text>
                        </Animated.View>
                        <Animated.View style={{ opacity: this.dislikeOpacity, position: 'absolute', top: 50, right: 40, zIndex: 1000, transform: [{ rotate: '30deg' }] }}>
                            <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', paddingTop: 10, }}>nope</Text>
                        </Animated.View>
                        <Image
                            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                            source={{ uri: item.artwork }} />

                    </Animated.View>
                )
            } else {
                return (
                    <Animated.View

                        key={item.id} style={[{ opacity: this.nextCardOpacity, transform: [{ scale: this.nextCardScall }], width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 120, padding: 10, position: 'absolute' }]}>
                        <Image
                            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                            source={{ uri: item.artwork }} />

                    </Animated.View>
                )
            }

        }).reverse()
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 60 }}>

                </View>
                <View style={{ flex: 1 }}>
                    {this.renderUsers()}
                </View>
                <View style={{ height: 60 }}>

                </View>
            </SafeAreaView>
        )
    };
}

export default Tinder;

const styles = StyleSheet.create({
});