import React from "react"
import {
    SafeAreaView,
    StyleSheet,
    View,
    ImageBackground,
    Text,
    FlatList,
    Image,
    ActivityIndicator,
    StatusBar,
    TouchableOpacity,
    Animated,
    Dimensions,
    TextInput, Easing, ScrollView
} from "react-native"
import Colors from "../../component/Style/Colors";
import ButtonComponent from "../../component/buttomcomponent/ButtonComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";



const { height } = Dimensions.get('window')
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topHeight: new Animated.Value(- 100),
            coverHeight: new Animated.Value(height + 400),
            formOpacity: new Animated.Value(0),
            loader: false,
            type: this.props.route.params.type,
            // Login
            l_username: '',
            l_password: '',
            // SignUp
            S_username: '',
            S_email: '',
            S_password: '',
            S_cnf_pass: '',
        };
    }
    onlogin = () => {
        let form = new FormData();
        form.append('username', this.state.l_username);
        form.append('password', this.state.l_password);
        console.log('login form', form)
        this.props.navigation.replace('DrawerMenu')
    }
    onsignup = () => {
        let form = new FormData();
        form.append('username', this.state.S_username);
        form.append('email', this.state.S_email);
        form.append('password', this.state.S_password);
        form.append('confirm_password', this.state.S_cnf_pass);
        console.log('signup form', form)
        this.props.navigation.replace('DrawerMenu')
    }
    Animation = () => {

        Animated.timing(this.state.topHeight, {
            toValue: height / 6,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.cubic
        }).start(() => {
            Animated.timing(this.state.coverHeight, {
                toValue: this.state.type === 'Login' ? (height / 4) : (height / 6),
                duration: 1000,
                useNativeDriver: false,
                easing: Easing.cubic
            }).start(() => {
                Animated.timing(this.state.formOpacity, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: false
                }).start();
            });
        });

    }
    signupAni(typ) {

        Animated.timing(this.state.coverHeight, {
            toValue: height + 100,
            duration: 500,
            useNativeDriver: false,
            easing: Easing.cubic
        }).start(() => {
            this.setState({
                type: typ
            })
            Animated.timing(this.state.coverHeight, {
                toValue: typ === 'Login' ? (height / 4) : (height / 6),
                duration: 500,
                useNativeDriver: false
            }).start();
        });

    }
    componentDidMount() {
        console.log(this.props.route.params.type)
        this.Animation()

    }
    render() {
        const { coverHeight, formOpacity, loader, topHeight, type, l_password, l_username,
            S_cnf_pass, S_email, S_password, S_username } = this.state;
        const icon_size = 25
        const tch_wid = 110
        const tch_b_rad = 25
        return (
            <SafeAreaView>
                <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/f1/92/20/f192209b17444828034ab25ff62f2303.jpg' }}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}>
                    <ScrollView>
                        < Animated.View style={{
                            // position: 'absolute',.
                            // backgroundColor: '#f00',
                            alignSelf: 'center',
                            width: '85%',
                            marginTop: topHeight,

                        }}>
                            {/* type */}
                            <Animated.View style={{ backgroundColor: 'transparent', height: coverHeight, }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '65%' }} >
                                    <TouchableOpacity onPress={() => this.signupAni('Login')}
                                        style={type === 'Login' ? ({
                                            backgroundColor: Colors.primary,
                                            width: tch_wid,
                                            borderRadius: tch_b_rad,
                                        }) : ({
                                            width: tch_wid,
                                            borderRadius: tch_b_rad,
                                            borderWidth: 1,
                                            backgroundColor: Colors.white,
                                            borderColor: Colors.primary
                                        })} >
                                        <Text style={{
                                            fontSize: 17,
                                            color: type === 'Login' ? (Colors.white) : (Colors.primary),
                                            marginVertical: 10,
                                            textAlign: 'center',
                                            fontFamily: Colors.font_Bold
                                        }} >Log In</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.signupAni('Signup')}
                                        style={type === 'Signup' ? ({
                                            backgroundColor: Colors.primary,
                                            width: tch_wid,
                                            borderRadius: tch_b_rad
                                        }) : ({
                                            width: tch_wid,
                                            borderRadius: tch_b_rad,
                                            borderWidth: 1.5,
                                            backgroundColor: Colors.white,
                                            borderColor: Colors.primary
                                        })} >
                                        <Text style={{
                                            fontSize: 17,
                                            color: type === 'Signup' ? (Colors.white) : (Colors.primary),
                                            marginVertical: 10,
                                            textAlign: 'center',
                                            fontFamily: Colors.font_Bold
                                        }}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>


                            </Animated.View>

                            {/* fields */}
                            <Animated.View style={{
                                backgroundColor: '#fff',
                                borderRadius: 15,
                                height: type === 'Login' ? (height * .25) : (height * .50)

                            }}>
                                {type === 'Login' ? (
                                    <Animated.View style={{ opacity: formOpacity, flexDirection: 'row', height: '100%', }}>

                                        <Animated.View style={styles.icon_view} >
                                            <AntDesign name={'user'} size={25} color={Colors.white} style={{ alignSelf: 'center', }} />
                                            <EvilIcons name={'lock'} size={40} color={Colors.white} style={{ alignSelf: 'center', marginStart: -3 }} />

                                        </Animated.View>
                                        <Animated.View style={{ justifyContent: 'space-evenly', width: '90%', }}>
                                            <TextInput
                                                placeholder="Enter Username"
                                                placeholderTextColor={Colors.text_color}
                                                style={styles.textinput}
                                                keyboardType={'default'}
                                                value={l_username}
                                                onChangeText={(value) => this.setState({ l_username: value })}
                                            />
                                            <View style={styles.line} />
                                            <TextInput
                                                placeholder="Password"
                                                placeholderTextColor={Colors.text_color}
                                                style={styles.textinput}
                                                keyboardType={'email-address'}
                                                value={l_password}
                                                secureTextEntry={true}
                                                onChangeText={(value) => this.setState({ l_password: value })}
                                            />
                                        </Animated.View>


                                    </Animated.View>
                                ) : (
                                    <Animated.View style={{ opacity: formOpacity, flexDirection: 'row', height: '100%', borderRadius: 15 }}>

                                        <Animated.View style={styles.icon_view} >
                                            <AntDesign name={'user'} size={25} color={Colors.white} style={{ alignSelf: 'center', }} />
                                            <MaterialCommunityIcons name={'email-outline'} size={25} color={Colors.white} style={{ alignSelf: 'center', }} />
                                            <EvilIcons name={'lock'} size={40} color={Colors.white} style={{ alignSelf: 'center', marginStart: -3 }} />
                                            <EvilIcons name={'lock'} size={40} color={Colors.white} style={{ alignSelf: 'center', marginStart: -3 }} />
                                        </Animated.View>
                                        <Animated.View style={{ justifyContent: 'space-evenly', width: '90%', }}>
                                            <TextInput
                                                placeholder=" Username"
                                                placeholderTextColor={Colors.text_color}
                                                style={styles.textinput}
                                                keyboardType={'default'}
                                                value={S_username}
                                                onChangeText={(value) => this.setState({ S_username: value })}
                                            />
                                            <View style={styles.line} />
                                            <TextInput
                                                placeholder="Email"
                                                placeholderTextColor={Colors.text_color}
                                                style={styles.textinput}
                                                keyboardType={'email-address'}
                                                value={S_email}
                                                onChangeText={(value) => this.setState({ S_email: value })}
                                            />
                                            <View style={styles.line} />
                                            <TextInput
                                                placeholder="Password"
                                                placeholderTextColor={Colors.text_color}
                                                style={styles.textinput}
                                                keyboardType={'email-address'}
                                                value={S_password}
                                                secureTextEntry={true}
                                                onChangeText={(value) => this.setState({ S_password: value })}
                                            />
                                            <View style={styles.line} />
                                            <TextInput
                                                placeholder="Confirm Password"
                                                placeholderTextColor={Colors.text_color}
                                                style={styles.textinput}
                                                keyboardType={'email-address'}
                                                value={S_cnf_pass}
                                                secureTextEntry={true}
                                                onChangeText={(value) => this.setState({ S_cnf_pass: value })}
                                            />
                                        </Animated.View>


                                    </Animated.View>
                                )}


                            </Animated.View>



                        </Animated.View>

                        {/* <TouchableOpacity style={styles.brtn} >
                            <Text>Login</Text>
                        </TouchableOpacity> */}
                        <Animated.View style={{ width: '85%', alignSelf: 'center', marginTop: 25 }}>
                            <ButtonComponent
                                btnText={type === 'Login' ? ('Log In') : ('Sign Up')}
                                txtFontWeight={'bold'}
                                btnAction={type === 'Login' ? (() => this.onlogin()) : (() => this.onsignup())}
                                btnLoader={loader}
                                btnBorderRadius={15}
                            />
                        </Animated.View>

                    </ScrollView>
                </ImageBackground>
            </SafeAreaView >
        )
    };
}

export default Login;

const styles = StyleSheet.create({
    icon_view: {
        backgroundColor: Colors.primary,
        justifyContent: 'space-around',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        width: '10%'
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
        width: '92%',
        alignSelf: 'center',
    },
    textinput: {
        color: Colors.text_color,
        marginStart: 15
    },
    brtn: {
        backgroundColor: Colors.primary,
        width: '85%',
        alignSelf: 'center'
    }
});