import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { ServicesScreen } from "../screens/ServicesScreen";
import { CompletedScreen } from "../screens/CompletedScreen";

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Services" component={ServicesScreen} />
      <Stack.Screen name="Completed" component={CompletedScreen} />
    </Stack.Navigator>
  );
};

export { AppStack };
