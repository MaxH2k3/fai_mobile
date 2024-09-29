import React from 'react';
import {TouchableOpacity} from 'react-native';

import {svg} from '../assets/svg';

type Props = {
  item: string;
  selectedColor: string;
  lastElement?: boolean;
  setSelectedColor: (color: string) => void;
  containerStyle?: object;
};

const ProductColor: React.FC<Props> = ({
  selectedColor,
  setSelectedColor,
  item,
  containerStyle,
}): JSX.Element => {
  const backgroundColor = () => {
    switch (item) {
      case 'champagne':
        return '#F8E7CD';
      case 'paleCerulean':
        return '#9DC5DB';
      case 'opal':
        return '#96B8BA';
      case 'camel':
        return '#B09765';
      case 'squidInk':
        return '#142535';
    }
  };

  return (
    <TouchableOpacity
      style={{
        width: 30,
        height: 30,
        backgroundColor: backgroundColor(),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        ...containerStyle,
      }}
      onPress={() => setSelectedColor(item)}
    >
      {/* {selectedColor === item && <svg.ColorSelectSvg />} */}
    </TouchableOpacity>
  );
};

export default ProductColor;
