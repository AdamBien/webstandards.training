export default class Answer{

    answer() { 
        return new Promise((resolve, reject) => { 
            setTimeout(()=>reject('calculation takes too long'),1000);
        });
        
    }

}