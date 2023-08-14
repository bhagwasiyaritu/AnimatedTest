import React from 'react';
import {StatusBar, View} from 'react-native';
import {Colors} from './app/utils/colors';
import {Home} from './app/screens/home';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.statusBarColor} />
      <Home />
    </>
  );
};

export default App;
