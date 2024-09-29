import {Text, ScrollView as ScrollViewRN, Platform} from 'react-native';
import React from 'react';

type Props = {
  style?: any;
  bounce?: boolean;
  horizontal?: boolean;
  snapToInterval?: number;
  decelerationRate?: any;
  pagingEnabled?: boolean;
  children: React.ReactNode;
  onMomentumScrollEnd?: any;
  contentContainerStyle?: any;
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
  showHorizontalScrollIndicator?: boolean;
};

const ScrollView: React.FC<Props> = ({
  style,
  bounce,
  children,
  horizontal,
  pagingEnabled,
  snapToInterval,
  decelerationRate,
  onMomentumScrollEnd,
  contentContainerStyle,
  showsVerticalScrollIndicator,
  showsHorizontalScrollIndicator,
}) => {
  return (
    <ScrollViewRN
      style={style}
      bounces={bounce}
      horizontal={horizontal}
      pagingEnabled={pagingEnabled}
      snapToInterval={snapToInterval}
      decelerationRate={decelerationRate}
      onMomentumScrollEnd={onMomentumScrollEnd}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      // smooth scroll
      overScrollMode='never'
      nestedScrollEnabled={true}
      // end smooth scroll
    >
      {children}
    </ScrollViewRN>
  );

  return null;
};

export default ScrollView;
