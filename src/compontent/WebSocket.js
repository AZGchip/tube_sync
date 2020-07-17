import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://127.0.0.1:8000');

class WebSocket extends Component {
  sendPlayRequest = (request) => {
    client.send(JSON.stringify({
      type: "message",
      data: request
    }));
    console.log("attempting to send", request)
  }
  componentWillMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log("reply received: ", dataFromServer)
    };
  }


  render() {
    return (
      <div>
        <button onClick={() => this.sendPlayRequest("hello world!")}>test button</button>
      </div>
    );
  }
}
export default WebSocket;