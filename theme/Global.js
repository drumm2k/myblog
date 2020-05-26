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
   font-family: 'Noah', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
   font-size: 1.8rem;
   font-weight: 400;
   line-height: 1.6;
   letter-spacing: -0.01em;
   color: ${({ theme }) => theme.colors.text};
   text-rendering: optimizeLegibility;
   background: ${({ theme }) => theme.colors.bg};

   @media(min-width: 736px) {
      font-size: 2rem;
    }
  }

  ::selection {
    background-color: #222;
    color: #fff;
  }

  :focus {
    outline-color: #222;
  }

  h1, h2, h3, h4 {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
    line-height: 1.2;
  }

  h1 {
    font-size: 3.4rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.2rem;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
  }

  a:hover {
    text-decoration: underline;
  }

  .wrapper {
    padding: 1.6rem;

    @media(min-width: 736px) {
      padding: 2.4rem;
      max-width: 800px;
      margin: 0 auto;
    }
  }
`;
