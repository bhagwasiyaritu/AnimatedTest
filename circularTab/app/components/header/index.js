import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {strings} from '../../utils/strings';
import {styles} from './styles';

export const Header = ({title}) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity>
        <Text style={styles.backText}>{strings.back}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
