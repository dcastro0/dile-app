import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { stylesHome } from "../styles/stylesHome";
import { useEffect, useState } from "react";

const CardCompletedServices = () => {
  const [inProgress, setInProgress] = useState<number>(0);
  const [canceled, setCanceled] = useState<number>(0);
  const [completedToday, setCompletedToday] = useState<number>(0);
  const [completedWeek, setCompletedWeek] = useState<number>(0);

  useEffect(() => {
    setInProgress(Math.floor(Math.random() * (20 - 1 + 1)) + 1);
    setCanceled(Math.floor(Math.random() * (20 - 1 + 1)) + 1);
    setCompletedToday(Math.floor(Math.random() * (0 - 1 + 1)) + 1);
    setCompletedWeek(Math.floor(Math.random() * (20 - 10 + 1)) + 10);
  }, []);
  return (
    <View style={stylesHome.cardCompleted}>
      <View style={stylesHome.cardItem}>
        <FontAwesome5 name="check" size={40} color="#1aff31" />
        <Text style={stylesHome.textWhite22}>SERVIÇOS CONCLUÍDOS</Text>
      </View>
      <View style={stylesHome.cardItem}>
        <View style={stylesHome.cardItem2}>
          <Text style={stylesHome.textWhite36}>{completedToday}</Text>
          <Text style={stylesHome.textWhite22}>HOJE</Text>
        </View>
        <View style={stylesHome.cardItem2}>
          <Text style={stylesHome.textWhite36}>{completedWeek}</Text>
          <Text style={stylesHome.textWhite22}>SEMANA</Text>
        </View>
      </View>
    </View>
  );
};

export { CardCompletedServices };
