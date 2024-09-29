import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';

import {theme} from '../constants';
import {components} from '../components';
import {svg} from '../assets/svg';
import {custom} from '../custom';

const AddANewCard: React.FC = () => {
  const navigation = useNavigation();

  const renderHeader = () => {
    return <components.Header title='Add a new card' goBack={true} />;
  };

  function renderContent() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: theme.sizes.height * 0.05,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <components.Line style={{marginTop: 23, marginBottom: 14}} />
        <custom.Image
          source={{
            uri: 'https://george-fx.github.io/manero/cards/01.jpg',
          }}
          style={{
            width: 279,
            height: 170,
            alignSelf: 'center',
            marginBottom: 40,
          }}
        />
        <custom.InputField
          placeholder='Kristin Watson'
          label='Name'
          containerStyle={{marginBottom: 20}}
        />
        <custom.InputField
          label='card number'
          placeholder='7741 6588 2123 6644'
          containerStyle={{marginBottom: 20}}
          keyboardType='phone-pad'
          icon={<svg.CameraSmallSvg />}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <custom.InputField
            label='MM/yy'
            placeholder='12/23'
            containerStyle={{width: '47%'}}
          />
          <custom.InputField
            label='cvv'
            placeholder='•••'
            secureTextEntry={true}
            keyboardType='phone-pad'
            containerStyle={{width: '47%'}}
          />
        </View>
        <components.Button
          title='save card'
          onPress={() => navigation.goBack()}
        />
      </KeyboardAwareScrollView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.white}}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default AddANewCard;
