export default class Clock { 

    constructor(listener) { 
        this.listener = listener;
        this.socket = new WebSocket('ws://localhost:8080/answers/clock');
        this.socket.onopen = e => console.log(e);
        
        this.onTimeArrival = ({ data: event }) => {
            console.log(event);
            this.listener(event)
        };

        this.socket.onmessage = this.onTimeArrival;
        
    }



}