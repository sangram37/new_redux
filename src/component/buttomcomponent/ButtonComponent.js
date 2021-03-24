import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import Colors from '../Style/Colors';

function ButtonComponent(props) {
  return (

    <TouchableOpacity
      onPress={() => props.btnAction()}
      disabled={props.btnLoader}
      style={styles(props).btnStyle}>
      <Text style={styles(props).btnText}>{props.btnText}</Text>
      {props.btnLoader ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : null}
    </TouchableOpacity>
  );
}

const styles = (props) =>
  StyleSheet.create({
    btnStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: props.btnBgColor || Colors.primary, //'transparent',
      paddingTop: props.btnPaddingTop || 15,
      paddingRight: props.btnPadingRight || 15,
      paddingBottom: props.btnPaddingBottom || 15,
      paddingLeft: props.btnPaddingLeft || 15,
      borderRadius: props.btnBorderRadius || 10,
      width: '100%'
    },
    btnText: {
      fontSize: props.txtSize || 16,
      color: props.txtColor || '#FFF',
      fontWeight: props.txtFontWeight || 'normal',
      textDecorationLine: props.txtDecoration || 'none', //underline
      marginRight: 5,
      letterSpacing: 1,
      fontFamily: 'Roboto-Regular'
    },
  });
export default ButtonComponent;
