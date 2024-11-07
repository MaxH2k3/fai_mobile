import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { svg } from '../assets/svg';
import { custom } from '../custom';
import { components } from '../components';
import { ShopScreenProps, hooks } from '../hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useQuery } from '@tanstack/react-query';
import { useProductsQuery } from '../api/query/product-query';
import { IProductMain } from '../constants/model/product-interface';
import ProductFilter from './ProductFilter';
import ProductSort from './ProductSort';


const AllProductPage: React.FC = () => {

  const navigation = hooks.useNavigation();

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSortOpen, setIsSortOpen] = useState(false)

  const [category, setCategory] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [color, setColor] = useState<string>('')
  const [size, setSize] = useState<string>('')
  const [minPrice, setMinPrice] = useState<number>(30000)
  const [maxPrice, setMaxPrice] = useState<number>(130000)
  const [sortBy, setSortBy] = useState('')
  const [isAscending, setIsAscending] = useState(false)

  const { data, isLoading } = useQuery(
    useProductsQuery({
      Page: 1,
      EachPage: 100,
      Categories: category !== '' ? [category] : undefined,
      Gender: gender !== '' ? gender : undefined,
      Colors: color !== '' ? [color] : undefined,
      Sizes: size !== '' ? [size] : undefined,
      MinPrice: minPrice ? minPrice : undefined,
      MaxPrice: maxPrice ? maxPrice : undefined,
      SortBy: sortBy !== '' ? sortBy : undefined,
      IsAscending: isAscending,
      Status: ['Available'],
    })
  );


  const products: IProductMain[] = data?.data.data || [];
  console.log(category, gender, color, size, minPrice, maxPrice)
  console.log(products)

  if (isLoading) {
    return (
      <components.Loader />
    )
  }

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title="All products" />;
  };

  const renderFilterAndSort = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingBottom: 17,
        }}
      >
        <custom.TouchableOpacity
          onPress={() => setIsModalOpen(true)}
        >
          <svg.FiltersSvg />
        </custom.TouchableOpacity>
        <custom.TouchableOpacity
          onPress={() => setIsSortOpen(true)}
        >
          <svg.SortingBySvg />
        </custom.TouchableOpacity>
      </View>
    );
  };

  const renderContent = () => {
    if (products?.length === 0) {
      return <Text>There is no products yet</Text>;
    }

    if (products?.length > 0) {
      return (
        <custom.FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingHorizontal: 20,
            flexGrow: 1,
            paddingBottom: 20,
          }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item, index }) => {
            const lastItem = index === products.length - 1;
            return (
              <components.ProductItem
                key={index}
                item={item}
                lastItem={lastItem}
              />
            );
          }}
        />
      );
    }
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderFilterAndSort()}
      {renderContent()}
      <ProductFilter
        category={category}
        setCategory={setCategory}
        gender={gender}
        setGender={setGender}
        color={color}
        setColor={setColor}
        size={size}
        setSize={setSize}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <ProductSort
        setSortBy={setSortBy}
        setIsAscending={setIsAscending}
        isModalOpen={isSortOpen}
        setIsModalOpen={setIsSortOpen}
      />
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default AllProductPage;
