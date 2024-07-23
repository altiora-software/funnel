import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: React.CSSProperties['color'];
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f50b5",
    },
    secondary: {
      main: "#ff005d",
    },
    error: {
      main: red[500],
    },
  },
  status: {
    danger: red[500],
  },
});

export default theme;
