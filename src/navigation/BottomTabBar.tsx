import React from 'react';
import {View, TouchableOpacity, ViewStyle} from 'react-native';

import {hooks} from '../hooks';
import {theme, tabs} from '../constants';
import {homeIndicatorHeight} from '../utils';
import {setScreen} from '../store/slices/tabSlice';

const BottomTabBar: React.FC = (): JSX.Element => {
  const dispatch = hooks.useDispatch();

  const containerStyle: ViewStyle = {
    borderTopWidth: 1,
    paddingVertical: 13,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 29,
    justifyContent: 'space-between',
    borderTopColor: theme.colors.lightBlue,
    // marginBottom: homeIndicatorHeight() === 0 ? 20 : 0,
  };

  return (
    <View style={{...containerStyle}}>
      {tabs.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{alignItems: 'center'}}
            onPress={() => dispatch(setScreen(item.name))}
          >
            <item.icon />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;
