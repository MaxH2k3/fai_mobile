import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const PenSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Rect width={49} height={49} x={0.5} y={0.5} stroke='#DBE3F5' rx={24.5} />
      <Path
        stroke='#626262'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M20 25.333h6M23 14.333a1.414 1.414 0 0 1 2 2l-8.333 8.334-2.667.666.667-2.666L23 14.333Z'
      />
    </Svg>
  );
};

export default PenSvg;
