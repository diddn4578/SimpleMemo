import React from 'react';
import {Modal, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {Flex} from './Styles';

export const ModalTest = () => {
  return (
    <View style={{position: 'absolute', top: 0, right: 0, display: 'flex'}}>
      <View
        style={{
          position: 'absolute',
          right: 12,
          top: 12,
          backgroundColor: 'white',
          borderRadius: 15,

          elevation: 5,
        }}>
        {[1, 2, 3].map(item => {
          return (
            <Pressable
              onPress={() => {
                console.log('즐겨찾기를 상단에 고정');
              }}
              key={item}
              style={{
                padding: 15,
                paddingLeft: 20,
                paddingRight: 20,
              }}>
              <Text style={{color: 'black'}}>즐겨찾기를 상단에 고정</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export const ModalFrame = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal transparent visible={visible}>
      <Flex style={{backgroundColor: 'rgba(0,0,0,0.3)'}}>
        <TouchableOpacity
          activeOpacity={1}
          style={{flex: 1}}
          onPress={() => {
            console.log('닫기');
            setVisible(!visible);
          }}>
          <ModalTest />
        </TouchableOpacity>
      </Flex>
    </Modal>
  );
};

export const MoreModal = () => {
  return <></>;
};
