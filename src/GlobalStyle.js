import { createGlobalStyle } from 'styled-components';
import 'sanitize.css';

export const GlobalStyle = createGlobalStyle`
  :root {}

  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background-color: #fefae0;
  }


`;
