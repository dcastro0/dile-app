import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../contexts/Auth";
import { NavBar } from "../components/NavBar";
import { stylesHome } from "../styles/stylesHome";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { CardHome } from "../components/CardsHome";
import { MyButton } from "../components/MyButton";

const HomeScreen = () => {
  const { signOut } = useAuth();
  return (
    <SafeAreaView style={stylesHome.container}>
      <View style={stylesHome.line}></View>
      <View>
        <CardHome />
      </View>
      <MyButton title="Sair" onPress={signOut} />
      <View style={stylesHome.line}></View>
      <NavBar />
    </SafeAreaView>
  );
};

export { HomeScreen };
