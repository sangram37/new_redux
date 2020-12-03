import React, {Component} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  TextInput,
  FlatList
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux'
import {deletefood} from './actions/food';

class foodlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props)
    return (
      <View style={{
        flex: 1
      }}>
      {/* <Text>hii</Text> */}
        <FlatList
          data={this.props.foodlist}
          keyExtractor={(item, index) => item.key.toString()}
          renderItem={({item}) => {
          return (
            <View>
              <Text>{item.name}</Text>
              <TouchableOpacity onPress={() => this.props.deletefood(item.key)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          )
        }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = ({food}) => {
  console.log(food)
  const {foodlist} = food
  return {
  foodlist
};
};


export default connect(mapStateToProps, {deletefood})(foodlist);