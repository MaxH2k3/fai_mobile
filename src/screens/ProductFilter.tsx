import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { hooks } from '../hooks';
import { custom } from '../custom';
import { theme } from '../constants';
import { components } from '../components';
import { Currency } from '../constants/enum/currency-enum';
import formatNumber from '../utils/format-number';

const CATEGORY = [
  'Blouse',
  'Hoodie',
  'Long Sleeve Shirt',
  'Polo',
  'Shirt Female',
  'Shirt Male',
  'T-Shirt Female',
  'T-Shirt Male'
]

const GENDER = [
  'Male',
  'Female',
  'Unisex'
]

const COLOR = [
  'red',
  // 'brown',
  'orange',
  // 'yellow',
  // 'blue',
  // 'purple',
  // 'pink',
  'white',
  'black',
  // 'green',
  // 'cyan',
  'gray',
  'beige'
]

const SIZE = [
  'XS',
  'S',
  'M',
  'L',
  'XL',
  'XXL',
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    gap: 20
  },
});

interface Prop {
  category: string
  setCategory: (cat: string) => void
  gender: string
  setGender: (gen: string) => void
  color: string
  setColor: (col: string) => void
  size: string
  setSize: (size: string) => void
  minPrice: number
  setMinPrice: (min: number) => void
  maxPrice: number
  setMaxPrice: (max: number) => void
  isModalOpen: boolean
  setIsModalOpen: (open: boolean) => void
}

const ProductFilter: React.FC<Prop> = ({
  category,
  setCategory,
  gender,
  setGender,
  color,
  setColor,
  size,
  setSize,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  isModalOpen,
  setIsModalOpen
}) => {
  const [productCategory, setProductCategory] = useState<string>(category || '')
  const [productGender, setProductGender] = useState<string>(gender || '')
  const [productColor, setProductColor] = useState<string>(color || '')
  const [productSize, setProductSize] = useState<string>(size || '')
  const [productMinPrice, setProductMinPrice] = useState<number>(minPrice || 0)
  const [productMaxPrice, setProductMaxPrice] = useState<number>(maxPrice || 130000)

  const handleApplyFilter = () => {
    setCategory(productCategory)
    setGender(productGender)
    setColor(productColor)
    setSize(productSize)
    setMinPrice(productMinPrice)
    setMaxPrice(productMaxPrice)
    setIsModalOpen(false)
  }

  const handlePriceChange = (min: number, max: number) => {
    setProductMinPrice(min)
    setProductMaxPrice(max)
  }

  const handleResetFilter = () => {
    setProductCategory('')
    setProductGender('')
    setProductColor('')
    setProductSize('')
    setProductMinPrice(10000)
    setProductMaxPrice(130000)
  }

  const renderSize = () => {
    return (
      <View style={{ width: 350 }}>
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
              key={index}
              style={{
                width: 50,
                height: 50,
                borderWidth: 1,
                borderColor: theme.colors.lightBlue,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                backgroundColor:
                  productSize.toLowerCase() == SIZE[index].toLowerCase()
                    ? theme.colors.lightBlue
                    : theme.colors.transparent,
              }}
              onPress={() => setProductSize(item)}
            >
              <Text
                style={{
                  ...theme.fonts.Mulish_SemiBold,
                  fontSize: 12,
                  textTransform: 'uppercase',
                  color: theme.colors.mainColor,
                }}
              >
                {item}
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
            key={index}
            onPress={() => setProductColor(item)}
          >
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: item,
                marginHorizontal: 7,
                borderRadius: 19,
                borderWidth: 4,
                borderColor:
                  productColor == COLOR[index]
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
      <View style={{ marginBottom: 40, width: 350 }}>
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
          onValuesChangeFinish={(value) => handlePriceChange(value[0], value[1])}
          customMarkerLeft={(e) => {
            return (
              <View style={{ alignItems: 'center' }}>
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
                    fontSize: 10,
                    color: theme.colors.textColor,
                    lineHeight: 16 * 1.6,
                  }}
                >
                  {formatNumber(productMinPrice)}{Currency.VND}
                </Text>
              </View>
            );
          }}
          customMarkerRight={(e) => {
            return (
              <View style={{ alignItems: 'center' }}>
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
                    fontSize: 10,
                    color: theme.colors.textColor,
                    lineHeight: 16 * 1.6,
                  }}
                >
                  {formatNumber(productMaxPrice)}{Currency.VND}
                </Text>
              </View>
            );
          }}
          values={[30000, 130000]}
          min={10000}
          max={130000}
          step={1000}
          sliderLength={330}
          selectedStyle={{
            backgroundColor: theme.colors.mainColor,
            width: 300,
            marginLeft: 10
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

  const renderGender = () => {
    return (
      <View
        style={{
          marginBottom: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {GENDER.map((item, index) => (
          <custom.TouchableOpacity
            style={{
              marginBottom: 8,
              marginRight: 8,
              borderRadius: 50,
              borderColor: theme.colors.lightBlue,
              borderWidth: 1,
              backgroundColor:
                productGender == GENDER[index]
                  ? theme.colors.lightBlue
                  : theme.colors.transparent,
            }}
            key={item}
            onPress={() => setProductGender(item)}
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
              {item}
            </Text>
          </custom.TouchableOpacity>
        ))}
      </View>
    );
  };
  const renderCategories = () => {
    return (
      <View
        style={{
          marginBottom: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {CATEGORY.map((item, index) => (
          <custom.TouchableOpacity
            style={{
              marginBottom: 8,
              marginRight: 8,
              borderRadius: 50,
              borderColor: theme.colors.lightBlue,
              borderWidth: 1,
              backgroundColor:
                productCategory == CATEGORY[index]
                  ? theme.colors.lightBlue
                  : theme.colors.transparent,
            }}
            key={item}
            onPress={() => setProductCategory(item)}
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
              {item}
            </Text>
          </custom.TouchableOpacity>
        ))}
      </View>
    );
  };


  const renderButton = () => {
    return (
      <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <components.Button
          title='apply filters'
          onPress={handleApplyFilter}
        />
        <components.Button
          title='reset filters'
          onPress={handleResetFilter}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <custom.ScrollView
            >
              {renderSize()}
              {renderColor()}
              {renderPrice()}
              {renderGender()}
              {renderCategories()}
              {renderButton()}
            </custom.ScrollView>
          </View>
        </View>
      </Modal >
    </View >
  );

};

export default ProductFilter;
