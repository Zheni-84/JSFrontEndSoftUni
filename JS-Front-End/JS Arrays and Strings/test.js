function solve(word) {
    let sentence = word.split("");
    for (let i = 1; i < sentence.length; i++) {
        if (sentence[i].charCodeAt(0) >= 65 && sentence[i].charCodeAt(0) <= 90) {
            sentence.splice(i, 0, ", ");
            i++
        }
    }
    console.log(sentence.join(""))
}

function solveLookAhead(string) {
    console.log(string.split(/(?=[A-Z])/).join(", "));
}

solve("SplitMeIfYouCanOrYouCan't");