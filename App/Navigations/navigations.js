import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import MenuHamburguesa from './menuHamburguesa'
import ContentDrawer from './contentDrawer'

import Home from '../Views/Home'
import Listado from "../Views/listado";


const Stack = createStackNavigator();
const FlujoCompradorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTintColor: 'black',
          headerLeft: props => (<MenuHamburguesa {...props} navigation={navigation} />),

        })}
      />
      <Stack.Screen
        name="Listado"
        component={Listado}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTintColor: 'black',
          headerLeft: props => (<MenuHamburguesa {...props} navigation={navigation} />),

        })}
      />
    </Stack.Navigator>
  );
}


const Drawer = createDrawerNavigator();
const DStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => ContentDrawer(props)}
     >
      <Drawer.Screen name="FlujoComprador" component={FlujoCompradorStack} />
    </Drawer.Navigator>
  );
}


export default function Navigation(){
    return (
        <NavigationContainer>
            <DStack />
        </NavigationContainer>
    )
}

