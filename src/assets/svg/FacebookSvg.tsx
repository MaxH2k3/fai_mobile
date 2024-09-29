import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const FacebookSvg: React.FC = () => {
  return (
    <Svg width={61} height={60} fill='none'>
      <Rect width={59} height={59} x={1} y={0.5} fill='#fff' rx={29.5} />
      <Path
        fill='#3B5999'
        d='M35.25 20.004 32.655 20c-2.914 0-4.797 1.932-4.797 4.922v2.27h-2.608a.408.408 0 0 0-.408.407v3.288c0 .226.183.408.408.408h2.608v8.297c0 .226.182.408.408.408h3.402a.408.408 0 0 0 .408-.408v-8.297h3.049a.408.408 0 0 0 .408-.408l.001-3.288a.409.409 0 0 0-.408-.408h-3.05v-1.923c0-.925.22-1.394 1.425-1.394l1.747-.001a.408.408 0 0 0 .407-.408v-3.053a.408.408 0 0 0-.407-.408Z'
      />
      <Rect width={59} height={59} x={1} y={0.5} stroke='#DBE3F5' rx={29.5} />
    </Svg>
  );
};

export default FacebookSvg;
