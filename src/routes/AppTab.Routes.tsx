import { HomeScreen } from "../screens/HomeScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { ServicesScreen } from "../screens/ServicesScreen";
import { CompletedScreen } from "../screens/CompletedScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Image, TouchableOpacity } from "react-native";
import { stylesHeader } from "../styles/stylesHeader";

const AppTabRoutes = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#122F61",
        tabBarInactiveTintColor: "#A6BDDB",
        tabBarShowLabel: false,
        tabBarStyle: { height: 80 },
        headerStyle: {
          backgroundColor: "#6D7F9D",
          height: 100,
        },
        headerTitleAlign: "center",
        headerLeft: () => (
          <TouchableOpacity>
            <Image
              source={require("../assets/logo.png")}
              style={stylesHeader.logo}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Feather
              name="bell"
              color="#122F61"
              size={30}
              style={{ marginHorizontal: 20 }}
            />
          </TouchableOpacity>
        ),
        headerTitleStyle: {
          color: "#122F61",
          fontSize: 30,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="tool" size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Completed"
        component={CompletedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="check" size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={40} color={color} />
          ),
          headerStyle: {
            backgroundColor: "#E7EAEF",
            height: 100,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export { AppTabRoutes };
