import React from 'react';
import {StyleSheet} from 'react-native';
import {Modal, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {Flex} from './Styles';

export const RightModal = ({children}: {children?: React.ReactNode}) => {
  return (
    <View style={styles.rightModalContainer}>
      <View style={styles.rightModal}>{children}</View>
    </View>
  );
};

export const ModalFrame = ({
  visible,
  setVisible,
  children,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}) => {
  return (
    <Modal transparent visible={visible}>
      {/* <Flex style={styles.modalBackground}> */}
      <Flex>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalBackgroundClick}
          onPress={() => {
            console.log('닫기');
            setVisible(!visible);
          }}>
          {children}
        </TouchableOpacity>
      </Flex>
    </Modal>
  );
};

export const MoreModal = ({
  visible,
  setVisible,
  onPressViewType,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onPressViewType: () => void;
}) => {
  return (
    <ModalFrame visible={visible} setVisible={setVisible}>
      <RightModal>
        <Pressable
          onPress={() => {
            setVisible(!visible);
            onPressViewType();
          }}
          style={{
            padding: 15,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Text style={{color: 'black'}}>{'보기 방식'}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            // console.log(item);
          }}
          style={{
            padding: 15,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Text style={{color: 'black'}}>{'글씨 크기'}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            // console.log(item);
          }}
          style={{
            padding: 15,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Text style={{color: 'black'}}>{'북마크 상단에 고정'}</Text>
        </Pressable>
      </RightModal>
    </ModalFrame>
  );
};

export const ViewTypeModal = ({
  visible,
  setVisible,
  setListViewType,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setListViewType: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <ModalFrame visible={visible} setVisible={setVisible}>
      <RightModal>
        <Pressable
          onPress={() => {
            setListViewType(1);
            setVisible(!visible);
          }}
          style={{
            padding: 15,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Text style={{color: 'black'}}>{'크게 보기'}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setListViewType(2);
            setVisible(!visible);
          }}
          style={{
            padding: 15,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Text style={{color: 'black'}}>{'중간 보기'}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setListViewType(3);
            setVisible(!visible);
          }}
          style={{
            padding: 15,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Text style={{color: 'black'}}>{'작게 보기'}</Text>
        </Pressable>
      </RightModal>
    </ModalFrame>
  );
};

const styles = StyleSheet.create({
  modalBackground: {backgroundColor: 'rgba(0,0,0,0.1)'},
  modalBackgroundClick: {flex: 1},
  rightModalContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
  },
  rightModal: {
    position: 'absolute',
    right: 16,
    top: 12,
    backgroundColor: 'white',
    borderRadius: 15,

    elevation: 5,
  },
});
