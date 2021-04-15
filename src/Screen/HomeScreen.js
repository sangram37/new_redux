import React from 'react';
import {
    View, Text, SafeAreaView, TouchableOpacity,
    FlatList, Alert, ScrollView, StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { Delete } from '../actions/HomeAction'
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, paddingTop: 10 }}>
                <ScrollView>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Intro')}
                        style={styles.card}>
                        <Text style={styles.title}>Splash</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Login', {
                        type: 'Login'
                    })}>
                        <Text style={styles.title}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Login', {
                        type: 'Signup'
                    })}>
                        <Text style={styles.title}>Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('flatListAnimation1')}>
                        <Text style={styles.title}>flatList Animation 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('flatListAnimation2')}>
                        <Text style={styles.title}>flatList Animation 2</Text>
                    </TouchableOpacity>
                      <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Skeleton_loader')}>
                        <Text style={styles.title}>Skeleton loader</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Skeleton_loader1')}>
                        <Text style={styles.title}>Skeleton loader 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Tinder')}>
                        <Text style={styles.title}>Tinder</Text>
                    </TouchableOpacity>
                </ScrollView>


            </SafeAreaView>
        )
    }
}

export default HomeScreen
const styles = StyleSheet.create({
    card: {
        width: '90%',
        // height: 100,
        marginTop: 10,
        paddingVertical: '5%',
        alignSelf: 'center',
        // alignContent: 'center',
        backgroundColor: '#fff',
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 15,
        // paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',

    },

});
