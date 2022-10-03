import { createGlobalStyle } from 'styled-components';
import MapleFontsBold from './MaplestoryOTFBold.otf';
import MapleFontsLight from './MaplestoryOTFLight.otf';

export default createGlobalStyle`
   @font-face {
    font-family: 'MaplestoryOTFBold';
    src: local("MapleFonts Bold"),
    url(${MapleFontsBold}) format('woff');
    font-weight: 700;
    font-style: normal;
}
@font-face {
    font-family: 'MaplestoryOTFLight';
    src: local("MapleFonts Light"),
    url(${MapleFontsLight}) format('woff');
    font-weight: 300;
    font-style: normal;
}
`;
