interface ColorType {
  main: string;
  sub: string;
}
export type Color = 'blue' | 'green' | 'black' | 'approach' | 'white';

type Palette = {
  [K in Color]: ColorType;
};

const palette: Palette = {
  blue: {
    main: '#6D7EFF',
    sub: '#8D9DFF',
  },
  green: {
    main: '#2EDAC3',
    sub: '#90E8DC',
  },
  black: {
    main: '#424959',
    sub: '#6E788F',
  },
  approach: {
    main: '#FF6F9F',
    sub: '#DF1D1D',
  },
  white: {
    main: '#ffffff',
    sub: '#ffffff',
  },
};

interface ButtonColorType {
  [type: string]: {
    backgroundColor: string;
    color: string;
  };
}
interface ButtonColorMap {
  [color: string]: ButtonColorType;
}

const buttonColorMap: ButtonColorMap = {
  blue: {
    main: {
      backgroundColor: palette.blue.main,
      color: '#ffffff',
    },
    sub: {
      backgroundColor: palette.blue.sub,
      color: '#ffffff',
    },
  },
  green: {
    main: {
      backgroundColor: palette.green.main,
      color: '#ffffff',
    },
    sub: {
      backgroundColor: palette.green.sub,
      color: '#ffffff',
    },
  },
  approach: {
    main: {
      backgroundColor: palette.approach.main,
      color: '#ffffff',
    },
    sub: {
      backgroundColor: palette.approach.sub,
      color: '#ffffff',
    },
  },
  black: {
    main: {
      backgroundColor: palette.black.main,
      color: '#ffffff',
    },
    sub: {
      backgroundColor: palette.black.sub,
      color: '#ffffff',
    },
  },
  white: {
    main: {
      backgroundColor: palette.white.main,
      color: palette.black.main,
    },
    sub: {
      backgroundColor: palette.white.main,
      color: palette.black.main,
    },
  },
};

export { palette, buttonColorMap };
