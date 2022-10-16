import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
        
    *{
        box-sizing: border-box;
        font-family: 'MaplestoryOTFBold', 'MaplestoryOTFLight';
    }
    body {
        font-family: 'MaplestoryOTFBold', 'MaplestoryOTFLight';
        
    }
`;

export default GlobalStyle;
