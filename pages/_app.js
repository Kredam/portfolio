// import App from 'next/app'
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline, LinearProgress, Box } from "@mui/material";
import * as React from 'react';

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = React.useState(false)

    const darkTheme = createTheme({
		palette:{
			mode: 'dark',
			
		}
	});

    React.useEffect(() => {
        setLoading(true)
    }, [])



    return (
        <>
            {!loading ? (<ThemeProvider theme={darkTheme}>
                        <CssBaseline />
                            <Box sx={{width:'50%', margin:'auto', paddingTop:'20%'}}>
                                <LinearProgress />
                            </Box>
                        </ThemeProvider>) : 
                        (<ThemeProvider theme={darkTheme}><CssBaseline /><Component {...pageProps} /></ThemeProvider>)}
        </>
    );
}
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp