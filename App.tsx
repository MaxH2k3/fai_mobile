import React from 'react';
import { Provider } from 'react-redux';
import { components } from './src/components';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import StackNavigator from './src/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
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
