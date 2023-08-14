import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.buttonBg,
    padding: 12,
    borderRadius: 8,
  },
  btnTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
