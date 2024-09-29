import React from 'react';
import {View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

import {text} from '../text';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {components} from '../components';
import {theme, cards} from '../constants';

const PaymentMethod: React.FC = () => {
  const navigation = hooks.useNavigation();

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Payment method' />;
  };

  const renderCardsMenu = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          ...theme.flex.row_center_sbt,
          marginBottom: 14,
        }}
      >
        <text.H5>Cards</text.H5>
        <custom.TouchableOpacity
          onPress={() => navigation.navigate('AddANewCard')}
        >
          <svg.AddANewCardSvg />
        </custom.TouchableOpacity>
      </View>
    );
  };

  const renderCards = () => {
    return (
      <custom.FlatList
        data={cards}
        horizontal={true}
        pagingEnabled={true}
        decelerationRate={0}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{paddingLeft: 20}}
        showsHorizontalScrollIndicator={false}
        snapToInterval={theme.sizes.width - responsiveWidth(25)}
        style={{flexGrow: 0, marginBottom: 10}}
        renderItem={({item}) => {
          const lastItem = cards[cards.length - 1];
          return (
            <custom.TouchableOpacity
              style={{
                marginRight: item.id === lastItem.id ? 20 : 14,
              }}
            >
              <custom.Image
                source={{uri: item.image}}
                style={{
                  width: responsiveWidth(70),
                  aspectRatio: 279 / 170,
                }}
              />
            </custom.TouchableOpacity>
          );
        }}
      />
    );
  };

  const renderMethodsMenu = () => {
    return (
      <View>
        <components.PaymentMenuItem
          leftComponent={<svg.ApplePay />}
          rightComponent={<svg.EditSmallSvg />}
        />
        <components.PaymentMenuItem
          leftComponent={<svg.PayPalSvg />}
          rightComponent={<svg.EditSmallSvg />}
        />
        <components.PaymentMenuItem
          leftComponent={<svg.PayoneerSvg />}
          rightComponent={<svg.PlusPaymentSvg />}
        />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <custom.ScrollView
        contentContainerStyle={{flexGrow: 1, paddingVertical: 20}}
      >
        {renderCardsMenu()}
        {renderCards()}
        {renderMethodsMenu()}
      </custom.ScrollView>
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

export default PaymentMethod;
