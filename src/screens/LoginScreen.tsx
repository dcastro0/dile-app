import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { stylesLogin } from "../styles/stylesLogin";
import { useState } from "react";
import { useAuth } from "../contexts/Auth";
import { MyButton } from "../components/MyButton";
import { MyInput } from "../components/MyInput";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  return (
    <SafeAreaView style={stylesLogin.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={40}
      >
        <ScrollView>
          <View style={stylesLogin.container}>
            <View>
              <Image
                source={require("../assets/caminhao.png")}
                style={stylesLogin.img}
              />
            </View>
            <View>
              <Image source={require("../assets/dile.png")} />
            </View>
            <View>
              <Text style={stylesLogin.title}>AutoMecânica Diesel</Text>
            </View>
            <View style={stylesLogin.form}>
              <View>
                <MyInput
                  placeholder="Usuário"
                  onChangeText={setUsername}
                  value={username}
                />
              </View>
              <View>
                <MyInput
                  placeholder="Senha"
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry
                />
              </View>
              <View>
                <MyButton
                  title="Entrar"
                  onPress={() => signIn(username, password)}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export { LoginScreen };
