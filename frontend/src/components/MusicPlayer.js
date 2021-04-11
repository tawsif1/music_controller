import React, { Component } from 'react';
import {Grid, Typography, Card, LinearProgress, IconButton} from "@material-ui/core"
import  SkipNextIcon from "@material-ui/icons/SkipNext"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import  PauseIcon from "@material-ui/icons/Pause"


export default class MusicPlayer extends Component {
    constructor(props){
        super(props);
    }

    
    
    skipSong() {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        };
        fetch("/spotify/skip", requestOptions);
      }
    
      playSong() {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        };
        fetch("/spotify/play", requestOptions);
      }

      pauseSong() {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        };
        fetch("/spotify/pause", requestOptions);
      }


    render() {
        const songProgess = (this.props.time/this.props.duration)*100;



      return  (<Card>
            <Grid container alignitems="center">
                <Grid item align="center" xs={4}>
                    <img src={this.props.image_url} height="100%" width="100%"/>

                </Grid>
                <Grid item align="center" xs={4}>
                    <Typography component="h4" variant="h5">
                    {this.props.title}
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1">
                    {this.props.artist}
                    </Typography>
                    <div>
                    <IconButton
                onClick={() => {
                  this.props.is_playing ? this.pauseSong() : this.playSong();
                }}
              >
                            {this.props.is_playing? <PauseIcon/> : <PlayArrowIcon/>}
                        </IconButton>
                        <IconButton onClick={() => {this.skipSong()}}>
                            <SkipNextIcon /> {this.props.votes} / {" "} {this.props.votes_required}
                        </IconButton>
                    </div>
                    
                </Grid>
            </Grid>
            <LinearProgress variant="determinate" value={songProgess}></LinearProgress>
        </Card>)


    }
}