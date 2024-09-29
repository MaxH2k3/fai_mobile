import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

import {hooks} from '../../../hooks';
import {theme, tabs} from '../../../constants';

const OrderTabSvg: React.FC = (): JSX.Element => {
  const currentTabScreen = hooks.useSelector((state) => state.tab.screen);

  return (
    <Svg width={40} height={40} fill='none'>
      <Circle
        cx={20}
        cy={20}
        r={20}
        fill={
          currentTabScreen === tabs[2].name
            ? theme.colors.lightBlue
            : theme.colors.transparent
        }
      />
      <Path
        fill={
          currentTabScreen === tabs[2].name
            ? theme.colors.mainColor
            : theme.colors.textColor
        }
        d='m28.774 28.729-1.276-14.046A.752.752 0 0 0 26.75 14H24.5v-1.5a4.475 4.475 0 0 0-1.314-3.186A4.475 4.475 0 0 0 20 8a4.505 4.505 0 0 0-4.5 4.5V14h-2.25a.749.749 0 0 0-.748.682l-1.276 14.046a3.007 3.007 0 0 0 .772 2.295 3.005 3.005 0 0 0 2.216.977h11.572c.842 0 1.649-.355 2.216-.977a3.013 3.013 0 0 0 .773-2.294ZM17 12.5c0-1.655 1.345-3 3-3a2.988 2.988 0 0 1 3 3V14h-6v-1.5Zm9.893 17.512a1.489 1.489 0 0 1-1.108.488H14.214c-.426 0-.82-.174-1.107-.489a1.48 1.48 0 0 1-.385-1.148L13.934 15.5h1.564v2.25a.75.75 0 0 0 1.5 0V15.5h6v2.25a.75.75 0 0 0 1.5 0V15.5h1.565l1.215 13.365c.039.425-.098.833-.386 1.148Z'
      />
    </Svg>
  );
};

export default OrderTabSvg;
