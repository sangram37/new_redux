import { StyleSheet } from 'react-native';
import Colors from './Colors'
const Styles = StyleSheet.create({
    HeaderText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'left',
        // letterSpacing: 0.5,
        marginLeft: 10,
        fontFamily: 'Roboto-Regular'
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 3,
        backgroundColor: Colors.color_red,
        paddingHorizontal: 3
    },
    touch: {
        backgroundColor: Colors.primary,
        padding: 15,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 5,
        borderRadius: 8
    },
    touchtext: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: 18,
        letterSpacing: 1,
        fontFamily: Colors.font_Regular
    },
    container: {
        width: '45%',
        paddingHorizontal: 5,
        backgroundColor: Colors.white,
        paddingVertical: 15,
        elevation: 5,
        borderRadius: 0,
        opacity: 5,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        flexDirection: 'row',

    },
    containertext: {
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: 'bold',
        width: '55%',
        fontFamily: Colors.font_Regular
    },

    logoImg: {
        height: 45,
        width: 45,
        alignSelf: 'center',

    },
    imageview: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        height: 60,
        width: 60,
        justifyContent: 'center'
    },
    headerTxt: {
        color: Colors.black,
        fontSize: 22,
        margin: 10,
        fontWeight: 'bold',
        fontFamily: Colors.font_Regular
    },
    touchbutton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
    }
});
export default Styles;