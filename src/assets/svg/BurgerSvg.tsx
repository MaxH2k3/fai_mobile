import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BurgerSvg: React.FC = () => {
  return (
    <Svg width={25} height={12} fill='none'>
      <Path
        stroke='#111'
        strokeLinecap='round'
        strokeWidth={2}
        d='M1 1h18M1 6h23M1 11h18'
      />
    </Svg>
  );
};

export default BurgerSvg;
