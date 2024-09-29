import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {hooks} from '../hooks';
import {custom} from '../custom';
import {theme} from '../constants';
import {components} from '../components';

const SIZE = [
  {
    id: '1',
    size: 'xs',
  },
  {
    id: '2',
    size: 's',
  },
  {
    id: '3',
    size: 'm',
  },
  {
    id: '4',
    size: 'l',
  },
  {
    id: '5',
    size: 'xl',
  },
  {
    id: '6',
    size: 'xxl',
  },
];

const COLOR = [
  {
    id: '1',
    color: '#FF6262',
  },
  {
    id: '2',
    color: '#63C7FF',
  },
  {
    id: '3',
    color: '#F8E7CD',
  },
  {
    id: '4',
    color: '#323858',
  },
  {
    id: '5',
    color: '#111111',
  },
];

const TAGS = [
  {
    id: '1',
    tag: 'kids',
  },
  {
    id: '2',
    tag: 'sport',
  },
  {
    id: '3',
    tag: 'dress',
  },
  {
    id: '4',
    tag: 'pants',
  },
  {
    id: '5',
    tag: 't-shirt',
  },
  {
    id: '6',
    tag: 'hat',
  },
  {
    id: '7',
    tag: 'unisex',
  },
  {
    id: '8',
    tag: 'bag',
  },
  {
    id: '9',
    tag: 'accessories',
  },
  {
    id: '10',
    tag: 'shoes',
  },
  {
    id: '11',
    tag: 'polo',
  },
];

const Filter: React.FC = () => {
  const navigation = hooks.useNavigation();

  const [productSize, setProductSize] = useState(1);
  const [productColor, setProductColor] = useState(1);
  const [productTag, setProductTag] = useState(1);

  const renderHeader = () => {
    return <components.Header title='Filter' goBack={true} />;
  };

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderSize = () => {
    return (
      <View>
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
            marginTop: 20,
            marginBottom: 14,
          }}
        >
          Size
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 25,
          }}
        >
          {SIZE.map((item, index) => (
            <custom.TouchableOpacity
              key={item.id}
              style={{
                width: 50,
                height: 50,
                borderWidth: 1,
                borderColor: theme.colors.lightBlue,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                backgroundColor:
                  productSize == index
                    ? theme.colors.lightBlue
                    : theme.colors.transparent,
              }}
              onPress={() => setProductSize(index)}
            >
              <Text
                style={{
                  ...theme.fonts.Mulish_SemiBold,
                  fontSize: 12,
                  textTransform: 'uppercase',
                  color: theme.colors.mainColor,
                }}
              >
                {item.size}
              </Text>
            </custom.TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const renderColor = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
            marginTop: 20,
            marginBottom: 14,
            marginRight: 25,
          }}
        >
          Color
        </Text>

        {COLOR.map((item, index) => (
          <custom.TouchableOpacity
            key={item.id}
            onPress={() => setProductColor(index)}
          >
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: item.color,
                marginHorizontal: 7,
                borderRadius: 19,
                borderWidth: 4,
                borderColor:
                  productColor == index
                    ? theme.colors.lightBlue
                    : theme.colors.transparent,
              }}
            />
          </custom.TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderPrice = () => {
    return (
      <View style={{marginBottom: 40}}>
        <Text
          style={{
            marginBottom: 20,
            ...theme.fonts.H4,
            color: theme.colors.mainColor,
          }}
        >
          Price
        </Text>
        <MultiSlider
          isMarkersSeparated={true}
          customMarkerLeft={(e) => {
            return (
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    marginHorizontal: 10,
                    backgroundColor: theme.colors.mainColor,
                    borderRadius: 15 / 2,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    bottom: -30,
                    ...theme.fonts.Mulish_Regular,
                    fontSize: 14,
                    color: theme.colors.textColor,
                    lineHeight: 16 * 1.6,
                  }}
                >
                  ${e.currentValue}
                </Text>
              </View>
            );
          }}
          customMarkerRight={(e) => {
            return (
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    marginHorizontal: 10,
                    backgroundColor: theme.colors.mainColor,
                    borderRadius: 15 / 2,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    bottom: -30,
                    ...theme.fonts.Mulish_Regular,
                    fontSize: 14,
                    color: theme.colors.textColor,
                    lineHeight: 16 * 1.6,
                  }}
                >
                  ${e.currentValue}
                </Text>
              </View>
            );
          }}
          values={[0, 800]}
          min={0}
          max={800}
          step={1}
          sliderLength={theme.sizes.width - 40}
          onValuesChange={(e) => {}}
          selectedStyle={{
            backgroundColor: theme.colors.mainColor,
            width: 300,
          }}
          unselectedStyle={{
            backgroundColor: '#DBE3F5',
            width: 300,
          }}
          containerStyle={{
            height: 20,
            width: '100%',
          }}
          trackStyle={{
            height: 3,
            width: '100%',
          }}
        />
      </View>
    );
  };

  const renderCategory = () => {
    return (
      <View
        style={{
          marginBottom: 40,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <components.ProductStatus status='sale' color='#69864D' />
        <components.ProductStatus status='sale' color='#CFA93F' />
        <components.ProductStatus status='sale' color='#864D7D' />
      </View>
    );
  };

  const renderTags = () => {
    return (
      <View
        style={{
          marginBottom: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {TAGS.map((item, index) => (
          <custom.TouchableOpacity
            style={{
              marginBottom: 8,
              marginRight: 8,
              borderRadius: 50,
              borderColor: theme.colors.lightBlue,
              borderWidth: 1,
              backgroundColor:
                productTag == index
                  ? theme.colors.lightBlue
                  : theme.colors.transparent,
            }}
            key={item.id}
            onPress={() => setProductTag(index)}
          >
            <Text
              style={{
                paddingHorizontal: 20,
                paddingVertical: 6,
                textTransform: 'uppercase',
                fontSize: 12,
                ...theme.fonts.Mulish_SemiBold,
                color: theme.colors.mainColor,
              }}
            >
              {item.tag}
            </Text>
          </custom.TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderButton = () => {
    return (
      <components.Button
        title='apply filters'
        onPress={() => navigation.goBack()}
      />
    );
  };

  const renderContent = () => {
    return (
      <custom.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 40,
        }}
      >
        {renderSize()}
        {renderColor()}
        {renderPrice()}
        {renderCategory()}
        {renderTags()}
        {renderButton()}
      </custom.ScrollView>
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

export default Filter;
