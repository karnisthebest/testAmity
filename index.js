const words = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS']

var groupWord = function(words) {
    let map = new Map();
    for (let word of words) {
        const alphabeticalKey = orderAlphabetically(word);
        let mapVals = map.get(alphabeticalKey) || [];
        mapVals.push(word);
        map.set(alphabeticalKey, mapVals);
    }
    return Array.from(map.values());
};

var orderAlphabetically = function(word) {
    return word
        .split("")
        .sort()
        .join("");
};

const result = groupWord(words);
const printTestOne = () => {
    result.forEach(group => {
        const line = group.join(' - ')
        return console.log(line)
    })
}
console.log("========= Test One =========")
printTestOne()

var reverseWordInParentheses = function(s) {
    let stack = [[]];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push([]);  
        }  
        else if (s[i] === ')') {
            let reversed = stack.pop().reverse();
            stack[stack.length-1].push(...reversed);
        }
        else stack[stack.length-1].push(s[i]);    
    }
    return stack[0].join("");
};

const test2 = reverseWordInParentheses('foo(foo(bar))blim')

console.log("========= Test two =========")
console.log('foo(foo(bar))blim ====> ', test2)




