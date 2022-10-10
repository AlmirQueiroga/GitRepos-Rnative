import React, { useState, useEffect } from 'react';
import AppContextProvider from './context';
import { Provider as PaperProvider } from 'react-native-paper'
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import WeFit from './components/wefit';
import styles from './styles';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [splash, setSplash] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setSplash(false), 2000)
  }, [])


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
      {
        !splash ? (
        <AppContextProvider>
          <PaperProvider>
            <Navigation />
          </PaperProvider>
        </AppContextProvider>
        ) : (
          <WeFit fontSize={60} logoStyle={styles.splash}/>
        )
        }
      </>
    );
  }
}
