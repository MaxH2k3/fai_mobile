import React from 'react';
import FastImage from 'react-native-fast-image';
import {createImageProgress} from 'react-native-image-progress';

const ImageProgress = createImageProgress(FastImage);

type Props = {
  source: {uri: string};
  style?: object;
  imageStyle?: object;
  resizeMode?: 'cover' | 'contain' | 'stretch';
  tintColor?: string;
};

const Image: React.FC<Props> = ({
  source,
  style,
  imageStyle,
  resizeMode,
  tintColor,
}): JSX.Element => {
  return (
    <ImageProgress
      style={style}
      source={source}
      imageStyle={imageStyle}
      resizeMode={
        resizeMode === 'cover'
          ? FastImage.resizeMode.cover
          : resizeMode === 'contain'
          ? FastImage.resizeMode.contain
          : FastImage.resizeMode.stretch
      }
      tintColor={tintColor}
    />
  );
};

export default Image;
