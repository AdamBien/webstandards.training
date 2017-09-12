import Text from './text.js';
import Input from './input.js';

class App { 
    constructor(message='duke') { 
        this.message = message;
        this.first = new Text('first');
        this.second = new Text('second');
        const listener =  e => console.log(e);
        this.firstInput = new Input('firstInput', listener);
        this.init();
    }

    init() { 
        this.first.content(`first content: ${this.message}`);
        this.second.content("another content");
    }

}

const array = Array.of(1, 2, 3);

const another = [4, 5, 6];

//console.log(array.length);

const third = array.concat(another);

third.filter(n=>n%2==1).map(nr=>`Result is: ${nr}`).forEach(n => console.log(n));


new App('java rocks');






