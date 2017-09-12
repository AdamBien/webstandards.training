import Text from './text.js'
export default class Input extends Text { 

    constructor(id,...listeners) { 
        super(id);
        this.listeners = listeners;
        this.extract = this.extract.bind(this);
        this.register();
    }

    register() { 
       this.listeners.forEach(l=>this.domElement.addEventListener('change',this.extract(l)));
    }

    extract(listener) { 
        return evt => listener(evt.target.value);
    }
}