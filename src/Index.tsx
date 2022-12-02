import { FlatList, Text, View, SafeAreaView } from "react-native";
import * as React from "react";
import InputField from "react-native-input-field";
import { styles } from "./styles";
import { RegisterData } from "../src/components/data";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterContext } from "./Context";
import { useContext } from "react";

const Index = () => {
  let schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    mobilenumber: yup.string().required().min(10),
    password: yup
      .string()
      .required()
      .test(
        "regex",
        "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
        (val) => {
          let regExp = new RegExp(
            "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          );
          return regExp.test(val);
        }
      ),
  });
  const { registerUser, userData } = useContext(RegisterContext);
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const submit = (data) => {
    console.log("data : ", userData);
  };
  const renderItem = ({ item }) => {
    const data = {
      mobilenumber: getValues("mobilenumber"),
      password: getValues("password"),
    };
    // const [res, setRes] = useState(data)
    return (
      <>
        <Text style={styles.label}>{item.Label}</Text>
        <InputField
          name={item.name}
          control={control}
          placeholder={item.placeholder}
          containerStyle={styles.containerStyleInput}
          inputStyle={{ width: "90%" }}
          showIcon={item.isShow ?? false}
          errors={errors}
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
          ListFooterComponent={() => <Footer onPress={handleSubmit(submit)} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
