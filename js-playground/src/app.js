class App { 
    constructor(message='duke') { 
        this.message = message;
        this.first = new Text('first');
        this.second = new Text('second');
        this.init();
    }

    init() { 
        this.first.content(`first content: ${this.message}`);
        this.second.content("another content");
    }

}


class Text { 
    constructor(id) { 
        this.domElement = document.querySelector(`#${id}`);
    }

    content(text='not set') { 
        this.domElement.innerText = text;
    }
}

new App('java rocks');






