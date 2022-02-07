import { Typography, Grid } from "@mui/material";
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
                <Grid item>
                    <Typography>{data ? data.followers : 'Loading'}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{data ? data.repos : 'Loading'}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
module.exports = Statistics;