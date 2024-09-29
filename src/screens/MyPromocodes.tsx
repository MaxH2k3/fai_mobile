import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

import {text} from '../text';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';
import {queryHooks} from '../store/slices/apiSlice';

const MyPromocodes: React.FC = () => {
  const navigation = hooks.useNavigation();
  const {data, isLoading, error} = queryHooks.useGetPromocodesQuery();

  let promocodes = data instanceof Array ? data : [];
  // promocodes = [];

  const [currentOrUsed, setCurrentOrUsed] = useState('current');

  if (isLoading) {
    return <components.Loader />;
  }

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header title='My promocodes' goBack={true} />;
  };

  const renderPromocodes = () => {
    if (promocodes.length > 0) {
      return (
        <custom.SmartView>
          <FlatList
            data={promocodes}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return <components.PromocodeItem item={item} />;
            }}
          />
        </custom.SmartView>
      );
    }

    return null;
  };

  const renderIfNoPromocodes = () => {
    if (promocodes.length === 0) {
      return (
        <components.KAScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 20,
            paddingTop: responsiveHeight(4),
            paddingBottom: 20,
          }}
        >
          <View style={{alignSelf: 'center', marginBottom: 20}}>
            <svg.PercentSvg />
          </View>
          <components.Line style={{marginBottom: 14}} />
          <text.H2
            style={{
              textAlign: 'center',
              marginBottom: 14,
              color: theme.colors.mainColor,
            }}
          >
            Your don’t have {'\n'}
            promocodes yet!
          </text.H2>
          <Text
            style={{
              ...theme.fonts.Mulish_Regular,
              fontSize: 16,
              lineHeight: 16 * 1.7,
              textAlign: 'center',
              marginBottom: 30,
              color: theme.colors.textColor,
            }}
          >
            Qui ex aute ipsum duis. Incididunt {'\n'} adipisicing voluptate
            laborum
          </Text>
          <custom.InputField
            placeholder='Promocode2022'
            label='Enter the voucher'
            containerStyle={{marginBottom: 20}}
          />
          <components.Button
            title='submit'
            onPress={() => {
              navigation.goBack();
            }}
          />
        </components.KAScrollView>
      );
    }

    return null;
  };

  const renderCurrentOrUsed = () => {
    if (promocodes.length > 0) {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 20,
            borderBottomWidth: 1,
            paddingTop: 30,
            borderBottomColor: theme.colors.lightBlue,
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              height: 28,
              paddingHorizontal: 20,
              paddingVertical: 2,
              backgroundColor:
                currentOrUsed === 'current'
                  ? theme.colors.mainColor
                  : theme.colors.lightBlue,
              marginHorizontal: 4,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setCurrentOrUsed('current')}
          >
            <Text
              style={{
                ...theme.fonts.Mulish_Regular,
                fontSize: 14,
                color:
                  currentOrUsed === 'current'
                    ? theme.colors.white
                    : theme.colors.mainColor,
              }}
            >
              Current
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 28,
              paddingHorizontal: 20,
              paddingVertical: 2,
              backgroundColor:
                currentOrUsed === 'used'
                  ? theme.colors.mainColor
                  : theme.colors.lightBlue,
              marginHorizontal: 4,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setCurrentOrUsed('used')}
          >
            <Text
              style={{
                ...theme.fonts.Mulish_Regular,
                fontSize: 14,
                color:
                  currentOrUsed === 'used'
                    ? theme.colors.white
                    : theme.colors.mainColor,
              }}
            >
              Used
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    return null;
  };

  const renderContent = () => {
    return (
      <custom.SmartView>
        {renderCurrentOrUsed()}
        {renderPromocodes()}
        {renderIfNoPromocodes()}
      </custom.SmartView>
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
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default MyPromocodes;
