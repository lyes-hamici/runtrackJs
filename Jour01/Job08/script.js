function isPremier(number){
    for (let i = 2; i < number; i++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
}


function sommeNombresPremiers(number1,number2){
    if (isPremier(number1) && isPremier(number2)){
        return number1 + number2;
    }
    else{
        return false;
    }
}


console.log(sommeNombresPremiers(3,7)); // 10
console.log(sommeNombresPremiers(10,7)); // False