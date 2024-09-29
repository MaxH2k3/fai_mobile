import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const LogOutSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Path
        stroke='#626262'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M22.5 32.5h-3.333a1.666 1.666 0 0 1-1.667-1.667V19.167a1.666 1.666 0 0 1 1.667-1.667H22.5M28.333 29.167 32.5 25l-4.167-4.167M32.5 25h-10'
      />
      <Rect width={49} height={49} x={0.5} y={0.5} stroke='#DBE3F5' rx={24.5} />
    </Svg>
  );
};

export default LogOutSvg;
