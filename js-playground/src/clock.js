export default class Clock { 

    constructor(listener) { 
        this.listener = listener;
        this.socket = new WebSocket('ws://localhost:8080/answers/clock');
        this.socket.onopen = e => console.log(e);
        this.socket.onmessage = ({ data:event }) => this.listener(event);
    }

}