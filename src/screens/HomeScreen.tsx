import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../contexts/Auth";
import { NavBar } from "../components/NavBar";
import { stylesHome } from "../styles/stylesHome";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const { signOut } = useAuth();
  return (
    <SafeAreaView style={stylesHome.container}>
      <View style={stylesHome.line}></View>
      <View style={{ gap: 10 }}>
        <View style={stylesHome.card1}>
          <View style={stylesHome.cardItem}>
            <FontAwesome5 name="check" size={40} color="#1aff31" />
            <Text style={stylesHome.textWhite22}>SERVIÇOS CONCLUÍDOS</Text>
          </View>
          <View style={stylesHome.cardItem}>
            <View style={stylesHome.cardItem2}>
              <Text style={stylesHome.textWhite36}>2</Text>
              <Text style={stylesHome.textWhite22}>HOJE</Text>
            </View>
            <View style={stylesHome.cardItem2}>
              <Text style={stylesHome.textWhite36}>6</Text>
              <Text style={stylesHome.textWhite22}>SEMANA</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 0, flexDirection: "row", gap: 10 }}>
          <View style={stylesHome.card1}>
            <View style={stylesHome.cardItem2}>
              <Ionicons name="reload" size={40} color="#fff" />
              <Text style={stylesHome.textWhite36}>6</Text>
              <Text style={stylesHome.textWhite22}>EM ANDAMENTO</Text>
            </View>
          </View>
          <View style={stylesHome.card1}>
            <View style={stylesHome.cardItem2}>
              <Ionicons name="close-sharp" size={40} color="#ff1010" />
              <Text style={stylesHome.textWhite36}>6</Text>
              <Text style={stylesHome.textWhite22}>CANCELADOS</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={stylesHome.line}></View>
      <NavBar />
    </SafeAreaView>
  );
};

export { HomeScreen };
