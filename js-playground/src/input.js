import Text from './text.js'
export default class Input extends Text { 

    constructor(id,changeListener) { 
        super(id);
        this.changeListener = changeListener;
        this.onTextChange = this.onTextChange.bind(this);
        this.register();
    }

    register() { 
        this.domElement.onchange = this.onTextChange;
    }

    onTextChange(e) { 
        this.changeListener(e.target.value);
    }
}