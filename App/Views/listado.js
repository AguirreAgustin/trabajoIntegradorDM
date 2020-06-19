import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  Card,
  ListItem,
  Button,
  // Icon,
  ButtonGroup,
} from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/AntDesign";

const products = [
  {
    local: "Piuma",
    puntuacion: "4,7",
    nombre: "Bikini 1",
    imagen:
      "https://http2.mlstatic.com/bikini-amarillo-con-copas-incluidas-D_NQ_NP_707573-MLM30551062985_052019-F.jpg",
    descripcion: "Descripcion 1",
    precio: 500,
    costoEnvío: 0,
    fab: false,
  },
  {
    local: "Amore",
    puntuacion: "3,7",
    nombre: "Bikini 2",
    imagen:
      "https://lh3.googleusercontent.com/proxy/otaTwNScTGYHy9bw0qzpq4e__xRWvGz2b2ElXviFuggpcE_KlY_pJ5m-Czg0j3qQ5mC07l5TE_PVdxvxiRW4C_xH-lncdWNMyKr9m3J58JOOh6jq0PAuGgf5Yr2VTE37QgRf-p4b5OclZd998H-9-y3avjVA3dW2VXdG_F_ma_4cJg",
    descripcion: "Descripcion 2",
    precio: 500,
    costoEnvío: 100,
    fab: false,
  },
  {
    local: "Sukki",
    puntuacion: "4,9",
    nombre: "Bikini 3",
    imagen:
      "https://lamaja.com.ar/wp-content/uploads/2020/01/IMG-20200122-WA0020.jpg",
    descripcion: "Descripcion 3",
    precio: 500,
    costoEnvío: 0,
    fab: false,
  },
  {
    local: "Piuma",
    puntuacion: "4,7",
    nombre: "Bikini 4",
    imagen:
      "https://d26lpennugtm8s.cloudfront.net/stores/154/653/products/30fcf8c2-88c1-401d-a5f9-9d5443ecd359_nube-ab17309d7e2ec1846115721090629521-1024-1024.jpg",
    descripcion: "Descripcion 4",
    precio: 500,
    costoEnvío: 100,
    fab: false,
  },
  {
    local: "Trius",
    puntuacion: "3,5",
    nombre: "Bikini 1",
    imagen:
      "https://i.pinimg.com/originals/c5/fd/34/c5fd34812d11ed1f8b70529f6886bca7.jpg",
    descripcion: "Descripcion 1",
    precio: 500,
    costoEnvío: 0,
    fab: false,
  },
  {
    local: "Rocu",
    puntuacion: "3",
    nombre: "Bikini 2",
    imagen:
      "https://lh3.googleusercontent.com/proxy/otaTwNScTGYHy9bw0qzpq4e__xRWvGz2b2ElXviFuggpcE_KlY_pJ5m-Czg0j3qQ5mC07l5TE_PVdxvxiRW4C_xH-lncdWNMyKr9m3J58JOOh6jq0PAuGgf5Yr2VTE37QgRf-p4b5OclZd998H-9-y3avjVA3dW2VXdG_F_ma_4cJg",
    descripcion: "Descripcion 2",
    precio: 500,
    costoEnvío: 100,
    fab: false,
  },
  {
    local: "Trius",
    puntuacion: "3,5",
    nombre: "Bikini 3",
    imagen:
      "https://lamaja.com.ar/wp-content/uploads/2020/01/IMG-20200122-WA0020.jpg",
    descripcion: "Descripcion 3",
    precio: 500,
    costoEnvío: 100,
    fab: false,
  },
  {
    local: "Trius",
    puntuacion: "3,5",
    nombre: "Bikini 4",
    imagen:
      "https://d26lpennugtm8s.cloudfront.net/stores/154/653/products/30fcf8c2-88c1-401d-a5f9-9d5443ecd359_nube-ab17309d7e2ec1846115721090629521-1024-1024.jpg",
    descripcion: "Descripcion 4",
    precio: 500,
    costoEnvío: 100,
    fab: false,
  },
];

const style = {
  container: {
    // flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 2,
  },
  // container: {
  //   flex: 1,
  //   flexDirection: "row",

  //   // alignItems: "center",
  //   // height: 400,
  //   width: "100%",
  // },
  column: {
    flex: 1,
    flexDirection: "column",
    // alignItems: "center",
    width: "100%",
    // backgroundColor: "blue",
  },
  row: {
    flexDirection: "row",
    // backgroundColor: "red",
  },
  item: {
    flex: 1,
    width: "100px",
  },
};

