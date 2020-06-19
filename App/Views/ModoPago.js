import React from "react";
import { StyleSheet, Text, View, FlatList, Button, Image } from "react-native";
import {
  Card,
  ListItem,
  // Icon,
  ButtonGroup,
} from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/AntDesign";

const style = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
  },
};

export default class ModoPago extends React.Component {
  constructor() {
    super();
    this.state = {
      botonEfectivoSeleccionado: true,
      botonMPSeleccionado: false,
    };
  }

  render() {
    const { botonEfectivoSeleccionado, botonMPSeleccionado } = this.state;
    const { navigation } = this.props;
    return (
      <Grid>
        <Row
          size={1}
          style={{
            // backgroundColor: "pink",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 30, color: "#7300e6" }}>
            ¿CÓMO DESEAS PAGAR?
          </Text>
        </Row>
        <Row size={13} style={{}}>
          <Col
            onPress={() => {
              this.setState({
                botonEfectivoSeleccionado: true,
                botonMPSeleccionado: false,
              });
            }}
          >
            <Card
              style={{
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 50,
                backgroundColor: botonEfectivoSeleccionado
                  ? "#efebfc"
                  : "white",
              }}
            >
              <View
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <Image
                  style={{ width: 50, height: 75 }}
                  source={require("../../assets/pesos.png")}
                />
                <Text>Efectivo</Text>
              </View>
            </Card>
          </Col>
          <Col
            onPress={() => {
              this.setState({
                botonEfectivoSeleccionado: false,
                botonMPSeleccionado: true,
              });
            }}
          >
            <Card
              style={{
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 50,
                backgroundColor: botonMPSeleccionado ? "#efebfc" : "white",
              }}
            >
              <Image
                style={{ width: 100, height: 100, marginLeft: 15 }}
                source={require("../../assets/mp.jpeg")}
              />
              {/* <Text>Efectivo</Text> */}
            </Card>
          </Col>
        </Row>
        <Row
          size={2}
          style={{
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Button
            title="Siguiente"
            onPress={() => navigation.push("ModoEntrega")}
            style={{ fontSize: 50 }}
            color="#6200ed"
          >
            <Text>SIGUIENTE</Text>
          </Button>
        </Row>
      </Grid>
    );
  }
}
