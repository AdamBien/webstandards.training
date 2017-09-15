export default class Answer{

    get answer() { 
        return new Promise((resolve, reject) => { 
            resolve(this.fetchFromServer());
        });
        
    }


    async fetchFromServer() { 
        return await fetch('http://localhost:8080/answers/resources/answers').then(response => response.json());
    }
}