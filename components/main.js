import React from 'react';
import {
  Text,
  Image,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {gStyle} from '../styles/style';
import {MainPage} from '../styles/style';
import {DetailPage} from '../styles/style';
import {Items} from './catsItem';



export const Main = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={gStyle.global}>           
                <Text style={MainPage.title}>Представляю вам подборку котов</Text>
                <FlatList data = {Items} renderItem={({item}) => (
                    <TouchableOpacity /*onPress={()=> navigation.navigate('Detail', item)}*/>
                        <View style={gStyle.container}>
                            <View style={MainPage.text}>
                                <Text>{ item.name}</Text>
                                <Text>{ item.title}</Text>
                            </View>
                            <Image 
                                source = {{
                                    uri: item.img
                                }}

                                style={MainPage.img}
                            />
                            <Text style={MainPage.description}>{ item.description}</Text>
                        </View>

                        {/* <View style={gStyle.container}>                            
                            <Image 
                                source = {{
                                    uri: item.img
                                }}
                                style={DetailPage.img}
                            />
                            <View >
                                <Text>Порода:{item.fullDescription.breed}</Text>
                                <Text>Возраст:{item.fullDescription.age}</Text>
                                <Text>Описание:{item.fullDescription.info}</Text>
                            </View>
                            <View>
                                <Text>Рандомный факт:{item.randomFact}</Text>
                            </View>
                        </View> */}
                    </TouchableOpacity>
                )}
                />
            </View>    
        </SafeAreaView>
    )
};
 