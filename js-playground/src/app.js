class App { 
    constructor(message='duke') { 
        this.message = message;
        console.log('created',this);
    }

    init() {
        console.log('initialized', this.message);
        hello(this.message);
    }
}

console.log('load time');

function hello(greeting) { 
    console.log('global',greeting);
}

const withParams = new App('java');
withParams.init();




