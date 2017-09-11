class App { 
    constructor(message='duke') { 
        this.message = message;
        console.log('created',this);
    }

    init(callback = function (param) { console.log('not defined',param) }) {
        console.log('initialized', this.message);
        callback(this.message);
    }
}


const sayHello = function(greeting) { 
    console.log('global',greeting);
}

sayHello('chief duke');

const withParams = new App('java');
withParams.init();
withParams.init(sayHello);

(function (content) {
    console.log('anonymous', content);
}('duke'));




