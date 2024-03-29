import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { stylesForm } from "../styles/stylesForm";
import { useFonts, Aldrich_400Regular } from "@expo-google-fonts/aldrich";

const FormLogin = () => {

    const [fontsLoaded]= useFonts({
        Aldrich_400Regular
    })
    
  return (
    <View style={stylesForm.container}>
      <View>
        <Image source={require("../assets/caminhao.png")} style={stylesForm.img} />
      </View>
      <View >
        <Image source={require("../assets/dile.png")} />
      </View>
      <View>
        <Text style={stylesForm.title}>AutoMecânica Diesel</Text>
      </View>
      <View style={stylesForm.form}>
        <View>
          <TextInput placeholder="Usuário" style={stylesForm.input}  />
        </View>
        <View>
          <TextInput placeholder="Senha" style={stylesForm.input} />
        </View>
        <View>
          <TouchableOpacity style={stylesForm.button}>
            <Text style={stylesForm.textWhite}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export { FormLogin };
