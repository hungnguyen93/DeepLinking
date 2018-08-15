import React, { Component } from 'react';

import { Text, Image, View, StyleSheet } from 'react-native';

class Detail extends React.Component {
  static navigationOptions = {
    title: 'Detail',
  };
  render() {
    return (
      <View>
        <Text style={styles.text}>Screen Detail</Text>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 19,
    fontSize: 22,
  },
  image: {
    width: 400,
    height: 400,
  },
})

export default Detail;
