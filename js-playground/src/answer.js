export default class Answer{

    answer() { 
        return new Promise((resolve, reject) => { 
            setTimeout(()=>reject(Math.random()),1000);
        });
        
    }

}