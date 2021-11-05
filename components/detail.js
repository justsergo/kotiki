import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Details ({route}) {
    return (
        <ScrollView>
            <Image source = {{
                        width: '100%',
                        height: 100,
                        uri: route.item.img
                    }}
            />
            <View>
                <Text>Порода:{route.item.fullDescription.breed}</Text>
                <Text>Возраст:{route.item.fullDescription.age}</Text>
                <Text>Описание:{route.item.fullDescription.info}</Text>
            </View>
            <View>
                <Text>Рандомный факт:{route.item.randomFact}</Text>
            </View>
        </ScrollView>
    )
}