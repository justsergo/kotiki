import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Main} from './components/main';
import {Details} from './components/detail';


const Stack = createNativeStackNavigator();

export default function Navigate () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{title: 'Котики'}}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{title: 'Вот котик'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
