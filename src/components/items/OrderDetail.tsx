import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { hooks } from '../../hooks';
import { useOrderDetail } from '../../api/query/order-query';
import { useQuery } from '@tanstack/react-query';
import { IOrderDetail } from '../../constants/model/order-interface';
import { theme } from '../../constants';
import { text } from '../../text';
import { truncateText } from '../../utils/truncate-text';
import formatNumber from '../../utils/format-number';
import { Currency } from '../../constants/enum/currency-enum';

interface Prop {
  orderId: string;
}

const OrderDetail: React.FC<Prop> = ({ orderId }) => {

  const user = hooks.useSelector((state) => state.appState.user);

  const { data, isLoading } = useQuery(
    useOrderDetail({
      orderId: orderId,
      token: user!.token
    })
  );

  const orderDetails: IOrderDetail[] = data?.data || []

  const containerStyle = {
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.lightBlue,
    backgroundColor: '#F4F7FC',
  };

  if (isLoading) {
    return (
      <Text style={{ color: 'black' }}>Loading...</Text>
    )
  }

  return (
    <View style={{ ...containerStyle }}>
      <View style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
        {orderDetails.map((item) => (
          <View
            key={item.id}
            style={{ ...theme.flex.row_center_sbt, marginBottom: 10 }}
          >
            <text.T14>{truncateText(item.product.name, 40) || ''}</text.T14>
            <text.T14>
              {item.quantity || 0} x {formatNumber(item.price) || 0}{Currency.VND}
            </text.T14>
          </View>
        ))}
      </View>
    </View>
  );
};

export default OrderDetail;
