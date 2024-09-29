import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const CalendarSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Path
        stroke='#626262'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M30.833 18.333H19.167c-.92 0-1.667.746-1.667 1.667v11.667c0 .92.746 1.666 1.667 1.666h11.666c.92 0 1.667-.746 1.667-1.666V20c0-.92-.746-1.667-1.667-1.667ZM28.333 16.667V20M21.667 16.667V20M17.5 23.333h15'
      />
      <Rect width={49} height={49} x={0.5} y={0.5} stroke='#DBE3F5' rx={24.5} />
    </Svg>
  );
};

export default CalendarSvg;
