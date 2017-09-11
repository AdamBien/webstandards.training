export default class Text { 
    constructor(id) { 
        this.domElement = document.querySelector(`#${id}`);
    }

    content(text='not set') { 
        this.domElement.innerText = text;
    }
}