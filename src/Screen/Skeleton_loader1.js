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
} from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import Animated, { Easing, Clock } from "react-native-reanimated";
const { width, height } = Dimensions.get('window')
const AnimatedLG = Animated.createAnimatedComponent(LinearGradient)
const animatedValue = new Animated.Value(0)
class Skeleton_loader1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount = () => {
        // Animated.loop(
        //     Animated.timing(animatedValue, {
        //         toValue: 1,
        //         duration: 2000,
        //         easing: Easing.linear.inOut,
        //         useNativeDriver: true,
        //     })
        // ).start();
    }

    render() {
        const translateX = animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-width, width]
        })
        return (
            <SafeAreaView>
                <View style={{
                    backgroundColor: '#9900cc',
                    // borderColor: '#9900cc',
                    height: height,
                    width: width
                }} >
                    <AnimatedLG
                        colors={['#9900cc', '#3b5998', '#3b5998', '#9900cc']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ ...StyleSheet.absoluteFill, transform: [{ translateX }] }}
                    />
                </View>
            </SafeAreaView>
        )
    };
}

export default Skeleton_loader1;

const styles = StyleSheet.create({
});