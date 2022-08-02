import React, {useEffect, useRef, useState} from 'react';
import {BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';

type WebViewContainerProps = {
  handleClose: () => void;
};

const WebViewContainer = ({handleClose}: WebViewContainerProps) => {
  const [canGoBack, setCanGoBack] = useState<boolean>(false);
  const BASE_URL = 'https://dev.causw.net';
  let webViewRef = useRef<WebView>(null);

  const onPressHardwareBackButton = () => {
    if (webViewRef.current && canGoBack) {
      webViewRef.current.goBack();
    } else {
      handleClose();
    }
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener(
      'hardwareBackPress',
      onPressHardwareBackButton,
    );
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        onPressHardwareBackButton,
      );
    };
  }, [canGoBack]);

  return (
    <WebView
      pullToRefreshEnabled={true}
      startInLoadingState={true}
      allowsBackForwardNavigationGestures={true}
      source={{uri: BASE_URL}}
      overScrollMode={'never'}
      ref={webViewRef}
      injectedJavaScript={`
        (function() {
          function wrap(fn) {
            return function wrapper() {
              var res = fn.apply(this, arguments);
              window.ReactNativeWebView.postMessage('navigationStateChange');
              return res;
            }
          }
    
          history.pushState = wrap(history.pushState);
          history.replaceState = wrap(history.replaceState);
          window.addEventListener('popstate', function() {
            window.ReactNativeWebView.postMessage('navigationStateChange');
          });
        })();
    
        true;
      `}
      onMessage={({nativeEvent: state}) => {
        console.log(state.data);
        if (state.data === 'navigationStateChange') {
          // Navigation state updated, can check state.canGoBack, etc.
          setCanGoBack(() => {
            return state.canGoBack;
          });
        }
      }}
    />
  );
};

export default WebViewContainer;
