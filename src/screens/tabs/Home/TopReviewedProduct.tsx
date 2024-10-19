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
import { useProductTopReviewQuery, useProductsQuery } from '../../../api/query/product-query';
import { ProductAPIEnum } from '../../../constants/enum/product-enum';
import { IProductMain } from '../../../constants/model/product-interface';

const TopReviewedProduct: React.FC = () => {

  const navigation = hooks.useNavigation();

  const { data, isLoading } = useQuery(
    useProductTopReviewQuery({ productCount: 12 })
  );

  const productList: IProductMain[] = data?.data || []

  const slicedList = productList.slice(1, 6)

  return (
    <View style={{ marginBottom: 30 }}>
      <components.BlockHeading
        title='Highest rated products'
        onPress={() => {
          navigation.navigate('ProductList', {
            title: 'Higest rated product',
            products: slicedList,
          });
        }}
        containerStyle={{ marginHorizontal: 20, marginBottom: 14 }}
      />
      <FlatList
        data={productList}
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

export default TopReviewedProduct;
