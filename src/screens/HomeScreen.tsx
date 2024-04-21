import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesHome } from "../styles/stylesHome";
import { CardCanceled } from "../components/CardsCanceled";
import { CardCompletedServices } from "../components/CardCompletedServices";
import { CardInProgress } from "../components/CardInProgress";
import { MyCard } from "../components/MyCard";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { ScreenProps } from "../types/ScreenProps";


const HomeScreen: React.FC<ScreenProps> = () => {
  return (
    <SafeAreaView style={stylesHome.container}>
    
      <View style={stylesHome.line}></View>
      <View style={stylesHome.cards}>
        <CardCompletedServices />
        <CardInProgress />
        <CardCanceled />
      </View>
      <View style={stylesHome.line}></View>

      <View style={stylesHome.cardsColumn}>
        <Text style={stylesHome.textBlue24}>SERVIÇOS TOTAIS</Text>
        <View style={stylesHome.row}>
          <Feather name="chevron-left" color="#122F61" />
          <Text style={stylesHome.textBlue16}>Janeiro/2024</Text>
          <Feather name="chevron-right" color="#122F61" />
        </View>
        <View style={stylesHome.cards}>
          <MyCard title="CRÍTICO" amount={10} />
          <MyCard title="ALTA" amount={10} />
          <MyCard title="MÉDIA" amount={10} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export { HomeScreen };
