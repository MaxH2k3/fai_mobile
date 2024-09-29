import {Text, View, TextInput} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';

const LeaveAReviews: React.FC = () => {
  const navigation = useNavigation();

  const renderHeader = () => {
    return <components.Header title='Leave a review' goBack={true} />;
  };

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={{paddingHorizontal: 20}}>
          <View style={{alignSelf: 'center', marginTop: 26, marginBottom: 20}}>
            <svg.CommentSvg />
          </View>
          <components.Line style={{marginBottom: 14}} />
          <Text
            style={{
              textAlign: 'center',
              ...theme.fonts.H2,
              color: theme.colors.mainColor,
              marginBottom: 20,
            }}
          >
            Please rate the quality of{'\n'}service for the order!
          </Text>
          <View style={{marginBottom: 20}}>
            <svg.RatingSelect />
          </View>
          <Text
            style={{
              textAlign: 'center',
              ...theme.fonts.Mulish_Regular,
              fontSize: 14,
              color: theme.colors.textColor,
              lineHeight: 14 * 1.5,
              marginBottom: 50,
            }}
          >
            Your comments and suggestions help us improve {'\n'} the service
            quality better!
          </Text>
          <View
            style={{
              marginBottom: 20,
            }}
          >
            <View
              style={{
                width: '100%',
                height: 131,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: theme.colors.lightBlue,
              }}
            >
              <TextInput
                style={{
                  width: '100%',
                  height: '100%',
                  paddingHorizontal: 30,
                  paddingTop: 23,
                  paddingBottom: 23,
                  color: theme.colors.textColor,
                }}
                placeholder='Enter your comment'
                textAlignVertical='top'
                multiline={true}
              />
              <View
                style={{
                  position: 'absolute',
                  top: -10,
                  left: 20,
                  paddingHorizontal: 10,
                  backgroundColor: theme.colors.white,
                }}
              >
                <Text
                  style={{
                    color: theme.colors.textColor,
                    fontFamily: 'Mulish_600SemiBold',
                    fontSize: 12,
                    textTransform: 'uppercase',
                  }}
                >
                  comment
                </Text>
              </View>
            </View>
          </View>
          <components.Button
            title='submit'
            onPress={() => navigation.goBack()}
            containerStyle={{marginBottom: 20}}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.white}}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default LeaveAReviews;
