import {View, TouchableOpacity} from 'react-native';
import React from 'react';

import {text} from '../../text';
import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {theme} from '../../constants';
import {CategoryType, ProductType} from '../../types';

type Props = {
  item: CategoryType;
  divisibleByThree: boolean;
  products?: ProductType[];
};

const CategoryItem: React.FC<Props> = ({item, divisibleByThree, products}) => {
  const navigation = hooks.useNavigation();
  const data = products instanceof Array ? products : [];
  return (
    <TouchableOpacity
      style={{
        width: divisibleByThree
          ? theme.sizes.width
          : theme.sizes.width / 2 - 0.5,
        marginBottom: 1,
        height: divisibleByThree ? 170 : 187,
      }}
      onPress={() => {
        navigation.navigate('Shop', {
          title: item.name,
          products: data.filter((product) =>
            product.categories.includes(item.name),
          ),
        });
      }}
    >
      <custom.Image
        source={{uri: item.image || ''}}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode='cover'
      />
      <View
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundColor: '#171C31',
          opacity: 0.4,
        }}
      />
      <View
        style={{
          position: 'absolute',
          padding: 20,
          bottom: 0,
          left: 0,
        }}
      >
        <text.H3 style={{color: theme.colors.white}}>{item.name}</text.H3>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
