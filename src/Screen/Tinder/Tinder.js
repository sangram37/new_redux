import React from "react"
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
  ActivityIndicator,
  
    Dimensions,
    Animated,

} from "react-native"

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


        };
    }
componentWillMount(){

}
    renderUsers = () => {
        return Users.map((item, i) => {
            return (
                <Animated.View key={item.id} style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 120, padding: 10, position: 'absolute' }}>
                    <Image
                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                        source={{ uri: item.artwork }} />

                </Animated.View>
            )
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