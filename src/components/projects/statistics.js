import { Typography, Grid, CircularProgress, Card, CardContent } from "@mui/material";
import useSWR from "swr";

const fetcher = async(...args) => await fetch(...args).then(response => response.json());



const Statistics = () => {

    const { data, error } = useSWR('http://localhost:3000/api/githubAPI', fetcher);

    return(
        <Grid sx={{marginTop:'40px'}} container direction='column'>
            <Grid item sx={{marginBottom:'25px'}}>
                <Typography variant='h4' align="center">Statistics</Typography>
            </Grid>
            <Grid item container>
                {data ? Object.entries(data).map( ([key, value]) => {
                    console.log(key, value);
                    return <>
                        <Grid item xs>
                            <Card>
                                <CardContent>
                                    <Typography>{key}</Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography key={value}>{value}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </>
                }) : 'Not working'}
            </Grid>
        </Grid>
    )
}
module.exports = Statistics;