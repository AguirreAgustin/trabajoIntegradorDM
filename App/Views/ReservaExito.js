import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function PreCompraScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡LA RESERVA SE REALIZÓ</Text><Text style={styles.titulo}>CON ÉXITO!</Text>
      <Text style={styles.descripcion}>Tu producto está siendo preparado.</Text>
      <Text style={styles.descripcion}>Tienes 2 días para retirarlo en el</Text>
      <Text style={styles.descripcion}>local.</Text>
      <Text style={styles.perfilVendedor}>VER PERFIL DEL VENDEDOR</Text>
      <Text style={styles.perfilVendedor}>VER DETALLES DE LA COMPRA</Text>
      <View style={styles.container2}>
        <Button
          title="INICIO"
          color="#6200EE"
          style={styles.botonCompra}
          onPress={() => navigation.push("Listado")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  botonCompra: { marginBottom: "10px", color: "red" },
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },
  titulo: {
    textAlign: "left",
    fontSize: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  descripcion: {
    textAlign: "left",
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  perfilVendedor: {
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
