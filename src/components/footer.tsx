import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
// import Button from "react-native-button";
import { styles } from "../styles";
import { String } from "../constant/String";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {Button} from "theme-component"

export type props = {
  onPress: () => void;
};

const footer = (props: props) => {
  const { onPress } = props;

  return (
    <View style={{ marginTop: 20 }}>
      {/* <Button
        title={"Continue"}
        containerStyle={styles.containerStyleFooter}
        textStyle={styles.textStyleFooter}
        backgroundColor={"#5625CC"}
        activeBackgroundColor={"#7f52e9"}
        onPress={onPress}
      /> */}
       <Button
       style={styles.ripple}
        onPress={() => {
         console.log('red');
     }}></Button>
      <View style={styles.footer}>
        <Text style={styles.Font}>
          {String.description}
          {"\n"} <Text style={styles.BoldText}>{String.terms}</Text>{" "}
          {String.and}
          <Text style={styles.BoldText}>{String.privacy}</Text>
        </Text>
        <View style={styles.orMain}>
          <View style={styles.Line} />
          <Text style={{ paddingHorizontal: 10 }}>or </Text>

          <View style={styles.Line} />
        </View>
        <Text>
          {String.account} <Text style={styles.BoldText}>{String.logIn}</Text>{" "}
        </Text>
      </View>
    </View>
  );
};

export default footer;
