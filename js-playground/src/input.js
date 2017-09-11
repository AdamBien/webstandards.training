import Text from './text.js'
export default class Input extends Text { 

    constructor(id,changeListener) { 
        super(id);
        this.changeListener = changeListener;
        this.register();
    }

    register() { 
        this.domElement.onchange = this.changeListener;
    }
}