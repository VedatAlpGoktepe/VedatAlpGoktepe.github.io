import './App.css';

import { Button, ButtonGroup, Grid, IconButton, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import { ArrowDownward, GitHub, LinkedIn, Description } from '@mui/icons-material';

import '@fontsource/roboto';

import ResumePDF from "./res/vedat_goktepe_resume.pdf";
import coursePlanner from "./res/course_planner.jpg"
import javaGame from "./res/the_wave.jpg";
import voltorbFlip from "./res/voltorb_solver.jpg";
import prayerTimes from "./res/prayer_times.jpg";

const proj_data = [
    {
        img: coursePlanner,
        title: "Course Planner App",
        link: "https://github.com/VedatAlpGoktepe/b07FinalProject"
    },
    {
        img: javaGame,
        title: "The Wave (Java Game)",
        link: "https://github.com/VedatAlpGoktepe/the_wave"
    },
    {
        img: voltorbFlip,
        title: "Voltorb Flip (Pokemon Game) Solver",
        link: "https://github.com/VedatAlpGoktepe/Voltorb-Flip-Solver"
    },
    {
        img: prayerTimes,
        title: "Muslim Prayer Times App",
        link: "https://github.com/VedatAlpGoktepe/Prayer-Times"
    }
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Grid container direction='column'>
                    <Grid container minHeight={window.innerHeight} direction='column'>
                        <Grid item paddingTop={window.innerHeight / 16 - 10}>
                            <Typography variant='h3'>
                                Hi, I'm Vedat. A Computer Science Student at
                            </Typography>
                            <Typography variant='h3'>
                                University of Toronto
                            </Typography>
                        </Grid>

                        <Grid item paddingTop={window.innerHeight / 16 - 15}>
                            <ButtonGroup variant='text' color='primary'>
                                <Button onClick={() => {document.getElementById('bottomGrid').scrollIntoView({behavior:'smooth'})}} startIcon={<ArrowDownward />} endIcon={<ArrowDownward />} size='large'>More About Me</Button>
                            </ButtonGroup>
                        </Grid>

                    </Grid>

                    <Grid container style={{ backgroundColor: '#b8b8b9', display: 'flex', alignItems: 'center'}} direction='row' height={window.innerHeight/3}>
                        <Grid item paddingLeft={10} paddingRight={10} width={window.innerWidth/4}>
                            <Typography variant='h4'>
                                About Me
                            </Typography>
                        </Grid>
                        <Grid item width={2*window.innerWidth/3}>
                            <Typography variant='p'>
                                My name is Vedat Alp Goktepe. I'm a second year computer science specialist at University of Toronto.
                                I was first introduced to coding with Arduino in my second year of highschool and I've been coding ever since.
                                I love coding with a passion and have fun learning new things about technology.
                                One of my dreams is to make a widely used program of my own someday.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container style={{ backgroundColor: '#9a9a9a', display: 'flex', alignItems: 'center'}} direction='row' height={window.innerHeight/3}>
                        <Grid item paddingLeft={10} paddingRight={10} width={window.innerWidth/4}>
                            <Typography variant='h4'>
                                Projects
                            </Typography>
                        </Grid>
                        <Grid item width={2*window.innerWidth/3} >
                            <div className='imageList' style={{display: 'flex', alignItems: 'center', overflowY:'hidden', overflowX:'scroll', height:window.innerHeight/3}} >
                                {proj_data.map((proj) => (
                                    <ImageListItem className='image' key={proj.img} onClick={() => {window.open(proj.link)}} style={{cursor: "pointer"}} >
                                        <img src={proj.img} alt='' style={{borderRadius:10, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:window.innerHeight/3/1.2, width:16*window.innerHeight/3/1.2/9, flexShrink:0, marginRight:10}}/>
                                        <ImageListItemBar title={proj.title} style={{borderRadius:10, width:16*window.innerHeight/3/1.2/9}} />
                                    </ImageListItem>
                                ))}
                                
                                {/* <ImageListItem>
                                    <img src={testImage} alt='' style={{borderRadius:10, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:window.innerHeight/3/1.2, width:16*window.innerHeight/3/1.2/9, flexShrink:0, marginRight:10}}/>
                                    <ImageListItemBar title={"testing"} subtitle={"testing 2"} />
                                </ImageListItem>
                                <img src={javaGame} alt='' style={{borderRadius:10, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:window.innerHeight/3/1.2, width:16*window.innerHeight/3/1.2/9, flexShrink:0, marginRight:10}}/>
                                <img src={voltorbFlip} alt='' style={{borderRadius:10, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:window.innerHeight/3/1.2, width:16*window.innerHeight/3/1.2/9, flexShrink:0, marginRight:10}}/>
                                <img src={prayerTimes} alt='' style={{borderRadius:10, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:window.innerHeight/3/1.2, width:16*window.innerHeight/3/1.2/9, flexShrink:0, marginRight:10}}/> */}
                            </div>
                        </Grid>
                    </Grid>

                    <Grid  id='bottomGrid' container style={{ backgroundColor: '#777777', display: 'flex', alignItems: 'center'}} direction='row' height={window.innerHeight/3}>
                        <Grid item paddingLeft={10} paddingRight={10} width={window.innerWidth/4}>
                            <Typography variant='h4'>
                                Connect With Me
                            </Typography>
                        </Grid>
                        <Grid item width={2*window.innerWidth/3}>
                            <IconButton children={<GitHub style={{fontSize:75}} />} style={{marginRight:2*window.innerWidth/3/8}} onClick={() => {window.open("https://github.com/VedatAlpGoktepe")}} />
                            <IconButton children={<LinkedIn style={{fontSize:75}} />} style={{marginRight:2*window.innerWidth/3/8}} onClick={() => {window.open("https://www.linkedin.com/in/vedat-alp-goktepe")}} />
                            <IconButton children={<Description style={{fontSize:75}} />} style={{marginRight:2*window.innerWidth/3/8}} onClick={() => {window.open(ResumePDF)}} />
                        </Grid>
                    </Grid>

                </Grid>

            </header>
        </div>
    );
}

export default App;
