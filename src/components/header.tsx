import { Image, Text} from "react-native";
import * as React from "react";
import { styles } from "../styles";

const header = () => {
  return (
    <>
      <Image style={styles.image} source={require("../assets/CraftCoders.png")} />

      <Text style={styles.registerLabel}>Register</Text>
    </>
  );
};

export default header;
