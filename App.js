
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import RootStack from './app/compunents/RootStack';
export default class App extends Component {
  render() {
    return (
      <RootStack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
