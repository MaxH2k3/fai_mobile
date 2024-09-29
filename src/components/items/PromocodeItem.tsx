import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {text} from '../../text';
import {utils} from '../../utils';
import {custom} from '../../custom';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {showMessage} from '../../utils';
import {PromocodeType} from '../../types';

type Props = {item: PromocodeType};

const PromocodeItem: React.FC<Props> = ({item}) => {
  const colors = utils.colors(item.discount);
  // const colors = (discount: number) => {
  //   if (discount < 35) {
  //     return {
  //       backgroundColor: '#FFA462',
  //     };
  //   } else if (discount > 35 && discount < 51) {
  //     return {
  //       backgroundColor: '#FA5555',
  //     };
  //   } else {
  //     return {
  //       backgroundColor: theme.colors.mainTurquoise,
  //     };
  //   }
  // };

  return (
    <TouchableOpacity
      style={{
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.lightBlue,
      }}
      onPress={() => {
        showMessage({
          message: 'Copied to clipboard',
          type: 'success',
          icon: 'success',
        });
      }}
    >
      <custom.Image
        source={{uri: item.image}}
        style={{width: 73, height: 84, marginRight: 14}}
      />
      <View style={{marginRight: 'auto'}}>
        <text.H4 style={{marginBottom: 4}}>{item.code}</text.H4>
        <Text
          style={{
            ...theme.fonts.Mulish_SemiBold,
            fontSize: 21,
            marginBottom: 3,
            color: colors?.backgroundColor,
          }}
        >
          {item.discount}% off
        </Text>
        <Text
          style={{
            ...theme.fonts.Mulish_Regular,
            fontSize: 14,
            lineHeight: 14 * 1.7,
            color: theme.colors.textColor,
          }}
        >
          Valid until {item.expires_at}
        </Text>
      </View>
      <svg.CopySvg />
    </TouchableOpacity>
  );
};

export default PromocodeItem;
