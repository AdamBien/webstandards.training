export default class Store { 

    constructor(name) { 
        this.slot = name;
        this.storage = window.localStorage;
    }

    store(response) { 
       const stringified =  JSON.stringify(response);
        this.storage.setItem(this.slot,stringified);
    }

    load() { 
        const stringified = this.storage.getItem(this.slot);
        return JSON.parse(stringified);
    }
}