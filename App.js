import React from 'react'
import { ThemeProvider } from '@rneui/themed'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from '@navigation/RootNavigator'
// import * as SplashScreen from 'expo-splash-screen'
import theme from '@constants/theme'
// import { useFonts } from 'expo-font'

/* await SplashScreen.preventAutoHideAsync() */

export default function App () {
  /* const [fontsLoaded] = useFonts({
    Inter_400Regular: require('@assets/fonts/Inter-Regular.ttf'),
    Inter_600SemiBold: require('@assets/fonts/Inter-SemiBold.ttf')
  });
  async function loadFonts () {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }
  useEffect(() => {
    loadFonts()
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  } */
  return (
    <ThemeProvider theme={theme}>
    <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </ThemeProvider>
  )
}
