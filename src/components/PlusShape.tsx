import React from 'react';
import {StyleSheet, View} from 'react-native';

const PlusColor = 'black';
const PlusSize = 20;
const PlusWidth = 4;

const PlusShape = () => {
  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.vertical} />
      </View>
      <View style={styles.frame}>
        <View style={styles.horizontal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame: {position: 'absolute'},
  vertical: {
    width: PlusSize,
    height: PlusWidth,
    backgroundColor: PlusColor,
  },
  horizontal: {
    width: PlusWidth,
    height: PlusSize,
    backgroundColor: PlusColor,
  },
});

export default PlusShape;
