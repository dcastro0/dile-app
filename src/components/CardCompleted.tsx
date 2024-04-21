import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { CardCompletedProps } from "../interfaces/CardCompletedProps";
import { stylesCompleted } from "../styles/stylesCompleted";

const CardCompleted = ({ title, data }: CardCompletedProps) => {
  return (
    <View style={stylesCompleted.card}>
      <View style={stylesCompleted.row}>
        <Feather name="check-circle" color="#41AE76" size={50} />
        <Text style={stylesCompleted.title}>{title}</Text>
      </View>
      <View style={[stylesCompleted.row, { alignSelf: "flex-end" }]}>
        <Text style={stylesCompleted.title}>{data}</Text>
        <Feather name="folder" size={25} />
      </View>
    </View>
  );
};

export { CardCompleted };
