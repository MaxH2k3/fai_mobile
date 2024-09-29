import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

import {hooks} from '../hooks';
import {custom} from '../custom';
import {theme} from '../constants';
import {svg} from '../assets/svg';
import {components} from '../components';

const address = [
  {
    id: '1',
    type: 'Home',
    address: '8000 S Kirkland Ave, Chicago...',
    icon: <svg.HomeAddressSvg />,
  },
  {
    id: '2',
    type: 'Work',
    address: '8000 S Kirkland Ave, Chicago...',
    icon: <svg.BriefcaseAddressSvg />,
  },
  {
    id: '3',
    type: 'Other',
    address: '8000 S Kirkland Ave, Chicago...',
    icon: <svg.MapPinAddressSvg />,
  },
];

const MyAddress: React.FC = () => {
  const navigation = hooks.useNavigation();

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header title='My address' goBack={true} />;
  };

  function renderContent() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingVertical: 10}}
      >
        {address.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderBottomColor: theme.colors.lightBlue,
                borderBottomWidth: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  borderColor: theme.colors.lightBlue,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 14,
                }}
              >
                {item.icon}
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    ...theme.fonts.H5,
                    marginBottom: 4,
                  }}
                >
                  {item.type}
                </Text>
                <Text
                  style={{
                    ...theme.fonts.Mulish_Regular,
                    fontSize: 14,
                    color: theme.colors.textColor,
                  }}
                >
                  {item.address}
                </Text>
              </View>
              {/* <Edit /> */}
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          style={{alignItems: 'center', marginTop: 30}}
          onPress={() => navigation.navigate('AddANewAddress')}
        >
          <svg.AddANewAddressSvg />
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
    </custom.SmartView>
  );
};

export default MyAddress;
