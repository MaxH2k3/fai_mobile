import {View, Text} from 'react-native';
import React from 'react';

import {custom} from '../custom';
import {theme} from '../constants';

type Props = {
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
};

const PaymentMenuItem: React.FC<Props> = ({leftComponent, rightComponent}) => {
  return (
    <custom.TouchableOpacity
      style={{
        height: 60,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        ...theme.flex.row_center_sbt,
        borderBottomColor: theme.colors.lightBlue,
      }}
    >
      {leftComponent}
      {rightComponent}
    </custom.TouchableOpacity>
  );
};

export default PaymentMenuItem;
