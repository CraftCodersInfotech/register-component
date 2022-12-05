import { Image, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { styles } from "../styles";

const header = () => {
  return (
    <>
      <Image style={styles.image} source={require("../assets/image1.png")} />

      <Text style={styles.registerLabel}>Register</Text>
    </>
  );
};

export default header;
