import React from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { StoreName } from '../actions/HomeAction'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: '',
            midname: '',
            lastname: '',
        };

    }

    submit = (name) => {
        const { names, midname, lastname } = this.state
        if (names == '') {
            alert('enter fname')
        } else if (midname == '') {
            alert('enter mname')
        } else if (lastname == '') {
            alert('enter lname')
        } else
            this.props.StoreName(name)
    }
    render() {
        console.log("hii", this.props.StoreName)
        const { names, midname, lastname } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', paddingVertical: 10, fontSize: 20 }}> Add Name</Text>

                <TextInput placeholder={'fname'}
                    value={names}
                    onChangeText={(names) => this.setState({ names })}
                    style={{ alignSelf: 'center', borderBottomWidth: 2, width: '90%' }} />
                <TextInput placeholder={'mname'}
                    value={midname}
                    onChangeText={(midname) => this.setState({ midname })}
                    style={{ alignSelf: 'center', borderBottomWidth: 2, width: '90%' }} />
                <TextInput placeholder={'lname'}
                    value={lastname}
                    onChangeText={(lastname) => this.setState({ lastname })}
                    style={{ alignSelf: 'center', borderBottomWidth: 2, width: '90%' }} />
                <TouchableOpacity style={{ backgroundColor: 'red', margin: 10 }} onPress={() => this.submit(names + ' ' + midname + ' ' + lastname)}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff', paddingVertical: 10 }}>submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', margin: 10 }} onPress={() => this.props.navigation.navigate('Dashboard')}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff', paddingVertical: 10 }}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', margin: 10, }} onPress={() => this.props.navigation.navigate('New')}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff', paddingVertical: 10 }}>New</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', margin: 10, }} onPress={() => this.props.navigation.navigate('foodfrom')}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff', paddingVertical: 10 }}>Nishanta</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = ({ homelist }) => {
    console.log("homelist", homelist)
    const { input_name, loading } = homelist
    return {
        input_name,
        loading
    };
};
export default connect(mapStateToProps, {
    StoreName,
})(Home);
