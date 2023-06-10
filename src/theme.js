import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import CssBaseline from "@mui/material/CssBaseline";
// import bg from '../public/Illustration.png'


export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
   components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: "darkred",
          backgroundColor: "#FDD05D",
          backgroundImage: `url(/Illustration.png)`,
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#FDD05D',
    },
    secondary: {
      main:'#F56D22',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
