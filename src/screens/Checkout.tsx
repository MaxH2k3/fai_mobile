import {View, Text} from 'react-native';
import React from 'react';

import {text} from '../text';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';

const Checkout: React.FC = () => {
  const navigation = hooks.useNavigation();

  const cart = hooks.useSelector((state) => state.cartSlice.list);
  const total = hooks.useSelector((state) => state.cartSlice.total);

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return (
      <components.Header goBack={true} title='Checkout' bottomLine={true} />
    );
  };

  const renderOrderDetails = () => {
    return (
      <View style={{marginBottom: 20}}>
        <View
          style={{
            paddingHorizontal: 20,
            marginBottom: 10,
            ...theme.flex.row_center_sbt,
          }}
        >
          <text.H4>My order</text.H4>
          <text.H4>${(total - 4.29).toFixed(2)}</text.H4>
        </View>
        <View
          style={{
            padding: 20,
            backgroundColor: `${theme.colors.lightBlue}50`,
            borderTopWidth: 4,
            borderBottomWidth: 4,
            borderColor: theme.colors.lightBlue,
          }}
        >
          {cart.map((item, index, array) => {
            return (
              <View
                key={index}
                style={{
                  ...theme.flex.row_center_sbt,
                  marginBottom: 3,
                  borderBottomColor: theme.colors.lightBlue,
                }}
              >
                <Text
                  style={{
                    ...theme.fonts.Mulish_Regular,
                    fontSize: 14,
                    color: theme.colors.textColor,
                    lineHeight: 14 * 1.7,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    ...theme.fonts.Mulish_Regular,
                    fontSize: 14,
                    color: theme.colors.textColor,
                    lineHeight: 14 * 1.7,
                  }}
                >
                  {item.quantity} x ${item.price}
                </Text>
              </View>
            );
          })}
          <View style={{...theme.flex.row_center_sbt, marginBottom: 3}}>
            <Text
              style={{
                ...theme.fonts.Mulish_Regular,
                fontSize: 14,
                color: theme.colors.textColor,
                lineHeight: 14 * 1.7,
              }}
            >
              Discount
            </Text>
            <Text
              style={{
                ...theme.fonts.Mulish_Regular,
                fontSize: 14,
                color: theme.colors.textColor,
                lineHeight: 14 * 1.7,
              }}
            >
              -4.29
            </Text>
          </View>
          <View style={{...theme.flex.row_center_sbt}}>
            <Text
              style={{
                ...theme.fonts.Mulish_Regular,
                fontSize: 14,
                color: theme.colors.textColor,
                lineHeight: 14 * 1.7,
              }}
            >
              Delivery
            </Text>
            <Text
              style={{
                ...theme.fonts.Mulish_Regular,
                fontSize: 14,
                color: '#00824B',
                lineHeight: 14 * 1.7,
              }}
            >
              Free
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderShippingDetails = () => {
    return (
      <custom.TouchableOpacity
        style={{
          paddingHorizontal: 20,
          ...theme.flex.row_center_sbt,
          borderBottomWidth: 4,
          marginBottom: 20,
          borderBottomColor: theme.colors.lightBlue,
        }}
        onPress={() => navigation.navigate('CheckoutShippingDetails')}
      >
        <View>
          <text.H4 style={{marginBottom: 10}}>Shipping details</text.H4>
          <Text
            style={{
              ...theme.fonts.Mulish_SemiBold,
              fontSize: 14,
              color: theme.colors.textColor,
              lineHeight: 14 * 1.5,
              marginBottom: 10,
            }}
          >
            8000 S Kirkland Ave, Chicago, IL 6065...
          </Text>
        </View>
        <svg.RightArrowSvg />
      </custom.TouchableOpacity>
    );
  };

  const renderPaymentMethod = () => {
    return (
      <custom.TouchableOpacity
        style={{
          paddingHorizontal: 20,
          ...theme.flex.row_center_sbt,
          borderBottomWidth: 4,
          marginBottom: 30,
          borderBottomColor: theme.colors.lightBlue,
        }}
        onPress={() => navigation.navigate('CheckoutPaymentMethod')}
      >
        <View>
          <text.H4 style={{marginBottom: 10}}>Payment method</text.H4>
          <Text
            style={{
              ...theme.fonts.Mulish_SemiBold,
              fontSize: 14,
              color: theme.colors.textColor,
              lineHeight: 14 * 1.5,
              marginBottom: 10,
            }}
          >
            7741 ******** 6644
          </Text>
        </View>
        <svg.RightArrowSvg />
      </custom.TouchableOpacity>
    );
  };

  const renderInputField = () => {
    return (
      <View style={{paddingHorizontal: 20}}>
        <custom.InputFieldBig label='comment' />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <components.KAScrollView
        contentContainerStyle={{flexGrow: 1, paddingTop: 30}}
      >
        {renderOrderDetails()}
        {renderShippingDetails()}
        {renderPaymentMethod()}
        {renderInputField()}
      </components.KAScrollView>
    );
  };

  const renderButton = () => {
    return (
      <View style={{padding: 20}}>
        <components.Button
          title='Confirm order'
          onPress={() => {
            navigation.navigate('OrderSuccessful');
          }}
        />
      </View>
    );
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
      {renderButton()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Checkout;
