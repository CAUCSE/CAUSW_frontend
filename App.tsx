import React from 'react';

import {Alert, BackHandler, SafeAreaView} from 'react-native';
import WebViewContainer from './src/WebViewContainer';
const App = () => {
  //push
  return (
    <>
      <SafeAreaView style={{height: 0}}></SafeAreaView>
      <WebViewContainer
        handleClose={() => {
          Alert.alert('종료', '앱을 종료하시겠습니까?', [
            {
              text: '아니오',
              onPress: () => null,
            },
            {
              text: '네',
              onPress: () => BackHandler.exitApp(),
            },
          ]);
        }}
      />
    </>
  );
};

export default App;
