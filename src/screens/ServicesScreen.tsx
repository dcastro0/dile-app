import React from "react";
import { ScreenProps } from "../types/ScreenProps";
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import { stylesServices } from "../styles/stylesServices";
import { CardServices } from "../components/CardServices";
import { Feather } from "@expo/vector-icons";

const ServicesScreen: React.FC<ScreenProps> = () => {
  const itensResolvidos = ["item1", "item2"];

  return (
    <ScrollView style={stylesServices.scroll}>
      <SafeAreaView style={stylesServices.container}>
        <CardServices
          title="Diagnóstico Completo"
          data="20/02/2024"
          itensResolvidos={itensResolvidos}
          valor={400.0}
        />
        <TouchableOpacity style={stylesServices.button}>
          <Feather name="plus" color="#fff" />
          <Text style={stylesServices.textWhite}>Adicionar Serviço</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export { ServicesScreen };
