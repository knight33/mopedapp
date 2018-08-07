import React from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { StyleSheet } = React;
const isTablet = DeviceInfo.isTablet();

module.exports = StyleSheet.create({
  h1: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: isTablet ? 30 : 21,
    lineHeight: isTablet ? 36 : 24,
  },
  h2: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: isTablet ? 26 : 18,
    lineHeight: isTablet ? 32 : 24,
    marginBottom: 0,
  },
  p: {
    color: 'white',
    fontFamily: 'Lato',
    fontSize: isTablet ? 22 : 14,
    lineHeight: isTablet ? 32 : 22,
  },
  a: {
    color: 'white',
    textDecorationColor: 'white',
    textDecorationLine: 'underline',
  },
});
