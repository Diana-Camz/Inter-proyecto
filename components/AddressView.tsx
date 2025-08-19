import { addressViewStyles as styles } from "@/styles/components/address-view";
import React from "react";
import { Image, View } from "react-native";
import CustomText from "./CustomText";

const RowText = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.row}>
    <CustomText
      text={label}
      type="HelveticaRegular"
      style={styles.textMargin}
    />
    <CustomText text={value} type="HelveticaBold12" />
  </View>
);

const AddressView = () => {
  const infoRows = [
    { label: "Recoge en ", value: "20 min" },
    { label: "Abierto hasta las ", value: "10:00 PM" },
  ];

  return (
    <View style={styles.container}>
      <CustomText text="Av. La Paz" type="HelveticaBold24" />
      <View style={styles.containerRow}>
        <Image
          source={require("assets/images/AddressView.jpg")}
          style={styles.addressViewImage}
        />
        <View style={styles.dataContainer}>
          <View style={styles.addressView}>
            <CustomText
              text="Av La Paz 94, Sta Bárbara, Colima, col."
              type="HelveticaRegular"
            />
          </View>
          {infoRows.map((row, idx) => (
            <RowText key={idx} label={row.label} value={row.value} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default AddressView;
