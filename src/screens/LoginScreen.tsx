import { Image, SafeAreaView, Text, View } from "react-native";
import { stylesLogin } from "../styles/stylesLogin";
import { useState } from "react";
import { MyButton } from "../components/MyButton";
import { MyInput } from "../components/MyInput";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../hooks/useAuth";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const [inputSelecionado, setInputSelecionado] = useState(false);
  const [label, setLabel] = useState("");
  const handleFocus = (label: string) => {
    setLabel(label);
    setInputSelecionado(true);
  };

  const handleBlur = () => {
    setInputSelecionado(false);
  };

  return (
    <SafeAreaView style={stylesLogin.container}>
      {inputSelecionado ? (
        <View style={stylesLogin.containerInput}>
          <View style={stylesLogin.containerRow}>
            <Feather
              name="chevron-left"
              color="#fff"
              size={40}
              onPress={handleBlur}
            />
            <Text style={stylesLogin.titleWhite}>{label}</Text>
          </View>
          <MyInput
            autoFocusLabel={label}
            onChangeText={label === "USERNAME" ? setUsername : setPassword}
            value={label === "USERNAME" ? username : password}
            onBlur={handleBlur}
            style={stylesLogin.inputSelected}
            secureTextEntry={label === "SENHA"}
            autoFocus
          />
        </View>
      ) : (
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
                value={username}
                placeholder="Usuário"
                onFocus={() => handleFocus("USERNAME")}
                onBlur={handleBlur}
              />
            </View>
            <View>
              <MyInput
                placeholder="Senha"
                value={password}
                secureTextEntry
                onFocus={() => handleFocus("SENHA")}
                onBlur={handleBlur}
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
      )}
    </SafeAreaView>
  );
};

export { LoginScreen };
