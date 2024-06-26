import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useAuth } from "../hooks/useAuth";
import { ScreenProps } from "../types/ScreenProps";
import { stylesProfile } from "../styles/stylesProfile";
import { CardProfile } from "../components/CardProfile";
import { Feather } from "@expo/vector-icons";

const ProfileScreen: React.FC<ScreenProps> = () => {
  const { signOut, authData } = useAuth();
  return (
    <SafeAreaView style={stylesProfile.container}>
      <CardProfile name={authData?.name} token={authData?.token ?? ''} />
      <TouchableOpacity style={stylesProfile.row}>
        <View style={stylesProfile.circle}>
          <Feather name="settings" size={20} color="#122f61" />
        </View>
        <Text style={stylesProfile.text}>Configurações</Text>
        <Feather name="chevron-right" size={30} color="#122f61" />
      </TouchableOpacity>
      <TouchableOpacity style={stylesProfile.row}>
        <View style={stylesProfile.circle}>
          <Feather name="lock" size={20} color="#122f61" />
        </View>
        <Text style={stylesProfile.text}>Segurança</Text>
        <Feather name="chevron-right" size={30} color="#122f61" />
      </TouchableOpacity>
      <TouchableOpacity style={stylesProfile.row}>
        <View style={stylesProfile.circle}>
          <Feather name="folder" size={20} color="#122f61" />
        </View>
        <Text style={stylesProfile.text}>Arquivadas</Text>
        <Feather name="chevron-right" size={30} color="#122f61" />
      </TouchableOpacity>
      <TouchableOpacity style={stylesProfile.row} onPress={signOut}>
        <View style={stylesProfile.circle}>
          <Feather name="log-out" size={20} color="#122f61" />
        </View>
        <Text style={stylesProfile.text}>Sair</Text>
        <Feather name="chevron-right" size={30} color="#122f61" />
      </TouchableOpacity>
      
    </SafeAreaView>
  );
};

export { ProfileScreen };
