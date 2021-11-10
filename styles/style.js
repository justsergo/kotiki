import {StyleSheet} from 'react-native';

export const gStyle = StyleSheet.create({
  global: {
    flex: 1,
    alignItems: 'center',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    width: '90%',
    borderColor: '#404040',
    borderWidth: 3,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: '#dedca6d1',
  },
});

export const MainPage = StyleSheet.create({
  img: {
    width: '100%',
    height: 190,
  },

  text: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#404040',
    borderBottomWidth: 1,
    padding: 10,
    name: {
      fontWeight: 'bold',
    },
  },

  description: {
    padding: 15,
  },

  title: {
    color: '#fffdd5eb',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },

  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    colors: ['#22bac3', '#e6ae14'],
  },
});

export const DetailPage = StyleSheet.create({
  img: {
    width: '100%',
    height: 300,
    marginTop: 20,
    borderRadius: 20,
  },

  text: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#404040',
    borderBottomWidth: 1,
    padding: 10,
    space: {
      marginTop: 15,
    },
    description: {
      marginTop: 5,
    },
    bold: {
      color: '#fffdd5eb',
      fontSize: 17,
      fontWeight: '400',
    },
    factText: {
      color: '#fffdd5eb',
      fontSize: 18,
      fontWeight: '400',
      textAlign: 'center',
      marginBottom: 15,
    },
  },

  description: {
    padding: 15,
  },

  title: {
    marginTop: 10,
  },

  border: {
    marginTop: 15,
    marginBottom: 15,
    borderBottomWidth: 1,
    alignItems: 'center',
  },

  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    colors: ['#409dde', '#d5e7b3'],
  },
});
