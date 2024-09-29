import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const RigthArrowBlackSvg: React.FC = () => {
  return (
    <Svg width={24} height={24} fill='none'>
      <Path
        stroke='#111'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M5 12h14M12 5l7 7-7 7'
      />
    </Svg>
  );
};

export default RigthArrowBlackSvg;
