import Text from './text.js';
import Input from './input.js';
import Answer from './answer.js';
import Table from './table.js';
import Clock from './clock.js';
import * as storage from './store.js';

class App { 
    constructor(message='duke') { 
        this.message = message;
        this.first = new Text('first');
        this.second = new Text('second');
        this.table = new Table('answers');
        const listener =  e => console.log(e);
        this.firstInput = new Input('firstInput', listener);
        this.answer = new Answer();
        this.answerButton = Text.lookup('slow');
        this.getAnswer = this.getAnswer.bind(this);
        this.time = this.time.bind(this);
        this.store = new storage.Store('response');
        this.clock = new Clock(this.time);
        console.log(storage.precalculated);
        this.init();
    }

    time(time) { 
        this.first.content(time);
    }

    init() { 
        this.first.content(`first content: ${this.message}`);
        this.second.content("another content");
        this.answerButton.onclick = this.getAnswer;
    }

    
    async getAnswer() { 
        let result = this.store.load();
        if (!result) {
            try {
                result = await this.answer.answer;
                this.store.store(result);
            
            } catch (e) {
                console.error(`error happened: ${e}`);
            }
        }
        this.output(result);
    }

    output(data) { 
        const [first] = data;
        const keys = Reflect.ownKeys(first);
        keys.forEach(name => this.table.addHeader(name));
        for (let row of data) { 
            this.table.addRow(keys.map(key => row[key]));
        }
    }

}


new App('java rocks');






