import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function PreCompraScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: "10%" }}>
        <Image
          style={{ width: 400, height: 250 }}
          source={require("../../assets/bikiniAmarillo.png")}
        />
      </View>
      <Text style={styles.titulo}>Bikini 2019 Corpiño Soft y Culootte</Text>
      <Text style={styles.descripcion}>
        Bikini, nueva temporada verano. Hay en amarillo, azul y rojo.
      </Text>
      <Text style={styles.descripcion}>Talles: S y M</Text>
      <Text style={styles.precio}>
        $500<Text style={styles.precioEnvio}> Envío:$150</Text>
      </Text>
      <Text style={styles.perfilVendedor}>Ver perfil del vendedor</Text>
      <View style={styles.container2}>
        <Button
          title="COMPRAR"
          color="#6200EE"
          style={styles.botonCompra}
          onPress={() => navigation.push("Compra")}
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
    //justifyContent: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    //justifyContent: "center",
  },
  titulo: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  descripcion: {
    textAlign: "left",
    fontSize: 17,
    marginLeft: 10,
  },
  precio: {
    textAlign: "left",
    fontSize: 20,
    marginLeft: 10,
  },
  precioEnvio: {
    fontSize: 17,
  },
  perfilVendedor: {
    textAlign: "left",
    color: "#7300e6",
    marginLeft: 10,
  },
  botonComprar: {
    marginBottom: "10px",
    color: "red",
  },
});
