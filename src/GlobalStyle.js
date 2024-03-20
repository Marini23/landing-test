import { createGlobalStyle } from 'styled-components';

import 'modern-normalize';

import MessinaRegular from './fonts/MessinaSansMono-Regular.ttf';
import MessinaMedium from './fonts/MessinaSansMono-Book.ttf';
import MessinaBold from './fonts/MessinaSansMono-Bold.ttf';
import MessinaSemiBold from './fonts/MessinaSansMono-SemiBold.ttf';

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
    src: url(${MessinaBold});
    font-weight: bold;
    font-style: normal;
  }
  
body {
width: 100%;
min-width: 360px;
max-width: 1280px;
height: 100vh;
margin: 0 outo;
font-family: 'Messina', -apple-system, BlinkMacSystemFont, 
    sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

ul 
 {
    list-style: none;
  }`;
