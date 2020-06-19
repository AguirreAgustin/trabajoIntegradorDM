import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MenuHamburguesa from "./menuHamburguesa";
import ContentDrawer from "./contentDrawer";

import Home from "../Views/Home";
import Listado from "../Views/listado";
import PageInit from "../Views/PageInit";
import PageInit2 from "../Views/PageInit2";
import PageInit3 from "../Views/PageInit3";
import ModoPago from "../Views/ModoPago";
import ModoEntrega from "../Views/ModoEntrega";
import PreCompraScreen from "../Views/PreCompra";
import CompraScreen from "../Views/Compra";
import MontoTotalScreen from "../Views/MontoTotal";

const Stack = createStackNavigator();
const FlujoCompradorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PageInit"
        component={PageInit}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTintColor: "black",
          headerLeft: (props) => (
            <MenuHamburguesa {...props} navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="PageInit2"
        component={PageInit2}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTintColor: "black",
          headerLeft: (props) => (
            <MenuHamburguesa {...props} navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="PageInit3"
        component={PageInit3}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTintColor: "black",
          headerLeft: (props) => (
            <MenuHamburguesa {...props} navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTintColor: "black",
          headerLeft: (props) => (
            <MenuHamburguesa {...props} navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="Listado"
        component={Listado}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTintColor: "black",
          headerLeft: (props) => (
            <MenuHamburguesa {...props} navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ModoPago"
        component={ModoPago}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTintColor: "black",
          headerLeft: (props) => (
            <MenuHamburguesa {...props} navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ModoEntrega"
        component={ModoEntrega}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTintColor: "black",
          headerLeft: (props) => (
            <MenuHamburguesa {...props} navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="PreCompraScreen"
        component={PreCompraScreen}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTintColor: "black",
          headerLeft: (props) => (
            <MenuHamburguesa {...props} navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="Compra"
        component={CompraScreen}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTintColor: "black",
          headerLeft: (props) => (
            <MenuHamburguesa {...props} navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="MontoTotal"
        component={MontoTotalScreen}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTintColor: "black",
          headerLeft: (props) => (
            <MenuHamburguesa {...props} navigation={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => ContentDrawer(props)}>
      <Drawer.Screen name="FlujoComprador" component={FlujoCompradorStack} />
    </Drawer.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <DStack />
    </NavigationContainer>
  );
}
