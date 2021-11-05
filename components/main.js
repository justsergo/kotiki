import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  FlatList,
  TouchableWithoutFeedback,
  TouchableHighlightBase,
} from 'react-native';

import {Items} from './catsItem'


export const Main = ({ navigation }) => {
    return (
        <ScrollView>
            <Text>Представляю вам подборку котов</Text>
            <FlatList data = {Items} renderItem={({item}) => (
                <TouchableHighlightBase /*onPress={()=> navigation.navigate('Detail', item)}*/>
                    <View>
                    <Text>{ item.name}</Text>
                    <Text>{ item.tittle}</Text>
                    </View>
                    <Image source = {{
                        width: '100%',
                        height: 100,
                        uri: item.img
                    }}
                    />
                    <Text>{ item.description}</Text>
                </TouchableHighlightBase>
            )}
            />
        </ScrollView>
    )
};
 