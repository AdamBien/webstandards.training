import Text from './text.js'
export default class Input extends Text { 

    constructor(id,...listeners) { 
        super(id);
        this.listeners = listeners;
        this.delegate = this.delegate.bind(this);
        this.register();
    }

    register() { 
       this.listeners.forEach(l=>this.domElement.addEventListener('change',this.delegate(l)));
    }

    delegate(listener) { 
        return ({ target: { value } }) => listener(value + 'really');
    }

    extract({ target: { value } }) { 
        return  value;
    }
}