import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./assets/src/screens/Home";
import Rules from "./assets/src/screens/Rules";
import Credit from "./assets/src/screens/Credit";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Rules" component={Rules} />
        <Stack.Screen name="Credit" component={Credit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

