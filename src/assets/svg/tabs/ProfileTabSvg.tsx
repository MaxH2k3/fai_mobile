import * as React from 'react';
import Svg, {Circle, Path, G, Defs, ClipPath} from 'react-native-svg';

import {hooks} from '../../../hooks';
import {theme, tabs} from '../../../constants';

const ProfileTabSvg: React.FC = (): JSX.Element => {
  const currentTabScreen = hooks.useSelector((state) => state.tab.screen);

  return (
    <Svg width={40} height={40} fill='none'>
      <Circle
        cx={20}
        cy={20}
        r={20}
        fill={
          currentTabScreen === tabs[4].name
            ? theme.colors.lightBlue
            : theme.colors.transparent
        }
      />
      <G clipPath='url(#a)'>
        <Path
          fill={
            currentTabScreen === tabs[4].name
              ? theme.colors.mainColor
              : theme.colors.textColor
          }
          d='M28.485 11.515A11.922 11.922 0 0 0 20 8a11.921 11.921 0 0 0-8.485 3.515A11.921 11.921 0 0 0 8 20c0 3.205 1.248 6.219 3.515 8.485A11.921 11.921 0 0 0 20 32c3.205 0 6.219-1.248 8.485-3.515A11.921 11.921 0 0 0 32 20c0-3.205-1.248-6.219-3.515-8.485Zm-14.47 17.222A6.059 6.059 0 0 1 20 23.716a6.059 6.059 0 0 1 5.984 5.02A10.534 10.534 0 0 1 20 30.595c-2.219 0-4.28-.687-5.984-1.857Zm2.17-10.243A3.82 3.82 0 0 1 20 14.678a3.82 3.82 0 0 1 3.816 3.816A3.82 3.82 0 0 1 20 22.309a3.82 3.82 0 0 1-3.816-3.815Zm11.017 9.268a7.474 7.474 0 0 0-2.184-3.52 7.476 7.476 0 0 0-2.173-1.372 5.221 5.221 0 0 0 2.377-4.376A5.228 5.228 0 0 0 20 13.272a5.228 5.228 0 0 0-5.222 5.222c0 1.83.947 3.444 2.377 4.376a7.478 7.478 0 0 0-2.173 1.372 7.476 7.476 0 0 0-2.184 3.52A10.567 10.567 0 0 1 9.406 20C9.406 14.159 14.16 9.406 20 9.406c5.841 0 10.594 4.753 10.594 10.594 0 3.063-1.307 5.826-3.392 7.762Z'
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

export default ProfileTabSvg;
