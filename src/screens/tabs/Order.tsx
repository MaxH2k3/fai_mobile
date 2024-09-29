import React from 'react';
import {View, Text} from 'react-native';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {components} from '../../components';

const Order: React.FC = () => {
  const navigation = hooks.useNavigation();

  const cart = hooks.useSelector((state) => state.cartSlice.list);
  const total = hooks.useSelector((state) => state.cartSlice.total);

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        burger={true}
        basket={true}
        bottomLine={true}
        title={cart.length > 0 ? 'Order' : 'Cart'}
      />
    );
  };

  const renderProducts = () => {
    if (cart.length > 0) {
      return (
        <View
          style={{
            borderBottomWidth: 1,
            marginBottom: 30,
            borderBottomColor: theme.colors.lightBlue,
          }}
        >
          {cart.map((item, index, array) => {
            const lastItem = index === array.length - 1;
            return (
              <components.OrderItem
                key={item.id}
                item={item}
                lastItem={lastItem}
              />
            );
          })}
        </View>
      );
    }

    return null;
  };

  const renderPromocodeApplied = () => {
    if (cart.length > 0) {
      return (
        <View style={{paddingHorizontal: 20, marginBottom: 30}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                ...theme.fonts.Mulish_Regular,
                fontSize: 16,
                color: theme.colors.mainColor,
                lineHeight: 16 * 1.7,
                marginRight: 8,
              }}
            >
              Promocode applied
            </Text>
            <svg.CheckGreenSvg />
          </View>
        </View>
      );
    }

    return null;
  };

  const renderOrderDetails = () => {
    if (cart.length > 0) {
      return (
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
              paddingHorizontal: 20,
              justifyContent: 'space-between',
            }}
          >
            <text.H5>Subtotal</text.H5>
            <text.H5>${total.toFixed(2)}</text.H5>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
              paddingHorizontal: 20,
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                ...theme.fonts.Mulish_Regular,
                fontSize: 16,
                lineHeight: 16 * 1.7,
                color: theme.colors.textColor,
              }}
            >
              Discount
            </Text>
            <Text
              style={{
                ...theme.fonts.Mulish_Regular,
                fontSize: 16,
                lineHeight: 16 * 1.7,
                color: theme.colors.textColor,
              }}
            >
              -4.29
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
              paddingHorizontal: 20,
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                ...theme.fonts.Mulish_Regular,
                fontSize: 16,
                lineHeight: 16 * 1.7,
                color: theme.colors.textColor,
              }}
            >
              Delivery
            </Text>
            <Text
              style={{
                ...theme.fonts.Mulish_Regular,
                fontSize: 16,
                color: '#00824B',
                lineHeight: 16 * 1.7,
              }}
            >
              Free
            </Text>
          </View>
          <View
            style={{
              width: theme.sizes.width,
              height: 1,
              backgroundColor: theme.colors.lightBlue,
              marginBottom: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
              paddingHorizontal: 20,
              justifyContent: 'space-between',
            }}
          >
            <text.H4>Total</text.H4>
            <text.H4>${(total - 4.29).toFixed(2)}</text.H4>
          </View>
        </View>
      );
    }

    return null;
  };

  const renderEmptyCart = () => {
    if (cart.length === 0) {
      return (
        <custom.ScrollView
          contentContainerStyle={{paddingHorizontal: 20, paddingTop: 23}}
        >
          <View style={{alignSelf: 'center', marginBottom: 20}}>
            <svg.ShoppingBag />
          </View>

          <components.Line
            style={{
              marginBottom: 14,
            }}
          />
          <text.H2 style={{textAlign: 'center', marginBottom: 14}}>
            Your cart is empty!
          </text.H2>
          <Text
            style={{
              ...theme.fonts.Mulish_Regular,
              fontSize: 16,
              textAlign: 'center',
              lineHeight: 16 * 1.7,
              color: theme.colors.textColor,
              marginBottom: 30,
            }}
          >
            Looks like you haven't made {'\n'} your order yet.
          </Text>
          <components.Button title='shop now' onPress={() => {}} />
        </custom.ScrollView>
      );
    }

    return null;
  };

  const renderButton = () => {
    if (cart.length > 0) {
      return (
        <View style={{padding: 20}}>
          <components.Button
            title='proceed to checkout'
            onPress={() => {
              navigation.navigate('Checkout');
            }}
          />
        </View>
      );
    }

    return null;
  };

  const renderContent = () => {
    return (
      <custom.ScrollView contentContainerStyle={{paddingTop: 20}}>
        {renderProducts()}
        {renderPromocodeApplied()}
        {renderOrderDetails()}
        {renderEmptyCart()}
      </custom.ScrollView>
    );
  };

  const renderBottomTabBar = () => {
    return <components.BottomTabBar />;
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
      {renderBottomTabBar()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Order;
