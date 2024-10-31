import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import { text } from '../text';
import { hooks } from '../hooks';
import { custom } from '../custom';
import { svg } from '../assets/svg';
import { theme } from '../constants';
import { history } from '../constants';
import { components } from '../components';
import { useQuery } from '@tanstack/react-query';
import { useOrderDetail, useOrdersByBrand } from '../api/query/order-query';
import { IChangeOrderStatus, IOrder, IOrderDetail } from '../constants/model/order-interface';
import { truncateText } from '../utils/truncate-text';
import { formatDate } from '../utils/formar-date';
import { Currency } from '../constants/enum/currency-enum';
import formatNumber from '../utils/format-number';
import OrderDetail from '../components/items/OrderDetail';
import { ChangeOrderStatus } from '../api/order-api';
import { utils } from '../utils';
import { Input } from '@rneui/base';

const OrderHistory: React.FC = () => {
  const navigation = hooks.useNavigation();

  const user = hooks.useSelector((state) => state.appState.user);

  const [activeSections, setActiveSections] = useState<number[]>([]);
  const [loading, setLoading] = useState(false)

  const setSections = (sections: any) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const { data, isLoading } = useQuery(
    useOrdersByBrand({
      page: 1,
      eachPage: 100,
      token: user!.token
    })
  );

  const orders: IOrder[] = isLoading ? [] : data?.data.data

  const HandleCancelOrder = async (orderId: string, rejectNote: string) => {
    setLoading(true)
    const data: IChangeOrderStatus = {
      orderId: orderId,
      note: rejectNote,
      status: '5'
    }
    const res = await ChangeOrderStatus(data, user!.token)
    if (res) {
      setLoading(false)
      if (res.success) {
        utils.showMessage({
          message: 'Order cancelled',
          type: 'success',
          icon: 'success'
        })
      } else {
        utils.showMessage({
          message: 'Cancel order failed',
          type: 'success',
          icon: 'success'
        })
      }
    }
  }

  if (isLoading || loading) {
    return <components.Loader />;
  }

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Order history' />;
  };

  const accordionHeader = (order: IOrder) => {
    const containerStyle = {
      backgroundColor: theme.colors.white,
      paddingHorizontal: 20,
      paddingTop: 11,
      paddingBottom: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomWidth: 4,
      borderBottomColor: theme.colors.lightBlue,
    };

    return (
      <View style={{ ...containerStyle }}>
        <View style={{ ...theme.flex.row_center_sbt, marginBottom: 7 }}>
          <text.H5>{truncateText(order.address, 30)}</text.H5>
          {order.orderStatusId == 1 && <Text style={{ color: 'orange' }}>Pending</Text>}
          {order.orderStatusId == 2 && <Text style={{ color: 'blue' }}>Processing</Text>}
          {order.orderStatusId == 3 && <Text style={{ color: 'purple' }}>Shipping</Text>}
          {order.orderStatusId == 4 && <Text style={{ color: 'green' }}>Completed</Text>}
          {order.orderStatusId == 5 && <Text style={{ color: 'red' }}>Canceled</Text>}
          {order.orderStatusId == 6 && <Text style={{ color: 'red' }}>Rejected</Text>}
        </View>

        <View style={{ ...theme.flex.row_center_sbt }}>
          <Text
            style={{
              ...theme.fonts.Mulish_Regular,
              color: theme.colors.textColor,
              fontSize: 12,
              lineHeight: 12 * 1.5,
            }}
          >
            {formatDate(order.createdAt)}
          </Text>
          <Text
            style={{
              ...theme.fonts.Mulish_Bold,
              fontSize: 12,
              lineHeight: 12 * 1.5,
            }}
          >
            {formatNumber(order.totalPrice)}{Currency.VND}
          </Text>
        </View>
        {order.orderStatusId == 2 && (
          <>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  padding: 5,
                  marginTop: 10,
                  borderRadius: 5,
                  width: 55
                }}
                onPress={() => HandleCancelOrder(order.id, order.note)}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    );
  };

  const accordionContent = (order: IOrder) => {
    return (
      <OrderDetail orderId={order.id} />
    );
  };

  const renderContent = () => {
    if (history.length > 0) {
      return (
        <custom.ScrollView
          contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}
        >
          <Accordion
            activeSections={activeSections}
            sections={orders}
            touchableComponent={TouchableOpacity}
            renderHeader={accordionHeader}
            renderContent={accordionContent}
            duration={400}
            onChange={setSections}
            containerStyle={{ paddingTop: 10 }}
            sectionContainerStyle={{ marginBottom: 10 }}
          />
        </custom.ScrollView>
      );
    }
  };

  const renderEmptyHistory = () => {
    if (history.length === 0) {
      return (
        <custom.ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingTop: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              backgroundColor: theme.colors.white,
              flex: 1,
              marginHorizontal: 20,
              paddingHorizontal: 20,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <custom.Image
              source={{ uri: 'https://george-fx.github.io/dine-hub/13.jpg' }}
              style={{
                width: theme.sizes.width - 100,
                aspectRatio: 1,
                alignSelf: 'center',
                marginBottom: 14,
              }}
            />
            <text.H2
              style={{
                marginBottom: 14,
              }}
            >
              No Order History Yet!
            </text.H2>
            <text.T16 style={{ textAlign: 'center' }}>
              It looks like your order history is empty.{'\n'}Place your order
              now to start building{'\n'}your history!
            </text.T16>
          </View>
        </custom.ScrollView>
      );
    }

    return null;
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
      {renderEmptyHistory()}
      {/* {renderButton()} */}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default OrderHistory;
