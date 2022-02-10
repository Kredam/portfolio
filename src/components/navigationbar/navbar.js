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
    const [anchorElNav, setAnchorElNav] = useState(null);
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

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const pagesMenu = [<Avatar alt="Kreidli Ádám" src="./avatar.jpg" sx={{ width: 170, height: 170 , display:{xs:'block', sm:'none'}}}/>,'About', 'Skills','Projects', 'Statistics'];
    const pagesFull = ['About', 'Skills', 'Kredam','Projects', 'Statistics'];

    const navItem = {
        visible: {opacity: 1, transition:{delay:0.5}},
        hidden: {opacity: 0, }
    }
    const navLogo = {
        open: {rotate:180},
        close: {rotate:-180}
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
                                        {pagesMenu.map((page, index) => (
                                        <>
                                        <ListItem  
                                            component={motion.button} whileHover={{ scale: 1.1 }}
                                            button key={page}>
                                            <ListItemText primary={page} />
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
                            {pagesFull.map((page) => (
                            <Button
                                key={page}
                                component={motion.button} whileHover={{ scale: 1.1 }}
                                initial="hidden" animate="visible" variants={navItem}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                            ))}
                        </Box>
                    </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;