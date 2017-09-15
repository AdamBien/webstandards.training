export default class Answer{

    get answer() { 
        return new Promise((resolve, reject) => { 
            setTimeout(()=>resolve(this.fetchFromServer()),1000);
        });
        
    }


    async fetchFromServer() { 
        return await fetch('http://localhost:8080/answers/resources/answers').then(response => response.json());
    }
}