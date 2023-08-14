import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({btnTitle, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
      <Text style={styles.btnTitle}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: '#024f42',
    padding: 12,
    borderRadius: 8,
  },
  btnTitle: {
    color: '#fff',
  },
});

export default Button;
