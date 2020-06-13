//import * as React from 'react';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'


export default function ContentDrawer(props) {

    const test = () => {
        props.navigation.toggleDrawer();
        logged = !logged;
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.descriptionHeader}>
          <View style={styles.avatar}>
            <Image
              source={require("../../assets/profile.png")}
              style={styles.avatarImageStyle}
            />
          </View>
          <View style={styles.titleBox}>
            <Text style={styles.nombre}>
              Camila <Text style={styles.apellido}>Neza</Text>
            </Text>
          </View>
        </View>
        <View style={{marginTop: "5%"}}>
        <View style={styles.containerItemMenu}>
            <Image
                style={{marginLeft: "3%"}}
              source={require("../../assets/home.png")}
            />
          <Text style={styles.textItemMenu} onPress={() => props.navigation.navigate("Home")}>
            Inicio
          </Text>
        </View>
        <View style={styles.containerItemMenu}>
            <Image
                style={{marginLeft: "3%"}}
                source={require("../../assets/prof.png")}
            />
          <Text style={styles.textItemMenu} onPress={() => props.navigation.navigate("Home")}>
            Mi Perfil
          </Text>
        </View>
        <View style={styles.containerItemMenu}>
        <Image
                style={{marginLeft: "3%"}}
                source={require("../../assets/miCuenta.png")}
            />
          <Text style={styles.textItemMenu} onPress={() => props.navigation.navigate("Home")}>
            Mi Cuenta
          </Text>
        </View>
        <View style={styles.containerItemMenu}>
        <Image
                style={{marginLeft: "3%"}}
                source={require("../../assets/login.png")}
            />
          <Text style={styles.textItemMenu} onPress={() => props.navigation.navigate("Home")}>
            Iniciar Sesion
          </Text>
        </View>
        <View style={styles.containerItemMenu}>
        <Image
                style={{marginLeft: "3%"}}
                source={require("../../assets/misCompras.png")}
            />
          <Text style={styles.textItemMenu} onPress={() => props.navigation.navigate("Home")}>
            Mis Compras
          </Text>
        </View>
        </View>

      </SafeAreaView>
    );
}
let imageSize = 50;
const styles = StyleSheet.create({
    descriptionHeader: {
        width: '100%',
        borderBottomWidth:0.5,
        justifyContent: "center",
        alignItems: "center",
        borderColor:'lightgray',
        marginBottom:2,
        paddingBottom:"5%",
        paddingTop:"5%"
    },
    avatar: {
        marginTop:5,
        flexDirection:'row',
        marginLeft: '5%'
    },
    avatarImageStyle: {
        height: 120,
        width: "60%",
        borderRadius: 40,
        marginTop: '10%'
    },
    nombre:{
        fontSize:20,
        marginLeft:18,
        color:'#706e6f',
    },
    apellido:{
        fontSize:20,
        marginLeft:18,
        color:'#706e6f',
    },
    titleBox:{
        marginTop:0
    },
    containerItemMenu: {
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        //justifyContent: "center"
    },
    textItemMenu: {
        color: "gray",
        fontSize: 18,
        marginLeft: "5%"
    }
})