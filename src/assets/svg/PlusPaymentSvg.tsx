import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const PlusPaymentSvg: React.FC = () => (
  <Svg width={30} height={30} fill='none'>
    <Path
      stroke='#111'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.2}
      d='M15 8.583v12.834M8.624 15h12.752'
    />
    <Rect width={29} height={29} x={0.5} y={0.5} stroke='#DBE3F5' rx={14.5} />
  </Svg>
);

export default PlusPaymentSvg;
