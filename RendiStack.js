import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Reg from "./screens/Reg";

const Stack = createNativeStackNavigator()

const RendiStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Reg" component={Reg} />
    </Stack.Navigator>
  )
}

export default RendiStack
