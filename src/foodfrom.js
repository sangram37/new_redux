import React, {Component} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  TextInput
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux'
import {addfood} from './actions/food';

class foodfrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: null
    };
  }

  render() {
    console.log(this.state.foodlist)
    return (
      <View style={{
        flex: 1
      }}>
        <Text>Enter Food</Text>
        <TextInput
          value={this.state.food}
          placeholder='name of food'
          onChangeText={(food) => this.setState({food})}/>
        <TouchableOpacity onPress={() => this.props.addfood(this.state.food)}>
          <Text>submit food</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('foodlist')}>
          <Text>food list
          </Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps, {addfood}  )(foodfrom);