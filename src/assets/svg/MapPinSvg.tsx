import * as React from 'react';
import Svg, {SvgProps, Path, Rect} from 'react-native-svg';

const MapPinSvg: React.FC = (props: SvgProps) => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Path
        stroke='#626262'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M32.5 23.333c0 5.834-7.5 10.834-7.5 10.834s-7.5-5-7.5-10.834a7.5 7.5 0 1 1 15 0Z'
      />
      <Path
        stroke='#626262'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M25 25.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'
      />
      <Rect width={49} height={49} x={0.5} y={0.5} stroke='#DBE3F5' rx={24.5} />
    </Svg>
  );
};

export default MapPinSvg;
