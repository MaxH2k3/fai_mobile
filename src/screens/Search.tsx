import React, {useState, useRef, useEffect} from 'react';
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

import {hooks} from '../hooks';
import {custom} from '../custom';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {components} from '../components';
import {queryHooks} from '../store/slices/apiSlice';

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

  const [searchQuery, setSearchQuery] = useState('');

  const {data, error, isLoading} = queryHooks.useGetProductsQuery();

  const products = data instanceof Array ? data : [];

  const ref = useRef<TextInput>(null);

  // setTimeout(() => {
  //   ref.current?.focus();
  // }, 1000);

  useEffect(() => {
    ref.current?.focus();
    // InteractionManager.runAfterInteractions(() => {
    //   Keyboard.dismiss();
    // });
  }, []);

  if (isLoading) {
    return <components.Loader />;
  }

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

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
            value={searchQuery}
            onChangeText={(text) => handleSearch(text)}
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

  const renderItem = ({item, index}: any) => {
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
          navigation.navigate('Product', {item});
        }}
      >
        <svg.SearchSmallSvg />
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
    const filteredProducts = products.filter((item) => {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled' // when user taps on the screen, the keyboard will be hidden
        keyboardDismissMode='on-drag' // when user drags the screen, the keyboard will be hidden
        ListEmptyComponent={() => renderEmptyComponent()}
        renderItem={({item, index}) => renderItem({item, index})}
      />
    );
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderSearchBar()}
      {renderSearchResults()}
    </custom.SmartView>
  );
};

export default Search;
