import { Paper, Typography, Grid, Button, Box, Card, CardMedia, CardContent, Divider, Chip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faCode, faMusic, faPlane, faGuitar, faGamepad, faFutbol, faCoffee, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const About = () => {

    const scrollAnimation = {
        offscreen: {opacity:0, y:50},
        onscreen: {opacity:1, y:0, transition:{type: "spring", bounce:0.5, duration:3}}
    }

    return (
        <Grid id="about_div" container direction='column' sx={{  marginTop:'201px', marginBottom:'65px'}}>
            <Paper elevation={1}>
                <Grid item container direction='column' justifyContent='center' alignItems='center' sx={{marginTop:'15px'}}>
                    <Grid item>
                        <Typography variant='h6' align='center'><FontAwesomeIcon icon={faInfoCircle} size='lg'/></Typography>
                        <Typography variant='h4' align='center'>About</Typography>
                        <Divider light />
                    </Grid>
                    <Grid item  sx={{marginTop:'15px'}}>
                        <Typography variant='body1'>I'm currently doing my Bachelor degree in Computer science at the University of Szeged.
                            I'm interested in Full-stack web development, task-automation and unit testing.
                            I love learning new technologies, and working on my own projects in my spare time. My main goal is to become a Full-stack web developer.
                            Other than tech, I'm passionate about learning new languages, and playing the guitar. I'm currently learning Japanese.
                            </Typography>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid container item sm={6} xs sx={{marginTop:'42px'}} spacing={2}>
                        <Grid container justifyContent='center' item sx={{marginBottom: "22px"}}>
                            <Typography variant='h5'>Personal details</Typography>
                        </Grid>
                        <Grid container item justifyContent='center' alignItems='center'>
                            <Grid item sx={{paddingRight:"15px"}}>
                                <Typography sx={{color:'#008EEC'}}>Birthdate:</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>2000.03.10</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item justifyContent='center'>
                            <Grid item sx={{paddingRight:"15px"}}>
                                <Typography sx={{color:'#008EEC'}}>Phone:</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>+36 70 7708081</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item justifyContent='center'>
                            <Grid item sx={{paddingRight:"15px"}}>
                                <Typography sx={{color:'#008EEC'}}>Address:</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>Hungary, Szeged</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item justifyContent='center'>
                            <Grid item sx={{paddingRight:"15px"}}>
                                <Typography sx={{color:'#008EEC'}}>Email:</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>kredam@gmail.com</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item justifyContent='center'>
                            <Grid item sx={{paddingRight:"15px"}}>
                                <Typography sx={{color:'#008EEC'}}>Job status:</Typography>
                            </Grid>
                            <Grid item>
                                <Button size='small' variant='outlined' color='error'>Unemployed</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item sm={6} sx={{marginTop:'42px', }} spacing={2}>
                        <Grid container justifyContent='center' item sx={{marginBottom: "22px"}}>
                            <Typography variant='h4'>My interests</Typography>
                        </Grid>
                        <Grid container item justifyContent='space-around'>
                            <Card variant='outlined'component={motion.div} variants={scrollAnimation}
                      initial="offscreen" whileInView="onscreen" viewport={{once:true}}>
                                <CardContent sx={{textAlign:'center'}}>
                                    <FontAwesomeIcon icon={faFilm} />
                                    <Typography>Anime</Typography>
                                </CardContent>
                            </Card>
                            <Card variant='outlined'component={motion.div} variants={scrollAnimation}
                      initial="offscreen" whileInView="onscreen" viewport={{once:true}}>
                            <CardContent sx={{textAlign:'center'}}>
                                    <FontAwesomeIcon icon={faCode} />
                                    <Typography>Coding</Typography>
                                </CardContent>
                            </Card>
                            <Card variant='outlined'component={motion.div} variants={scrollAnimation}
                      initial="offscreen" whileInView="onscreen" viewport={{once:true}}>
                            <CardContent sx={{textAlign:'center'}}>
                                    <FontAwesomeIcon icon={faPlane} />
                                    <Typography>Travel</Typography>
                                </CardContent>
                            </Card>
                            <Card variant='outlined'component={motion.div} variants={scrollAnimation}
                      initial="offscreen" whileInView="onscreen" viewport={{once:true}}>
                            <CardContent sx={{textAlign:'center'}}>
                                    <FontAwesomeIcon icon={faMusic} />
                                    <Typography>Music</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid container item  justifyContent='space-around'>
                        <Card variant='outlined'component={motion.div} variants={scrollAnimation}
                      initial="offscreen" whileInView="onscreen" viewport={{once:true}}>
                                <CardContent sx={{textAlign:'center'}}>
                                    <FontAwesomeIcon icon={faGuitar} />
                                    <Typography>Guitar</Typography>
                                </CardContent>
                            </Card>
                            <Card variant='outlined'component={motion.div} variants={scrollAnimation}
                      initial="offscreen" whileInView="onscreen" viewport={{once:true}}>
                            <CardContent sx={{textAlign:'center'}}>
                                    <FontAwesomeIcon icon={faGamepad} />
                                    <Typography>Games</Typography>
                                </CardContent>
                            </Card>
                            <Card variant='outlined'component={motion.div} variants={scrollAnimation}
                      initial="offscreen" whileInView="onscreen" viewport={{once:true}}>
                            <CardContent sx={{textAlign:'center'}}>
                                    <FontAwesomeIcon icon={faFutbol} />
                                    <Typography>Soccer</Typography>
                                </CardContent>
                            </Card>
                            <Card variant='outlined'component={motion.div} variants={scrollAnimation}
                      initial="offscreen" whileInView="onscreen" viewport={{once:true}}>
                            <CardContent sx={{textAlign:'center'}}>
                                    <FontAwesomeIcon icon={faCoffee} />
                                    <Typography>Coffee</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default About; 