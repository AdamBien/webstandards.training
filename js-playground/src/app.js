import Text from './text.js';
import Input from './input.js';
import Answer from './answer.js';

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
        this.init();
    }

    init() { 
        this.first.content(`first content: ${this.message}`);
        this.second.content("another content");
        this.answerButton.onclick = this.getAnswer;
    }

    
    async getAnswer() { 
        try {
            const { answer,precision } = await this.answer.answer();
            console.log(answer,precision);
            this.first.content(answer);
        } catch (e) { 
            console.error(`error happened: ${e}`);
        }    
    }

}


new App('java rocks');






