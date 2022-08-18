import React, {useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
//
import * as AppNavigation from './AppNavitation';
import {createMemo} from '../db/memo';
import {Results} from 'realm';
import realm, {TypeMemo} from '../db';

const WriteScreen = (props: AppNavigation.Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [textVal, setTextVal] = useState<string>('');

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

  const [idx, setIdx] = useState<number | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        let localMemo: Results<TypeMemo> = await realm.objects('Memo');
        console.log(localMemo);
        setIdx(localMemo.length + 1);
      } catch (e) {
        console.log('유저데이터가 없어요');
      }
    };
    getUser();
  }, []);

  return (
    <View style={[{flex: 1}, backgroundStyle]}>
      <SafeAreaView />
      <View style={{flex: 1, padding: 20}}>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 5,
            padding: 14,
            borderColor: 'black',
            flex: 1,
            textAlignVertical: 'top',
          }}
          value={textVal}
          onChangeText={(txt: string) => {
            setTextVal(txt);
          }}
          multiline={true}
        />
        <Pressable
          style={{
            alignSelf: 'center',
            backgroundColor: 'white',
            width: 80,
            borderRadius: 25,
            elevation: 5,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 12,
            marginTop: 16,
            display: textVal === '' ? 'none' : 'flex',
          }}
          // onPress={() => {
          //   console.log(textVal);
          //   console.log('alert and (save or cancel)');
          // }}
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
          <Text style={{fontWeight: 'bold', color: 'black'}}>SAVE</Text>
        </Pressable>
      </View>

      <SafeAreaView />
    </View>
  );
};

export default WriteScreen;
