import { useFonts, Aldrich_400Regular } from "@expo-google-fonts/aldrich";
import { AuthProvider } from "./src/contexts/Auth";
import { Router } from "./src/routes/Router";
import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

const App = () => {

  
  const [fontsLoaded, fontError] = useFonts({
    Aldrich_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AuthProvider>
      <Router />
      <StatusBar style='dark' />
    </AuthProvider>
  );
};

export default App;
