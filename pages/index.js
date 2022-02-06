import * as React from 'react';
import { createTheme, CssBaseline } from '@mui/material';
import '@fontsource/roboto/400.css';
import { ThemeProvider } from '@emotion/react';
import Card from '../src/components/profileCard/profileCard.js';
import Navbar from '../src/components/navigationbar/navbar.js';
import About from '../src/components/about/about.js';
import Skills from '../src/components/skills/skills.js';
import Statistics from '../src/components/projects/statistics.js';


const MainPage = () =>{
	const darkTheme = createTheme({
		palette:{
			mode: 'dark',
			
		}
	});
	
	const [dark, setDark] = React.useState(true)


	return (
		<ThemeProvider theme={darkTheme}>
		<CssBaseline />
			<Navbar />
			<Card />
			<About />
			<Skills />
			<Statistics />
		</ThemeProvider>
	)
};

export default MainPage;
