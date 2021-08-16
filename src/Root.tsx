import { ThemeProvider } from 'styled-components';
import * as theme from './styles/themes';
import { GlobalStyle } from './styles/global-styles';
import { PageRouter } from './PageRouter';

export const Root: React.FC = () => (
  <ThemeProvider theme={theme.default}>
    <GlobalStyle />
    <PageRouter />
  </ThemeProvider>
);
