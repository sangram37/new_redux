import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text,
    StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, Button, Icon } from 'native-base';
import Styles from '../Style/Style'
import Colors from '../Style/Colors';

function BackHeader(props) {
    // console.log("hiii" + props)
    return (
        <View transparent style={{ backgroundColor: Colors.color_red, opacity: 5, paddingVertical: 5 }}>
            {/* <StatusBar
                backgroundColor={transparent}
                barStyle="dark-content"
                translucent={false}
            /> */}
            <StatusBar
                translucent={false}
                backgroundColor={Colors.color_red}
                barStyle="dark-content"
            />
            <View style={Styles.Header}>
                <Button transparent onPress={() => props.navigation.goBack()}>
                    <Icon
                        type='AntDesign'
                        name="arrowleft"
                        style={{ fontSize: 30, color: '#fff' }}
                    />
                </Button>
                <View style={{ paddingRight: 10 }} >
                    <Text style={Styles.HeaderText} >{props.title}</Text>
                </View>

            </View>
        </View>
    );
}
export default BackHeader;

const styles = StyleSheet.create({});
