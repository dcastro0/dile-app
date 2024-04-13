import { SafeAreaView, Text } from "react-native";
import { ScreenProps } from "../types/ScreenProps";

import { stylesCompleted } from "../styles/stylesCompleted";

const CompletedScreen: React.FC<ScreenProps> = () => {
  return (
    <SafeAreaView style={stylesCompleted.container}>
      <Text>Olá</Text>
    </SafeAreaView>
  );
};

export { CompletedScreen };
