import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {theme} from '../constants';

const Loader: React.FC = (): JSX.Element => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator size='large' color={theme.colors.mainColor} />
    </View>
  );
};

export default Loader;
