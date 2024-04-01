import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E7EAEF",
  },

  navbar: {
    flex: 0,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },

  line: {
    height: 2,
    width: "80%",
    backgroundColor: "#adadad",
  },

  card1: {
    backgroundColor: "#455B82",
    padding: 20,
    borderRadius: 20,
  },

  textWhite22: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  cardItem: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  textWhite36: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },

  cardItem2:{
    flex:0,
    alignItems: 'center',
    padding: 10,
  }

});

export { stylesHome };
