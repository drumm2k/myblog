import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../theme/Global';

addDecorator((style) => (
  <>
    <GlobalStyle />
    {style()}
  </>
));
