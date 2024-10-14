import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  Alert,
  ViewStyle,
  TextStyle,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {responsiveWidth} from 'react-native-responsive-dimensions';

import {text} from '../text';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';
import {setScreen} from '../store/slices/tabSlice';
import {statusBarHeight, homeIndicatorHeight, utils} from '../utils';
import { hooks } from '../hooks';

type Props = {
  logo?: boolean;
  skip?: boolean;
  title?: string;
  user?: boolean;
  basket?: boolean;
  goBack?: boolean;
  filter?: boolean;
  search?: boolean;
  style?: ViewStyle;
  userName?: boolean;
  userImage?: boolean;
  bottomLine?: boolean;
  burger?: boolean;
  skipOnPress?: () => void;
};

import {useAppSelector} from '../hooks/selector';

const Header: React.FC<Props> = ({
  logo,
  skip,
  title,
  style,
  basket,
  search,
  goBack,
  filter,
  userName,
  burger,
  userImage,
  bottomLine,
  skipOnPress,
}) => {
  const dispatch = hooks.useDispatch();
  const navigation = hooks.useNavigation();

  const height = statusBarHeight();

  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState(true);
  const [faceID, setFaceID] = useState(false);

  const route = useRoute();

  const cart = hooks.useSelector((state) => state.cartSlice.list);
  // const total = hooks.useSelector((state) => state.cartSlice.total);
  const total = hooks.useSelector((state) => state.cartSlice.total).toFixed(2);
  // const total = hooks.useSelector((state) => state.cartSlice.total).toFixed(2);
  // const total = useSelector((state) => state.cartSlice.total);

  console.log('total', total);

  const handleOnPress = () => {
    if (cart.length > 0) {
      dispatch(setScreen('Order'));
      route.name === 'Shop' && navigation.navigate('TabNavigator');
      route.name === 'Product' && navigation.navigate('TabNavigator');
    }
    if (cart.length === 0) {
      Alert.alert('Your cart is empty', 'Please add some items to your cart', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ]);
    }
  };

  const renderUser = (): JSX.Element | null => {
    const touchableStyle: ViewStyle = {
      position: 'absolute',
      flexDirection: 'row',
      alignItems: 'center',
      left: 0,
      paddingVertical: 12,
      paddingHorizontal: 20,
    };

    const textStyle: TextStyle = {
      marginLeft: 10,
      ...theme.fonts.H5,
      textTransform: 'capitalize',
    };

    if (userImage) {
      return (
        <TouchableOpacity
          style={{...touchableStyle}}
          onPress={() => {
            setShowModal(true);
          }}
        >
          <custom.Image
            source={{uri: 'https://george-fx.github.io/dine-hub/10.jpg'}}
            style={{
              width: 22,
              height: 22,
            }}
            imageStyle={{
              borderRadius: 20 / 2,
            }}
          />
          {userName && <Text style={{...textStyle}}>Jordan Hebert</Text>}
        </TouchableOpacity>
      );
    }

    return null;
  };

  const renderBurger = () => {
    if (burger) {
      return (
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 0,
            paddingHorizontal: 20,
            paddingVertical: 12,
          }}
          onPress={() => {
            setShowModal(true);
          }}
        >
          <svg.BurgerSvg />
        </TouchableOpacity>
      );
    }

    return null;
  };

  const renderGoBack = () => {
    if (goBack && navigation.canGoBack()) {
      return (
        <View style={{position: 'absolute', left: 0}}>
          <TouchableOpacity
            style={{
              paddingVertical: 12,
              paddingHorizontal: 20,
            }}
            onPress={() => navigation.goBack()}
          >
            <svg.GoBackSvg />
          </TouchableOpacity>
        </View>
      );
    }

    return null;
  };

  const renderSkipText = (): JSX.Element | null => {
    if (skip) {
      return (
        <TouchableOpacity
          style={{
            right: 0,
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
          onPress={skipOnPress}
        >
          <Text
            style={{
              // ...theme.fonts.Lato_700Bold,
              fontSize: 14,
              lineHeight: 14 * 1.7,
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      );
    }

    return null;
  };

  const renderTitle = (): JSX.Element | null => {
    const titleStyle: TextStyle = {
      ...theme.fonts.H4,
      fontSize: 16,
      color: theme.colors.mainColor,
    };

    if (title) {
      return (
        <Text style={{...titleStyle}} numberOfLines={1}>
          {title}
        </Text>
      );
    }

    return null;
  };

  const renderLogo = () => {
    if (logo && !title) {
      return (
        <View style={{top: -3}}>
          <custom.Image
            source={require('../assets/cooler-fai-logo.png')}
            style={{width: 60, height: 33}}
          />
        </View>
      );
    }

    return null;
  };

  const renderSearch = () => {
    if (search) {
      return (
        <TouchableOpacity
          style={{
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
            width: theme.sizes.width - 190,
            marginRight: 60,
            // flex: 1,
            // backgroundColor: 'red',
            // width: '100%',
          }}
          onPress={() => navigation.navigate('Search')}
        >
          <View style={{marginRight: 7}}>
            <svg.SearchSvg />
          </View>
          <text.T14>search</text.T14>
        </TouchableOpacity>
      );
    }

    return null;
  };

  const renderFilter = (): JSX.Element | null => {
    if (filter) {
      return (
        <View style={{position: 'absolute', right: 0}}>
          <TouchableOpacity
            style={{
              paddingVertical: 12,
              paddingHorizontal: 20,
            }}
            onPress={() => navigation.navigate('Filter')}
          >
            {/* <svg.FilterSvg /> */}
          </TouchableOpacity>
        </View>
      );
    }

    return null;
  };

  const renderBasket = () => {
    if (basket) {
      return (
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            paddingHorizontal: 20,
          }}
          onPress={handleOnPress}
        >
          <View style={{paddingLeft: 20, flexDirection: 'row'}}>
            <svg.BagSvg />
            <View
              style={{
                position: 'absolute',
                right: 15,
                bottom: -3,
                backgroundColor: theme.colors.accent,
                borderRadius: 30,
                zIndex: 2,
              }}
            >
              <Text
                style={{
                  color: theme.colors.white,
                  ...theme.fonts.Mulish_Bold,
                  fontSize: 10,
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  lineHeight: 10 * 1.5,
                }}
              >
                {cart.length > 0 ? `$${total}` : '$0'}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }

    return null;
  };

  const renderContactsHeader = () => {
    return (
      <View style={{paddingHorizontal: 20, marginBottom: 30, marginTop: 10}}>
        <components.Line
          style={{
            backgroundColor: theme.colors.white,
            alignSelf: 'flex-start',
            marginBottom: 14,
          }}
        />
        <text.H2 style={{color: theme.colors.white}}>Contact us</text.H2>
      </View>
    );
  };

  const renderContactsContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
      >
        <components.ContactsCategory
          icon={<svg.MapPinSmallSvg />}
          titleLine1='FPT University'
          titleLine2='Nha Van Hoa Sinh Vien'
        />
        <components.ContactsCategory
          icon={<svg.MailSvg />}
          titleLine1='fashionai.innovation@gmail.com'
          titleLine2='faisupport@mail.com'
        />
        <components.ContactsCategory
          icon={<svg.PhoneCallSvg />}
          titleLine1='+84  942438547'
          titleLine2='+84  862046364'
        />
      </ScrollView>
    );
  };

  const renderContactsFooter = () => {
    return (
      <View style={{paddingHorizontal: 20, marginVertical: 20}}>
        <Text
          style={{
            ...theme.fonts.Mulish_Regular,
            fontSize: 14,
            lineHeight: 14 * 1.7,
            color: '#B3B9C7',
            marginBottom: 18,
          }}
        >
          Track your order
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 25,
            borderColor: `${theme.colors.lightBlue}20`,
            paddingLeft: 30,
            paddingRight: 5,
            height: 50,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowModal(false);
            navigation.navigate('TrackYourOrder');
          }}
        >
          <View
            style={{
              position: 'absolute',
              left: 20,
              top: -8,
              backgroundColor: theme.colors.mainColor,
            }}
          >
            <Text
              style={{
                textTransform: 'uppercase',
                paddingHorizontal: 10,
                color: '#B3B9C7',
                borderRadius: 50,
                fontSize: 12,
              }}
            >
              order number
            </Text>
          </View>
          <Text style={{color: '#B3B9C7'}}>100345</Text>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: `${theme.colors.lightBlue}30`,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <svg.RigthArrowBlackSvg />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderBurgerContacts = () => {
    return (
      <Modal
        isVisible={showModal}
        onBackdropPress={() => setShowModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{margin: 0, padding: 0}}
        animationIn='slideInLeft'
        animationOut='slideOutLeft'
        animationInTiming={500}
        animationOutTiming={500}
        deviceWidth={theme.sizes.height}
        deviceHeight={theme.sizes.height}
        statusBarTranslucent={true}
      >
        <View
          style={{
            width: responsiveWidth(72),
            height: theme.sizes.height + height,
            backgroundColor: theme.colors.mainColor,
            paddingTop: statusBarHeight(),
            paddingBottom: homeIndicatorHeight(),
          }}
        >
          {renderContactsHeader()}
          {renderContactsContent()}
          {renderContactsFooter()}
        </View>
      </Modal>
    );
  };

  const containerStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    borderBottomColor: bottomLine ? '#DBE9F5' : 'transparent',
    borderBottomWidth: bottomLine ? 1 : 0,
    ...style,
  };

  return (
    <View style={{...containerStyle}}>
      {renderUser()}
      {renderBurger()}
      {renderGoBack()}
      {renderTitle()}
      {renderLogo()}
      {renderSkipText()}
      {renderFilter()}
      {renderSearch()}
      {renderBasket()}
      {renderBurgerContacts()}
    </View>
  );
};

export default Header;
