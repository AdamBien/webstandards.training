class App { 
    constructor(message='duke') { 
        this.message = message;
        console.log('created',this);
    }

    init(callback) {
        console.log('initialized', this.message);
        callback(this.message);
    }
}


const sayHello = function(greeting) { 
    console.log('global',greeting);
}

const withParams = new App('java');
withParams.init(sayHello);




