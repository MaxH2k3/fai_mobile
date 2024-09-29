import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const CardSvg: React.FC = () => {
  return (
    <Svg width={50} height={50} fill='none'>
      <Path
        stroke='#626262'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M32.5 18.333h-15c-.92 0-1.667.746-1.667 1.667v10c0 .92.747 1.667 1.667 1.667h15c.92 0 1.667-.747 1.667-1.667V20c0-.92-.747-1.667-1.667-1.667ZM15.833 23.333h18.334'
      />
      <Rect width={49} height={49} x={0.5} y={0.5} stroke='#DBE3F5' rx={24.5} />
    </Svg>
  );
};

export default CardSvg;
