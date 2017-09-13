export default class Answer{

    answer() { 
        return new Promise((resolve, reject) => { 
            setTimeout(()=>resolve(this.calculate()),1000);
        });
        
    }

    calculate() { 
        return {
            answer: Math.random(),
            precision: 'low',
            duration: 'seconds'
        }
    }
}