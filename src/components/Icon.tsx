import React from 'react';
import {StyleSheet, View} from 'react-native';

const IconContainerSize = 48;

const MoreSize = 18;
const MorePointSize = 3;

export const More = () => {
  return (
    <View style={styles.iconContainer}>
      <View style={styles.moreContainer}>
        <View style={styles.morePoint} />
        <View style={styles.morePoint} />
        <View style={styles.morePoint} />
      </View>
    </View>
  );
};

const PlusColor = 'black';
const PlusSize = 20;
const PlusWidth = 4;

export const Plus = () => {
  return (
    <View style={styles.plusContainer}>
      <View style={styles.plusFrame}>
        <View style={styles.plusVertical} />
      </View>
      <View style={styles.plusFrame}>
        <View style={styles.plusHorizontal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: IconContainerSize,
    height: IconContainerSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreContainer: {
    justifyContent: 'space-around',
    width: MoreSize,
    height: MoreSize,
    alignItems: 'center',
  },
  morePoint: {
    width: MorePointSize,
    height: MorePointSize,
    backgroundColor: 'black',
  },
  plusContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusFrame: {position: 'absolute'},
  plusVertical: {
    width: PlusSize,
    height: PlusWidth,
    backgroundColor: PlusColor,
  },
  plusHorizontal: {
    width: PlusWidth,
    height: PlusSize,
    backgroundColor: PlusColor,
  },
});
