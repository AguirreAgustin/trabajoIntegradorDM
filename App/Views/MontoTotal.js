import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function MontoTotalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡YA CASI TERMINAMOS!</Text>
      <Text style={styles.subtotal}>
        Subtotal<Text> $500</Text>
      </Text>
      <Text style={styles.envio}>
        Envío<Text> $0</Text>
      </Text>
      <Text style={styles.total}>Total $500</Text>

      <View style={styles.container2}>
        <Text style={styles.masDetalles}>Más detales de la compra</Text>
        <Button title="RESERVAR" color="#6200EE" style={styles.botonCompra} onPress={() => navigation.push("ReservaExito")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  botonCompra: { marginBottom: "10px", color: "red" },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //justifyContent: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
  },
  titulo: {
    textAlign: "center",
    fontSize: 30,
    color: "#7300e6",
    marginLeft: 10,
    marginRight: 10,
  },
  subtotal: {
    textAlign: "left",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  envio: {
    textAlign: "left",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    color: "#a6a6a6",
  },
  total: {
    fontSize: 22,
    textAlign: "left",
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
  },
  masDetalles: {
    textAlign: "left",
    color: "#7300e6",
    marginLeft: 10,
    marginRight: 10,
  },
  botonComprar: {
    marginBottom: "10px",
    color: "red",
  },
});
