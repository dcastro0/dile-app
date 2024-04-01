import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { stylesHome } from "../styles/stylesHome";

const CardHome = () => {
  return (
    <View >
      <View style={styles.card}>
        <View style={styles.cardItem}>
          <FontAwesome5 name="check" size={40} color="#1aff31" />
          <Text style={stylesHome.textWhite22}>SERVIÇOS CONCLUÍDOS</Text>
        </View>
        <View style={styles.cardItem2}>
          <Text style={stylesHome.textWhite36}>2</Text>
          <Text style={stylesHome.textWhite22}>HOJE</Text>
        </View>
        <View style={styles.cardItem2}>
          <Text style={stylesHome.textWhite36}>6</Text>
          <Text style={stylesHome.textWhite22}>SEMANA</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardItem2}>
            <Ionicons name="reload" size={40} color="#fff" />
            <Text style={stylesHome.textWhite36}>6</Text>
            <Text style={stylesHome.textWhite22}>EM ANDAMENTO</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardItem2}>
            <Ionicons name="close-sharp" size={40} color="#ff1010" />
            <Text style={stylesHome.textWhite36}>6</Text>
            <Text style={stylesHome.textWhite22}>CANCELADOS</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  

  card: {
    backgroundColor: "#455B82",
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderWidth: 1,
  },

  cardItem: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
  },

  cardItem2: {
    flex: 0,
    alignItems: "center",
    gap: 10,
    width: "40%",
  },
});

export { CardHome };
