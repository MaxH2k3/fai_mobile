import * as React from 'react';
import Svg, {Ellipse, Mask, G, Path, Circle} from 'react-native-svg';

const ShoppingBag: React.FC = () => {
  return (
    <Svg width={200} height={200} fill='none'>
      <Ellipse cx={100} cy={100.5} fill='#DBE3F5' rx={87} ry={87.5} />
      <Mask
        id='a'
        width={174}
        height={175}
        x={13}
        y={13}
        maskUnits='userSpaceOnUse'
      >
        <Ellipse cx={100} cy={100.5} fill='#DBE3F5' rx={87} ry={87.5} />
      </Mask>
      <G mask='url(#a)'>
        <Path
          fill='#fff'
          fillRule='evenodd'
          d='m65.046 18.896-30.31 17.5a2.3 2.3 0 1 0 2.3 3.983l30.31-17.5a2.3 2.3 0 0 0-2.3-3.983Zm-30.91 16.46a3.5 3.5 0 1 0 3.5 6.063l30.31-17.5a3.5 3.5 0 0 0-3.5-6.063l-30.31 17.5Zm28.786 7.86-18.187 10.5a2.3 2.3 0 1 0 2.3 3.984l18.187-10.5a2.3 2.3 0 1 0-2.3-3.984Zm-18.787 9.46a3.5 3.5 0 1 0 3.5 6.063l18.187-10.5a3.5 3.5 0 1 0-3.5-6.062l-18.187 10.5ZM12.982 72.05l22.227-12.833a2.3 2.3 0 0 1 2.3 3.984L15.282 76.033a2.3 2.3 0 0 1-2.3-3.984ZM11.1 75.791a3.5 3.5 0 0 1 1.28-4.781L34.61 58.177a3.5 3.5 0 1 1 3.5 6.062L15.882 77.072A3.5 3.5 0 0 1 11.1 75.79Zm120.874-60.896-25.082 14.482a2.3 2.3 0 0 0 2.3 3.983l25.082-14.481a2.3 2.3 0 0 0-2.3-3.984Zm-25.682 13.442a3.5 3.5 0 1 0 3.5 6.063l25.082-14.482a3.5 3.5 0 1 0-3.5-6.062l-25.082 14.481Zm-86.869 51.54 77.943-45a2.3 2.3 0 0 1 2.3 3.983l-77.943 45a2.3 2.3 0 0 1-2.3-3.983Zm-1.88 3.742a3.5 3.5 0 0 1 1.28-4.782l77.943-45a3.5 3.5 0 0 1 3.5 6.063l-77.943 45a3.5 3.5 0 0 1-4.78-1.282ZM8.782 86.02l1.115-.644a2.3 2.3 0 1 1 2.3 3.983l-1.115.644a2.3 2.3 0 0 1-2.3-3.983Zm-1.881 3.742a3.5 3.5 0 0 1 1.28-4.782l1.116-.644a3.5 3.5 0 0 1 3.5 6.063l-1.115.644a3.5 3.5 0 0 1-4.781-1.281Zm65.546-52.047 46.71-26.968a2.3 2.3 0 1 1 2.3 3.984L74.748 41.7a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l46.71-26.968a3.5 3.5 0 1 1 3.5 6.062l-46.71 26.968a3.5 3.5 0 0 1-4.781-1.281Zm4.006-28.062L82.34 8.91a2.3 2.3 0 1 1 2.3 3.984l-7.767 4.484a2.3 2.3 0 0 1-2.3-3.983Zm-1.882 3.741a3.5 3.5 0 0 1 1.281-4.78l7.768-4.485a3.5 3.5 0 0 1 3.5 6.062l-7.767 4.485a3.5 3.5 0 0 1-4.782-1.282Zm-19.1 19.919-45.033 26a2.3 2.3 0 0 0 2.3 3.984l45.034-26a2.3 2.3 0 1 0-2.3-3.984ZM7.959 62.016a3.5 3.5 0 1 0 3.5 6.063l45.034-26a3.5 3.5 0 0 0-3.5-6.062l-45.034 26Zm55.16-30.46 31.177-18a2.3 2.3 0 0 1 2.3 3.984l-31.177 18a2.3 2.3 0 1 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l31.177-18a3.5 3.5 0 0 1 3.5 6.062l-31.177 18a3.5 3.5 0 0 1-4.781-1.281Zm47.032-29.81-4.448 2.568a2.3 2.3 0 0 0 2.3 3.984l4.448-2.568a2.3 2.3 0 0 0-2.3-3.984Zm-5.048 1.529a3.5 3.5 0 0 0 3.5 6.062l4.448-2.568a3.5 3.5 0 0 0-3.5-6.062l-4.448 2.568Zm-88.323 87.02 47.632-27.5a2.3 2.3 0 0 1 2.3 3.983l-47.632 27.5a2.3 2.3 0 0 1-2.3-3.983Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l47.632-27.5a3.5 3.5 0 1 1 3.5 6.062l-47.632 27.5a3.5 3.5 0 0 1-4.781-1.281Zm84.154-51.242-25.115 14.5a2.3 2.3 0 1 0 2.3 3.983l25.115-14.5a2.3 2.3 0 1 0-2.3-3.984Zm-25.715 13.46a3.5 3.5 0 1 0 3.5 6.063l25.115-14.5a3.5 3.5 0 0 0-3.5-6.062l-25.115 14.5Zm35.241-18.96 35.923-20.74a2.299 2.299 0 1 1 2.3 3.983l-35.923 20.74a2.3 2.3 0 0 1-2.3-3.983Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l35.923-20.74a3.5 3.5 0 0 1 3.5 6.062l-35.923 20.74a3.5 3.5 0 0 1-4.781-1.281Zm17.551 33.399-77.943 45a2.3 2.3 0 0 0 2.3 3.984l77.943-45a2.3 2.3 0 0 0-2.3-3.984Zm-78.543 43.961a3.5 3.5 0 1 0 3.5 6.062l77.943-45a3.5 3.5 0 0 0-3.5-6.062l-77.943 45Zm-23.648 15.039 14.722-8.5a2.3 2.3 0 0 1 2.3 3.984l-14.722 8.5a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.28-4.781l14.723-8.5a3.5 3.5 0 1 1 3.5 6.062l-14.722 8.5a3.5 3.5 0 0 1-4.781-1.281Zm158.631-94.242-45.033 26a2.3 2.3 0 0 0 2.3 3.984l45.033-26a2.3 2.3 0 0 0-2.3-3.984Zm-45.633 24.96a3.5 3.5 0 1 0 3.5 6.063l45.033-26a3.5 3.5 0 1 0-3.5-6.062l-45.033 26ZM15.176 128.518l45.033-26a2.3 2.3 0 0 1 2.3 3.984l-45.033 26a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.28-4.781l45.034-26a3.5 3.5 0 0 1 3.5 6.062l-45.033 26a3.5 3.5 0 0 1-4.781-1.281Zm74.627-45.742-18.187 10.5a2.3 2.3 0 1 0 2.3 3.984l18.187-10.5a2.3 2.3 0 0 0-2.3-3.984Zm-18.787 9.461a3.5 3.5 0 1 0 3.5 6.062l18.187-10.5a3.5 3.5 0 0 0-3.5-6.062l-18.187 10.5Zm28.313-14.96L169 39.705a2.3 2.3 0 0 1 2.3 3.984L99.748 85.001a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.741a3.5 3.5 0 0 1 1.281-4.781l71.552-41.31a3.501 3.501 0 0 1 3.5 6.062l-71.552 41.31a3.5 3.5 0 0 1-4.781-1.28Zm-45.358.438-39.785 22.97a2.3 2.3 0 0 0 2.3 3.984l39.785-22.97a2.3 2.3 0 0 0-2.3-3.984ZM9.824 107.128a3.5 3.5 0 1 0 3.5 6.062l39.785-22.97a3.5 3.5 0 0 0-3.5-6.062l-39.785 22.97Zm49.911-27.431 30.311-17.5a2.3 2.3 0 0 1 2.3 3.984l-30.31 17.5a2.3 2.3 0 0 1-2.3-3.984Zm-1.88 3.742a3.5 3.5 0 0 1 1.28-4.781l30.311-17.5a3.5 3.5 0 0 1 3.5 6.062l-30.31 17.5a3.5 3.5 0 0 1-4.782-1.281Zm93.296-56.52L99.572 56.696a2.3 2.3 0 0 0 2.3 3.984l51.579-29.78a2.3 2.3 0 0 0-2.3-3.983ZM98.972 55.657a3.5 3.5 0 0 0 3.5 6.062l51.579-29.779a3.5 3.5 0 1 0-3.5-6.062L98.973 55.658Zm-65.414 50.699 45.034-26a2.3 2.3 0 0 1 2.3 3.984l-45.034 26a2.3 2.3 0 0 1-2.3-3.984Zm-1.88 3.742a3.5 3.5 0 0 1 1.28-4.781l45.034-26a3.5 3.5 0 1 1 3.5 6.062l-45.034 26a3.5 3.5 0 0 1-4.78-1.281Zm87.617-53.242-31.177 18a2.3 2.3 0 1 0 2.3 3.984l31.177-18a2.3 2.3 0 0 0-2.3-3.984Zm-31.777 16.96a3.5 3.5 0 1 0 3.5 6.063l31.177-18a3.5 3.5 0 0 0-3.5-6.062l-31.177 18Zm41.303-22.46 31.785-18.351a2.3 2.3 0 0 1 2.3 3.984l-31.785 18.35a2.3 2.3 0 1 1-2.3-3.983ZM126.94 55.1a3.5 3.5 0 0 1 1.281-4.781l31.785-18.351a3.5 3.5 0 1 1 3.5 6.062L131.721 56.38a3.5 3.5 0 0 1-4.781-1.281ZM24.032 111.857l-13.856 8a2.3 2.3 0 0 0 2.3 3.984l13.856-8a2.3 2.3 0 0 0-2.3-3.984Zm-14.456 6.961a3.5 3.5 0 1 0 3.5 6.062l13.856-8a3.5 3.5 0 1 0-3.5-6.062l-13.856 8Zm70.16-4.48 47.631-27.5a2.3 2.3 0 0 1 2.3 3.984l-47.632 27.5a2.3 2.3 0 0 1-2.3-3.984Zm-1.882 3.742a3.5 3.5 0 0 1 1.281-4.781l47.632-27.5a3.5 3.5 0 0 1 3.5 6.062l-47.632 27.5a3.5 3.5 0 0 1-4.78-1.281Zm98.876-59.742-25.115 14.5a2.299 2.299 0 1 0 2.3 3.984l25.115-14.5a2.3 2.3 0 0 0-2.3-3.984Zm-25.715 13.46a3.5 3.5 0 0 0 3.5 6.063l25.115-14.5a3.5 3.5 0 1 0-3.5-6.062l-25.115 14.5Zm-125.84 74.04 45.034-26a2.3 2.3 0 0 1 2.3 3.984l-45.033 26a2.3 2.3 0 0 1-2.3-3.984Zm-1.88 3.742a3.5 3.5 0 0 1 1.28-4.781l45.034-26a3.5 3.5 0 1 1 3.5 6.062l-45.033 26a3.5 3.5 0 0 1-4.781-1.281Zm124.072-28.101-77.943 45a2.3 2.3 0 0 0 2.3 3.984l77.943-45a2.3 2.3 0 0 0-2.3-3.984ZM68.824 165.44a3.5 3.5 0 1 0 3.5 6.062l77.943-45a3.5 3.5 0 0 0-3.5-6.062l-77.943 45Zm-15.191 10.156 6.265-3.617a2.3 2.3 0 0 1 2.3 3.984l-6.265 3.617a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l6.265-3.617a3.5 3.5 0 1 1 3.5 6.062l-6.265 3.617a3.5 3.5 0 0 1-4.781-1.281Zm137.105-81.813-31.964 18.454a2.3 2.3 0 0 0 2.3 3.984l31.964-18.454a2.301 2.301 0 0 0-2.3-3.984Zm-32.564 17.415a3.5 3.5 0 1 0 3.5 6.062l31.964-18.454a3.5 3.5 0 0 0-3.5-6.062l-31.964 18.454ZM45.83 168.554l39.379-22.735a2.299 2.299 0 1 1 2.3 3.983L48.13 172.538a2.3 2.3 0 0 1-2.3-3.984Zm-1.88 3.742a3.5 3.5 0 0 1 1.28-4.781l39.379-22.736a3.5 3.5 0 0 1 3.5 6.062L48.73 173.577a3.5 3.5 0 0 1-4.78-1.281Zm68.972-42.477-18.187 10.5a2.299 2.299 0 1 0 2.3 3.983l18.187-10.5a2.3 2.3 0 1 0-2.3-3.983Zm-18.787 9.46a3.5 3.5 0 0 0 3.5 6.062l18.187-10.5a3.5 3.5 0 0 0-3.5-6.062l-18.187 10.5Zm28.313-14.96 64.902-37.472a2.3 2.3 0 0 1 2.3 3.984l-64.902 37.471a2.3 2.3 0 0 1-2.3-3.983Zm-1.881 3.741a3.5 3.5 0 0 1 1.281-4.781l64.902-37.47a3.5 3.5 0 0 1 3.5 6.062l-64.902 37.47a3.5 3.5 0 0 1-4.781-1.281Zm-45.358.438-45.033 26a2.3 2.3 0 0 0 2.3 3.984l45.033-26a2.3 2.3 0 0 0-2.3-3.984Zm-45.633 24.961a3.5 3.5 0 1 0 3.5 6.062l45.033-26a3.5 3.5 0 1 0-3.5-6.062l-45.033 26Zm55.16-30.461 30.31-17.5a2.3 2.3 0 0 1 2.3 3.984l-30.31 17.5a2.3 2.3 0 0 1-2.3-3.984Zm-1.882 3.742a3.5 3.5 0 0 1 1.281-4.781l30.311-17.5a3.5 3.5 0 1 1 3.5 6.062l-30.31 17.5a3.5 3.5 0 0 1-4.782-1.281Zm101.474-61.242-59.756 34.5a2.3 2.3 0 1 0 2.3 3.984l59.756-34.5a2.3 2.3 0 0 0-2.3-3.984ZM123.972 98.96a3.5 3.5 0 0 0 3.5 6.062l59.756-34.5a3.5 3.5 0 1 0-3.5-6.062l-59.756 34.5Zm-65.414 50.699 45.034-26a2.3 2.3 0 0 1 2.3 3.984l-45.034 26a2.3 2.3 0 0 1-2.3-3.984Zm-1.88 3.742a3.5 3.5 0 0 1 1.28-4.781l45.034-26a3.5 3.5 0 0 1 3.5 6.062l-45.034 26a3.5 3.5 0 0 1-4.78-1.281Zm87.617-53.242-31.177 18a2.3 2.3 0 0 0 2.3 3.984l31.177-18a2.3 2.3 0 0 0-2.3-3.984Zm-31.777 16.961a3.5 3.5 0 1 0 3.5 6.062l31.177-18a3.5 3.5 0 0 0-3.5-6.062l-31.177 18Zm41.303-22.46 32.909-19a2.3 2.3 0 1 1 2.3 3.983l-32.909 19a2.3 2.3 0 0 1-2.3-3.984ZM151.94 98.4a3.5 3.5 0 0 1 1.281-4.78l32.909-19a3.5 3.5 0 1 1 3.5 6.061l-32.909 19a3.5 3.5 0 0 1-4.781-1.28ZM49.032 155.158l-13.856 8a2.3 2.3 0 0 0 2.3 3.984l13.856-8a2.3 2.3 0 0 0-2.3-3.984Zm-14.456 6.961a3.5 3.5 0 0 0 3.5 6.062l13.856-8a3.5 3.5 0 1 0-3.5-6.062l-13.856 8Zm102.317-80.78 5.196-3a2.3 2.3 0 1 1 2.3 3.983l-5.196 3a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.74a3.5 3.5 0 0 1 1.281-4.78l5.196-3a3.5 3.5 0 1 1 3.5 6.062l-5.196 3a3.5 3.5 0 0 1-4.781-1.281Zm-37.205 76.56L64.66 180.777a2.3 2.3 0 0 0 2.3 3.984l33.147-19.138a2.3 2.3 0 0 0-2.3-3.984ZM64.06 179.738a3.5 3.5 0 1 0 3.5 6.062l33.147-19.138a3.5 3.5 0 1 0-3.5-6.062L64.06 179.738Zm57.996-32.099 25.115-14.5a2.3 2.3 0 1 1 2.3 3.984l-25.115 14.5a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l25.115-14.5a3.5 3.5 0 0 1 3.5 6.062l-25.115 14.5a3.5 3.5 0 0 1-4.781-1.281Zm66.769-41.205-30.247 17.463a2.3 2.3 0 0 0 2.3 3.984l30.247-17.463a2.3 2.3 0 0 0-2.3-3.984ZM156.097 126.6a3.5 3.5 0 1 0 3.5 6.062l30.247-17.463a3.5 3.5 0 1 0-3.5-6.062L156.097 126.6Zm-36.362 57.02 18.187-10.5a2.3 2.3 0 0 1 2.3 3.984l-18.187 10.5a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l18.187-10.5a3.5 3.5 0 1 1 3.5 6.062l-18.187 10.5a3.5 3.5 0 0 1-4.781-1.281Zm57.205-35.683-27.611 15.941a2.3 2.3 0 0 0 2.3 3.984l27.611-15.942a2.3 2.3 0 1 0-2.3-3.983Zm-28.211 14.902a3.5 3.5 0 0 0 3.5 6.062l27.611-15.941a3.5 3.5 0 1 0-3.5-6.063l-27.611 15.942Zm-69.062 18.164 22.423-12.946a2.3 2.3 0 0 1 2.3 3.984l-22.423 12.946a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l22.423-12.946a3.5 3.5 0 0 1 3.5 6.062l-22.423 12.946a3.5 3.5 0 0 1-4.781-1.281Zm64.141-39.688-30.311 17.5a2.3 2.3 0 0 0 2.3 3.984l30.311-17.5a2.3 2.3 0 0 0-2.3-3.984Zm-30.911 16.461a3.5 3.5 0 0 0 3.5 6.062l30.311-17.5a3.5 3.5 0 1 0-3.5-6.062l-30.311 17.5Zm40.437-21.961 35.214-20.33a2.3 2.3 0 0 1 2.3 3.984l-35.214 20.33a2.3 2.3 0 1 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l35.214-20.33a3.5 3.5 0 1 1 3.5 6.062l-35.214 20.33a3.5 3.5 0 0 1-4.781-1.281Zm-19.099 19.919-37.355 21.567a2.3 2.3 0 1 0 2.3 3.983l37.355-21.567a2.3 2.3 0 1 0-2.3-3.983Zm-37.955 20.527a3.5 3.5 0 0 0 3.5 6.062l37.355-21.566a3.5 3.5 0 0 0-3.5-6.062l-37.355 21.566Zm47.481-26.027 31.177-18a2.3 2.3 0 1 1 2.3 3.983l-31.177 18a2.3 2.3 0 1 1-2.3-3.983Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.782l31.177-18a3.5 3.5 0 0 1 3.5 6.063l-31.177 18a3.5 3.5 0 0 1-4.781-1.281Zm46.433-29.465-3.849 2.223a2.3 2.3 0 1 0 2.3 3.983l3.849-2.222a2.3 2.3 0 0 0-2.3-3.984Zm-4.449 1.183a3.5 3.5 0 0 0 3.5 6.063l3.849-2.223a3.5 3.5 0 1 0-3.5-6.062l-3.849 2.222Zm-70.888 19.219 5.196-3a2.3 2.3 0 0 1 2.3 3.984l-5.196 3a2.3 2.3 0 0 1-2.3-3.984Zm-1.881 3.742a3.5 3.5 0 0 1 1.281-4.781l5.196-3a3.5 3.5 0 1 1 3.5 6.062l-5.196 3a3.5 3.5 0 0 1-4.781-1.281Z'
          clipRule='evenodd'
        />
      </G>
      <Path
        fill='#000'
        d='M100 73.75a8.75 8.75 0 0 0-14 7V86h-3.5a3.5 3.5 0 0 0-3.5 3.5v28A10.502 10.502 0 0 0 89.5 128h22.75a8.749 8.749 0 0 0 8.75-8.75V89.5a3.501 3.501 0 0 0-3.5-3.5H114v-5.25a8.752 8.752 0 0 0-9.536-8.715A8.75 8.75 0 0 0 100 73.75Zm-10.5 7a5.25 5.25 0 1 1 10.5 0V86H89.5v-5.25Zm12.834-4.368a5.252 5.252 0 0 1 8.166 4.368V86h-7v-5.25c0-1.589-.424-3.08-1.166-4.368ZM89.5 124.5a6.999 6.999 0 0 1-7-7v-28h21v29.75c0 1.971.651 3.787 1.75 5.25H89.5Zm28-5.25a5.247 5.247 0 0 1-5.25 5.25 5.247 5.247 0 0 1-5.25-5.25V89.5h10.5v29.75Z'
      />
      <Circle cx={100} cy={100} r={98} stroke='#DBE3F5' strokeWidth={4} />
    </Svg>
  );
};

export default ShoppingBag;
