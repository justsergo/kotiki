import React from 'react';
import {
  Text,
  Image,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {gStyle} from '../styles/style';
import {MainPage} from '../styles/style';
import {Items} from './catsItem';

export const Main = ({ navigation }) => {
    return (
        <SafeAreaView>
            <LinearGradient colors={MainPage.linearGradient.colors} style={MainPage.linearGradient}>                        
                    <Text style={MainPage.title}>Представляю вам подборку котов</Text>
                    <FlatList  data = {Items} renderItem={({item}) => (                          
                        <TouchableOpacity style={gStyle.global} onPress={()=> navigation.navigate('Details', item)}>
                            <View style={gStyle.container}>
                                <View style={MainPage.text}>
                                    <Text style={MainPage.text.name}>{ item.name}</Text>
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
                        </TouchableOpacity>                        
                    )}
                    />                
            </LinearGradient>  
        </SafeAreaView>
    )
};
 