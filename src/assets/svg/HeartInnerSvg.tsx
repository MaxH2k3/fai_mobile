import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

type Props = {fillColor?: string; strokeColor?: string};

const HeartInnerSvg: React.FC<Props> = ({fillColor, strokeColor}) => {
  return (
    <Svg width={44} height={44} fill='none'>
      <Path
        fill={fillColor}
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M29.367 15.842a4.581 4.581 0 0 0-6.484 0l-.883.883-.883-.883a4.584 4.584 0 1 0-6.484 6.483l.884.883L22 29.692l6.483-6.484.884-.883a4.581 4.581 0 0 0 0-6.483v0Z'
      />
      <Rect width={43} height={43} x={0.5} y={0.5} stroke='#DBE3F5' rx={21.5} />
    </Svg>
  );
};

export default HeartInnerSvg;
