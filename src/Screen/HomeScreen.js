import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Alert, ScrollView } from 'react-native';
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Intro')}>
                        <Text>Splash</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login', {
                        type: 'Login'
                    })}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login', {
                        type: 'Signup'
                    })}>
                        <Text>Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('flatListAnimation1')}>
                        <Text>flatList Animation 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('flatListAnimation2')}>
                        <Text>flatList Animation 2</Text>
                    </TouchableOpacity>
                </ScrollView>


            </SafeAreaView>
        )
    }
}

export default HomeScreen