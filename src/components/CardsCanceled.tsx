import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { stylesHome } from "../styles/stylesHome";
import { useEffect, useState } from "react";

const CardCanceled = () => {
  const [canceled, setCanceled] = useState<number>(0);

  useEffect(() => {
    setCanceled(Math.floor(Math.random() * (20 - 1 + 1)) + 1);
  }, []);

  return (
    <View style={stylesHome.cardCanceled}>
      <Ionicons name="close-sharp" size={40} color="#ff1010" />
      <Text style={stylesHome.textWhite36}>{canceled}</Text>
      <Text style={stylesHome.textWhite22}>CANCELADOS</Text>
    </View>
  );
};

export { CardCanceled };
