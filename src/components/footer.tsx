import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import * as React from 'react';
import Button from 'react-native-button';
import {styles} from '../styles';

export type props = {
  onPress: () => void;
  buttonLabel: string;
  buttonLabelStyle: StyleProp<TextStyle>;
  buttonContainer: StyleProp<ViewStyle>;
  backgroundColor: string;
  activeBackgroundColor: string;
  belowButtonView: React.ReactNode;
  descriptionLabel: string;
  descriptionLabelStyle: StyleProp<TextStyle>;
  highlightedLabel: string;
  highlightedLabelStyle: StyleProp<TextStyle>;
  highlightedLabelPress: () => void;
};

const footer = (props: props) => {
  const {
    onPress, //
    buttonContainer, //Prop to style the button View
    buttonLabel, //Add text in button
    buttonLabelStyle, //Prop to style the text in button
    backgroundColor, //inactive color of  button
    activeBackgroundColor, //active color of  button
    belowButtonView, //User can add view or text below the button
    descriptionLabel, //Add text in-place of "Already have an account?"
    descriptionLabelStyle, //Prop to style the description text
    highlightedLabel, //Add text in-place of "login"
    highlightedLabelStyle, //Prop to style the highlighted text
    highlightedLabelPress, //onPress for highlighted text
  } = props;

  return (
    <View style={{marginTop: 20}}>
      <Button
        title={buttonLabel}
        containerStyle={buttonContainer}
        textStyle={buttonLabelStyle}
        backgroundColor={backgroundColor}
        activeBackgroundColor={activeBackgroundColor}
        onPress={onPress}
      />
      <View style={styles.footer}>
        {belowButtonView}
        {/* <Text style={styles.Font}>
          {String.description}
          {'\n'} <Text style={styles.BoldText}>{String.terms}</Text>
          {String.and}
          <Text style={styles.BoldText}>{String.privacy}</Text>
        </Text> */}
        {/* <View style={styles.orMain}>
          <View style={styles.Line} />
          <Text style={{paddingHorizontal: 10}}>or </Text>

          <View style={styles.Line} />
        </View> */}
        <View style={{flexDirection: 'row'}}>
          <Text style={descriptionLabelStyle}>{descriptionLabel}</Text>
          <TouchableOpacity onPress={highlightedLabelPress}>
            <Text style={highlightedLabelStyle}>{highlightedLabel}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default footer;
