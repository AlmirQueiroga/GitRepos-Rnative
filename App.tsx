import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppContextProvider from './context';
import { Provider as PaperProvider } from 'react-native-paper'
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppContextProvider>
        <PaperProvider>
          <Navigation />
          <StatusBar />
        </PaperProvider>
      </AppContextProvider>
    );
  }
}
