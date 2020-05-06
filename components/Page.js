import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Meta from './Meta';

const GlobalStyle = createGlobalStyle`
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
   color: #222;
  }

  ::selection {
    background-color: #222;
    color: #fff;
  }

  :focus {
    outline-color: #222;
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 1.125;
  }

  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.25;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.25;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.22;
  }
`;

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <GlobalStyle />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
