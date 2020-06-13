import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Listado() {
  return (
    <View style={styles.container}>
      <Button title="Botoncito para listado" />
    </View>
  );
}
