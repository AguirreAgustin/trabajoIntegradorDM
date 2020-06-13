import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Listado from "./views/listadoProductos/listado";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// const App = StackNavigator({
//   // Home: { screen: HomeScreen },
//   //La llave del objeto es el identificador del screen y lo vas a usar en el navigation.
//   Listado: { screen: Listado },
// });

// export default function App() {
//   const { navigate } = this.props.navigation;
//   return (
//     <View style={styles.container} onTouchStart={() => navigate(Listado)}>
//       <Image source={require("./assets/logo.png")} />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
function HomeScreen({ navigation }) {
  return (
    <View
      style={styles.container}
      onTouchEnd={() => navigation.push("Listado")}
    >
      <Image source={require("./assets/logo.png")} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Listado" component={Listado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
