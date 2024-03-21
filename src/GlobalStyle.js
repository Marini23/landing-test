import { createGlobalStyle } from 'styled-components';

import 'modern-normalize';

import MessinaRegular from './fonts/MessinaSansMono-Regular.ttf';
import MessinaMedium from './fonts/MessinaSansMono-Book.ttf';
import MessinaBold from './fonts/MessinaSansMono-Bold.ttf';
import MessinaSemiBold from './fonts/MessinaSansMono-SemiBold.ttf';
import BiroBold from './fonts/BiroScriptUSPlus-Bold.ttf';
import BiroRegular from './fonts/BiroScriptUSPlus-Regular.ttf';
import GroteskMedium from './fonts/RightGrotesk-Medium.otf';
import GroteskBold from './fonts/RightGrotesk-CompactBlack.otf';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  }

  @font-face {
    font-family: 'Messina';
    src: url(${MessinaRegular});
    font-weight: normal;
    font-style: normal;
  }
   @font-face {
    font-family: 'Biro';
    src: url(${BiroBold});
    font-weight: normal;
    font-style: normal;
  }
   @font-face {
    font-family: 'Biro';
    src: url(${BiroRegular});
    font-weight: normal;
    font-style: normal;
  }

   @font-face {
    font-family: 'Messina';
    src: url(${MessinaMedium});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Messina';
    src: url(${MessinaSemiBold});
    font-weight: bold;
    font-style: normal;
  }
   @font-face {
    font-family: 'Messina';
    src: url(${GroteskMedium});
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Messina';
    src: url(${MessinaBold});
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Biro';
    src: url(${BiroBold});
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Grotesk';
    src: url(${GroteskBold});
    font-weight: bold;
    font-style: normal;
  }

  
body {
width: 100%;
min-width: 360px;
max-width: 1280px;
height: 100vh;
margin: 0 outo;
background-color: #181818;
font-family: 'Messina','Biro','Grotesk', -apple-system, BlinkMacSystemFont, 
    sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

ul 
 {
    list-style: none;
  }`;
