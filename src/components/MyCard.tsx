import { Text, View } from "react-native"
import { stylesHome } from "../styles/stylesHome"

interface MyCardProps {
  amount: number,
  title: string
}

const MyCard = ({amount, title}: MyCardProps) => {
  return(
    <View style={stylesHome.myCard}>
      <Text style={stylesHome.textBlue24}>{amount}</Text>
      <Text style={stylesHome.textBlue16}>{title}</Text>
    </View>
  )
}

export {MyCard}