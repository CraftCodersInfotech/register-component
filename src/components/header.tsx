import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
} from 'react-native';
import * as React from 'react';

interface props {
  imagestyle?: StyleProp<ImageStyle>;
  source?: ImageSourcePropType;
  headingLabel?: string;
  headingLabelStyle?: StyleProp<TextStyle>;
}

const header = (props: props) => {
  const {
    source, //Path of image
    imagestyle, //Prop to give style to image
    headingLabel, //Add text under image
    headingLabelStyle, //prop to give style to text under image
  } = props;
  return (
    <>
      <Image style={imagestyle} source={source} />

      <Text style={headingLabelStyle}>{headingLabel}</Text>
    </>
  );
};

export default header;
