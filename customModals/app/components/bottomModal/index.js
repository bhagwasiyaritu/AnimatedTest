import {View, Animated, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../../utils/constants';

const BottomModal = ({bottomValue, children, onBackdropPress}) => {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  return (
    <AnimatedTouchable
      activeOpacity={1}
      onPress={onBackdropPress}
      style={[styles.container, {transform: [{translateY: bottomValue}]}]}>
      <View style={styles.contentWrapper}>{children}</View>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    zIndex: 999,
    width: windowWidth,
    height: windowHeight,
  },
  contentWrapper: {
    backgroundColor: '#51968b',
    width: windowWidth,
    height: windowHeight*0.5,
    justifyContent: 'center',
    padding: 20,
    bottom: 0,
    position: 'absolute',
  },
});

export default BottomModal;
