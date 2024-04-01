import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const MyButton = ({ title, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.textWhite}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#122F61",
    width: 250,
    height: 40,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  textWhite: {
    color: "#fff",
    fontFamily: "Aldrich_400Regular",
    fontSize: 20,
  },
});

export { MyButton };