import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import AppNavigation from 'AppNavitation';

const App = () => {
  useEffect(() => {
    Realm.open({}).then(realm => {
      console.log('Realm is located at: ' + realm.path);
    });
  }, []);
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
