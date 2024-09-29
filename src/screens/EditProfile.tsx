import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {hooks} from '../hooks';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';

const EditProfile: React.FC = () => {
  const navigation = hooks.useNavigation();

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Edit profile' />;
  };

  const renderLine = () => {
    return <components.Line style={{marginBottom: 14}} />;
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
        onPress={() => {}}
      >
        <custom.Image
          source={{uri: 'https://george-fx.github.io/manero/users/01.jpg'}}
          style={{width: '100%', height: '100%'}}
          imageStyle={{borderRadius: width / 2}}
        />
        <View style={{position: 'absolute', right: -3, bottom: -3}}>
          <svg.CameraSvg />
        </View>
      </TouchableOpacity>
    );
  };

  const renderInputFields = () => {
    return (
      <React.Fragment>
        <custom.InputField
          label='Name'
          placeholder='Kristin Watson'
          containerStyle={{marginBottom: 20}}
        />
        <custom.InputField
          label='Email'
          placeholder='kristinwatson@mail.com'
          containerStyle={{marginBottom: 20}}
        />
        <custom.InputField
          label='Phone number'
          placeholder='+17 123456789'
          containerStyle={{marginBottom: 20}}
        />
        <custom.InputField
          label='location'
          placeholder='Chicago, USA'
          containerStyle={{marginBottom: 20}}
        />
      </React.Fragment>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='save changes'
        onPress={() => {
          navigation.goBack();
        }}
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
        contentContainerStyle={{...contentContainerStyle}}
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

export default EditProfile;
