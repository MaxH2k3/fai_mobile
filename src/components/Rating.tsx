import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ProductType} from '../types';

import {theme} from '../constants';
import {svg} from '../assets/svg';

type Props = {
  title: string;
  active: boolean;
  onPress: () => void;
  containerStyle?: object;
  version?: number;
  item?: ProductType;
};

const Rating: React.FC<Props> = ({
  title,
  active,
  onPress,
  containerStyle,
  version,
  item,
}): JSX.Element | null => {
  if (version === 1) {
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderWidth: 1,
          borderRadius: 3,
          borderColor: active ? theme.colors.mainColor : '#DBE9F5',
          backgroundColor: active ? theme.colors.mainColor : '#fff',
          marginRight: 13,
          ...containerStyle,
        }}
        onPress={onPress}
      >
        <Text
          style={{
            color: active ? theme.colors.white : theme.colors.textColor,
            fontSize: 12,
            lineHeight: 12 * 1.7,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }

  // if (version === 2) {
  //   return (
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         alignItems: 'center',
  //       }}
  //     >
  //       <svg.RatingStarSvg />
  //       <Text
  //         style={{
  //           marginLeft: 4,
  //           ...theme.fonts.DMSans_400Regular,
  //           fontSize: 12,
  //           lineHeight: 12 * 1.7,
  //           color: theme.colors.textColor,
  //         }}
  //       >
  //         {item.rating.toFixed(1)}
  //       </Text>
  //     </View>
  //   );
  // }

  return null;
};

export default Rating;
