import * as React from 'react';
import Svg, {G, Path, Rect, Defs, ClipPath} from 'react-native-svg';

const MailSvg: React.FC = () => {
  return (
    <Svg width={30} height={30} fill='none'>
      <G
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        clipPath='url(#a)'
      >
        <Path d='M10.583 10.083h9.334a1.17 1.17 0 0 1 1.166 1.167v7a1.17 1.17 0 0 1-1.166 1.167h-9.334a1.17 1.17 0 0 1-1.166-1.167v-7a1.17 1.17 0 0 1 1.166-1.167Z' />
        <Path d='m21.083 11.25-5.833 4.083-5.833-4.083' />
      </G>
      <Rect
        width={29}
        height={29}
        x={0.5}
        y={0.5}
        stroke='#DBE3F5'
        strokeOpacity={0.3}
        rx={14.5}
      />
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M8.25 7.75h14v14h-14z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default MailSvg;
