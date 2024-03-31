import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { authService } from "../services/authService";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthData {
  token: string;
  username: string;
  name: string;
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFromStorage();
  }, []);

  async function loadFromStorage() {
    const auth = await AsyncStorage.getItem("@AuthData");

    if (auth) {
      setAuthData(JSON.parse(auth) as AuthData);
    }

    setLoading(false);
  }

  async function signIn(username: string, password: string): Promise<void> {
    try {
      const auth = await authService.signIn(username, password);
      setAuthData(auth);
      AsyncStorage.setItem("@AuthData", JSON.stringify(auth));
    } catch (error: any) {
      Alert.alert(error.message, "tente novamente");
    }
  }

  async function signOut(): Promise<void> {
    setAuthData(undefined);
    AsyncStorage.removeItem("@AuthData");
    return;
  }

  return (
    <AuthContext.Provider
      value={{ authData, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthContext, AuthData, AuthProvider, useAuth };
