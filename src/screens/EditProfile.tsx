import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import { hooks } from '../hooks';
import { custom } from '../custom';
import { svg } from '../assets/svg';
import { theme } from '../constants';
import { components } from '../components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { IUpdateUserData } from '../constants/model/user-interface';
import { UpdateUserProfile } from '../api/user-api';
import { actions } from '../store/actions';
import { utils } from '../utils';
import { selectImageFromGallery, takePhotoWithCamera } from '../utils/choose-image';
import { Asset, ImagePickerResponse } from 'react-native-image-picker';
import { text } from '../text';
import EditProfileImage from './EditProfileImage';

type Props = NativeStackScreenProps<RootStackParamList, 'EditProfile'>;

const EditProfile: React.FC<Props> = ({ route }) => {

  const { user } = route.params;

  const navigation = hooks.useNavigation();
  const dispatch = hooks.useDispatch();

  const [loading, setLoading] = useState(false)

  const [modalVisible, setModalVisible] = useState(false);

  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [phone, setPhone] = useState(user.phone)
  const [image, setImage] = useState<any>(null)

  const userHook = hooks.useSelector((state) => state.appState.user);

  const handleUpdateAccount = async () => {
    setLoading(true)
    const data: IUpdateUserData = {
      firstName: firstName,
      lastName: lastName,
      // gender: gender,
      phone: phone,
      fileAvatar: image as File || undefined
    }
    const formData = new FormData();
    formData.append('LastName', data.lastName as string)
    formData.append('FirstName', data.firstName as string)
    // formData.append('Gender', data.gender as string)
    formData.append('Phone', data.phone as string)
    formData.append('FileAvatar', data.fileAvatar as File)

    const res = await UpdateUserProfile(formData, userHook!.token)
    if (res) {
      console.log(res)
      setLoading(false)
      if (res.success) {
        dispatch(actions.setAccessToken(res.data.data.token))
        dispatch(actions.setRole(res.data.data.roleName))
        dispatch(actions.setUserName(res.data.data.lastName + " " + res.data.data.firstName))
        dispatch(actions.setEmail(res.data.data.email))
        dispatch(actions.setUser(res.data.data))
        utils.showMessage({
          message: 'Update successful',
          type: 'success',
          icon: 'success'
        })
        navigation.goBack()
      } else {
        utils.showMessage({
          message: 'Update failed',
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
        onPress={() => setModalVisible(true)}
      >
        <custom.Image
          source={{ uri: image ? image.uri : user.avatar }}
          style={{ width: '100%', height: '100%' }}
          imageStyle={{ borderRadius: width / 2 }}
          resizeMode='cover'
        />
        <View style={{ position: 'absolute', right: -3, bottom: -3 }}>
          <svg.CameraSvg />
        </View>
      </TouchableOpacity>
    );
  };

  const renderInputFields = () => {
    const options = [
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' }
    ];

    const handleValueChange = (value: any) => {
      console.log('Selected Value:', value);
    };

    return (
      <React.Fragment>
        <custom.InputField
          label='First name'
          value={firstName}
          onChangeText={(value) => setFirstName(value)}
          placeholder={user.firstName}
          containerStyle={{ marginBottom: 20 }}
        />
        <custom.InputField
          label='Last name'
          value={lastName}
          onChangeText={(value) => setLastName(value)}
          placeholder={user.lastName}
          containerStyle={{ marginBottom: 20 }}
        />
        <custom.SelectField
          label="Gender"
          placeholder="Select a gender"
          data={options}
          onValueChange={handleValueChange}
        />
        <custom.InputField
          label='Phone number'
          value={phone}
          onChangeText={(value) => setPhone(value)}
          placeholder={user.phone}
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
          firstName == '' ||
          lastName == '' ||
          phone == ''
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
      <components.KAScrollView contentContainerStyle={{ ...contentContainerStyle }}>
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
      <EditProfileImage
        modalVisible={modalVisible}
        setImage={setImage}
        setModalVisible={setModalVisible}
      />
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default EditProfile;
