import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { text } from '../../text';
import { hooks } from '../../hooks';
import { custom } from '../../custom';
import { svg } from '../../assets/svg';
import { theme } from '../../constants';
import { actions } from '../../store/actions';
import { components } from '../../components';
import { ILoggedInUserData, IUserProfile } from '../../constants/model/user-interface';
import { useQuery } from '@tanstack/react-query';
import { useUserProfile } from '../../api/query/user-query';

const Profile: React.FC = () => {
  const dispatch = hooks.useDispatch();
  const navigation = hooks.useNavigation();

  const currentUser: ILoggedInUserData | null = hooks.useSelector((state) => state.appState.user)

  const { data, isLoading } = useQuery(
    useUserProfile({
      key: currentUser!.email
    })
  );

  const userData: IUserProfile = data?.data.data

  if (isLoading) {
    return (
      <components.Loader />
    )
  }

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return (
      <components.Header
        title='My profile'
        burger={true}
        basket={true}
        bottomLine={true}
      />
    );
  };

  const renderUserInfo = () => {
    const width = responsiveWidth(34);

    return (
      <View style={{ marginBottom: 20 }}>
        {/* <components.Line style={{ marginBottom: 20 }} /> */}
        <TouchableOpacity
          style={{
            width: width,
            aspectRatio: 1,
            borderWidth: 6,
            marginBottom: 20,
            alignSelf: 'center',
            borderRadius: width / 2,
            borderColor: theme.colors.lightBlue,
          }}
          onPress={() => {
            navigation.navigate('EditProfile', { user: userData });
          }}
        >
          <custom.Image
            source={{ uri: currentUser!.avatar }}
            style={{ width: '100%', height: '100%' }}
            imageStyle={{ borderRadius: width / 2 }}
            resizeMode='cover'
          />
          <View style={{ position: 'absolute', right: -3, bottom: -3 }}>
            <svg.EditSvg />
          </View>
        </TouchableOpacity>
        <text.H3 style={{ textAlign: 'center', marginBottom: 2 }}>
          {currentUser!.lastName + ' ' + currentUser!.firstName}
        </text.H3>
        <Text
          style={{
            ...theme.fonts.Mulish_Regular,
            fontSize: 14,
            color: theme.colors.textColor,
            textAlign: 'center',
            lineHeight: 14 * 1.7,
          }}
        >
          {currentUser!.email}
        </Text>
      </View>
    );
  };

  const renderProfileMenu = () => {
    return (
      <View>
        <components.ProfileCategory
          title='Personal information'
          icon={<svg.CardSvg />}
          onPress={() => {
            navigation.navigate('EditPersonalProfile', { user: userData });
          }}
        />
        <components.ProfileCategory
          title='Order history'
          icon={<svg.CalendarSvg />}
          onPress={() => {
            navigation.navigate('OrderHistory');
          }}
        />
        <components.ProfileCategory
          title='Chat'
          icon={<svg.CardSvg />}
          onPress={() => {
            navigation.navigate('ChatBot');
          }}
        />
        <components.ProfileCategory
          title='Try on'
          icon={<svg.CardSvg />}
          onPress={() => {
            navigation.navigate('PaymentMethod');
          }}
        />
        {/* <components.ProfileCategory
          title='My address'
          icon={<svg.MapPinSvg />}
          onPress={() => {
            navigation.navigate('MyAddress');
          }}
        /> */}
        {/* <components.ProfileCategory
          title='My promocodes'                  
          icon={<svg.GiftSvg />}                
          onPress={() => {                      
            navigation.navigate('MyPromocodes');
          }}                                    
        /> */}
        <components.ProfileCategory
          title='Sign out'
          icon={<svg.LogOutSvg />}
          onPress={() => {
            dispatch(actions.setAccessToken(null))
            dispatch(actions.setRole(null))
            dispatch(actions.setUserName(null))
            dispatch(actions.setEmail(null))
            dispatch(actions.setUser(null))
          }}
        />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <custom.ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {renderUserInfo()}
        {renderProfileMenu()}
      </custom.ScrollView>
    );
  };

  const renderBottomTabBar = () => {
    return <components.BottomTabBar />;
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
      {renderBottomTabBar()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Profile;
