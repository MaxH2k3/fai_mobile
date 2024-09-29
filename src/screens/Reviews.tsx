import {View, Text} from 'react-native';
import React from 'react';

import {custom} from '../custom';
import {reviews} from '../constants';
import {components} from '../components';

const Reviews: React.FC = () => {
  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title='Reviews' />;
  };

  const renderContent = () => {
    return (
      <custom.FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}
        renderItem={({item}) => {
          const lastItem = reviews[reviews.length - 1].id === item.id;
          return (
            <components.ReviewItem
              review={item}
              item={item}
              lastItem={lastItem}
            />
          );
        }}
      />
    );
  };

  const renderHomeIndicator = () => {
    return <custom.HomeIndicator />;
  };

  return (
    <custom.SmartView>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
      {renderHomeIndicator()}
    </custom.SmartView>
  );
};

export default Reviews;
