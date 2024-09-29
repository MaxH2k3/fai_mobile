import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {hooks} from '../../hooks';
import {custom} from '../../custom';
import {components} from '../../components';

const Wishlist: React.FC = () => {
  const wishlist = hooks.useSelector((state) => state.wishlistSlice.list);

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header logo={true} burger={true} basket={true} />;
  };

  const renderProducts = () => {
    if (wishlist.length > 0) {
      return (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: 20,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return <components.WishlistItem item={item} />;
          }}
        />
      );
    }

    return null;
  };

  const renderEmptyWishlist = () => {
    if (wishlist.length === 0) {
      return (
        <custom.ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <Text>Your wishlist is empty.{'\n'}</Text>
        </custom.ScrollView>
      );
    }

    return null;
  };

  const renderContent = () => {
    return (
      <custom.SmartView>
        {renderProducts()}
        {renderEmptyWishlist()}
      </custom.SmartView>
    );
  };

  const renderBottomTabBar = () => {
    return <components.BottomTabBar />;
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
      {renderBottomTabBar()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Wishlist;
