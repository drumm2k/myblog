import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {box-sizing:border-box;}
  a {text-decoration:none; color:inherit; cursor:pointer;}
  button {background-color:transparent; color:inherit; border-width:0; padding:0; cursor:pointer;}
  figure {margin:0;}
  input::-moz-focus-inner {border:0; padding:0; margin:0;}
  ul, ol, dd {margin:0; padding:0; list-style:none;}
  h1, h2, h3, h4, h5, h6 {margin:0; font-size:inherit; font-weight:inherit;}
  p {margin:0;}
  cite {font-style:normal;}
  fieldset {border-width:0; padding:0; margin:0;}
  img{max-width:100%;}

  html {
   font-size: 10px;
  }

  body {
   font-family: sans-serif;
   font-size: 1.8rem;
   font-weight: 400;
   line-height: 1.4;
   color: #444140;
   background: #f7ebe8;
  }

  ::selection {
    background-color: #222;
    color: #fff;
  }

  :focus {
    outline-color: #222;
  }

  h1, h2, h3, h4 {
    color: #1e1e24;
    font-weight: 700;
  }

  h1 {
    font-size: 3.6rem;
    line-height: 1.125;
  }

  h2 {
    font-size: 2.8rem;
    line-height: 1.25;
  }

  h3 {
    font-size: 1.8rem;
    line-height: 1.25;
  }

  h4 {
    font-size: 1.4rem;
    line-height: 1.22;
  }

  a {
    color: #e54b4b;
  }

  .wrapper {
    padding: 0 1.6rem;

    @media(min-width: 736px) {
      padding: 0 2.4rem;
    }

    @media(min-width: 1024px) {
      padding: 0 3.2rem;
    }
  }
`;
