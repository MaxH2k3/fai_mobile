import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeAddressSvg: React.FC = () => {
  return (
    <Svg width={20} height={20} fill='none'>
      <Path
        stroke='#626262'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M2.5 7.5 10 1.667 17.5 7.5v9.167a1.667 1.667 0 0 1-1.667 1.666H4.167A1.667 1.667 0 0 1 2.5 16.667V7.5Z'
      />
      <Path
        stroke='#626262'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M7.5 18.333V10h5v8.333'
      />
    </Svg>
  );
};

export default HomeAddressSvg;
