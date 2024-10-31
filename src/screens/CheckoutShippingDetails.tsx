import { Text, Image, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { custom } from '../custom';
import { theme } from '../constants';
import { components } from '../components';
import WebView from 'react-native-webview';
import MapView, { Marker, UrlTile } from 'react-native-maps';

const addresses = [
  {
    id: 1,
    name: 'Home',
    address: '8000 S Kirkland Ave, Chicago',
  },
  {
    id: 2,
    name: 'Work',
    address: '8000 S Kirkland Ave, Chicago',
  },
  {
    id: 3,
    name: 'Other',
    address: '8000 S Kirkland Ave, Chicago',
  },
  {
    id: 4,
    name: 'Current Location',
  },
];

const CheckoutShippingDetails: React.FC = () => {
  const [selectedAddress, setSelectedAddress] = useState(
    addresses.length > 0 ? addresses[0].id : null,
  );

  const [region, setRegion] = useState({
    latitude: 37.7749,    // Default latitude
    longitude: -122.4194, // Default longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [address, setAddress] = useState('');
  const [marker, setMarker] = useState(null);

  const [currentLocation, setCurrentLocation] = useState(false);

  const renderHeader = () => {
    return <components.Header title='Shipping details' goBack={true} />;
  };

  const renderMap = () => {
    return (
      <View
        style={{
          width: '100%',
          height: theme.sizes.height * 0.45,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.lightBlue,
        }}
      >
        {/* <WebView
          source={{
            uri: 'https://www.openstreetmap.org/#map=11/18.0806/106.1005',
          }}
          allowsFullscreenVideo
          allowFileAccess
          allowUniversalAccessFromFileURLs
          originWhitelist={['*']}
        /> */}
        <MapView
          initialRegion={{
            latitude: 37.7749,    // Example latitude (San Francisco)
            longitude: -122.4194, // Example longitude (San Francisco)
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <UrlTile
            urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maximumZ={19} // Max zoom level supported by OpenStreetMap
          />
        </MapView>
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
        {addresses.map((item, index, array) => {
          return index !== array.length - 1 ? (
            <TouchableOpacity
              key={index}
              style={{
                width: '100%',
                paddingTop: 10,
                paddingBottom: 10,
                paddingHorizontal: 20,
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.lightBlue,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              onPress={() => setSelectedAddress(item.id)}
            >
              <View style={{ marginTop: 10 }}>
                <Text
                  style={{
                    ...theme.fonts.H5,
                    color: theme.colors.mainColor,
                    marginBottom: 4,
                  }}
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    ...theme.fonts.Mulish_Regular,
                    fontSize: 14,
                    lineHeight: 14 * 1.5,
                    color: theme.colors.textColor,
                  }}
                  numberOfLines={1}
                >
                  {item.address}
                </Text>
              </View>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20 / 2,
                  borderWidth: 2,
                  borderColor: theme.colors.lightBlue,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {selectedAddress === item.id && (
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: theme.colors.accent,
                      borderRadius: 10 / 2,
                    }}
                  />
                )}
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={index}
              style={{ marginTop: 20, paddingHorizontal: 20 }}
              onPress={() => setSelectedAddress(item.id)}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ width: theme.sizes.width - 40 - 40 }}>
                  <custom.InputField
                    placeholder='3646 S 58th Ave, Cicero, IL 608'
                    label='enter an address'
                  />
                </View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 20 / 2,
                    borderWidth: 2,
                    borderColor: theme.colors.lightBlue,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {selectedAddress === item.id && (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: theme.colors.accent,
                        borderRadius: 10 / 2,
                      }}
                    />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 10,
            marginBottom: 20,
          }}
          onPress={() => setCurrentLocation(!currentLocation)}
        >
          <View
            style={{
              width: 18,
              height: 18,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: theme.colors.lightBlue,
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {currentLocation && (
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: theme.colors.lightBlue,
                  borderRadius: 2,
                }}
              />
            )}
          </View>
          <Text
            style={{
              ...theme.fonts.Mulish_Regular,
              fontSize: 14,
              lineHeight: 14 * 1.5,
              color: theme.colors.textColor,
            }}
          >
            Use current location
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      {renderHeader()}
      {renderMap()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default CheckoutShippingDetails;
