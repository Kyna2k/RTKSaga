/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import BaseNavigation from './src/navigation/BaseNavigation';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingComponent } from './src/common/components/shared/Loading';





function App(): React.JSX.Element {
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
       <BaseNavigation/>
       <LoadingComponent/>

      </PersistGate>

    </Provider>
  );
}

export default App;
