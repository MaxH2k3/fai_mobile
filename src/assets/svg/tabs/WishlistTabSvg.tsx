import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

import {hooks} from '../../../hooks';
import {theme, tabs} from '../../../constants';

const WishlistTabSvg: React.FC = (): JSX.Element => {
  const currentTabScreen = hooks.useSelector((state) => state.tab.screen);

  return (
    <Svg width={40} height={40} fill='none'>
      <Circle
        cx={20}
        cy={20}
        r={20}
        fill={
          currentTabScreen === tabs[3].name
            ? theme.colors.lightBlue
            : theme.colors.transparent
        }
      />
      <Path
        stroke={
          currentTabScreen === tabs[3].name
            ? theme.colors.mainColor
            : theme.colors.textColor
        }
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M28.84 12.61a5.499 5.499 0 0 0-7.78 0L20 13.67l-1.06-1.06a5.501 5.501 0 1 0-7.78 7.78l1.06 1.06L20 29.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0Z'
      />
    </Svg>
  );
};

export default WishlistTabSvg;
