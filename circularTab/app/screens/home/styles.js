import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  addButtom: {
    marginVertical: 40,
  },
  buttonList: {
    marginHorizontal: 5,
  },
  screen: {
    backgroundColor: 'red',
    width: '100%',
  },
  screenWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    width:windowWidth,
    flex:1
  },
  screenText: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: '900',
  },
});
