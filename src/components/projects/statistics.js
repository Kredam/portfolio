import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Typography, Grid, CircularProgress, Card, CardContent } from "@mui/material";
import useSWR from "swr";
import { motion } from 'framer-motion'
import {useEffect, useRef} from "react";

const fetcher = async(...args) => await fetch(...args).then(response => response.json());

const Statistics = () => {
    const statsDiv = useRef(null)

    const scrollAnimation = {
        offscreen: {opacity:0, y:50},
        onscreen: {opacity:1, y:0, transition:{type: "spring", bounce:0.5, duration:3}}
    }

    useEffect(() => {
        if(statsDiv !== null){
            localStorage.setItem("stats_div", statsDiv)
        }
    })

    const { data } = useSWR('/api/githubAPI', fetcher);
    const statNames= ['Repos', 'Followers', 'Stargazers', 'Watchers', 'Public Repos', 'Private Repos', 'Collabs'];
    return(
        <Grid ref={statsDiv} id="stats_div" sx={{marginTop:'40px'}} container justifyContent="center" alignItems='center'>
            <Grid item sx={{marginBottom:'25px'}}>
                <Typography variant='h4' align="center">GitHub <FontAwesomeIcon icon={faGithub}/> Statistics</Typography>
            </Grid>
            <Grid item container justifyContent='center' alignItems='center'>
                {data ? Object.entries(data).map( ([key, value]) => {
                    return <>
                        <Grid item xs sx={{margin:2}}>
                            <Card sx={{width:150}} component={motion.div} variants={scrollAnimation}
                                    initial="offscreen" whileInView="onscreen" viewport={{once:true}}>
                                <CardContent>
                                    <Typography align="center">{key}</Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography aling="center">{value}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </>
                }) : statNames.map((stat) => {
                        return <>
                            <Grid item xs>
                                <Card sx={{width:150}} component={motion.div} variants={scrollAnimation}
                                    initial="offscreen" whileInView="onscreen" viewport={{once:true}}>
                                    <CardContent>
                                        <Typography align="center">{stat}</Typography>
                                    </CardContent>
                                    <CardContent>
                                        <Typography align="center"><CircularProgress /></Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </>
                })
                }
            </Grid>
        </Grid>
    )
}
module.exports = Statistics;