import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PayoneerSvg: React.FC = () => {
  return (
    <Svg width={70} height={16} fill='none'>
      <Path
        fill='#111'
        d='M.328 12V.608h4.72c1.205 0 2.139.288 2.8.864.672.576 1.008 1.37 1.008 2.384 0 .992-.336 1.781-1.008 2.368-.672.587-1.605.88-2.8.88H1.976V12H.328Zm1.648-6.208h2.912c.79 0 1.381-.165 1.776-.496.395-.341.592-.821.592-1.44s-.197-1.093-.592-1.424c-.395-.33-.987-.496-1.776-.496H1.976v3.856Zm11.562 6.32c-.715 0-1.344-.165-1.888-.496-.533-.341-.95-.821-1.248-1.44-.288-.63-.432-1.365-.432-2.208 0-.843.15-1.579.448-2.208.299-.64.715-1.136 1.248-1.488.544-.352 1.168-.528 1.872-.528.715 0 1.323.176 1.824.528.512.341.859.832 1.04 1.472l-.192.128V3.936h1.6V12h-1.6v-1.968l.192.08c-.181.64-.528 1.136-1.04 1.488-.501.341-1.11.512-1.824.512Zm.384-1.28c.725 0 1.285-.25 1.68-.752.405-.501.608-1.216.608-2.144 0-.928-.203-1.643-.608-2.144-.395-.501-.955-.752-1.68-.752-.736 0-1.312.261-1.728.784-.405.512-.608 1.227-.608 2.144s.203 1.627.608 2.128c.416.49.992.736 1.728.736Zm5.958 4.8-.352-1.248c.49-.107.901-.24 1.232-.4.341-.15.624-.341.848-.576.224-.235.416-.539.576-.912l.544-1.248.384-.56 2.784-6.752h1.616l-3.76 8.704c-.299.683-.64 1.221-1.024 1.616-.373.405-.8.715-1.28.928a6.075 6.075 0 0 1-1.568.448Zm2.88-3.168-3.664-8.528h1.68l2.752 6.752-.768 1.776Zm9.38-.352c-.8 0-1.498-.17-2.096-.512a3.474 3.474 0 0 1-1.36-1.44c-.32-.63-.48-1.376-.48-2.24 0-.843.16-1.579.48-2.208.32-.63.774-1.115 1.36-1.456.598-.341 1.296-.512 2.096-.512.79 0 1.478.17 2.064.512a3.425 3.425 0 0 1 1.376 1.456c.331.63.496 1.365.496 2.208 0 .864-.165 1.61-.496 2.24a3.446 3.446 0 0 1-1.376 1.44c-.586.341-1.274.512-2.064.512Zm0-1.28c.726 0 1.286-.245 1.68-.736.406-.49.608-1.216.608-2.176 0-.928-.202-1.637-.608-2.128-.394-.501-.954-.752-1.68-.752-.725 0-1.296.25-1.712.752-.405.49-.608 1.2-.608 2.128 0 .96.198 1.685.592 2.176.406.49.982.736 1.728.736ZM37.95 12V6.208c0-.373-.011-.752-.033-1.136-.01-.384-.042-.763-.096-1.136h1.536l.144 1.632-.16.096c.235-.63.608-1.104 1.12-1.424.523-.33 1.12-.496 1.792-.496 1.93 0 2.896 1.083 2.896 3.248V12h-1.616V7.056c0-.693-.138-1.2-.416-1.52-.277-.32-.704-.48-1.28-.48-.693 0-1.248.213-1.664.64-.405.427-.608.997-.608 1.712V12H37.95Zm16.236-.928c-.363.32-.822.576-1.376.768a5.426 5.426 0 0 1-1.696.272c-.854 0-1.59-.165-2.208-.496a3.375 3.375 0 0 1-1.424-1.44c-.331-.63-.496-1.376-.496-2.24 0-.832.16-1.563.48-2.192.33-.63.784-1.12 1.36-1.472.576-.352 1.242-.528 2-.528.725 0 1.349.16 1.872.48.522.32.922.779 1.2 1.376.288.587.432 1.296.432 2.128V8h-5.936l.016-.96h4.976l-.464.576c.01-.864-.16-1.525-.512-1.984-.352-.459-.87-.688-1.552-.688-.715 0-1.275.256-1.68.768-.406.501-.608 1.205-.608 2.112 0 1.013.218 1.77.656 2.272.437.49 1.077.736 1.92.736.458 0 .901-.075 1.328-.224.426-.15.832-.379 1.216-.688l.496 1.152Zm8.734 0c-.363.32-.821.576-1.376.768a5.426 5.426 0 0 1-1.696.272c-.853 0-1.59-.165-2.208-.496a3.374 3.374 0 0 1-1.424-1.44c-.33-.63-.496-1.376-.496-2.24 0-.832.16-1.563.48-2.192.33-.63.784-1.12 1.36-1.472.576-.352 1.243-.528 2-.528.725 0 1.35.16 1.872.48.523.32.923.779 1.2 1.376.288.587.432 1.296.432 2.128V8h-5.936l.016-.96h4.976l-.464.576c.01-.864-.16-1.525-.512-1.984-.352-.459-.87-.688-1.552-.688-.715 0-1.275.256-1.68.768-.405.501-.608 1.205-.608 2.112 0 1.013.219 1.77.656 2.272.437.49 1.077.736 1.92.736.459 0 .901-.075 1.328-.224.427-.15.832-.379 1.216-.688l.496 1.152Zm1.982.928V6.208c0-.373-.01-.752-.032-1.136-.01-.384-.042-.763-.096-1.136h1.536l.192 2.032-.192-.08c.139-.704.454-1.237.944-1.6a2.798 2.798 0 0 1 1.68-.544 2.535 2.535 0 0 1 .768.112l-.032 1.472a2.698 2.698 0 0 0-.944-.16c-.522 0-.944.112-1.264.336a1.97 1.97 0 0 0-.72.864c-.149.352-.224.73-.224 1.136V12h-1.616Z'
      />
    </Svg>
  );
};

export default PayoneerSvg;
