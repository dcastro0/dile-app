import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParamList";

type NavBarProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  screen: string
};

export {NavBarProps}