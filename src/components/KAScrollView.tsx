import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type Props = {
  style?: object;
  children: React.ReactNode;
  contentContainerStyle?: object;
};

const KAScrollView: React.FC<Props> = ({
  style,
  children,
  contentContainerStyle,
}): JSX.Element => {
  return (
    <KeyboardAwareScrollView
      style={{...style}}
      enableOnAndroid={true}
      extraScrollHeight={20}
      enableAutomaticScroll={true}
      keyboardShouldPersistTaps='handled'
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{...contentContainerStyle}}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KAScrollView;
