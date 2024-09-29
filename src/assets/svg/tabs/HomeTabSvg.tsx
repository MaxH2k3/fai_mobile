import * as React from 'react';
import Svg, {Circle, Path, G, Defs, ClipPath} from 'react-native-svg';

import {hooks} from '../../../hooks';
import {theme, tabs} from '../../../constants';

const HomeTabSvg: React.FC = (): JSX.Element => {
  const currentTabScreen = hooks.useSelector((state) => state.tab.screen);

  return (
    <Svg width={40} height={40} fill='none'>
      <Circle
        cx={20}
        cy={20}
        r={20}
        fill={
          currentTabScreen === tabs[0].name
            ? theme.colors.lightBlue
            : theme.colors.transparent
        }
      />
      <G clipPath='url(#a)'>
        <Path
          fill={
            currentTabScreen === tabs[0].name
              ? theme.colors.mainColor
              : theme.colors.textColor
          }
          d='m31.4 18.392-.002-.002-9.79-9.79a2.194 2.194 0 0 0-1.562-.647c-.59 0-1.145.23-1.563.647l-9.785 9.785a2.212 2.212 0 0 0-.006 3.13 2.197 2.197 0 0 0 1.535.648h.39v7.204a2.589 2.589 0 0 0 2.586 2.586h3.83a.703.703 0 0 0 .703-.703v-5.648c0-.651.53-1.18 1.18-1.18h2.26c.65 0 1.18.529 1.18 1.18v5.648c0 .388.314.703.702.703h3.83a2.589 2.589 0 0 0 2.586-2.586v-7.204h.362c.59 0 1.145-.23 1.563-.648.86-.86.86-2.262.001-3.123Zm-.996 2.13a.798.798 0 0 1-.568.235h-1.065a.703.703 0 0 0-.703.703v7.907c0 .65-.529 1.18-1.18 1.18h-3.127v-4.945a2.589 2.589 0 0 0-2.586-2.586h-2.259a2.589 2.589 0 0 0-2.586 2.586v4.945h-3.127c-.65 0-1.18-.53-1.18-1.18V21.46a.703.703 0 0 0-.703-.703h-1.046a.797.797 0 0 1-.586-.236.804.804 0 0 1 0-1.136l9.79-9.79a.797.797 0 0 1 .568-.236c.214 0 .416.084.568.236l9.787 9.787a.805.805 0 0 1 .003 1.14Z'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M8 8h24v24H8z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default HomeTabSvg;
