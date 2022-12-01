import { FlatList, Text, View, SafeAreaView } from "react-native";
import * as React from "react";
import InputField from "react-native-input-field";
import { styles } from "./styles";
import { RegisterData } from "./data";
import Header from "./header";
import Footer from "./footer";
const Index = () => {
  const renderItem = ({ item }) => {
    return (
      <>
        <Text style={styles.label}>{item.Label}</Text>
        <InputField
          placeholder={item.placeholder}
          containerStyle={{ borderWidth: 1, height: 35, alignItems: "center" }}
          inputStyle={{ width: "90%" }}
          showIcon={item.isShow ?? false}
        />
      </>
    );
  };
  return (
    <SafeAreaView style={styles.Safrareview}>
      <View style={styles.mainView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={RegisterData}
          ListHeaderComponent={Header}
          renderItem={renderItem}
          ListFooterComponent={Footer}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
