import { View, TouchableOpacity } from 'react-native';
import React from 'react';

import { text } from '../../text';
import { hooks } from '../../hooks';
import { custom } from '../../custom';
import { theme } from '../../constants';
import { CategoryType, ProductType } from '../../types';
import { Category } from '../../constants/model/common';
import { IProductMain } from '../../constants/model/product-interface';
import { useQuery } from '@tanstack/react-query';
import { useProductsQuery } from '../../api/query/product-query';
import { ProductAPIEnum } from '../../constants/enum/product-enum';

type Props = {
  item: Category;
  divisibleByThree: boolean;
};

const CategoryItem: React.FC<Props> = ({ item, divisibleByThree }) => {

  const { data, isLoading } = useQuery(
    useProductsQuery({
      Categories: [item.name],
      Page: 1,
      EachPage: ProductAPIEnum.ITEM_PER_PAGE,
    })
  );

  const products: IProductMain[] = data?.data.data || [];

  const navigation = hooks.useNavigation()

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
        navigation.navigate('ProductList', {
          title: item.name,
          products: products
        });
      }}
    >
      <custom.Image
        source={{ uri: item.image || '' }}
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
        <text.H3 style={{ color: theme.colors.white }}>{item.name}</text.H3>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
