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

    const openDrawer = () => {
        setDrawer(true);
    }

    const closeDrawer = () => {
        setDrawer(false)
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const pagesMenu = [<Avatar alt="Kreidli Ádám" src="./avatar.jpg" sx={{ width: 170, height: 170 , display:{xs:'block', sm:'none'}}}/>,'About', 'Skills','Projects', 'Statistics'];
    const pagesFull = ['About', 'Skills', 'Kredam','Projects', 'Statistics'];

    const variant = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
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
                                initial="hidden" animate="visible" variants={variant}
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
                            {/* <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}>
                                {pagesMenu.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu> */}
                        </Box>

                        <Box sx={{flexGrow: 1, display:{xs:'flex', md:'none'}, justifyContent:'center'}}>
                            <Typography variant='h6'><FontAwesomeIcon icon={faCode}/></Typography>
                        </Box>
                        <Box sx={{flexGrow: 1, display:{xs:'flex', md:'none'}, justifyContent:'flex-end'}}>
                            <Typography variant='h6'>Kredam</Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'space-evenly' }}>
                            {pagesFull.map((page) => (
                            <Button
                                key={page}
                                component={motion.button} whileHover={{ scale: 1.1 }}
                                initial="hidden" animate="visible" variants={variant}
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