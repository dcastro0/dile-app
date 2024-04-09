import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavBar } from "../components/NavBar";
import { stylesHome } from "../styles/stylesHome";
import { CardCanceled } from "../components/CardsCanceled";
import { CardCompletedServices } from "../components/CardCompletedServices";
import { CardInProgress } from "../components/CardInProgress";
import { MyCard } from "../components/MyCard";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { ScreenProps } from "../types/ScreenProps";

const HomeScreen: React.FC<ScreenProps> = ({ navigation }) => {
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
          <AntDesign name="left" color="#122F61" />
          <Text style={stylesHome.textBlue16}>Janeiro/2024</Text>
          <AntDesign name="right" color="#122F61" />
        </View>
        <View style={stylesHome.cards}>
          <MyCard title="CRÍTICO" amount={10} />
          <MyCard title="ALTA" amount={10} />
          <MyCard title="MÉDIA" amount={10} />
        </View>
      </View>
      <NavBar navigation={navigation} screen="Home" />
    </SafeAreaView>
  );
};

export { HomeScreen };
