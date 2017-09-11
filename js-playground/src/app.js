class App { 
    constructor() { 
        console.log('created',this);
    }

    init() {
        console.log('initialized');
    }
}

const app = new App();
app.init();



