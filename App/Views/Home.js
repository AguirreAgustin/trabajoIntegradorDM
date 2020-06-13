import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";


export default function HomeScreen({ navigation }) {
    return (
      <View
        style={styles.container}
      >
        <View style={{marginTop: "10%"}}>
          <Image style={{width: 300, height: 50}} source={require('../../assets/logo.png')} />
        </View>
        <View style={{marginTop: "45%", justifyContent: "center", alignItems: "center", width: "90%"}}>
        <View style={{width: "50%"}}>
          <Button title=" Quiero Comprar" onPress={() => navigation.push("Listado")} color="#6200EE" />
        </View>
        <View style={{width: "50%", marginTop: "5%"}}>
          <Button title="Quiero Vender"  color="#6200EE"/>
        </View>
        </View>

      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      //justifyContent: "center",
    },
  });