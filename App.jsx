import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Calculator from "./screens/Calculator.jsx";
import Convertor from "./screens/Convertor.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.tabs}>
        <Text
          onPress={() =>
            navigation.navigate("Calculator", { name: "Convertor" })
          }
        >
          calc
        </Text>
        <Text
          onPress={() =>
            navigation.navigate("Convertor", { name: "Convertor" })
          }
        >
          Валюта
        </Text>
      </View> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Convertor"
          component={Convertor}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabs: {},
});
