import { SafeAreaView } from "react-native";
import React from "react";
import { MyButton } from "../components/MyButton";
import { useAuth } from "../hooks/useAuth";
import { ScreenProps } from "../types/ScreenProps";
import { stylesProfile } from "../styles/stylesProfile";

const ProfileScreen: React.FC<ScreenProps> = () => {
  const { signOut } = useAuth();
  return (
    <SafeAreaView style={stylesProfile.container}>
      <MyButton title="Sair" onPress={signOut} />
    </SafeAreaView>
  );
};

export { ProfileScreen };
