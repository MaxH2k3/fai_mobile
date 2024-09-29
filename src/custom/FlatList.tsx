import React from 'react';
import {FlatList as FlatListRN} from 'react-native';

type Props = {
  data: Array<any>;
  renderItem: ({item, index}: {item: any; index: number}) => JSX.Element;
  keyExtractor: (item: any, index: number) => string;
  ListEmptyComponent?: () => JSX.Element;
  ListFooterComponent?: () => JSX.Element;
  ListHeaderComponent?: () => JSX.Element;
  ItemSeparatorComponent?: () => JSX.Element;
  numColumns?: number;
  horizontal?: boolean;
  style?: object;
  decelerationRate?: number;
  snapToInterval?: number;
  pagingEnabled?: boolean;
  contentContainerStyle?: object;
  columnWrapperStyle?: object;
  showsHorizontalScrollIndicator?: boolean;
};

const FlatList: React.FC<Props> = ({
  data,
  renderItem,
  keyExtractor,
  ListEmptyComponent,
  ListFooterComponent,
  ListHeaderComponent,
  ItemSeparatorComponent,
  numColumns,
  horizontal,
  style,
  decelerationRate,
  snapToInterval,
  pagingEnabled,
  showsHorizontalScrollIndicator,
  contentContainerStyle,
  columnWrapperStyle,
}) => {
  return (
    <FlatListRN
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={ListEmptyComponent}
      ListFooterComponent={ListFooterComponent}
      ListHeaderComponent={ListHeaderComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      numColumns={numColumns}
      horizontal={horizontal}
      style={style}
      decelerationRate={decelerationRate}
      snapToInterval={snapToInterval}
      pagingEnabled={pagingEnabled}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      columnWrapperStyle={columnWrapperStyle}
      contentContainerStyle={contentContainerStyle}
    />
  );
};

export default FlatList;
