import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { custom } from '../custom';
import { components } from '../components';
import { Cookies } from '@react-native-cookies/cookies';
import CookieManager from '@react-native-cookies/cookies';
import { Token, User } from '../constants/enum/storage-enum';
import { hooks } from '../hooks';
import { ICheckOutData, IOrderItem } from '../constants/model/payment-interface';
import { CheckOut } from '../api/payment-api';
import { actions } from '../store/actions';

type Props = NativeStackScreenProps<RootStackParamList, 'PaymentPage'>;

const PaymentPage: React.FC<Props> = ({ route, navigation }) => {

  const { url, method } = route.params;
  const [loading, setLoading] = useState<boolean>(false);
  const user = hooks.useSelector((state) => state.appState.user);
  const paymentDetail = hooks.useSelector((state) => state.appState.paymentDetail)
  const dispatch = hooks.useDispatch();
  const cart = hooks.useSelector((state) => state.cartSlice.list);

  const [checkOutCalled, setCheckOutCalled] = useState(false)

  const items: IOrderItem[] = cart.map((item) => ({
    productId: item.id,
    quantity: item.quantity,
    color: item.color,
    size: item.size
  }))

  useEffect(() => {
    const setCookie = async () => {
      await CookieManager.set('https://fashion-ai-innovation.vercel.app', {
        name: Token.JWT_TOKEN,
        value: user!.token,
        domain: 'fashion-ai-innovation.vercel.app',
        path: '/',
        version: '1',
        expires: '2025-01-01T00:00:00.00Z',
        secure: true,
        httpOnly: true,
      });

      await CookieManager.set('https://fashion-ai-innovation.vercel.app', {
        name: User.USER_ROLE,
        value: user!.roleName,
        domain: 'fashion-ai-innovation.vercel.app',
        path: '/',
        version: '1',
        expires: '2025-01-01T00:00:00.00Z',
        secure: true,
        httpOnly: true,
      });
    };

    setCookie();
  }, []);

  const handlePayOsNavigationChange = async (event: WebViewNavigation) => {
    if (event.url.includes('https://fashion-ai-innovation.vercel.app') && !checkOutCalled) {

      const queryString = event.url.split('?')[1] || '';
      const responseParams = new URLSearchParams(event.url.split('?')[1]);
      const payosResponseCode = responseParams.get('code');
      const status = payosResponseCode === '00' ? 'Success' : 'Failure';

      setLoading(false);

      if (status === 'Success') {
        setLoading(true)
        setCheckOutCalled(true)
        const data: ICheckOutData = {
          paymentMethod: 'PAYOS',
          address: paymentDetail?.address as string,
          note: paymentDetail?.note as string,
          details: items,
          callbackUrl: queryString,
          voucherCode: paymentDetail?.voucherCode
        };

        const res = await CheckOut(data, user!.token);
        if (res) {
          console.log(res)
          setLoading(false)
          if (res.success) {
            dispatch(actions.resetCart())
            navigation.navigate('OrderSuccessful')
          } else {
            navigation.navigate('OrderFailed')
          }
        }
      }
      else {
        navigation.navigate('OrderFailed')
      }
    }
  };


  const handleVnPayNavigationChange = async (event: WebViewNavigation) => {
    if (event.url.includes('https://fashion-ai-innovation.vercel.app') && !checkOutCalled) {

      const queryString = event.url.split('?')[1] || '';
      const responseParams = new URLSearchParams(event.url.split('?')[1]);
      const vnpResponseCode = responseParams.get('vnp_TransactionStatus');
      const status = vnpResponseCode === '00' ? 'Success' : 'Failure';

      setLoading(false);

      if (status === 'Success') {
        setLoading(true)
        setCheckOutCalled(true)
        const data: ICheckOutData = {
          paymentMethod: 'VNPAY',
          address: paymentDetail?.address as string,
          note: paymentDetail?.note as string,
          details: items,
          callbackUrl: queryString,
          voucherCode: paymentDetail?.voucherCode
        };

        const res = await CheckOut(data, user!.token);
        if (res) {
          console.log(res)
          setLoading(false)
          if (res.success) {
            dispatch(actions.resetCart())
            navigation.navigate('OrderSuccessful')
          } else {
            navigation.navigate('OrderFailed')
          }
        }
      }
      else {
        navigation.navigate('OrderFailed')
      }
    }
  };


  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} logo />;
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      <View style={{ flex: 1 }}>
        {loading ? (<components.Loader />
        ) : (
          url ? (
            <WebView
              source={{ uri: url }}
              onNavigationStateChange={method == 'VNPAY' ? handleVnPayNavigationChange : handlePayOsNavigationChange}
            />
          ) : (
            <Text>No URL provided</Text>
          )
        )}
      </View>
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default PaymentPage;
