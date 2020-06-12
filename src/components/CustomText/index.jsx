import React from 'react';
import { Text } from 'react-native';

const CustomText = (props) => {
  const fontFamily = props.bold
    ? { fontFamily: 'NunitoSans_700Bold' }
    : { fontFamily: 'NunitoSans_400Regular' };

  const incomingStyle = Array.isArray(props.style)
    ? props.style
    : [props.style];

  return (
    <Text {...props} style={[fontFamily, incomingStyle]}>
      {props.children}
    </Text>
  );
};

export default CustomText;
