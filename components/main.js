import React, {useCallback, useState} from 'react';
import {
  Text,
  Image,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {gStyle} from '../styles/style';
import {MainPage} from '../styles/style';
import {Items} from './catsItem';

export const Main = ({navigation}) => {
  const [filtredItems, setFiltredItems] = useState(Items);
  const throwDate = useCallback(item => {
    navigation.navigate('Details', item);
  }, []);

  const handleChangeText = text => {
    const newFiltredItems = Items.filter(
      item => item.name.indexOf(item.name) || item.title.indexOf(item.title),
    );
    setFiltredItems(newFiltredItems);
  };

  return (
    <SafeAreaView>
      <LinearGradient
        colors={MainPage.linearGradient.colors}
        style={MainPage.linearGradient}>
        <TextInput
          style={MainPage.title}
          placeholder="Представляю вам подборку котиков"
          onChangeText={handleChangeText}
        />

        <FlatList
          data={filtredItems}
          renderItem={({item}) => (
            <TouchableOpacity
              style={gStyle.global}
              onPress={
                () => throwDate(item)
                /* () => navigation.navigate('Details', item) */
              }>
              <View style={gStyle.container}>
                <View style={MainPage.text}>
                  <Text style={MainPage.text.name}>{item.name}</Text>
                  <Text>{item.title}</Text>
                </View>
                <Image
                  source={{
                    uri: item.img,
                  }}
                  style={MainPage.img}
                />
                <Text style={MainPage.description}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};
