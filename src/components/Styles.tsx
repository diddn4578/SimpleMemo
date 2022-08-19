import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export const Flex: React.FC<Props> = ({style, children}: Props) => {
  return <View style={[styles.flexOne, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});
