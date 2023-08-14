import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const Button = ({btnTitle, onPress, style, disabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, style]}
      disabled={disabled}>
      <Text style={styles.btnTitle}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};
