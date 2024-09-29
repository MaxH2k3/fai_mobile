import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {theme} from '../../constants';

type Props = {strokeColor?: string};

const BagSmallSvg: React.FC<Props> = ({strokeColor}) => {
  return (
    <Svg width={20} height={20} fill='none'>
      <Path
        fill={strokeColor}
        d='M17.312 17.274 16.248 5.569A.626.626 0 0 0 15.624 5H13.75V3.75a3.729 3.729 0 0 0-1.095-2.655A3.755 3.755 0 0 0 6.25 3.75V5H4.376a.624.624 0 0 0-.623.569L2.688 17.274a2.506 2.506 0 0 0 .644 1.912A2.504 2.504 0 0 0 5.178 20h9.644c.701 0 1.374-.296 1.846-.814a2.51 2.51 0 0 0 .644-1.912ZM7.5 3.75c0-1.379 1.12-2.5 2.5-2.5a2.49 2.49 0 0 1 2.5 2.5V5h-5V3.75Zm8.245 14.594a1.24 1.24 0 0 1-.924.406H5.178c-.355 0-.683-.145-.922-.407a1.233 1.233 0 0 1-.321-.957L4.945 6.25H6.25v1.875a.625.625 0 0 0 1.25 0V6.25h5v1.875a.625.625 0 0 0 1.25 0V6.25h1.303l1.013 11.137c.032.354-.081.694-.321.957Z'
      />
    </Svg>
  );
};

export default BagSmallSvg;
