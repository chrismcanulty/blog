import * as React from 'react';
import {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './navigation';
import {TailwindProvider} from 'tailwindcss-react-native';
import SplashScreen from 'react-native-splash-screen';
import {MyGlobalContext} from './context/User.Context';
import {Provider as PaperProvider} from 'react-native-paper';

export default function App() {
  const colorScheme = useColorScheme();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <MyGlobalContext.Provider value={{loading, setLoading}}>
      <TailwindProvider>
        <PaperProvider>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </PaperProvider>
      </TailwindProvider>
    </MyGlobalContext.Provider>
  );
}
