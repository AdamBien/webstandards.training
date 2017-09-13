export default class Answer{

    answer() { 
        return new Promise((resolve, reject) => { 
            setTimeout(()=>resolve(Math.random()),1000);
        });
        
    }

}