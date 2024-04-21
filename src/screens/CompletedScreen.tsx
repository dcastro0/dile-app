import { SafeAreaView, ScrollView, Text } from "react-native";
import { ScreenProps } from "../types/ScreenProps";

import { stylesCompleted } from "../styles/stylesCompleted";
import { CardCompleted } from "../components/CardCompleted";

const CompletedScreen: React.FC<ScreenProps> = () => {
  return (
    <ScrollView style={stylesCompleted.scroll}>
      <SafeAreaView style={stylesCompleted.container}>
        <CardCompleted data="20/01/2023" title="Revisão Componente de Freio" />
      
      </SafeAreaView>
    </ScrollView>
  );
};

export { CompletedScreen };
