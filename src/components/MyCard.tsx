import { Text, View } from "react-native";
import { stylesHome } from "../styles/stylesHome";
import { MyCardProps } from "../interfaces/MyCardProps";

const MyCard = ({ amount, title }: MyCardProps) => {
  return (
    <View style={stylesHome.myCard}>
      <Text style={stylesHome.textBlue24}>{amount}</Text>
      <Text style={stylesHome.textBlue16}>{title}</Text>
    </View>
  );
};

export { MyCard };
