import { Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useAuth } from "../contexts/Auth"

const HomeScreen = () => {
  const {signOut} = useAuth()
  return(
    <SafeAreaView>
      <Text>Tela Principal</Text>
      <TouchableOpacity onPress={signOut}><Text>Sair</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export {HomeScreen}