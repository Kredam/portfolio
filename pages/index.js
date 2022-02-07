import * as React from 'react';
import { createTheme, CssBaseline, Box } from '@mui/material';
import '@fontsource/roboto/400.css';
import Card from '../src/components/profileCard/profileCard.js';
import Navbar from '../src/components/navigationbar/navbar.js';
import About from '../src/components/about/about.js';
import Skills from '../src/components/skills/skills.js';
import Statistics from '../src/components/projects/statistics.js';


const MainPage = () =>{
	return (
		<Box>
			<Navbar />
			<Card />
			<About />
			<Skills />
			<Statistics />
		</Box>
	)
};

export default MainPage;
