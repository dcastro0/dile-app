import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {}

const MyInput = ({ ...rest }: InputProps) => {
  return <TextInput style={styles.input} {...rest} />;
};

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
});

export { MyInput };
