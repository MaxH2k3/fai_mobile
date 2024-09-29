import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import {text} from '../text';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {history} from '../constants';
import {components} from '../components';

const OrderHistory: React.FC = () => {
  const navigation = hooks.useNavigation();

  const [activeSections, setActiveSections] = useState<number[]>([]);

  const setSections = (sections: any) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Order history' />;
  };

  const accordionHeader = (section: any) => {
    const containerStyle = {
      backgroundColor: theme.colors.white,
      paddingHorizontal: 20,
      paddingTop: 11,
      paddingBottom: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomWidth: 4,
      borderBottomColor: theme.colors.lightBlue,
    };

    return (
      <View style={{...containerStyle}}>
        <View style={{...theme.flex.row_center_sbt, marginBottom: 7}}>
          <text.H5>#{section.orderId}</text.H5>
          {section.status === 'Shipping' && <svg.ShippingSvg />}
          {section.status === 'Delivered' && <svg.DeliveredSvg />}
          {section.status === 'Canceled' && <svg.CanceledSvg />}
        </View>
        <View style={{...theme.flex.row_center_sbt}}>
          <Text
            style={{
              ...theme.fonts.Mulish_Regular,
              color: theme.colors.textColor,
              fontSize: 12,
              lineHeight: 12 * 1.5,
            }}
          >
            {section.date} at {section.time}
          </Text>
          <Text
            style={{
              ...theme.fonts.Mulish_Bold,
              fontSize: 12,
              lineHeight: 12 * 1.5,
            }}
          >
            ${section.total}
          </Text>
        </View>
      </View>
    );
  };

  const accordionContent = (section: any) => {
    const containerStyle = {
      padding: 20,
      borderBottomWidth: 4,
      borderBottomColor: theme.colors.lightBlue,
      backgroundColor: '#F4F7FC',
    };

    return (
      <View style={{...containerStyle}}>
        <View style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
          {section.products.map((item: any, index: number, array: []) => {
            return (
              <View
                key={item.id}
                style={{...theme.flex.row_center_sbt, marginBottom: 10}}
              >
                <text.T14>{item.name}</text.T14>
                <text.T14>
                  {item.quantity} x ${item.price}
                </text.T14>
              </View>
            );
          })}
        </View>
        {section.status === 'Delivered' && (
          <View style={{...theme.flex.row_center_sbt, marginTop: 24}}>
            <custom.TouchableOpacity>
              <svg.RepeatOrderSvg />
            </custom.TouchableOpacity>
            <custom.TouchableOpacity
              onPress={() => {
                navigation.navigate('LeaveAReviews');
              }}
            >
              <svg.LeaveAReviewSvg />
            </custom.TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  const renderContent = () => {
    if (history.length > 0) {
      return (
        <custom.ScrollView
          contentContainerStyle={{paddingBottom: 20, flexGrow: 1}}
        >
          <Accordion
            activeSections={activeSections}
            sections={history}
            touchableComponent={TouchableOpacity}
            renderHeader={accordionHeader}
            renderContent={accordionContent}
            duration={400}
            onChange={setSections}
            containerStyle={{paddingTop: 10}}
            sectionContainerStyle={{marginBottom: 10}}
          />
        </custom.ScrollView>
      );
    }
  };

  const renderEmptyHistory = () => {
    if (history.length === 0) {
      return (
        <custom.ScrollView
          contentContainerStyle={{flexGrow: 1, paddingTop: 10}}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              backgroundColor: theme.colors.white,
              flex: 1,
              marginHorizontal: 20,
              paddingHorizontal: 20,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <custom.Image
              source={{uri: 'https://george-fx.github.io/dine-hub/13.jpg'}}
              style={{
                width: theme.sizes.width - 100,
                aspectRatio: 1,
                alignSelf: 'center',
                marginBottom: 14,
              }}
            />
            <text.H2
              style={{
                marginBottom: 14,
              }}
            >
              No Order History Yet!
            </text.H2>
            <text.T16 style={{textAlign: 'center'}}>
              It looks like your order history is empty.{'\n'}Place your order
              now to start building{'\n'}your history!
            </text.T16>
          </View>
        </custom.ScrollView>
      );
    }

    return null;
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
      {renderEmptyHistory()}
      {/* {renderButton()} */}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default OrderHistory;
