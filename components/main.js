import React, {useCallback, useState} from 'react';
import {FlatList, SafeAreaView, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Items} from './catsDate';
import {Kart} from './catsComponent';

import {gStyle} from '../styles/style';
import {MainPage} from '../styles/style';

export const Main = ({navigation}) => {
  const [filtredItems, setFiltredItems] = useState(Items);
  const throwDate = useCallback(item => {
    navigation.navigate('Details', item);
  }, []);

  const handleChangeText = text => {
    const newFiltredItems = Items.filter(
      item =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.description.toLowerCase().includes(text.toLowerCase()),
    );
    setFiltredItems(newFiltredItems);
  };

  const props = {
    style: MainPage.title,
    placeholder: 'Представляю вам подборку котиков',
    onChangeText: handleChangeText,
  };

  return (
    <SafeAreaView style={gStyle.safeArea}>
      <LinearGradient
        colors={MainPage.linearGradient.colors}
        style={MainPage.linearGradient}>
        <TextInput {...props} />
        <FlatList
          data={filtredItems}
          renderItem={({item}) => (
            <Kart item={item} throwDate={throwDate}></Kart>
          )}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};
