import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Results} from 'realm';
import * as AppNavigation from 'AppNavitation';
import {TypeMemo} from 'db';
import {findAllMemo} from 'db/memo';
import {More, Plus} from 'components/Icon';
import {Flex} from 'components/Styles';
import {ModalFrame, ModalTest} from 'components/Modal';

const HomeScreen = (props: AppNavigation.Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const isFocused = useIsFocused();

  const [memo, setMemo] = useState<TypeMemo[]>([]);
  const [moreModalState, setMoreModalState] = useState<boolean>(false);

  useEffect(() => {
    if (isFocused) {
      const memos: Results<any> = findAllMemo();
      const memoList: TypeMemo[] = [];
      memos.map((item: TypeMemo) => memoList.push(item));
      setMemo(memoList);
    }
  }, [isFocused]);

  const _renderItem = ({item}: {item: TypeMemo}) => {
    return (
      <Pressable
        onPress={() => {
          console.log(item.id);
          props.navigation.navigate('DetailScreen', {id: item.id});
        }}
        style={styles.flatlistItem}>
        <Text numberOfLines={3}>{item.content}</Text>
      </Pressable>
    );
  };

  return (
    <Flex style={backgroundStyle}>
      <SafeAreaView />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* NOTE Header */}
      <View
        style={{
          height: 50,
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingLeft: 14,
          paddingRight: 14,
          alignItems: 'center',
          zIndex: 30,
        }}>
        <View style={{width: 24, height: 50}}></View>
        <View style={{flex: 1, height: 50}}></View>
        <View
          style={{
            width: 24,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable
            style={{}}
            onPress={() => {
              console.log('더보기');
              setMoreModalState(!moreModalState);
            }}>
            <More />
          </Pressable>
          <ModalFrame visible={moreModalState} setVisible={setMoreModalState} />
        </View>
      </View>
      {/* NOTE Header */}
      <FlatList
        data={memo}
        renderItem={_renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.flatlistPadding}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={styles.flatlistFooterHeight} />}
      />
      {/*  */}
      <Pressable
        style={styles.writeBtn}
        onPress={() => {
          console.log('add');
          props.navigation.navigate('WriteScreen');
        }}>
        <Plus />
      </Pressable>
      {/*  */}
      <SafeAreaView />
    </Flex>
  );
};

const styles = StyleSheet.create({
  flatlistPadding: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  flatlistItem: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 14,
  },
  flatlistFooterHeight: {
    height: 80,
  },
  writeBtn: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',

    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
    elevation: 5,
  },
});

export default HomeScreen;
