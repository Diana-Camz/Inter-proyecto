import { colors } from "@/themes";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import CustomText from "./CustomText";

const AddressView = () => {
  return (
    <View style={styles.container}>
      <CustomText text="Av. La Paz" type="HelveticaBold24" />
      <View style={styles.containerRow}>
        <Image
          source={require("assets/images/AddressView.jpg")}
          style={styles.addressViewImage}
        />
        <View
          style={{
            justifyContent: "space-around",
            flex: 1, // importante para que ocupe todo el espacio disponible
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <CustomText
              text="Av La Paz 94, Sta Bárbara, Colima, col."
              type="HelveticaRegular"
            />
          </View>
          <View style={styles.row}>
            <CustomText
              text="Recoge en "
              type="HelveticaRegular"
              style={{ marginTop: 3 }}
            />
            <CustomText text="20 min" type="HelveticaBold12" />
          </View>
          <View style={styles.row}>
            <CustomText
              text="Abierto hasta las "
              type="HelveticaRegular"
              style={{ marginTop: 3 }}
            />
            <CustomText text="10:00 PM" type="HelveticaBold12" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddressView;

const styles = StyleSheet.create({
  container: {
    height: 137,
    padding: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,

    flex: 1, // permite que el contenedor ocupe todo el espacio disponible
  },
  addressViewImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center", // esto centra verticalmente los textos dentro de la fila
    marginVertical: 2, // separa filas si quieres
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
  },
  value: {
    fontSize: 14,
    fontWeight: "400",
    color: "#222",
  },
});
