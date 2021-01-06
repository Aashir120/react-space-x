import React,{useEffect} from 'react';
import {LaunchesQuery} from '../../generated/graphql';
import './style.css';
import { Grid,CardMedia,Typography,CardContent } from '@material-ui/core';
import {Button,Card} from 'react-bootstrap';
import '../../App.css';

import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Header} from '../Header';
interface Props {
    data: LaunchesQuery;
}

const Launch:React.FC<Props>=({data})=>{

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    if (!data.launches) {
        return <div>Launch unavailable</div>
    }
    return(
        <>
        <Header/>
        <div className="launch-view">
        <Grid container direction='row' spacing={3} alignItems='center' justify='center' >
        {data.launches.map(launch =>
            <Grid data-aos="fade-up" className="launch-content" container item component={Card} xs={12} sm={8} md={3} wrap='wrap'
                style={{ margin: '2%', maxWidth: '100%', backgroundColor: '#fff' }} direction='row' >
                <CardMedia style={{ height: 0, paddingTop: '1%', maxHeight: '100%', }} />
                <CardContent style={{ color: '#1f2833'}} >
                    <Typography variant='h6' gutterBottom align='justify'> <b>Mission Name: </b>  {launch?.mission_name} </Typography>
                    <Typography variant='subtitle1' align='justify'><b>Year: </b> {launch?.launch_year}</Typography>
                    <Typography variant='subtitle1' align='justify' gutterBottom><b>Launch Site Name: </b></Typography>
                    <Link to={`/launch/${launch?.flight_number}`} >
                        <Button className="btn-launch"
                            size="lg"  variant="contained"> See More
                        </Button>
                    </Link>
                </CardContent>
            </Grid>
        )}

    </Grid>
    </div>
    </>
    )
};

export default Launch;