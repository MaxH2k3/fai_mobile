import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

import { text } from '../text';
import { hooks } from '../hooks';
import { custom } from '../custom';
import { svg } from '../assets/svg';
import { theme } from '../constants';
import { components } from '../components';
import formatNumber from '../utils/format-number';
import { Currency } from '../constants/enum/currency-enum';
import { IOrderItem, IPaymentData, IPaymentStorage } from '../constants/model/payment-interface';
import { ICartItem } from '../constants/model/cart-interface';
import { CreatePayment } from '../api/payment-api';
import { storeData } from '../utils/storage-utils';
import { actions } from '../store/actions';
import { utils } from '../utils';


const Checkout: React.FC = () => {
  const navigation = hooks.useNavigation();
  const dispatch = hooks.useDispatch();

  const cart: ICartItem[] = hooks.useSelector((state) => state.cartSlice.list);
  const paymentDetail = hooks.useSelector((state) => state.appState.paymentDetail)
  const total = hooks.useSelector((state) => state.cartSlice.total);
  const user = hooks.useSelector((state) => state.appState.user);

  const [loading, setLoading] = useState(false)
  const [note, setNote] = useState('')
  const [address, setAddress] = useState(paymentDetail?.address || '')
  const [isVnPay, setIsVnPay] = useState(true)
  const [phone, setPhone] = useState('')

  const isTenDigitNumber = (str: string) => {
    // Check if the string has exactly 10 characters and contains only numbers
    const regex = /^\d{10}$/;
    return regex.test(str);
  }

  const items: IOrderItem[] = cart.map((item) => ({
    productId: item.id,
    quantity: item.quantity,
    color: item.color,
    size: item.size
  }))

  useEffect(() => {
    if (paymentDetail) {
      setAddress(paymentDetail?.address)
    }
  }, [paymentDetail]);

  const handleCheckOut = async () => {
    if (!isTenDigitNumber(phone)) {
      utils.showMessage({
        message: 'Invalid phone',
        type: 'danger',
        icon: 'danger'
      })
    } else {
      setLoading(true);
      const data: IPaymentData = {
        paymentMethod: isVnPay ? 'VNPAY' : 'PAYOS',
        description: 'Transaction for FAI',
        details: items,
        discount: 0
      };
      const res = await CreatePayment(data, user!.token);
      if (res) {
        setLoading(false);
        if (res.success) {
          const paymentDetail: IPaymentStorage = {
            address: address,
            note: note,
          }
          dispatch(actions.setPaymentDetail(paymentDetail))
          navigation.navigate('PaymentPage', {
            url: res.data.data,
            method: isVnPay ? 'VNPAY' : 'PAYOS'
          })
        } else {
          utils.showMessage({
            message: res.message || 'Something went wrong',
            type: 'danger',
            icon: 'danger'
          })
        }
      }
    }
  };

  if (loading) {
    return <components.Loader />;
  }

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
      <View style={{ marginBottom: 20 }}>
        <View
          style={{
            paddingHorizontal: 20,
            marginBottom: 10,
            ...theme.flex.row_center_sbt,
          }}
        >
          <text.H4>My order</text.H4>
          <text.H4>{formatNumber(total)}{Currency.VND}</text.H4>
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
          <View style={{ ...theme.flex.row_center_sbt }}>
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
          <text.H4 style={{ marginBottom: 10 }}>Shipping details</text.H4>
          <Text
            style={{
              ...theme.fonts.Mulish_SemiBold,
              fontSize: 14,
              color: theme.colors.textColor,
              lineHeight: 14 * 1.5,
              marginBottom: 10,
            }}
          >
            {address}
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
        onPress={() => setIsVnPay(!isVnPay)}
      >
        <View>
          <text.H4 style={{ marginBottom: 10 }}>Payment method</text.H4>
          <Text
            style={{
              ...theme.fonts.Mulish_SemiBold,
              fontSize: 14,
              color: theme.colors.textColor,
              lineHeight: 14 * 1.5,
              marginBottom: 10,
            }}
          >
            {isVnPay ? 'Pay with bank cart' : 'Pay by scanning QR code'}
          </Text>
        </View>
        <svg.RightArrowSvg />
      </custom.TouchableOpacity>
    );
  };

  const renderInputFields = () => {
    return (
      <View style={{ paddingHorizontal: 20, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* <custom.InputFieldBig label='Address' onChange={(value) => setAddress(value)} value={address} placeholder='Enter address' /> */}

        <custom.InputField
          label='Phone'
          placeholder='0123456789'
          containerStyle={{
            marginBottom: 20,
          }}
          value={phone}
          checkIcon={true}
          onChangeText={(value) => setPhone(value)}
        />
        <custom.InputFieldBig label='Note' onChange={(value) => setNote(value)} value={note} placeholder='Enter note' />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <components.KAScrollView
        contentContainerStyle={{ flexGrow: 1, paddingTop: 30 }}
      >
        {renderOrderDetails()}
        {renderShippingDetails()}
        {renderPaymentMethod()}
        {renderInputFields()}
      </components.KAScrollView>
    );
  };

  const renderButton = () => {
    return (
      <View style={{ padding: 20 }}>
        <components.Button
          title='Confirm order'
          onPress={handleCheckOut}
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
