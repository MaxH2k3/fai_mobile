import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, Platform } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import FlashMessage from 'react-native-flash-message';

import { hooks } from '../../../hooks';
import { custom } from '../../../custom';
import { theme } from '../../../constants';
import { components } from '../../../components';

import { queryHooks } from '../../../store/slices/apiSlice';

import { statusBarHeight } from '../../../utils';
import { useQuery } from '@tanstack/react-query';
import { useProductBestSellerQuery, useProductsQuery } from '../../../api/query/product-query';
import { ProductAPIEnum } from '../../../constants/enum/product-enum';
import { IProductMain } from '../../../constants/model/product-interface';

const BestSoldProduct: React.FC = () => {

  const navigation = hooks.useNavigation();

  const { data, isLoading } = useQuery(
    useProductBestSellerQuery({ productCount: 10 })
  );

  const productList: IProductMain[] = data?.data || []

  const slicedList = productList.slice(1, 6)

  return (
    <View style={{ marginBottom: 30 }}>
      <components.BlockHeading
        title='Best seller'
        onPress={() => {
          navigation.navigate('ProductList', {
            title: 'Best seller',
            products: productList,
          });
        }}
        containerStyle={{ marginHorizontal: 20, marginBottom: 14 }}
      />
      <FlatList
        data={slicedList}
        horizontal={true}
        contentContainerStyle={{ paddingLeft: 20 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        snapToInterval={theme.sizes.width - responsiveWidth(46.2)}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        pagingEnabled={Platform.OS === 'ios' ? true : false}
        renderItem={({ item, index }) => {
          const lastItem = index === slicedList.length - 1;
          return (
            <components.ProductItem item={item} lastItem={lastItem} />
          );
        }}
      />
    </View>
  );
};

export default BestSoldProduct;
