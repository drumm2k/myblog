import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import Page from '../components/Page';
import '../lib/highlight.css';

const theme = {
  colors: {
    black: '#000',
    primary: '#735CDD',
    secondary: '#F7F0F0',
    bg: '#fff',
    link: '#735CDD',
    text: '#464646',
  },
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    );
  }
}

export default MyApp;
