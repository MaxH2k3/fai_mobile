import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const RightArrowSvg: React.FC = () => {
  return (
    <Svg width={8} height={12} fill='none'>
      <Path
        stroke='#626262'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M1.2 10.8 6 6 1.2 1.2'
      />
    </Svg>
  );
};

export default RightArrowSvg;
