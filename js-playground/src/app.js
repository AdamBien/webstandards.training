class App { 
    constructor(message='duke') { 
        this.message = message;
        console.log('created',this);
    }

    init() {
        console.log('initialized',this.message);
    }
}

const app = new App();
app.init();


const withParams = new App('java');
withParams.init();

const undef = new App('');
undef.init();



