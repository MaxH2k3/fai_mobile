import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import { theme } from '../../constants';

import { ProductType } from '../../types';

type Props = { rating: number };

const RatingStarSvg: React.FC<Props> = ({ rating }) => {
  return (
    <Svg width={68} height={12} fill='none'>
      <G clipPath='url(#a)'>
        <Path
          fill={
            rating >= 1
              ? theme.colors.fluorescentOrange
              : theme.colors.transparent
          }
          stroke='#FFBE00'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m6 1 1.545 3.13L11 4.635 8.5 7.07l.59 3.44L6 8.885 2.91 10.51l.59-3.44L1 4.635l3.455-.505L6 1Z'
        />
      </G>
      <G clipPath='url(#b)'>
        <Path
          fill={
            rating >= 2
              ? theme.colors.fluorescentOrange
              : theme.colors.transparent
          }
          stroke='#FFBE00'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m20 1 1.545 3.13L25 4.635 22.5 7.07l.59 3.44L20 8.885l-3.09 1.625.59-3.44L15 4.635l3.455-.505L20 1Z'
        />
      </G>
      <G clipPath='url(#c)'>
        <Path
          fill={
            rating >= 3
              ? theme.colors.fluorescentOrange
              : theme.colors.transparent
          }
          stroke='#FFBE00'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m34 1 1.545 3.13L39 4.635 36.5 7.07l.59 3.44L34 8.885l-3.09 1.625.59-3.44L29 4.635l3.455-.505L34 1Z'
        />
      </G>
      <G clipPath='url(#d)'>
        <Path
          fill={
            rating >= 4
              ? theme.colors.fluorescentOrange
              : theme.colors.transparent
          }
          stroke='#FFBE00'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m48 1 1.545 3.13L53 4.635 50.5 7.07l.59 3.44L48 8.885l-3.09 1.625.59-3.44L43 4.635l3.455-.505L48 1Z'
        />
      </G>
      <G clipPath='url(#e)'>
        <Path
          fill={
            rating >= 5
              ? theme.colors.fluorescentOrange
              : theme.colors.transparent
          }
          stroke='#FFBE00'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m62 1 1.545 3.13L67 4.635 64.5 7.07l.59 3.44L62 8.885l-3.09 1.625.59-3.44L57 4.635l3.455-.505L62 1Z'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M0 0h12v12H0z' />
        </ClipPath>
        <ClipPath id='b'>
          <Path fill='#fff' d='M14 0h12v12H14z' />
        </ClipPath>
        <ClipPath id='c'>
          <Path fill='#fff' d='M28 0h12v12H28z' />
        </ClipPath>
        <ClipPath id='d'>
          <Path fill='#fff' d='M42 0h12v12H42z' />
        </ClipPath>
        <ClipPath id='e'>
          <Path fill='#fff' d='M56 0h12v12H56z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default RatingStarSvg;
