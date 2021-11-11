import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';

import {gStyle} from '../styles/style';
import {MainPage} from '../styles/style';

export const Kart = props => {
  const item = props.item;
  const throwDate = props.throwDate;
  return (
    <TouchableOpacity style={gStyle.global} onPress={() => throwDate(item)}>
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
  );
};
