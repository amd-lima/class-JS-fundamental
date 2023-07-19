const validateIsNum = (number) => {
    if (typeof number !== 'number') {
        throw new Error('Oh no! we need both a and b to be numbers!');
    }
}

const sum = (a, b) => {
    try{
        validateIsNum(a);
        validateIsNum(b);
        return a + b;
    }catch(error){ // catch the error, is a object
        return error.message;
    }
}

console.log(sum(1, '2'));