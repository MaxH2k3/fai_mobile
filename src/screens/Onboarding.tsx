import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

import {text} from '../text';
import {hooks} from '../hooks';
import {custom} from '../custom';
import {components} from '../components';
import {theme, onboardingData} from '../constants';
import {setIsFirstTime} from '../store/slices/appStateSlice';

const Onboarding: React.FC = () => {
  const dispatch = hooks.useDispatch();

  const ratio = theme.sizes.width / 375;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
    setCurrentSlideIndex(currentIndex);
  };

  const renderStatusBar = () => {
    return (
      <custom.StatusBar
        containerStyle={{
          backgroundColor: theme.colors.transparent,
          height: 0,
        }}
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        bounces={false}
      >
        {onboardingData.map((item, index) => {
          return (
            <custom.ImageBackground
              key={index}
              style={{
                width: theme.sizes.width,
                height: theme.sizes.height,
                justifyContent: 'flex-end',
              }}
              source={{uri: item.image}}
              resizeMode='cover'
            >
              <custom.ImageBackground
                source={require('../assets/circle.png')}
                style={{
                  width: theme.sizes.width,
                  height: 425 * ratio,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                resizeMode='cover'
              >
                <components.Line style={{marginBottom: 14}} />
                <text.H1 style={{textAlign: 'center', marginBottom: 14}}>
                  Welcome to {'\n'} Manero!
                </text.H1>
                <Text
                  style={{
                    ...theme.fonts.Mulish_Regular,
                    fontSize: 16,
                    lineHeight: 16 * 1.7,
                    color: theme.colors.textColor,
                    textAlign: 'center',
                    marginBottom: 34,
                  }}
                >
                  Labore sunt culpa excepteur culpa ipsum. {'\n'} Labore
                  occaecat ex nisi mollit.
                </Text>
                <components.Button
                  title='Get Started'
                  containerStyle={{
                    width: responsiveWidth(68),
                    marginBottom: 30,
                  }}
                  onPress={() => {
                    dispatch(setIsFirstTime(false));
                  }}
                />
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}
                >
                  {onboardingData.map((_, index) => {
                    return (
                      <View
                        key={index}
                        style={[
                          {
                            width: 6,
                            height: 6,
                            marginHorizontal: 5,
                            borderRadius: 50,
                            borderWidth: 2,
                            borderColor: theme.colors.mainColor,
                            backgroundColor: theme.colors.mainColor,
                          },
                          currentSlideIndex == index && {
                            width: 22,
                            height: 8,
                            backgroundColor: theme.colors.transparent,
                          },
                        ]}
                      />
                    );
                  })}
                </View>
              </custom.ImageBackground>
            </custom.ImageBackground>
          );
        })}
      </ScrollView>
    );
  };

  return <custom.SmartView>{renderContent()}</custom.SmartView>;
};

export default Onboarding;
