import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Delete } from '../actions/HomeAction'
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.input_name
    };

  }
  onDeleteCall = (key) => {
    Alert.alert(
      'Logout',
      'Are you sure to delete',
      [
        { text: 'Yes', onPress: () => this.submit(key) },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
      ],
      { cancelable: false })
  }
  submit = (key) => {

    this.props.Delete(key)
  }
  render() {
    console.log(this.state.input_name)
    return (
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, paddingTop: 10 }}>

        {/* <View>
        {this.state.name.map((item,key)=>{
            return <View key={key} >
                <Text>{item.book}</Text>
                <TouchableOpacity  onPress={()=>this.props.Delete(item.key)}>
                <Text>hiiiiiiiii</Text>
            </TouchableOpacity>
            </View>
        })}
        </View> */}
        <View style={{

        }}>
          <FlatList
            data={this.props.input_name}
            keyExtractor={(item, index) => item.key.toString()}
            renderItem={({ item }) => {
              return (

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
                  <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '900' }}>{item.book}</Text>
                  <TouchableOpacity onPress={() => this.onDeleteCall(item.key)} style={{ backgroundColor: 'red' }}>
                    <Text style={{ textAlign: 'center', padding: 5, color: '#FFF', paddingHorizontal: 10 }}>Delete</Text>
                  </TouchableOpacity>
                </View>
              )
            }} />
        </View>

      </SafeAreaView>
    )
  }
}

const mapStateToProps = ({ homelist }) => {
  const { input_name } = homelist
  return {
    input_name,

  };
};
export default connect(mapStateToProps, {
  Delete
})(Dashboard);