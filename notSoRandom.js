



function random(range) {
    if (range !== undefined) {
        const decimal = Math.random();
        const ranNumRange = decimal * range;
        const roundedRanNum = Math.floor(ranNumRange);
        const ranNum = roundedRanNum + 1;
        return ranNum;
    } else {
        const decimal = Math.random();
        return decimal;
    }
}

function randomLetter(word) {
    if (word !== undefined) {
        const decimal = Math.random();
        const ranNumRange = decimal * word.length;
        const roundedRanNum = Math.floor(ranNumRange);
        const ranIndex = roundedRanNum;
        return word[ranIndex];
    } else {
        return "";
    }
}

function myGuy(phrase) {
    if (phrase !== undefined) {
        myGuyPhrase = phrase + ", my guy";
        return myGuyPhrase;
    } else {
        return "";
    }  
}

function string_N_times(string, times) {
        var mutlipliedString = "";
        for (let i = 0; i < times; i++) {
            mutlipliedString += string;
        }
        return mutlipliedString;

        
}

function hypotenuse(a, b) {
        const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        return c; 

        if (arguments[2] !== undefined) {
            throw "too many arguments given";
        } else if ((typeof a !== 'number') || (typeof b !== 'number')) {
            throw TypeError;
        }
}

// console.log(random(2));
// console.log(randomLetter('hello'));
// console.log(myGuy('heyyy'));
// console.log(string_N_times("omar", 4));


try {
    hypotenuse(3,4,5);
    hypotenuse('f','b');
} catch(error) {
    console.log(error);
} 

hypotenuse(3,4,5);