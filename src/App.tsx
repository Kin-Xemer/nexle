import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Toast from 'react-native-toast-message';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
