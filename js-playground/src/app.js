import Text from './text.js';
import Input from './input.js';
import Answer from './answer.js';
import Store from './store.js';

class App { 
    constructor(message='duke') { 
        this.message = message;
        this.first = new Text('first');
        this.second = new Text('second');
        const listener =  e => console.log(e);
        this.firstInput = new Input('firstInput', listener);
        this.answer = new Answer();
        this.answerButton = Text.lookup('slow');
        this.getAnswer = this.getAnswer.bind(this);
        this.store = new Store('response');
        this.init();
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

    output({ answer: result, precision: occuracy, duration:time='years' }) { 
        
        console.log(result,occuracy,time);
        this.first.content(`${result} - ${time}`);
    }

}


new App('java rocks');






