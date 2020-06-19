import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function DetallesPreReserva({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo1}>DETALLES</Text>
      <Text style={styles.titulo2}>PRODUCTO</Text>
      <Text style={styles.detalle}>Bikini 2019 Corpiño Soft y Culootte</Text>
      <Text style={styles.titulo2}>DETALLE</Text>
      <Text style={styles.detalle}>Talle S - Amarillo</Text>
      <Text style={styles.titulo2}>FORMA DE PAGO</Text>
      <Text style={styles.detalle}>Efectivo</Text>
      <Text style={styles.titulo2}>ENTREGA</Text>
      <Text style={styles.detalle}>Retiro en el local - 48hs de reserva</Text>
      <Text style={styles.titulo2}>PRECIO</Text>
      <Text style={styles.detalle}>$500</Text>
      <Text style={styles.titulo2}>LOCAL</Text>
      <Text style={styles.detalle}>Piuma</Text>
      <Text style={styles.titulo2}>DIRECCIÓN</Text>
      <Text style={styles.detalle}>Calle 13</Text>
      <Text style={styles.titulo2}>HORARIOS</Text>
      <Text style={styles.detalle}>9hs - 15hs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  botonCompra: { marginBottom: "10px", color: "red" },
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  container2: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },
  titulo1: {
    textAlign: "left",
    fontSize: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  titulo2: {
    textAlign: "left",
    fontSize: 14,
    color: "#808080",
    marginLeft: 10,
    marginRight: 10,
  },
  detalle: {
    textAlign: "left",
    fontSize: 21,
    marginLeft: 10,
    marginRight: 10,
  },
  botonComprar: {
    marginBottom: "10px",
    color: "red",
  },
});
