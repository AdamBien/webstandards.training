export default class Answer{

    answer() { 
        return new Promise((resolve, reject) => { 
            setTimeout(()=>resolve(this.fetchFromServer()),1000);
        });
        
    }

    async fetchFromServer() { 
        return await fetch('answer.json').then(response => response.json());
    }
}