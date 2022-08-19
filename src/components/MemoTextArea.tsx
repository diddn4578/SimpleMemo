import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const MemoTextArea = ({
  value,
  setValue,
}: {
  value?: string;
  setValue?: (val: string) => void;
}) => {
  return (
    <TextInput
      style={styles.container}
      value={value}
      onChangeText={setValue}
      multiline={true}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 14,
    borderColor: 'black',
    flex: 1,
    textAlignVertical: 'top',
  },
});

export default MemoTextArea;
