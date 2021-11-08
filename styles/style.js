import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export const gStyle = StyleSheet.create ({
    global: {
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#413d4c',
    },

    container: {
        display:'flex',
        flexDirection: 'column',
        width:'90%',
        borderColor:'#404040',
        borderWidth: 3,
        borderRadius: 8,
        marginTop: 20,
        backgroundColor: '#f09ca4',
    },

   

})

export const MainPage = StyleSheet.create ({
    
    img: {
        width: '100%',
        height: 130,
    },

    text: {
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomColor:'#404040',
        borderBottomWidth: 1,
        padding: 10,
    },

    description: {
        padding: 15
    },

    title: {
        marginTop: 10
    }
})

export const DetailPage = StyleSheet.create ({
     img: {
        width: '100%',
        height: 200,
    },

    text: {
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        borderBottomColor:'#404040',
        borderBottomWidth: 1,
        padding: 10,
    },

    description: {
        padding: 15
    },

    title: {
        marginTop: 10
    }
})



