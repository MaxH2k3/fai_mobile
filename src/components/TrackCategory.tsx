import {View, Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

type Props = {
  line?: boolean;
  performed?: boolean;
  status: string;
  comment: string;
};

const TrackCategory: React.FC<Props> = ({line, performed, status, comment}) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 6}}>
      <View style={{alignItems: 'center', marginRight: 24}}>
        <View
          style={{
            width: 30,
            height: 30,
            borderWidth: 2,
            borderColor: theme.colors.lightBlue,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 7,
          }}
        >
          {performed && (
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: theme.colors.mainColor,
              }}
            />
          )}
        </View>
        {line && (
          <View
            style={{
              width: 1,
              height: 30,
              backgroundColor: theme.colors.mainColor,
            }}
          />
        )}
      </View>
      <View>
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
            marginBottom: 6,
          }}
        >
          {status}
        </Text>
        <Text
          style={{
            ...theme.fonts.Mulish_Regular,
            fontSize: 12,
            color: theme.colors.textColor,
            lineHeight: 12 * 1.5,
          }}
        >
          {comment}
        </Text>
      </View>
    </View>
  );
};

export default TrackCategory;
