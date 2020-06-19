import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

var index = 0;
const page1 = require("../../assets/page1.jpeg");
const page2 = require("../../assets/page2.jpeg");
const page3 = require("../../assets/page3.jpeg");

const changeView = function (navigation) {
  navigation.push("PageInit2");
};

export default function PageInit({ navigation }) {
  return (
    <View style={styles.container} onTouchStart={() => changeView(navigation)}>
      <Image
        // style={{ width: "100%", height: "100%" }}
        source={page1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  botonCompra: { marginBottom: "10px", color: "red" },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
  },
});
