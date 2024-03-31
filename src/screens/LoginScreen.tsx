import { FormLogin } from "../components/FormLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesLogin } from "../styles/stylesLogin";


const LoginScreen = () => {
  return (
    <SafeAreaView style={stylesLogin.container}>
      <FormLogin />
    </SafeAreaView>
  );
};

export { LoginScreen };
