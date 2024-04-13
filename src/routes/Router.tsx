import { NavigationContainer } from "@react-navigation/native";
import { AppTabRoutes } from "./AppTab.Routes";
import { AuthStack } from "./AuthStack";
import { Text, View } from "react-native";
import { useAuth } from "../hooks/useAuth";

const Router = () => {
  const { authData, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Carregando aplicativo...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {authData ? <AppTabRoutes /> : <AuthStack />}
    </NavigationContainer>
  );
};

export { Router };
