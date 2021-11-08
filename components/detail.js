import React from 'react';
import {
  Text,
  Image,
  View,
  FlatList,
  SafeAreaView,
  ScrollView
} from 'react-native';

import {gStyle} from '../styles/style';
import {DetailPage} from '../styles/style';
import LinearGradient from 'react-native-linear-gradient';


export const  Details = ({route}) => {
    return (
        <SafeAreaView>                    
                <LinearGradient colors={DetailPage.linearGradient.colors} style={DetailPage.linearGradient}> 
                <ScrollView>                         
                    <Image 
                        source = {{
                            uri: route.params.img
                        }}

                        style={DetailPage.img}
                    />
                    <View style={DetailPage.border}></View>
                    <View style={DetailPage.text.space}>
                        <Text style={DetailPage.text.bold}>Порода:</Text>
                        <Text style={DetailPage.text.description}>{route.params.fullDescription.breed}</Text>
                    </View>
                    <View style={DetailPage.text.space}>
                        <Text style={DetailPage.text.bold}>Возраст:</Text>
                        <Text style={DetailPage.text.description}>{route.params.fullDescription.age}</Text>
                    </View>
                    <View style={DetailPage.text.space}>
                        <Text style={DetailPage.text.bold}>Описание:</Text>
                        <Text style={DetailPage.text.description}>{route.params.fullDescription.info}</Text>
                    </View>
                    <View style={DetailPage.border}></View> 
                    <Text style={DetailPage.text.factText}>Рандомный факт:</Text>
                    <Text>{route.params.randomFact}</Text> 
                    </ScrollView>                                      
                </LinearGradient>              
        </SafeAreaView>
    )
};
 