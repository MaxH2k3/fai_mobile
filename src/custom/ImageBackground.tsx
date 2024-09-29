import React from 'react';
import FastImage from 'react-native-fast-image';
import {createImageProgress} from 'react-native-image-progress';

const ImageProgress = createImageProgress(FastImage);

type Props = {
  source?: object;
  style?: object;
  imageStyle?: object;
  resizeMode?: 'cover' | 'contain' | 'stretch';
  children?: React.ReactNode;
};

const ImageBackground: React.FC<Props> = ({
  children,
  source,
  resizeMode,
  style,
  imageStyle,
}): JSX.Element => {
  return (
    <ImageProgress
      source={source}
      style={style}
      imageStyle={imageStyle}
      resizeMode={
        resizeMode === 'cover'
          ? FastImage.resizeMode.cover
          : resizeMode === 'contain'
          ? FastImage.resizeMode.contain
          : FastImage.resizeMode.stretch
      }
    >
      {children}
    </ImageProgress>
  );
};

export default ImageBackground;
