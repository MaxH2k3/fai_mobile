import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MapPinAddressSvg: React.FC = () => {
  return (
    <Svg width={20} height={20} fill='none'>
      <Path
        stroke='#626262'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M17.5 8.333c0 5.834-7.5 10.834-7.5 10.834s-7.5-5-7.5-10.834a7.5 7.5 0 0 1 15 0Z'
      />
      <Path
        stroke='#626262'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M10 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'
      />
    </Svg>
  );
};

export default MapPinAddressSvg;