const groupData = (items, groupLen) => {
  const groups = [];
  let i = 0;

  while (i < items.length) {
    groups.push(items.slice(i, (i += groupLen)));
  }
  console.log(groups);
  return groups;
};

const favorito = () => <Icon name="hearto" size={15}></Icon>;
const compartir = () => <Icon name="sharealt" size={15}></Icon>;
const comprar = () => <Icon name="shoppingcart" size={15}></Icon>;

export default class Listado extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 2,
    };
  }
  componentDidMount = () => {
    // console.log("HELLO");
  };
  keyExtractor = (item, index) => index.toString();

  pressButton = (selectedIndex) => {
    console.log(selectedIndex);
    this.setState({ selectedIndex });
  };

  render() {
    const groupedItems = groupData(products, 2);
    const buttons = [
      { element: favorito },
      { element: compartir },
      { element: comprar },
    ];

    return (
      <View style={style.column}>
        <SafeAreaView style={style.container}>
          <ScrollView style={style.scrollView}>
            <Grid>
              {groupedItems.map((gi, i) => {
                return (
                  <Row size={100} style={{}}>
                    {gi.map((p, index) => (
                      <Col>
                        <Card
                          // title={p.nombre}
                          key={Math.random()}
                          image={{ uri: p.imagen }}
                          style={style.item}
                          containerStyle={{ padding: 2 }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              flex: 1,
                              backgroundColor: "#3b00dd",
                              padding: 2,
                              paddingLeft: 5,
                              paddingRight: 5,
                              borderRadius: 5,
                            }}
                          >
                            <View
                              style={{ flex: 0.8, flexDirection: "column" }}
                            >
                              <Text style={{ color: "white" }}>{p.local}</Text>
                            </View>
                            <View
                              style={{
                                flex: 0.5,
                                flexDirection: "column",
                                alignItems: "flex-end",
                                // backgroundColor: "#3b00dd",
                              }}
                            >
                              <Text style={{ color: "white" }}>
                                {p.puntuacion}
                              </Text>
                            </View>
                          </View>
                          <Text> {p.nombre}</Text>
                          <Text style={{ marginBottom: 10 }}>
                            {p.descripcion}
                          </Text>
                          <ButtonGroup
                            onPress={(e) => {
                              this.pressButton(e);
                            }}
                            buttons={buttons}
                            containerStyle={{ height: 30 }}
                          />
                        </Card>
                      </Col>
                    ))}
                  </Row>
                );
              })}
            </Grid>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }

  // render() {
  //   const groupedItems = groupData(products, 2);
  //   const buttons = [
  //     { element: favorito },
  //     { element: compartir },
  //     { element: comprar },
  //   ];

  //   return (
  //     <View style={style.column}>
  //       <FlatList
  //         data={groupedItems}
  //         keyExtractor={this.keyExtractor}
  //         renderItem={({ item }) => (
  //           <View style={style.row}>
  //             {item.map((p, index) => (
  //               <Card
  //                 // title={p.nombre}
  //                 key={index}
  //                 image={{ uri: p.imagen }}
  //                 style={style.item}
  //                 containerStyle={{ padding: 2 }}
  //               >
  //                 <View
  //                   style={{
  //                     flexDirection: "row",
  //                     flex: 1,
  //                     backgroundColor: "#3b00dd",
  //                     padding: 2,
  //                     paddingLeft: 5,
  //                     paddingRight: 5,
  //                     borderRadius: 5,
  //                   }}
  //                 >
  //                   <View style={{ flex: 0.8, flexDirection: "column" }}>
  //                     <Text style={{ color: "white" }}>{p.local}</Text>
  //                   </View>
  //                   <View
  //                     style={{
  //                       flex: 0.5,
  //                       flexDirection: "column",
  //                       alignItems: "flex-end",
  //                       // backgroundColor: "#3b00dd",
  //                     }}
  //                   >
  //                     <Text style={{ color: "white" }}>{p.puntuacion}</Text>
  //                   </View>
  //                 </View>
  //                 <Text> {p.nombre}</Text>
  //                 <Text style={{ marginBottom: 10 }}>{p.descripcion}</Text>
  //                 <ButtonGroup
  //                   onPress={this.updateIndex}
  //                   buttons={buttons}
  //                   containerStyle={{ height: 100 }}
  //                 />
  //               </Card>
  //             ))}
  //           </View>
  //         )}
  //       />
  //     </View>
  //   );
  // }
}
