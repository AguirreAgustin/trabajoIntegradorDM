import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Dropdown } from 'react-native-material-dropdown';

let data1 = [{
  value: 'S',
},{
  value: 'M',
}]

let data2 = [{
  value: 'Amarillo',
},{
  value: 'Azul',
}]
export default function Compra({ navigation }) {
  
  return (
    <View style={styles.container}>
      <View style={{ marginTop: "10%" }}>
        <Image
          style={{ width: 400 , height: 250 }}
          source={require("../../assets/bikiniAmarillo.png")}
        />
      </View>
      <Text style={styles.titulo}>Bikini 2019 Corpiño Soft y Culootte</Text>
      <Dropdown
      label='Talle'
      data={data1}
      />
      <Dropdown 
      label='Color'
      data={data2}
      />
      <View style={styles.container2}>
        <Button
              title="COMPRAR"
              color="#6200EE"
              style={styles.botonCompra}
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
  },
  container2: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: 'center',
    //justifyContent: "center",
  },
  titulo: {
    textAlign:"left",
    fontSize: 20,
    fontWeight: 'bold',
  },
  botonComprar: { 
    marginBottom: "10px", 
    color: "red" 
    
  }
});