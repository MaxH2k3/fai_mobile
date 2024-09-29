import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {hooks} from '../hooks';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';

const AddANewAddress: React.FC = () => {
  const navigation = hooks.useNavigation();

  const [rememberMe, setRememberMe] = useState(false);

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header title='Add a new address' goBack={true} />;
  };

  const renderMap = () => {
    return (
      <View
        style={{
          width: '100%',
          height: theme.sizes.height * 0.45,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.lightBlue,
          marginBottom: 29,
          marginTop: 10,
        }}
      >
        <custom.Image
          source={{
            uri: 'https://george-fx.github.io/manero/map.jpg',
          }}
          style={{
            width: '100%',
            height: '100%',
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.lightBlue,
          }}
        />
      </View>
    );
  };

  function renderContent() {
    return (
      <components.KAScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          flexGrow: 1,
        }}
      >
        <custom.InputField
          label='title'
          placeholder='Mom'
          containerStyle={{
            marginBottom: 16,
          }}
        />
        <custom.InputField
          label='enter a new address'
          placeholder='3646 S 58th Ave, Cicero, IL 60804, U...'
          containerStyle={{
            marginBottom: 20,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View
            style={{
              width: 18,
              height: 18,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: theme.colors.lightBlue,
              marginRight: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {rememberMe === true && (
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
              fontSize: 16,
              lineHeight: 16 * 1.7,
              color: theme.colors.textColor,
            }}
          >
            Use current location
          </Text>
        </TouchableOpacity>
        <components.Button
          title='save address'
          containerStyle={{marginBottom: 30}}
          onPress={() => navigation.goBack()}
        />
      </components.KAScrollView>
    );
  }

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderMap()}
      {renderContent()}
    </custom.SmartView>
  );
};

export default AddANewAddress;
