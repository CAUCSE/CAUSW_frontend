import 'styled-components';

declare module 'styled-components' {
  export type ColorSet = 'blue' | 'green' | 'black' | 'approach' | 'white';
  export interface DefaultTheme {
    color: {
      [K in Color]: {
        main: string;
        sub?: string;
      };
    };
  }
}
