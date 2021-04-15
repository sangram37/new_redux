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
                    <TouchableOpacity style={styles.TT_view} onPress={() => this.props.navigation.navigate('Intro')}>
                        <Text style={styles.TT_Text}>Splash</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TT_view} onPress={() => this.props.navigation.navigate('Login', {
                        type: 'Login'
                    })}>
                        <Text style={styles.TT_Text}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TT_view} onPress={() => this.props.navigation.navigate('Login', {
                        type: 'Signup'
                    })}>
                        <Text style={styles.TT_Text}>Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TT_view} onPress={() => this.props.navigation.navigate('flatListAnimation1')}>
                        <Text style={styles.TT_Text}>flatList Animation 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TT_view} onPress={() => this.props.navigation.navigate('flatListAnimation2')}>
                        <Text style={styles.TT_Text}>flatList Animation 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TT_view} onPress={() => this.props.navigation.navigate('Skeleton_loader')}>
                        <Text style={styles.TT_Text}>Skeleton Loader</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TT_view} onPress={() => this.props.navigation.navigate('Skeleton_loader1')}>
                        <Text style={styles.TT_Text}>Skeleton Loader (on text)</Text>
                    </TouchableOpacity>
                </ScrollView>


            </SafeAreaView>
        )
    }
}
export default HomeScreen
const styles = StyleSheet.create({
    TT_view: {
        backgroundColor: '#d966ff',
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,

    },
    TT_Text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

