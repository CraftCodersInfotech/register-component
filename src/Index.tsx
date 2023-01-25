import {
  FlatList,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  StyleProp,
  ImageStyle,
  ImageSourcePropType,
  TextStyle,
  ViewStyle,
} from 'react-native';
import * as React from 'react';
import InputField from 'react-native-input-field';
import {styles} from './styles';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {KeyboardType} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
interface InputData {
  name: string;
  Label?: string;
  placeholder?: string;
  inputType?: string;
  keyboardType?: KeyboardType | undefined;
  showIcon?: boolean;
  showLogo?: boolean;
  image?: ImageSourcePropType;
  showPasswordIcon?: ImageSourcePropType;
  hidePasswordIcon?: ImageSourcePropType;
}
export interface IRegisterProps {
  data: InputData[];
  source?: ImageSourcePropType;
  imagestyle?: StyleProp<ImageStyle>;
  headingLabel?: string;
  headingLabelStyle?: StyleProp<TextStyle>;
  ShowLabel?: boolean;
  inputLabelStyle?: StyleProp<TextStyle>;
  inputContainer?: StyleProp<ViewStyle>;
  maxLength?: number;
  buttonContainer: StyleProp<ViewStyle>;
  buttonLabel: string;
  buttonLabelStyle: StyleProp<TextStyle>;
  onButtonPress?: any;
  backgroundColor: string;
  activeBackgroundColor: string;
  belowButtonView?: React.ReactNode;
  descriptionLabel: string;
  descriptionLabelStyle: StyleProp<TextStyle>;
  highlightedLabel: string;
  highlightedLabelStyle: StyleProp<TextStyle>;
  highlightedLabelPress: () => void;
  iconStyle?: StyleProp<ImageStyle>;
  passwordIconStyle?: StyleProp<ImageStyle>;
  placeholderTextColor?: string;
  bounces?: boolean;
  inputStyle?: StyleProp<ViewStyle>;
}
const Index = (props: IRegisterProps) => {
  const {
    source, //Path of image
    imagestyle, //Prop to give style to image
    headingLabel, //Add text under image
    headingLabelStyle, //prop to give style to text under image
    ShowLabel, // To show the label upon input-field
    inputLabelStyle, //prop to style  the label upon input-field
    inputContainer, //prop to style  the input-field
    maxLength, // add to allow user enter limited data
    buttonContainer, //Prop to style the button View
    buttonLabel, //Add text in button
    onButtonPress,
    buttonLabelStyle, //Prop to style the text in button
    backgroundColor, //inactive color of "login" button
    activeBackgroundColor, //active color of "login" button
    belowButtonView, //User can add view or text
    descriptionLabel, //Add text in-place of "Already have an account?"
    descriptionLabelStyle, //Prop to style the description text
    highlightedLabel, //Add text in-place of "login"
    highlightedLabelStyle, //Prop to style the highlighted text
    highlightedLabelPress, //onPress for highlighted text
    iconStyle,
    passwordIconStyle,
    placeholderTextColor,
    bounces,
    inputStyle,
  } = props;
  let schema = yup.object().shape({
    firstname: yup.string().required(),
    // lastname: yup.string().required(),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    mobilenumber: yup.string().required().min(10),

    password: yup
      .string()
      .required()
      .test(
        'regex',
        'Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase',
        (val: any) => {
          let regExp = new RegExp(
            '^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$',
          );
          return regExp.test(val);
        },
      ),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });
  // const { registerUser, userData } = useContext(RegisterContext);
  const {
    control,
    getValues,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });
  const submit = (data: any) => {
    onButtonPress(data);
    // console.log('data : ', data);
  };
  const data = {
    email: getValues('email'),
    mobilenumber: getValues('mobilenumber'),
    password: getValues('password'),
    passwordConfirmation: getValues('passwordConfirmation'),
    firstname: getValues('firstname'),
  };
  const renderItem = ({item}: any) => {
    // const [res, setRes] = useState(data)
    return (
      <View>
        {ShowLabel && <Text style={inputLabelStyle}>{item.Label}</Text>}

        <InputField
          passwordIconStyle={passwordIconStyle}
          placeholderTextColor={placeholderTextColor}
          iconStyle={iconStyle}
          showLogo={item.showLogo}
          source={item.image}
          showPasswordIcon={item.showPasswordIcon}
          hidePasswordIcon={item.hidePasswordIcon}
          showIcon={item.showIcon}
          name={item.name}
          control={control}
          containerStyle={inputContainer}
          placeholder={item.placeholder}
          maxLength={maxLength}
          keyboardType={item.keyboardType}
          inputStyle={inputStyle}
          errors={errors}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.Safrareview}>
      <View style={styles.mainView}>
        <KeyboardAwareScrollView>
          <Header
            headingLabel={headingLabel}
            headingLabelStyle={headingLabelStyle}
            imagestyle={imagestyle}
            source={source}
          />
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={props.data}
              renderItem={renderItem}
            />
          </View>
          <Footer
            onPress={handleSubmit(submit)}
            buttonContainer={buttonContainer}
            buttonLabel={buttonLabel}
            buttonLabelStyle={buttonLabelStyle}
            activeBackgroundColor={activeBackgroundColor}
            backgroundColor={backgroundColor}
            belowButtonView={belowButtonView}
            descriptionLabel={descriptionLabel}
            descriptionLabelStyle={descriptionLabelStyle}
            highlightedLabel={highlightedLabel}
            highlightedLabelStyle={highlightedLabelStyle}
            highlightedLabelPress={highlightedLabelPress}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Index;
