// import 'react-native-gesture-handler';
import * as React from 'react';
import {View} from 'react-native'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import AsyncStorage from '@react-native-community/async-storage';

import ReduxThunk from 'redux-thunk';
import rootReducer from './src/reducers';
import Router from './src/Router'

export default function App() {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: []
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  let store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk))
  let persistor = persistStore(store)

  // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <View style={{
      flex: 1
    }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router/>
        </PersistGate>
      </Provider>
    </View>
  );
}