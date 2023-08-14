import {FlatList, View, Text, ScrollView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../../components/header';
import {Button} from '../../components/button';
import {strings} from '../../utils/strings';
import {styles} from './styles';
import {generateColor} from '../../utils/helperFunction';

export const Home = () => {
  const [array, setArray] = useState([
    {id: '0', text: 0},
    {id: '1', text: 1},
  ]);

  const [finalArray, setFinalArray] = useState(array);
  const [index, setIndex] = useState(1);

  const addTab = () => {
    var newArray = [...array, {id: index, text: index + 1}];
    setIndex(index + 1);
    console.log(array.length);
    setFinalArray(newArray);
    setArray(newArray);
  };

  const removeTab = index => {
    if (index > -1) array.splice(index, 1);
    console.log('Index remove', index);
  };

  return (
    <View style={{flex: 1}}>
      <Header title={strings.circulartabStory} />

      <View style={{padding: 20}}>
        <Button
          btnTitle={strings.addNewTab}
          style={styles.addButtom}
          onPress={addTab}
        />
        <FlatList
          data={finalArray}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => (
            <Button
              btnTitle={`Tab ${item?.text}`}
              style={styles.buttonList}
              disabled={true}
            />
          )}
          keyExtractor={item => item}
        />
      </View>

      <FlatList
        data={finalArray}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item, index}) => (
          <View
            style={[styles.screenWrapper, {backgroundColor: generateColor()}]}>
            <Text style={styles.screenText}>{`Screen - ${item?.text}`}</Text>
            <Button
              btnTitle={strings.removeTab}
              style={styles.addButtom}
              onPress={() => removeTab(index)}
            />
          </View>
        )}
        keyExtractor={item => item}
      />
    </View>
  );
};
