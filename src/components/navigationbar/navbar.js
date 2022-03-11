import { useState } from 'react';
import {    Box, AppBar, Toolbar, 
            Button, SwipeableDrawer, IconButton, 
            Tooltip, Typography, Container, 
            Menu, MenuItem, List, 
            ListItem, ListItemText, ListItemIcon,
            Avatar, Divider} 
from '@mui/material';
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faCode } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [drawer, setDrawer] = useState(false);
    const [codeIconAnimation, setCodeIconAnimation] = useState(false)

    const openDrawer = () => {
        setDrawer(true);
        setCodeIconAnimation(true)
    }
    
    const closeDrawer = () => {
        setDrawer(false)
        setCodeIconAnimation(false)
    }

    const scrollTo =  async (div_id) => {
        const element = await document.getElementById(div_id)
        console.log(element)
        element.scrollIntoView({behavior:"smooth"})
    }

    const pagesFull = { 'About':"about_div",
                        'Skills':"skills_div",
                        'Kredam': "card_div",
                        'Projects':"stats_div",
                        'Statistics':"stats_div"};
    const pagesMenu = { 'About':"about_div",
                        'Skills':"skills_div",
                        'Projects':"stats_div",
                        'Statistics':"stats_div"};

    const navItem = {
        visible: {opacity: 1, transition:{delay:0.5}},
        hidden: {opacity: 0, }
    }
    const navLogo = {
        open: {rotate:180, x:35,transition:{duration:1}},
        close: {rotate:-180, x:0, transition:{duration:1}}
    }

    return(
        <Box sx={{flexGrow: 1, margin:'20px'}}>
            <AppBar position='static'>
                    <Toolbar>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                component={motion.button}
                                initial="hidden" animate="visible" transition={{delay:0.5}} variants={navItem}
                                onClick={openDrawer}
                                color="inherit">
                                <FontAwesomeIcon icon={faBars} />
                            </IconButton>
                            <SwipeableDrawer
                                open={drawer}
                                onOpen={openDrawer}
                                onClose={closeDrawer}>
                                <Box sx={{width:200}}>
                                    <List>
                                        <ListItem
                                            component={motion.button} onClick={() => scrollTo("card_div")} whileTap={{scale: 0.8}}
                                            button>
                                            <Avatar alt="Kreidli Ádám" src="./avatar.jpg" sx={{ width: 170, height: 170 , display:{xs:'block', sm:'none'}}}/>
                                        </ListItem><Divider light />
                                        {Object.entries(pagesMenu).map(([key, value]) => (
                                        <>
                                        <ListItem
                                            component={motion.button} onClick={() => {
                                            closeDrawer();
                                            scrollTo(value);
                                        }} whileTap={{scale: 0.8}}
                                            button key={key}>
                                            <ListItemText primary={key} />
                                        </ListItem><Divider light />
                                        </>
                                        ))}
                                    </List>
                                </Box>
                            </SwipeableDrawer>
                        </Box>

                        <Box sx={{flexGrow: 1, display:{xs:'flex', md:'none'}, justifyContent:'center'}}
                             component={motion.div} animate={codeIconAnimation ? 'open' : 'close'} variants={navLogo}>
                            <Typography variant='h6'><FontAwesomeIcon icon={faCode}/></Typography>
                        </Box>
                        <Box sx={{flexGrow: 1, display:{xs:'flex', md:'none'}, justifyContent:'flex-end'}}
                             component={motion.div} initial="hidden" animate="visible" variants={navItem}>
                            <Typography variant='h6'>Kredam</Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'space-evenly' }}>
                            {Object.entries(pagesFull).map(([key, value]) => {console.log(key, value)})}
                            {Object.entries(pagesFull).map(([key, value]) => (
                            <Button
                                key={key}
                                component={motion.button} whileHover={{ scale: 1.1 }}
                                initial="hidden" animate="visible" variants={navItem}
                                onClick={() => {
                                    scrollTo(value)
                                }} whileTap={{scale: 0.8}}
                                sx={{ my: 1, color: 'white', display: 'block' }}
                            >
                                {key}
                            </Button>
                            ))}
                        </Box>
                    </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;