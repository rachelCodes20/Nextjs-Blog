import './globals.css'
import NavBar from './nav/page'
import RalewayWoff2 from './fonts/Raleway-Regular.woff2';
import { createTheme } from '@mui/system';
import { ThemeProvider } from '@emotion/react';
const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ThemeProvider theme={theme}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
       <html lang="en"></html>
      <head />
      <body>
        <NavBar />
        {children}
      </body>
    </ ThemeProvider>
  )
}
