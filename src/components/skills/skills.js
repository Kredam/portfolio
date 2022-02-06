import * as React from 'react';
import {    Slider, Grid, Typography, List, ListItem, Box, Divider, Chip,
            Accordion, AccordionSummary, AccordionDetails       
            } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faServer, faDatabase, faBroom, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faPython, faJava, faJs, faPhp } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    
    const marks = [
    {
        value:0,
        label:'Novice'
    },
    {
        value:10,
        label:'Competent'
    },
    {
        value:20,
        label:'Proficient'
    },
    {
        value:30,
        label:'Expert'
    }
    ];

    let textValue = (value) => {
        return `${value}`;
    }

    return (
        <Grid container>
            <Grid item container xs sm={6} alignItems='center' direction='column'>
                <Grid item sx={{marginBottom:'25px'}}>
                    <Typography variant='h4'>Proficiency</Typography>
                </Grid>
                <Grid item>
                    <Box sx={{ width: 225 }}>
                        <Divider light>
                            <Chip variant="outlined" color="info" label={<FontAwesomeIcon icon={faJava} size='lg'/>} />
                        </Divider>
                        <Slider 
                            aria-label='Java knowledge'
                            defaultValue={10}
                            max={30}
                            min={0}
                            getAriaValueText={textValue}
                            valueLabelDisplay='auto'
                            marks={marks}
                            disabled
                        />
                        <Divider light>
                            <Chip variant="outlined" color="info" label={<FontAwesomeIcon icon={faPython} size='lg'/>} />
                        </Divider>
                        <Slider 
                            aria-label='Python knowledge'
                            defaultValue={25}
                            max={30}
                            min={0}
                            getAriaValueText={textValue}
                            valueLabelDisplay='auto'
                            marks={marks}
                            disabled
                        />
                        <Divider light>
                            <Chip variant="outlined" color="info" label={<FontAwesomeIcon icon={faJs} size='lg'/>} />
                        </Divider>
                        <Slider 
                            aria-label='JavaScript knowledge'
                            defaultValue={20}
                            max={30}
                            min={0}
                            getAriaValueText={textValue}
                            valueLabelDisplay='auto'
                            marks={marks}
                            disabled
                        />
                        <Divider light>
                            <Chip variant="outlined" color="info" label={<FontAwesomeIcon icon={faPhp} size='lg'/>} />
                        </Divider>
                        <Slider 
                            aria-label='PHP knowledge'
                            defaultValue={5}
                            max={30}
                            min={0}
                            getAriaValueText={textValue}
                            valueLabelDisplay='auto'
                            marks={marks}
                            disabled
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid item container sm={6}  alignItems='center' direction='column'>
                <Grid item sx={{marginBottom:'25px'}}>
                    <Typography variant='h4'>Skills</Typography>
                </Grid>
                <Grid item sx={{width:'100%'}}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<FontAwesomeIcon icon={faExpand}/>}
                        >
                            <FontAwesomeIcon icon={faBroom} size='lg'/>
                            <Typography sx={{marginLeft:'5px'}}>Web Scraping</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <Typography>Selenium</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>Beautifulsoup</Typography>
                                </ListItem>
                                <Divider light>
                                    <Chip label='References' />
                                </Divider>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<FontAwesomeIcon icon={faExpand}/>}
                        >
                            <FontAwesomeIcon icon={faDatabase} size='lg'/>
                            <Typography sx={{marginLeft:'5px'}}>Database</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <Typography>MySQL</Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>SQLite</Typography>
                                </ListItem>
                                <Divider light>
                                    <Chip label='References' />
                                </Divider>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<FontAwesomeIcon icon={faExpand}/>}
                        >
                            <FontAwesomeIcon icon={faServer} size='lg'/>
                            <Typography sx={{marginLeft:'5px'}}>Backend</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <List>
                            <ListItem>
                                <Typography>Node.js</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>Flask</Typography>
                            </ListItem>
                            <Divider light>
                                <Chip label='References' />
                            </Divider>
                        </List>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<FontAwesomeIcon icon={faExpand}/>}
                        >
                            <FontAwesomeIcon icon={faDesktop} size='lg'/>
                            <Typography sx={{marginLeft:'5px'}}>Frontend</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <List>
                            <ListItem>
                                <Typography>React</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>Angular</Typography>
                            </ListItem>
                            <Divider light>
                                <Chip label='References' />
                            </Divider>
                        </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Skills; 