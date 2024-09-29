import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  icon: JSX.Element;
  title: string;
  onPress?: () => void;
};

import {text} from '../text';
import {svg} from '../assets/svg';
import {theme} from '../constants';

const ProfileCategory: React.FC<Props> = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: theme.colors.lightBlue,
      }}
      onPress={onPress}
    >
      {icon}
      <text.H5 style={{marginRight: 'auto', marginLeft: 14}}>{title}</text.H5>
      {onPress && <svg.RightArrowSvg />}
    </TouchableOpacity>
  );
};

export default ProfileCategory;
