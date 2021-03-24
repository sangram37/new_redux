import React from 'react';
import { StyleSheet, Image, TextInput } from 'react-native';
import { Item, Icon, View } from 'native-base';
import Colors from '../Style/Colors';

function InputComponent(props) {
  return (
    <View
      style={{
        backgroundColor: props.backgroundColor,
        marginTop: props.marginTop || 30,
        opacity: 1,
        borderWidth: 2,
        borderColor: props.borderColor || Colors.color_red,
        borderRadius: props.borderRadius || 50,

      }}>
      <TextInput
        style={{
          color: Colors.color_red,
          marginLeft: 15,
          alignItems: 'center',
          fontSize: props.fontSize || 16,
          justifyContent: 'center',
          fontFamily: 'Roboto-Regular'
        }}
        editable={props.editable}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        placeholderTextColor={Colors.color_red}
        value={props.value}
        secureTextEntry={props.isSecureTxt || false}
        keyboardType={props.keyboardType || 'default'}
        autoCapitalize={props.autoCapitalize || 'words'}
        onChangeText={(txt) => props.onChangeHandle(props.name, txt)}

      // {props.btnLoader ? (
      //   <ActivityIndicator size="small" color="#f00" />
      // ) : null}
      />

    </View>
  );
}

export default InputComponent;

const styles = StyleSheet.create({});
