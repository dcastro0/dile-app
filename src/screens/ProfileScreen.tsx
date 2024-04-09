import { SafeAreaView } from "react-native";
import { NavBar } from "../components/NavBar";
import React from "react";
import { MyButton } from "../components/MyButton";
import { useAuth } from "../hooks/useAuth";
import { ScreenProps } from "../types/ScreenProps";
import { stylesProfile } from "../styles/stylesProfile";

const ProfileScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const { signOut } = useAuth();
  return (
    <SafeAreaView style={stylesProfile.container}>
      <MyButton title="Sair" onPress={signOut} />
      <NavBar screen="Profile" navigation={navigation} />
    </SafeAreaView>
  );
};

export { ProfileScreen };
