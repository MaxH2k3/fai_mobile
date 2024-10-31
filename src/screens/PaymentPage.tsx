import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { custom } from '../custom';
import { components } from '../components';

type Props = NativeStackScreenProps<RootStackParamList, 'PaymentPage'>;

const PaymentPage: React.FC<Props> = ({ route, navigation }) => {
  const { url } = route.params;
  const [loading, setLoading] = useState<boolean>(false);

  // Handle URL changes in the WebView
  const handlePayOsNavigationChange = (event: WebViewNavigation) => {
    // Check if the current URL is the return URL from payos
    if (event.url.includes('https://fashion-ai-innovation.vercel.app/payments/payos')) {
      const responseParams = new URLSearchParams(event.url.split('?')[1]);
      const payosResponseCode = responseParams.get('code'); // Update based on actual parameter names

      // Determine status based on payos response code (assume '00' means success for this example)
      const status = payosResponseCode === '00' ? 'Success' : 'Failure';

      // Close the WebView and navigate based on the status
      setLoading(false);
      // navigation.navigate('OrderConfirmation', { status });

      // Optional: Call backend to confirm payment details
      // if (status === 'Success') {
      //   const orderDetails = {
      //     transactionId: responseParams.get('payos_TransactionNo') || '',
      //     amount: responseParams.get('payos_Amount') || '',
      //     // Add other necessary params based on `payos` response
      //   };
      //   createOrderInBackend(orderDetails);
      // }
    }
  };

  const handleVnPayNavigationChange = (event: WebViewNavigation) => {
    console.log(event.url)
    if (event.url.includes('https://fashion-ai-innovation.vercel.app')) {
      const responseParams = new URLSearchParams(event.url.split('?')[1]);
      const vnpResponseCode = responseParams.get('vnp_TransactionStatus');
      const status = vnpResponseCode === '00' ? 'Success' : 'Failure';
      setLoading(false);
      // navigation.navigate('OrderConfirmation', { status });
      console.log(status)

      // if (status === 'Success') {
      //   const orderDetails = {
      //     transactionId: responseParams.get('vnp_TransactionNo') || '',
      //     amount: responseParams.get('vnp_Amount') || '',
      //   };
      //   createOrderInBackend(orderDetails);
      // }
    }
  };

  // Example function to send order details to backend
  const createOrderInBackend = async (orderDetails: { transactionId: string; amount: string }) => {
    try {
      const response = await fetch('https://your-backend.com/api/order/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });
      console.log('Order created:', await response.json());
    } catch (error) {
      console.error('Error creating order:', error);
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
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {url ? (
          <WebView
            source={{ uri: url }}
            onNavigationStateChange={handleVnPayNavigationChange}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
          />
        ) : (
          <Text>No URL provided</Text>
        )}
      </View>
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default PaymentPage;
