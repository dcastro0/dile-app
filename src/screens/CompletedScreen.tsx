import { SafeAreaView, Text } from "react-native";
import { ScreenProps } from "../types/ScreenProps";
import { NavBar } from "../components/NavBar";
import { stylesCompleted } from "../styles/stylesCompleted";

const CompletedScreen: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={stylesCompleted.container}>
      <Text>Olá</Text>
      <NavBar navigation={navigation} screen="Completed" />
    </SafeAreaView>
  );
};

export { CompletedScreen };
