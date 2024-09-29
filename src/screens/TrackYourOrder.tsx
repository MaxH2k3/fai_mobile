import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';

const TrackYourOrder: React.FC = () => {
  const renderHeader = () => {
    return <components.Header title='Track Your Order' goBack={true} />;
  };

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingVertical: 26}}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            marginBottom: 20,
            alignSelf: 'center',
          }}
        >
          <svg.TrackSvg />
        </View>
        <components.Line style={{marginBottom: 20}} />
        <Text
          style={{
            ...theme.fonts.H3,
            color: theme.colors.mainColor,
            marginBottom: 4,
            textAlign: 'center',
          }}
        >
          Your order:
        </Text>
        <Text
          style={{
            marginBottom: 30,
            ...theme.fonts.Mulish_Regular,
            fontSize: 16,
            lineHeight: 16 * 1.7,
            color: theme.colors.textColor,
            textAlign: 'center',
          }}
        >
          #100345
        </Text>
        <View
          style={{
            width: theme.sizes.width,
            paddingHorizontal: 40,
            marginBottom: 30,
          }}
        >
          <components.TrackCategory
            line={true}
            performed={true}
            status='Order created'
            comment='We have received your order'
          />
          <components.TrackCategory
            line={true}
            performed={true}
            status='Order confirmed'
            comment='Your order has been confirmed'
          />
          <components.TrackCategory
            line={true}
            performed={true}
            status='Order shipping'
            comment='Estimated for Feb 02, 2022'
          />
          <components.TrackCategory
            line={true}
            status='Courier delivering'
            comment='Estimated for Feb 05, 2022'
          />
          <components.TrackCategory
            status='Receiving'
            comment='Estimated for Feb 05, 2022'
          />
        </View>
      </ScrollView>
    );
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
    </custom.SmartView>
  );
};

export default TrackYourOrder;
