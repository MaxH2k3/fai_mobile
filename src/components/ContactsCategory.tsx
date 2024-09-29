import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  icon: JSX.Element;
  titleLine1: string;
  titleLine2: string;
};

import {theme} from '../constants';

const ContactsCategory: React.FC<Props> = ({icon, titleLine1, titleLine2}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: `${theme.colors.lightBlue}20`,
        padding: 20,
      }}
    >
      {icon}
      <View style={{marginLeft: 8, flex: 1}}>
        <Text
          style={{
            ...theme.fonts.Mulish_Regular,
            color: '#B3B9C7',
            lineHeight: 14 * 1.7,
          }}
          numberOfLines={1}
        >
          {titleLine1}
        </Text>
        <Text
          style={{
            ...theme.fonts.Mulish_Regular,
            color: '#B3B9C7',
            lineHeight: 14 * 1.7,
          }}
          numberOfLines={1}
        >
          {titleLine2}
        </Text>
      </View>
    </View>
  );
};

export default ContactsCategory;
