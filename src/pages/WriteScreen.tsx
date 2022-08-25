import React, {useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Results} from 'realm';
//
import * as AppNavigation from 'AppNavitation';
import {createMemo} from 'db/memo';
import realm, {TypeMemo} from 'db';
import MemoTextArea from 'components/MemoTextArea';
import {Flex} from 'components/Styles';

const WriteScreen = (props: AppNavigation.Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [textVal, setTextVal] = useState<string>('');
  const [idx, setIdx] = useState<number | null>(null);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        // {text: 'YES', onPress: () => BackHandler.exitApp()},
        {text: 'YES', onPress: () => props.navigation.goBack()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    const memos: Results<TypeMemo> = realm.objects('Memo');
    setIdx(memos.length + 1);
  }, []);

  const saveBtnDisplay: {display: 'none' | 'flex'} = {
    display: textVal === '' ? 'none' : 'flex',
  };

  return (
    <Flex style={backgroundStyle}>
      <SafeAreaView />
      <Flex style={styles.container}>
        <MemoTextArea value={textVal} setValue={setTextVal} />
        <Pressable
          style={[styles.saveContainer, saveBtnDisplay]}
          onPress={() => {
            if (idx) {
              console.log(idx);
              createMemo(idx, textVal);
            } else {
              console.log('정상적인 접근이 아닙니다.');
              return;
            }

            props.navigation.goBack();
          }}>
          <Text style={styles.saveFont}>SAVE</Text>
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
  saveContainer: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 80,
    borderRadius: 25,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginTop: 16,
  },
  saveFont: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default WriteScreen;
