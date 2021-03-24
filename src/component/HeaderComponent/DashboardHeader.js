import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text,
    StatusBar,
    Dimensions
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from 'native-base';
import Colors from '../Style/Colors'
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

function DashboardHeader(props) {
    // console.log("hiii" + props)
    return (
        <View transparent style={{ backgroundColor: props.bg_color, height: 50 }}>
            <StatusBar
                translucent={false}
                backgroundColor={props.Status_color}
                barStyle="dark-content"
            />
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 5

                }}>

                <TouchableOpacity style={{ justifyContent: 'flex-start' }} onPress={() => props.navigation.toggleDrawer()}>
                    {/* <Ionicons name="menu" size={35} color={Colors.icon} /> */}
                    {props.Left}
                </TouchableOpacity>

                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        flexDirection: 'row',
                        width: '60%'
                    }}>
                    <Text
                        style={{
                            fontSize: 21,
                            color: Colors.text,
                            marginRight: 15,
                            letterSpacing: 1,
                            textAlign: 'center',
                            fontFamily: 'fiftyfiftybold-webfont'
                        }}>
                        {props.title}
                    </Text>

                </View>
                <TouchableOpacity style={{ justifyContent: 'flex-end' }} onPress={props.refresh}>
                    {props.Right}
                    {/* <Image
                        source={props.image}
                        style={{ height: 35, width: 35, resizeMode: 'contain', tintColor: Colors.icon }}
                    /> */}
                    {/* <Ionicons name="md-search-sharp" color={Colors.icon} size={35} /> */}
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default DashboardHeader;

const styles = StyleSheet.create({});
