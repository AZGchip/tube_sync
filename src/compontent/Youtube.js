import React, { Component } from "react";
import Youtube from "react-youtube";

let video;
const options = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 0,
    },
};

class Player extends Component {
    state = {
        videoId:"",
    }
    constructor(props) {
        super(props);
        
        this.state = {
            opts: options,
            isPlaying: false,
            videoId:"UxzMAM6JmoY",
        };
        
    }  
    
    loadRequestedVideo(id){
        this.setState({
            videoId: id,
        });
       
    }
    handleSync() {
        if (this.state.isPlaying) {
            this.setState({
                isPlaying: false,
            });
            video.pauseVideo()
        }
        else {
            this.setState({
                isPlaying: true,
            });
            video.pauseVideo()
        }

    }
  
    _onReady(event) {
        video = event.target
        event.target.playVideo()
    }
    onStateChange(event) {
        console.log("the event is" + event)
    }
    render() {

        return <div>
            <Youtube  opts={this.state.opts} onReady={this._onReady} />
        </div>;
    }

}
export default Player 