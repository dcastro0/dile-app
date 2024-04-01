import { Feather, FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons"
import { View } from "react-native"
import { stylesHome } from "../styles/stylesHome"


const NavBar = () => {
  return (
    <View style={stylesHome.navbar}>
      <Ionicons name='home-sharp' size={40} color='#A6BDDB' />
      <Feather name="tool" size={40} color='#A6BDDB' />
      <FontAwesome5 name="check" size={40} color='#A6BDDB' />
      <FontAwesome5 name='user' size={40} color='#A6BDDB' />
    </View>
  )
}

export {NavBar}