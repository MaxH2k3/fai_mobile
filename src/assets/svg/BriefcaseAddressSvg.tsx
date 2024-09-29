import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BriefcaseAddressSvg: React.FC = () => {
  return (
    <Svg width={20} height={20} fill='none'>
      <Path
        stroke='#626262'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M16.667 5.833H3.333c-.92 0-1.666.746-1.666 1.667v8.333c0 .92.746 1.667 1.666 1.667h13.334c.92 0 1.666-.746 1.666-1.667V7.5c0-.92-.746-1.667-1.666-1.667Z'
      />
      <Path
        stroke='#626262'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M13.333 17.5V4.167A1.667 1.667 0 0 0 11.667 2.5H8.333a1.667 1.667 0 0 0-1.666 1.667V17.5'
      />
    </Svg>
  );
};

export default BriefcaseAddressSvg;
