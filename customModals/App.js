import React, {useState} from 'react';
import Button from './app/components/buttons';
import {strings} from './app/utils/strings';
import {View, StyleSheet, Animated, Text} from 'react-native';
import {LeftModal} from './app/components/leftModal';
import {windowWidth} from './app/utils/constants';
import RightModal from './app/components/rightModal';
import BottomModal from './app/components/bottomModal';

const App = () => {
  const [leftValue] = useState(new Animated.Value(-1000));
  const [rightValue] = useState(new Animated.Value(windowWidth + 1000));
  const [bottomValue] = useState(new Animated.Value(-1000));

  const onPress = value => {
    Animated.timing(value, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const goBackWithAnimation = value => {
    Animated.timing(value, {
      toValue: -1000,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const goBackWithRightAnimation = value => {
    Animated.timing(value, {
      toValue: windowWidth + 1000,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const bottomPress = () => {
    onPress(bottomValue);
  };

  const leftOnePress = () => {
    onPress(leftValue);
  };

  const leftTwoPress = () => {
    onPress(leftValue);
  };

  const rightOnePress = () => {
    onPress(rightValue);
  };

  const rightTwoPress = () => {
    onPress(rightValue);
  };

  const LeftOneChildComponent = () => {
    return <Text style={styles.textChild}>I am from child left one</Text>;
  };

  const LeftTWoChildComponent = () => {
    return <Text style={styles.textChild}>I am from child left two</Text>;
  };

  const RightOneChildComponent = () => {
    return <Text style={styles.textChild}>I am from child Right one</Text>;
  };

  const RightTWoChildComponent = () => {
    return <Text style={styles.textChild}>I am from child Right two</Text>;
  };

  const BottomChildComponent = () => {
    return <Text style={styles.textChild}>I am from bottom child </Text>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button btnTitle={strings.leftOne} onPress={leftOnePress} />
        <Button btnTitle={strings.bottom} onPress={bottomPress} />
        <Button btnTitle={strings.rightOne} onPress={rightOnePress} />
      </View>
      <View style={styles.row}>
        <Button btnTitle={strings.leftTwo} onPress={leftTwoPress} />
        <Button btnTitle={strings.rightTwo} onPress={rightTwoPress} />
      </View>

      <LeftModal
        leftValue={leftValue}
        onBackdropPress={() => goBackWithAnimation(leftValue)}
        children={<LeftOneChildComponent />}
      />

      <LeftModal
        leftValue={leftValue}
        onBackdropPress={() => goBackWithAnimation(leftValue)}
        children={<LeftTWoChildComponent />}
      />

      <RightModal
        leftValue={rightValue}
        onBackdropPress={() => goBackWithRightAnimation(rightValue)}
        children={<RightOneChildComponent />}
      />

      <RightModal
        leftValue={rightValue}
        onBackdropPress={() => goBackWithRightAnimation(rightValue)}
        children={<RightTWoChildComponent />}
      />

      <BottomModal
        bottomValue={bottomValue}
        children={<BottomChildComponent />}
        nBackdropPress={() => goBackWithRightAnimation(bottomValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textChild: {
    color: '#ffffff',
    fontSize: 40,
    textAlign: 'center',
  },
});

export default App;
