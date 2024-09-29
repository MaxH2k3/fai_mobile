import React from 'react';
import FlashMessageLib from 'react-native-flash-message';

import {statusBarHeight} from '../utils';

const FlashMessage: React.FC = () => {
  const height = statusBarHeight();

  return <FlashMessageLib position='top' statusBarHeight={height} />;
};

export default FlashMessage;
