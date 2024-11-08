import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { components } from './src/components';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import StackNavigator from './src/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import firebase from './firsebase.config'
import { PermissionsAndroid } from 'react-native';

const queryClient = new QueryClient();

const App = () => {
  async function requestUserPermission() {
    const authStatus = await firebase.messaging().requestPermission();
    const enabled =
      authStatus === firebase.messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === firebase.messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      // console.log('Authorization status:', authStatus);
    }
  }

  const getToken = async () => {
    const token = await firebase.messaging().getToken();
    // console.log('Token:', token);
  }

  useEffect(() => {
    requestUserPermission();
    getToken();
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={<components.Loader />} persistor={persistor}>
            <NavigationContainer>
              <StackNavigator />
            </NavigationContainer>
          </PersistGate>
        </Provider>
        <components.FlashMessage />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
