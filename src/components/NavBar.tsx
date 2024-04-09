import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import {
  Feather,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { stylesHome } from "../styles/stylesHome";
import { RootStackParamList } from "../types/RootStackParamList";
import { NavBarProps } from "../types/NavBarProps";
import { IconMapping } from "../types/IconMapping";

const iconMappings: IconMapping = {
  Home: { icon: "home-sharp", library: Ionicons },
  Services: { icon: "tool", library: Feather },
  Completed: { icon: "check", library: FontAwesome5 },
  Profile: { icon: "user", library: FontAwesome5 },
};

const NavBar: React.FC<NavBarProps> = ({ navigation, screen }) => {
  const changeScreen = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={stylesHome.navbar}>
      {Object.keys(iconMappings).map((screenName) => (
        <TouchableOpacity
          key={screenName}
          style={screenName === screen ? stylesHome.containerIcon: null}
          onPress={() => changeScreen(screenName as keyof RootStackParamList)}
        >
          {React.createElement(iconMappings[screenName].library, {
            name: iconMappings[screenName].icon,
            size: 40,
            color: screenName === screen ? "#122F61" : "#A6BDDB",
          })}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export { NavBar };
