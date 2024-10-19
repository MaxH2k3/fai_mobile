import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import { hooks } from '../hooks';
import { custom } from '../custom';
import { svg } from '../assets/svg';
import { theme } from '../constants';
import { components } from '../components';
import { ICustomerProfileData } from '../constants/model/user-interface';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CreateCustomerProfile } from '../api/user-api';
import { utils } from '../utils';

type Props = NativeStackScreenProps<RootStackParamList, 'EditPersonalProfile'>;

const EditPersonalProfile: React.FC<Props> = ({ route }) => {

  const { user } = route.params;

  const navigation = hooks.useNavigation();

  const [loading, setLoading] = useState(false)

  const [address, setAddress] = useState(user.address)
  const [age, setAge] = useState(user.age.toString())

  const userHook = hooks.useSelector((state) => state.appState.user);


  const handleUpdateAccount = async () => {
    setLoading(true)
    const data: ICustomerProfileData = {
      address: address,
      age: Number(age)
    }
    const res = await CreateCustomerProfile(data, userHook!.token)
    if (res) {
      setLoading(false)
      if (res.success) {
        utils.showMessage({
          message: 'Update successful',
          type: 'success',
          icon: 'success'
        })
        navigation.goBack()
      }
      else {
        utils.showMessage({
          message: res.data.Data[0].ErrorMessage || 'Update failed',
          type: 'danger',
          icon: 'danger'
        })
      }
    }
  }

  if (loading) {
    return <components.Loader />;
  }

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Edit profile' />;
  };

  const renderLine = () => {
    return <components.Line style={{ marginBottom: 14 }} />;
  };

  const renderAvatar = () => {
    const width = responsiveWidth(34);

    return (
      <TouchableOpacity
        style={{
          width: width,
          aspectRatio: 1,
          borderWidth: 6,
          marginBottom: 46,
          alignSelf: 'center',
          borderRadius: width / 2,
          borderColor: theme.colors.lightBlue,
        }}
        onPress={() => { }}
      >
        <custom.Image
          source={{ uri: user.avatar }}
          style={{ width: '100%', height: '100%' }}
          imageStyle={{ borderRadius: width / 2 }}
          resizeMode='cover'
        />
      </TouchableOpacity>
    );
  };

  const renderInputFields = () => {
    return (
      <React.Fragment>
        <custom.InputField
          label='Address'
          value={address}
          onChangeText={(value) => setAddress(value)}
          placeholder={user.address}
          containerStyle={{ marginBottom: 20 }}
        />
        <custom.InputField
          label='Age'
          value={age}
          onChangeText={(value) => setAge(value)}
          placeholder={user.age.toString()}
          containerStyle={{ marginBottom: 20 }}
          keyboardType='numeric'
        />
      </React.Fragment>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='save changes'
        onPress={handleUpdateAccount}
        disabled={
          address == '' ||
          age == ''
        }
      />
    );
  };

  const renderContent = () => {
    const contentContainerStyle = {
      paddingHorizontal: 20,
      paddingTop: responsiveHeight(3),
      paddingBottom: 20,
    };

    return (
      <components.KAScrollView
        contentContainerStyle={{ ...contentContainerStyle }}
      >
        {renderLine()}
        {renderAvatar()}
        {renderInputFields()}
        {renderButton()}
      </components.KAScrollView>
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

export default EditPersonalProfile;
