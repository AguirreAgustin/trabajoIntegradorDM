import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from './App/Navigations/navigations'
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


//const Stack = createStackNavigator();

function App() {
  return (
    <Navigation />
  );
}

export default App;
