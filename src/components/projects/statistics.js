import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Typography, Grid, CircularProgress, Card, CardContent } from "@mui/material";
import useSWR from "swr";

const fetcher = async(...args) => await fetch(...args).then(response => response.json());



const Statistics = () => {

    const { data, error } = useSWR('http://localhost:3000/api/githubAPI', fetcher);
    const statNames= ['Repos', 'Followers', 'Stargazers', 'Watchers', 'Public Repos', 'Private Repos', 'Collabs'];
    return(
        <Grid sx={{marginTop:'40px'}} container justifyContent="center" alignItems='center'>
            <Grid item sx={{marginBottom:'25px'}}>
                <Typography variant='h4' align="center">GitHub <FontAwesomeIcon icon={faGithub}/> Statistics</Typography>
            </Grid>
            <Grid item container justifyContent='center' alignItems='center'>
                {data ? Object.entries(data).map( ([key, value]) => {
                    return <>
                        <Grid item xs sx={{margin:2}}>
                            <Card sx={{width:150}}>
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
                                <Card sx={{width:150}}>
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