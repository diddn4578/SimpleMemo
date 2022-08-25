import React, {useEffect, useState} from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Results} from 'realm';
import MemoTextArea from 'components/MemoTextArea';
import {Flex} from 'components/Styles';
import {TypeMemo} from 'db';
import {findOneMemo, updateMemo} from 'db/memo';
import * as AppNavigation from 'AppNavitation';

const DetailScreen = (props: AppNavigation.Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [memo, setMemo] = useState<TypeMemo | null>(null);
  const [newContent, setNewContent] = useState<string>('');

  useEffect(() => {
    try {
      const memos: Results<any> = findOneMemo(props.route.params?.id);
      setMemo(memos?.[0]);
      setNewContent(memos?.[0]?.content);
    } catch (e) {
      Alert.alert('', '잘못된 접근입니다.');
    }
  }, []);

  const saveBtnDisplay: {display: 'none' | 'flex'} = {
    display: memo?.content === newContent ? 'none' : 'flex',
  };

  return (
    <Flex style={backgroundStyle}>
      <SafeAreaView />
      <Flex style={styles.container}>
        <MemoTextArea value={newContent} setValue={setNewContent} />
        <Pressable
          style={[styles.updateContainer, saveBtnDisplay]}
          onPress={() => {
            if (memo) {
              updateMemo(memo.id, newContent);
              props.navigation.goBack();
            }
          }}>
          <Text style={styles.updateFont}>UPDATE</Text>
        </Pressable>
      </Flex>

      <SafeAreaView />
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  updateContainer: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 90,
    borderRadius: 25,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginTop: 16,
  },
  updateFont: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default DetailScreen;
