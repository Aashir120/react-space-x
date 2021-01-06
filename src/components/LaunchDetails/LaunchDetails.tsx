import React,{useEffect} from 'react';
import {LaunchInfoQuery} from '../../generated/graphql';
import './style.css';
import { Typography, Grid, Container, List, ListItem, Divider } from '@material-ui/core';
import Aos from 'aos';
import {Header} from '../Header';
import 'aos/dist/aos.css';

interface Props {
    data: LaunchInfoQuery;
}

const LaunchDetails:React.FC<Props>=({data})=>{
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    if(!data.launch){
        return<div>its not available</div>
    }   
    const url = data?.launch.links?.video_link;
    console.log(url)
    const url2 = (url as unknown as string).replace("watch?v=", "embed/");
    console.log(url2)
    return(
        <>
        <Header/>
        <Grid container className='LaunchDetails'>
        <Container data-aos="fade-up" className="launch-page" >
            <List style={{ color: '#c5c6c7' }}  >
                <ListItem style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h3" gutterBottom > <b>MISSION NAME:  {data?.launch.mission_name} </b></Typography>
                </ListItem>
                <Divider style={{ backgroundColor: '#c5c6c7' }} />
                <ListItem>
                    <Typography variant="h5" gutterBottom>  {data?.launch.details}</Typography>
                </ListItem>
                <Divider style={{ backgroundColor: '#c5c6c7' }} />
                <ListItem>
                    <Typography variant="h5" gutterBottom> <b>LAUNCH SITE NAME: </b> {data?.launch.launch_site?.site_name}</Typography>
                </ListItem>
                <Divider style={{ backgroundColor: '#c5c6c7' }} />
                <ListItem>
                    <Typography variant="h5" gutterBottom> <b>LAUNCH YEAR: </b> {data?.launch.launch_year}</Typography>
                </ListItem>
                <Divider style={{ backgroundColor: '#c5c6c7' }} />
                <ListItem>
                    <Typography variant="h5" gutterBottom> <b>STATUS: </b> {data?.launch.launch_success ? "Success":"Fail"}</Typography>
                </ListItem>
                <Divider style={{ backgroundColor: '#c5c6c7' }} />
            </List>
            <Grid container spacing={2} className='detail-image'>
                {!!data?.launch.links?.video_link && (
                    <Grid data-aos="fade-up" container justify='center' item xs={12} sm={8} md={3} wrap='wrap' style={{ maxWidth: '100%', }} >
                        <iframe src={url2}
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                            height='600' width='100%'
                            className='detail-image'
                            style={{
                                width:"800px", justifyContent: 'center', alignItems: 'center'
                            }}
                        />
                    </Grid>
                )}
                {data?.launch.links && data.launch.links.flickr_images && (
                    <Grid container item className='detail-image' justify='space-around' alignItems='center' >
                        {data.launch.links.flickr_images.map(image => image?
                            <Grid data-aos="fade-up" container item className='detail-image' justify='space-around' xs={12} sm={8} md={3} wrap='wrap' style={{ maxWidth: '100%', }}>
                                <img className="img-launch" src={image} alt='launches' height='600' width='850'  />
                            </Grid>:null
                        )}
                    </Grid>
                )}
            </Grid>
        </Container>
    </Grid>
    </>
    )
};

export default LaunchDetails;