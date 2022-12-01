class Num {
    constructor(){
        
    }

    insertValue(value){
        this.value = value;
        return this.value;

    }
    removeValue(value){

    }
}

let newNum = new Num();
let newNum2 = new Num();



let arr = [42,59,22,36,46,82,9,1,31,73]

function getRandomValue(arr){
    let random = arr.at(Math.random() * arr.length);
    console.log(random)
}

getRandomValue(arr);