import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const PlusBtn = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{position: 'absolute'}}>
        <View
          style={{
            width: 20,
            height: 4,
            backgroundColor: 'black',
          }}
        />
      </View>
      <View style={{position: 'absolute'}}>
        <View
          style={{
            width: 4,
            height: 20,
            backgroundColor: 'black',
          }}
        />
      </View>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[{flex: 1}, backgroundStyle]}>
      <SafeAreaView />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* NOTE Header */}
      <View style={{height: 50}}></View>
      {/* NOTE Header */}
      {/* <View style={{flex: 1, backgroundColor: 'pink'}}></View> */}
      {/*  */}
      <Pressable
        style={{
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',

          backgroundColor: 'white',
          width: 50,
          height: 50,
          borderRadius: 50,
          elevation: 5,
        }}
        onPress={() => {
          console.log('add');
        }}>
        <PlusBtn />
      </Pressable>
      {/*  */}
      <SafeAreaView />
    </View>
  );
};

export default App;
