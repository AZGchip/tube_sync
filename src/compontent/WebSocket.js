import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

import Youtube from "react-youtube";
let player;
let video = "";
const options = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 0,
  },
};
const client = new W3CWebSocket('ws://127.0.0.1:8000');

class WebSocket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opts: options,
      isPlaying: false,
      videoId: "1Zrq8FiKS6A",
      player: "",
    };

  }
  sendVideoSrc = (id) => {
    client.send(JSON.stringify({
      type: "message",
      action: "load_video",
      data: id
    }));
    console.log("attempting to send", id)
  }
  componentWillMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      const serverData = JSON.parse(message.data);

      switch (serverData.action) {
        case "load_video":
          console.log("sending load request")
          this.setState({ videoId: serverData.data })
          break;
        case "sync_start":
          console.log("starting")
          player.playVideo()
          break;
      }

      
      console.log("reply received: ", serverData)
    }

  };
  _onStateChange(event) {
    console.log(event)
  }
  _onReady(event) {
    player = event.target;
    client.send(JSON.stringify({
      type: "message",
      action: "sync_start",
      data: "ready"
    }))
    player.seekTo({ seconds: 0, allowSeekAhead: true })
    player.pauseVideo()
  }
  render() {
    return (

      <div>
        <Youtube
          videoId={this.state.videoId}
          opts={this.state.opts}
          onStateChange={this._onStateChange}
          onReady={this._onReady}
        />
        <button onClick={() => this.sendVideoSrc("JXtujxT9rzA")}>submit video URL</button>
      </div>
    );
  }
}
export default WebSocket;