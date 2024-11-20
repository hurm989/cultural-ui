import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useTranslation } from 'react-i18next';
import theme from '../theme';


const MyApp = ({ Component, pageProps }: AppProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
