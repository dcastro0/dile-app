import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { stylesHome } from "../styles/stylesHome";
import { useEffect, useState } from "react";

const CardInProgress = () => {
  const [inProgress, setInProgress] = useState<number>(0);

  useEffect(() => {
    setInProgress(Math.floor(Math.random() * (20 - 1 + 1)) + 1);
  }, []);
  return (
    <View style={stylesHome.cardInProgress}>
      <Feather name="rotate-cw" size={40} color="#fff" />
      <Text style={stylesHome.textWhite36}>{inProgress}</Text>
      <Text style={stylesHome.textWhite22}>EM ANDAMENTO</Text>
    </View>
  );
};

export { CardInProgress };
