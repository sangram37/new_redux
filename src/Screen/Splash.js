
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
    MaskedViewComponent,
    MaskedViewBase,
    MaskedViewIOS,
    Animated
} from "react-native"


class Splash extends React.Component {
    state = {
        springVal: new Animated.Value(1),
        formOpacity: new Animated.Value(1),
    };

    componentDidMount() {
        setTimeout(() => this.spring(), 500);
    }

    spring() {
        Animated.sequence([
            Animated.spring(this.state.springVal, {
                toValue: 0.6,
                friction: 7,
                tension: 2
            }),
            Animated.spring(this.state.springVal, {
                toValue: 17.5,
                friction: 7,
                tension: 5
            }),

        ]).start(() => this.props.navigation.replace("Intro"));

    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.container}>
                    <Animated.Image source={require('../image/logo.png')}
                        style={{
                            opacity: this.state.formOpacity,
                            transform: [{ scale: this.state.springVal }],
                            width: 100, height: 100, borderRadius: 100
                        }}
                    />
                </View>
                <Text>hiii</Text>
            </View>
        );
    }
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
});