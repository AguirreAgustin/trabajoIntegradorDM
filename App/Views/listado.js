import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

const products = [
  {
    nombre: "Bikini 1",
    imagen:
      "https://i.pinimg.com/originals/c5/fd/34/c5fd34812d11ed1f8b70529f6886bca7.jpg",
    descripcion: "Descripcion 1",
  },
  {
    nombre: "Bikini 2",
    imagen:
      "https://lh3.googleusercontent.com/proxy/otaTwNScTGYHy9bw0qzpq4e__xRWvGz2b2ElXviFuggpcE_KlY_pJ5m-Czg0j3qQ5mC07l5TE_PVdxvxiRW4C_xH-lncdWNMyKr9m3J58JOOh6jq0PAuGgf5Yr2VTE37QgRf-p4b5OclZd998H-9-y3avjVA3dW2VXdG_F_ma_4cJg",
    descripcion: "Descripcion 2",
  },
  {
    nombre: "Bikini 3",
    imagen:
      "https://lamaja.com.ar/wp-content/uploads/2020/01/IMG-20200122-WA0020.jpg",
    descripcion: "Descripcion 3",
  },
  {
    nombre: "Bikini 4",
    imagen:
      "https://d26lpennugtm8s.cloudfront.net/stores/154/653/products/30fcf8c2-88c1-401d-a5f9-9d5443ecd359_nube-ab17309d7e2ec1846115721090629521-1024-1024.jpg",
    descripcion: "Descripcion 4",
  },
  {
    nombre: "Bikini 1",
    imagen:
      "https://i.pinimg.com/originals/c5/fd/34/c5fd34812d11ed1f8b70529f6886bca7.jpg",
    descripcion: "Descripcion 1",
  },
  {
    nombre: "Bikini 2",
    imagen:
      "https://lh3.googleusercontent.com/proxy/otaTwNScTGYHy9bw0qzpq4e__xRWvGz2b2ElXviFuggpcE_KlY_pJ5m-Czg0j3qQ5mC07l5TE_PVdxvxiRW4C_xH-lncdWNMyKr9m3J58JOOh6jq0PAuGgf5Yr2VTE37QgRf-p4b5OclZd998H-9-y3avjVA3dW2VXdG_F_ma_4cJg",
    descripcion: "Descripcion 2",
  },
  {
    nombre: "Bikini 3",
    imagen:
      "https://lamaja.com.ar/wp-content/uploads/2020/01/IMG-20200122-WA0020.jpg",
    descripcion: "Descripcion 3",
  },
  {
    nombre: "Bikini 4",
    imagen:
      "https://d26lpennugtm8s.cloudfront.net/stores/154/653/products/30fcf8c2-88c1-401d-a5f9-9d5443ecd359_nube-ab17309d7e2ec1846115721090629521-1024-1024.jpg",
    descripcion: "Descripcion 4",
  },
];

const style = {
  container: {
    flex: 1,
    flexDirection: "row",

    alignItems: "center",
    // height: 400,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  item: {
    flex: 1,
  },
};

const groupData = (items, groupLen) => {
  const groups = [];
  let i = 0;

  while (i < items.length) {
    groups.push(items.slice(i, (i += groupLen)));
  }

  return groups;
};

export default class Listado extends React.Component {
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <View style={{ backgroundColor: "blue", flex: 0.5 }}>
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={{ source: { uri: item.avatar_url } }}
        bottomDivider
        chevron
      />
    </View>
  );

  render() {
    const groupedItems = groupData(products, 2);

    return (
      <View style={style.column}>
        <FlatList
          data={groupedItems}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <View style={style.row}>
              {item.map((p, index) => (
                <Card
                  // title={p.nombre}
                  image={{ uri: p.imagen }}
                  style={style.item}
                >
                  <Text> {p.nombre}</Text>
                  <Text style={{ marginBottom: 10 }}>{p.descripcion}</Text>
                  <Button
                    icon={<Icon name="code" color="#ffffff" />}
                    buttonStyle={{
                      borderRadius: 0,
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 0,
                    }}
                    title="VIEW NOW"
                  />
                </Card>
              ))}
            </View>
          )}
        />
      </View>
    );
  }
}
