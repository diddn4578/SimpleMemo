import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
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
import {MoreModal, ViewTypeModal} from 'components/Modal';
import Header from 'components/Header';

const HomeScreen = (props: AppNavigation.Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const isFocused = useIsFocused();

  const [listViewType, setListViewType] = useState<number>(1);
  const [memo, setMemo] = useState<TypeMemo[]>([]);
  const [moreModalState, setMoreModalState] = useState<boolean>(false);
  const [viewTypeModalState, setViewTypeModalState] = useState<boolean>(false);

  useEffect(() => {
    if (isFocused) {
      const memos: Results<any> = findAllMemo();
      const memoList: TypeMemo[] = [];
      memos.map((item: TypeMemo) => memoList.push(item));
      setMemo(memoList);
    }
  }, [isFocused]);

  const listItemWidth =
    (Dimensions.get('screen').width - 40 - (listViewType - 1) * 20) /
    listViewType;

  const _renderItem = ({item, index}: {item: TypeMemo; index: number}) => {
    const listItemStyle =
      listViewType === 1
        ? [
            styles.flatlistItem,
            {
              height: listItemWidth / 3,
            },
          ]
        : [
            styles.flatlistItem,
            {marginRight: (index + 1) % listViewType !== 0 ? 0 : 20},
            {
              width: listItemWidth,
              height: listItemWidth,
            },
          ];
    return (
      <Pressable
        onPress={() => {
          console.log(item.id);
          props.navigation.navigate('DetailScreen', {id: item.id});
        }}
        style={listItemStyle}>
        <Text numberOfLines={4}>{item.content}</Text>
      </Pressable>
    );
  };

  return (
    <Flex style={backgroundStyle}>
      <SafeAreaView />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/*  */}
      <MoreModal
        visible={moreModalState}
        setVisible={setMoreModalState}
        onPressViewType={() => setViewTypeModalState(!viewTypeModalState)}
      />
      <ViewTypeModal
        visible={viewTypeModalState}
        setVisible={setViewTypeModalState}
        setListViewType={setListViewType}
      />
      {/*  */}
      <FlatList
        ListHeaderComponent={
          <Header
            RightComponent={[
              <Pressable
                style={{}}
                onPress={() => {
                  console.log('더보기');
                  setMoreModalState(!moreModalState);
                }}>
                <More />
              </Pressable>,
            ]}
          />
        }
        data={memo}
        renderItem={_renderItem}
        key={listViewType === 1 ? '#' : listViewType === 2 ? '@' : '!'}
        keyExtractor={item => item.id.toString()}
        numColumns={listViewType}
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
  flatlistPadding: {},
  flatlistItem: {
    marginLeft: 20,
    marginRight: 20,
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
