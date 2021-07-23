import { ThemeProvider } from 'styled-components';
import * as theme from './styles/themes';
import { GlobalStyle } from './styles/global-styles';

export const Root: React.FC = () => (
  <ThemeProvider theme={theme.default}>
    <GlobalStyle />
  </ThemeProvider>
);
