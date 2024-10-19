import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  ViewStyle,
  Keyboard,
  InteractionManager,
} from 'react-native';

import { hooks } from '../hooks';
import { custom } from '../custom';
import { svg } from '../assets/svg';
import { theme } from '../constants';
import { components } from '../components';
import { queryHooks } from '../store/slices/apiSlice';
import { useQuery } from '@tanstack/react-query';
import { useSearchProductQuery } from '../api/query/product-query';
import { IProductSearch } from '../constants/model/product-interface';

const Search: React.FC = () => {
  const navigation = hooks.useNavigation();

  // when user clicks on search icon, the search bar will be focused
  // write function when focused, keyboard will be shown
  // when keyboard is shown, the search bar will be expanded
  // when keyboard is hidden, the search bar will be collapsed
  // when user clicks on search icon again, the search bar will be blurred
  // when user clicks on search icon again, the search bar will be focused
  // when user clicks on search icon again, the search bar will be blurred
  // when user clicks on search icon again, the search bar will be focused

  const ref = useRef<TextInput>(null);

  const [inputValue, setInputValue] = useState<string>('')

  // setTimeout(() => {
  //   ref.current?.focus();
  // }, 1000);

  useEffect(() => {
    ref.current?.focus();
    // InteractionManager.runAfterInteractions(() => {
    //   Keyboard.dismiss();
    // });
  }, []);

  const { data, isLoading } = useQuery(
    useSearchProductQuery({
      SearchTerm: inputValue,
      ProductCount: 10,
    })
  );

  const searchResult: IProductSearch[] = data?.data || [];

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderSearchBar = () => {
    const containerStyle: ViewStyle = {
      paddingTop: 10,
      paddingHorizontal: 20,
      paddingBottom: 20,
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomColor: `${theme.colors.lightBlue}80`,
    };

    const inputContainerStyle = {
      flex: 1,
      height: 40,
      marginRight: 20,
    };

    const inputStyle: object = {
      height: 40,
      borderRadius: 4,
      paddingHorizontal: 20,
      backgroundColor: `${theme.colors.lightBlue}50`,
      color: theme.colors.mainColor,
    };

    return (
      <View style={containerStyle}>
        <View style={inputContainerStyle}>
          <TextInput
            ref={ref}
            placeholder='Search Product'
            clearButtonMode='always'
            placeholderTextColor={`${theme.colors.textColor}80`}
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={true}
            style={inputStyle}
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 40,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{
              ...theme.fonts.Mulish_Regular,
              fontSize: 14,
              color: theme.colors.textColor,
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = (item: IProductSearch) => {
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderBottomColor: `${theme.colors.lightBlue}80`,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('ProductDetail', { name: item.name });
        }}
      >
        <custom.ImageBackground
          source={{ uri: item.image }}
          style={{
            width: 40,
            height: 40,
            marginRight: 14,
          }}
          resizeMode='cover'
        />
        <Text
          style={{
            ...theme.fonts.Mulish_Regular,
            fontSize: 14,
            marginLeft: 10,
            color: theme.colors.textColor,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            ...theme.fonts.Mulish_Regular,
            fontSize: 16,
            color: theme.colors.textColor,
          }}
        >
          No results found
        </Text>
      </View>
    );
  };

  const renderSearchResults = () => {
    return (
      <FlatList
        data={searchResult}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
        keyboardDismissMode='on-drag'
        ListEmptyComponent={() => renderEmptyComponent()}
        renderItem={({ item }) => renderItem(item)}
      />
    );
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderSearchBar()}
      {!isLoading && (
        renderSearchResults()
      )}
    </custom.SmartView>
  );
};

export default Search;
