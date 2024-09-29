import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

import {theme, tabs} from '../../../constants';
import {hooks} from '../../../hooks';

const CategoriesTabSvg: React.FC = (): JSX.Element => {
  const currentTabScreen = hooks.useSelector((state) => state.tab.screen);

  return (
    <Svg width={40} height={40} fill='none'>
      <Circle
        cx={20}
        cy={20}
        r={20}
        fill={
          currentTabScreen === tabs[1].name
            ? theme.colors.lightBlue
            : theme.colors.transparent
        }
      />
      <Path
        fill={
          currentTabScreen === tabs[1].name
            ? theme.colors.mainColor
            : theme.colors.textColor
        }
        fillRule='evenodd'
        d='M19 11.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5ZM10.25 19a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0Z'
        clipRule='evenodd'
      />
      <Path
        fill={
          currentTabScreen === tabs[1].name
            ? theme.colors.mainColor
            : theme.colors.textColor
        }
        fillRule='evenodd'
        d='M23.943 23.943a1 1 0 0 1 1.414 0l4.35 4.35a1 1 0 0 1-1.414 1.414l-4.35-4.35a1 1 0 0 1 0-1.414Z'
        clipRule='evenodd'
      />
    </Svg>
  );
};

export default CategoriesTabSvg;
