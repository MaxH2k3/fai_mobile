import { View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { custom } from '../custom';
import { theme } from '../constants';
import { components } from '../components';
import MapWebView from './WebMapView';
import MapPlacePrediction from './MapPlacePrediction';
import { GetLocationDetail, GetMapPrediction } from '../api/map-api';
import { utils } from '../utils';
import { hooks } from '../hooks';
import { IPaymentStorage } from '../constants/model/payment-interface';
import { actions } from '../store/actions';




const CheckoutShippingDetails: React.FC = () => {

  const map_api_token = '3jHRDBVy1j67Uxz9fhKD5Faatm0pOznUluD6Caer'

  const navigation = hooks.useNavigation();
  const dispatch = hooks.useDispatch();

  const [loading, setLoading] = useState(false)

  const [modalVisible, setModalVisible] = useState(false);

  const [address, setAddress] = useState('');

  const [addressPrediction, setAddressPrediction] = useState<MapPlace[]>([])

  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [uri, setUri] = useState('')

  const searchAddress = async () => {
    try {
      setLoading(true)
      const res = await GetMapPrediction({ api_key: map_api_token, input: address });
      if (res) {
        setLoading(false)
        if (res.success) {
          setAddressPrediction(res.data.predictions)
          setModalVisible(true)
        } else {
          utils.showMessage({
            message: 'No location was found',
            type: 'danger',
            icon: 'danger'
          })
        }
      }
    }
    catch (error) {
      utils.showMessage({
        message: 'Something went wrong',
        type: 'danger',
        icon: 'danger'
      })
    }
  };

  const getLocation = async (id: string) => {
    setLoading(true)
    const res = await GetLocationDetail({ api_key: map_api_token, place_id: id })
    if (res) {
      setLoading(false)
      setModalVisible(false)
      if (res.success) {
        setUri(res.data.result.url)
        setLatitude(res.data.result.geometry.location.lat)
        setLongitude(res.data.result.geometry.location.lng)
      } else {
        utils.showMessage({
          message: 'Something went wrong',
          type: 'danger',
          icon: 'danger'
        })
      }
    }
  }

  const confirmAddress = () => {
    const paymentDetail: IPaymentStorage = {
      address: address,
      note: '',
    }
    dispatch(actions.setPaymentDetail(paymentDetail))
    navigation.navigate('Checkout')
  }


  const renderHeader = () => {
    return <components.Header title='Shipping details' goBack={true} />;
  };

  const renderMap = () => {
    return (
      <View
        style={{
          width: '100%',
          height: theme.sizes.height * 0.6,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.lightBlue,
        }}
      >
        <MapWebView latitude1={latitude} longitude1={longitude} latitude2={10.5353285} longitude2={107.4055814} uri={uri} />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 20, marginTop: 20 }}>
          <custom.InputField
            placeholder='3646 S 58th Ave, Cicero, IL 608'
            label='enter an address'
            value={address}
            onChangeText={(value) => setAddress(value)}
          />
          <components.Button title={loading ? 'Loading' : 'Choose location'} onPress={searchAddress} disabled={loading} />
          <components.Button title={loading ? 'Loading' : 'Confirm address'} onPress={confirmAddress} disabled={loading} />
        </View>
      </KeyboardAwareScrollView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      {renderHeader()}
      {renderMap()}
      <MapPlacePrediction
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        mapPlaces={addressPrediction}
        getLocation={getLocation}
        setAddress={setAddress}
      />
      {renderContent()}
    </SafeAreaView>
  );
};

export default CheckoutShippingDetails;
