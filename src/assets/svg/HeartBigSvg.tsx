import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

type Props = {fillColor?: string; strokeColor?: string};

const HeartBigSvg: React.FC<Props> = ({fillColor, strokeColor}) => {
  return (
    <Svg width={33} height={33} fill='none'>
      <Path
        fill={fillColor}
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M22.762 11.265a3.897 3.897 0 0 0-5.511 0l-.751.751-.75-.75a3.897 3.897 0 1 0-5.512 5.51l.751.751 5.51 5.51 5.512-5.51.75-.75a3.897 3.897 0 0 0 0-5.512v0Z'
      />
      <Rect width={32} height={32} x={0.5} y={0.5} stroke='#DBE3F5' rx={16} />
    </Svg>
  );
};

export default HeartBigSvg;
