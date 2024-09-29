import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const MinusSvg: React.FC = () => {
  return (
    <Svg width={30} height={30} fill='none'>
      <Path
        stroke='#111'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M11 15h8.114'
      />
      <Rect width={29} height={29} x={0.5} y={0.5} stroke='#DBE3F5' rx={14.5} />
    </Svg>
  );
};

export default MinusSvg;
