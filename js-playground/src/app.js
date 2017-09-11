import Text from './text.js';
import Input from './input.js';

class App { 
    constructor(message='duke') { 
        this.message = message;
        this.first = new Text('first');
        this.second = new Text('second');
        this.firstInput = new Input('firstInput', function (e) { console.log(e);});
        this.init();
    }

    init() { 
        this.first.content(`first content: ${this.message}`);
        this.second.content("another content");
    }

}




new App('java rocks');






