import React from "react";
import { ScreenProps } from "../types/ScreenProps";
import { SafeAreaView, Text } from "react-native";
import { stylesServices } from "../styles/stylesServices";

const ServicesScreen: React.FC<ScreenProps> = () => {
  return (
    <SafeAreaView style={stylesServices.container}>
      <Text>Olá</Text>
    </SafeAreaView>
  );
};

export { ServicesScreen };
