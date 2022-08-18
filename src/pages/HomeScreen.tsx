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
import PlusShape from '../components/PlusShape';
import realm, {TypeMemo} from '../db';
import * as AppNavigation from './AppNavitation';

const HomeScreen = (props: AppNavigation.Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const isFocused = useIsFocused();

  const [memo, setMemo] = useState<TypeMemo[]>([]);

  useEffect(() => {
    if (isFocused) {
      const memos: Results<any> = realm.objects('Memo').sorted('id', true);
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
        }}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 10,
          padding: 14,
        }}>
        <Text numberOfLines={3}>{item.content}</Text>
      </Pressable>
    );
  };

  return (
    <View style={[{flex: 1}, backgroundStyle]}>
      <SafeAreaView />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* NOTE Header */}
      <View style={{height: 50}}></View>
      {/* NOTE Header */}
      <FlatList
        data={memo}
        renderItem={_renderItem}
        keyExtractor={item => item.id.toString()}
        style={{paddingLeft: 20, paddingRight: 20}}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 80}} />}
      />
      {/*  */}
      <Pressable
        style={styles.writeBtn}
        onPress={() => {
          console.log('add');
          props.navigation.navigate('WriteScreen');
        }}>
        <PlusShape />
      </Pressable>
      {/*  */}
      <SafeAreaView />
    </View>
  );
};

const styles = StyleSheet.create({
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
