import React from "react";
import { ScreenProps } from "../types/ScreenProps";
import { SafeAreaView, Text } from "react-native";
import { NavBar } from "../components/NavBar";
import { stylesServices } from "../styles/stylesServices";

const ServicesScreen: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={stylesServices.container}>
      <Text>Olá</Text>
      <NavBar screen="Services" navigation={navigation} />
    </SafeAreaView>
  );
};

export { ServicesScreen };
