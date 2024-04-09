import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParamList";

type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type ScreenProps = {
  navigation: ScreenNavigationProp;
};

export {ScreenProps}